import * as BABYLON from '@babylonjs/core';
import '@babylonjs/core/Culling/ray'
import FollowMouseObj from "./FollowMouseObj";
import * as Constant from "./Constant";
import ParticleFlare from "./ParticleFlare";

// 全局物体锁定状态
enum PositionLockType {
    None,
    Static,
    Spring,
}

export declare interface BehaviorBundleObj {
    mesh: BABYLON.Mesh,
    usePhysicsImpostor: () => any
    endScaling?: BABYLON.Vector3

}

class BehaviorBundle {
    scene: BABYLON.Scene
    positionLockType: PositionLockType = PositionLockType.None;
    followMouseObj: FollowMouseObj;
    currentPickedMesh: BABYLON.Nullable<BABYLON.AbstractMesh> = null;
    pointerDownTime: number = 0
    springDragStartFunc: (() => void) | null = null
    isSpringDragging: boolean = false
    currentFollowJoint: BABYLON.Nullable<BABYLON.PhysicsJoint> = null
    behaviorBundleObj: BehaviorBundleObj[]

    constructor(scene: BABYLON.Scene, behaviorBundleObj: BehaviorBundleObj[]) {
        this.scene = scene
        this.behaviorBundleObj = behaviorBundleObj
        this.followMouseObj = FollowMouseObj.getInstance(scene);
    }

    animateZoomShow(behaviorBundleObj: BehaviorBundleObj) {
        // return new Promise<void>((resolve) => {
        //     BABYLON.Animation.CreateAndStartAnimation(
        //         'showOn',
        //         this.mesh,
        //         'scaling',
        //         60,
        //         10,
        //         BABYLON.Vector3.Zero(),
        //         new BABYLON.Vector3(1, 1, 1),
        //         BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
        //         new BABYLON.CubicEase(),
        //         () => {
        //             this.usePhysicsImpostor()
        //             resolve()
        //         }
        //     )
        // })
        const mesh = behaviorBundleObj.mesh
        const endScaling = behaviorBundleObj.endScaling || BABYLON.Vector3.One()
        let animation = new BABYLON.Animation('showOn', 'scaling', 60, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        animation.setKeys([
            {frame: 0, value: BABYLON.Vector3.Zero()},
            {frame: 10, value: endScaling},
        ])
        mesh.animations = [animation]
        mesh.physicsImpostor?.dispose()
        return new Promise<void>((resolve) => {
            mesh.isVisible = true
            this.scene.beginAnimation(mesh, 0, 10, false, 1, resolve)
        })
    }

    addPointerBehavior() {
        // --------------------------鼠标交互-------------------------
        this.scene.onPointerObservable.add((pointerInfo) => {
            // 物理弹力拖动
            if (this.positionLockType === PositionLockType.Spring || this.positionLockType === PositionLockType.None) {
                switch (pointerInfo.type) {
                    case BABYLON.PointerEventTypes.POINTERDOWN:
                        if (this.currentPickedMesh?.physicsImpostor && this.followMouseObj.mesh.physicsImpostor && this.currentFollowJoint) {
                            this.scene.getPhysicsEngine()?.removeJoint(this.currentPickedMesh.physicsImpostor, this.followMouseObj.mesh.physicsImpostor, this.currentFollowJoint)
                            this.isSpringDragging = false
                        }
                        const pickingInfo = this.scene.pick(
                            this.scene.pointerX,
                            this.scene.pointerY,
                            (mesh) => this.behaviorBundleObj.some(e => e.mesh === mesh),
                            false
                        );
                        this.currentPickedMesh = pickingInfo?.pickedMesh || null
                        if (this.currentPickedMesh && this.currentPickedMesh.rotationQuaternion && pickingInfo?.pickedPoint) {
                            if (Constant.canMoveCamera) {
                                this.scene.activeCamera?.detachControl();
                            }
                            let mainPivot = pickingInfo.pickedPoint
                                .subtract(this.currentPickedMesh.getAbsolutePosition()) // 找到点击位置
                                .applyRotationQuaternion(this.currentPickedMesh.rotationQuaternion.invert()) // 以方块当前旋转角度，调整点击位置
                            // 每次需要创建新的PhysicsJoint，否则使用addJoint使用此joint会一直保持首次关联的物体
                            this.currentFollowJoint = new BABYLON.PhysicsJoint(
                                BABYLON.PhysicsJoint.SpringJoint,
                                {
                                    // @ts-ignore
                                    length: 0,
                                    stiffness: -Constant.gravity * 3,
                                    damping: -Constant.gravity,
                                    collision: false,
                                    // mainAxis:new BABYLON.Vector3(0,-1,0),
                                    mainPivot: mainPivot, // 方块上的连接点位置
                                    // connectedPivot:new BABYLON.Vector3(0,0,0), // 鼠标上的连接点位置
                                }
                            )
                            this.springDragStartFunc = () => {
                                if (this.isSpringDragging) {
                                    return
                                }
                                if (this.followMouseObj.mesh.physicsImpostor && this.currentFollowJoint) {
                                    this.currentPickedMesh?.physicsImpostor?.addJoint(this.followMouseObj.mesh.physicsImpostor, this.currentFollowJoint)
                                    this.isSpringDragging = true
                                }

                            }

                        }
                        break;
                    case BABYLON.PointerEventTypes.POINTERMOVE:
                        if (this.currentPickedMesh) {
                            this.springDragStartFunc?.()
                        }
                        break;
                    case BABYLON.PointerEventTypes.POINTERUP:
                        if (Constant.canMoveCamera) {
                            this.scene.activeCamera?.attachControl();
                        }
                        if (this.currentPickedMesh?.physicsImpostor && this.followMouseObj.mesh.physicsImpostor && this.currentFollowJoint) {
                            this.scene.getPhysicsEngine()?.removeJoint(this.currentPickedMesh.physicsImpostor, this.followMouseObj.mesh.physicsImpostor, this.currentFollowJoint)
                            this.isSpringDragging = false
                        }
                        this.currentPickedMesh = null
                        break;
                }
            }
            // 物理施加一个点的冲力
            switch (pointerInfo.type) {
                case BABYLON.PointerEventTypes.POINTERDOWN:
                    this.pointerDownTime = performance.now()
                    break
                case BABYLON.PointerEventTypes.POINTERUP:
                    if (performance.now() - this.pointerDownTime < 150) {
                        const pickingInfo = this.scene.pick(
                            this.scene.pointerX,
                            this.scene.pointerY,
                            (mesh) => this.behaviorBundleObj.some(e => e.mesh === mesh),
                            false
                        );
                        if (pickingInfo?.pickedMesh && pickingInfo.ray && pickingInfo?.pickedPoint && this.scene.activeCamera) {
                            pickingInfo.pickedMesh.physicsImpostor?.applyImpulse(pickingInfo.ray.origin.normalize().scale(-15), pickingInfo.pickedPoint)
                            // 创建 粒子效果
                            ParticleFlare.getInstance(this.scene).start(pickingInfo.pickedPoint.clone())
                            // particleFlare.start(
                            //     //从鼠标方块位置增加距离
                            //     this.followMouseObj.mesh.position.clone()
                            //         .add(
                            //             //增加从点击位置方块到摄像机视窗鼠标位置
                            //             this.scene.activeCamera.position.subtract(pickingInfo.pickedPoint).normalize().scale(Constant.sceneDeep)
                            //         )
                            // )
                        }
                    }
                    break
            }
            // 静态拖动
            if (this.positionLockType === PositionLockType.Static) {
                switch (pointerInfo.type) {
                    case BABYLON.PointerEventTypes.POINTERDOWN:
                        const pickingInfo = this.scene.pick(
                            this.scene.pointerX,
                            this.scene.pointerY,
                            (mesh) => this.behaviorBundleObj.some(e => e.mesh === mesh),
                            false
                        );
                        if (pickingInfo?.pickedMesh && pickingInfo?.pickedPoint) {
                            this.currentPickedMesh = pickingInfo?.pickedMesh
                            if (Constant.canMoveCamera) {
                                this.scene.activeCamera?.detachControl();
                            }
                        }
                        break;
                    case  BABYLON.PointerEventTypes.POINTERMOVE:
                        if (this.currentPickedMesh) {
                            this.currentPickedMesh.position = this.followMouseObj.mesh.position.clone()
                        }
                        break;
                    case BABYLON.PointerEventTypes.POINTERUP:
                        this.currentPickedMesh = null
                        if (Constant.canMoveCamera) {
                            this.scene.activeCamera?.attachControl();
                        }
                        break;
                }
            }
        })
    }

    // ------------------------固定静态位置------------------------
    private animationMove(mesh: BABYLON.Mesh, param?: { position?: [x: number, y: number, z: number], rotation?: [x: number, y: number, z: number] }) {
        if (!!param) {
            // 绑定物理效果后不能执行动画，需要先清除物理效果
            mesh.physicsImpostor?.dispose()
            const framePerSecond = 10
            const second = 1.5 // 动画持续总时间
            mesh.animations = []
            // 位置变化
            const lockPosition = new BABYLON.Animation("lockPosition", "position", framePerSecond, BABYLON.Animation.ANIMATIONTYPE_VECTOR3);
            lockPosition.setKeys([
                {frame: 0, value: mesh.position},
                {frame: framePerSecond * second, value: new BABYLON.Vector3(...(param?.position || []))},
            ]);
            mesh.animations.push(lockPosition)
            // 角度变化
            const lockRotation = new BABYLON.Animation("lockRotation", "rotation", framePerSecond, BABYLON.Animation.ANIMATIONTYPE_VECTOR3);
            lockRotation.setKeys([
                {frame: 0, value: mesh.rotation},
                {frame: framePerSecond * second, value: new BABYLON.Vector3(...(param?.rotation || []))},
            ]);
            mesh.animations.push(lockRotation)
            // 执行动画
            this.scene.beginAnimation(mesh, 0, framePerSecond * second, false, 4);
        }
    }

    staticLock = (enable: boolean) => {
        const staticLockPositionInfo: Array<[x: number, y: number, z: number]> = [
            [0, 11, -3], [0, 11, -1], [0, 9, 1], [0, 9, -1], [0, 7, 1], [0, 7, 3],
            [0, 11, -5], [0, 9, -5], [0, 7, -5], [0, 11, 5], [0, 9, 5], [0, 7, 5],
            [0, 16, 0]
        ]

        this.positionLockType = enable ? PositionLockType.Static : PositionLockType.Spring
        if (enable) {
            this.behaviorBundleObj.forEach((e, index) => {
                this.animationMove(e.mesh, {position: staticLockPositionInfo[index], rotation: [0, 0, 0]})
            })
        } else {
            this.behaviorBundleObj.forEach(e => {
                e.usePhysicsImpostor()
            })
        }
    }
    addLockStaticPositionControl = () => {
        const inputEl = document.createElement('input')
        inputEl.type = 'button'
        inputEl.id = 'lockStaticPositionBtn'
        inputEl.style.display = 'block'
        inputEl.value = '静态钉住'
        inputEl.onclick = () => {
            this.staticLock(true)
        }
        document.getElementById('controls')?.append(inputEl)
    }

    // ------------------------固定弹力位置------------------------
    stickObjArr: { mainMesh: BABYLON.Mesh, pointMesh: BABYLON.Mesh, joint: BABYLON.PhysicsJoint }[] = []
    stickPosition = (enable: boolean) => {
        this.positionLockType = enable ? PositionLockType.Spring : PositionLockType.Spring
        this.stickObjArr.forEach(stickObj => {
            if (stickObj.mainMesh.physicsImpostor && stickObj.pointMesh.physicsImpostor && stickObj.joint) {
                this.scene.getPhysicsEngine()?.removeJoint(stickObj.mainMesh.physicsImpostor, stickObj.pointMesh.physicsImpostor, stickObj.joint)
            }
            stickObj.pointMesh?.dispose();
            if (stickObj.mainMesh.physicsImpostor) {
                stickObj.mainMesh.physicsImpostor.friction = 1
            }
        })
        this.scene.getPhysicsEngine()?.setGravity(new BABYLON.Vector3(0, Constant.gravity, 0))

        this.scene.getEngine()
        if (!enable) {
            return
        }
        this.scene.getPhysicsEngine()?.setGravity(new BABYLON.Vector3(0, 0, 0))

        const stickPositionCenterArr = [
            new BABYLON.Vector3(0, 12, -6),
            new BABYLON.Vector3(0, 12, 0),
            new BABYLON.Vector3(0, 12, 6),
            new BABYLON.Vector3(0, 8, -4),
            new BABYLON.Vector3(0, 8, 4),
            new BABYLON.Vector3(0, 4, 0),
        ]
        stickPositionCenterArr.forEach((stickPositionCenter, stickPositionCenterIndex) => {
            const verticalMargin = 4
            const horizontalMargin = 4
            const meshStickPositionTop1 = stickPositionCenter.clone()
            meshStickPositionTop1.y += verticalMargin
            meshStickPositionTop1.z -= horizontalMargin
            const meshStickPositionTop2 = stickPositionCenter.clone()
            meshStickPositionTop2.y += verticalMargin
            meshStickPositionTop2.z += horizontalMargin
            const meshStickPositionBottom1 = stickPositionCenter.clone()
            meshStickPositionBottom1.y -= verticalMargin
            meshStickPositionBottom1.z -= horizontalMargin
            const meshStickPositionBottom2 = stickPositionCenter.clone()
            meshStickPositionBottom2.y -= verticalMargin
            meshStickPositionBottom2.z += horizontalMargin

            const stickPointArray = [meshStickPositionTop1, meshStickPositionTop2, meshStickPositionBottom1, meshStickPositionBottom2]
            const pivotDistance = 1
            const pivotArray = [
                new BABYLON.Vector3(0, pivotDistance, -pivotDistance),
                new BABYLON.Vector3(0, pivotDistance, pivotDistance),
                new BABYLON.Vector3(0, -pivotDistance, -pivotDistance),
                new BABYLON.Vector3(0, -pivotDistance, pivotDistance),
            ]
            stickPointArray.forEach((stickPoint, stickPointIndex) => {
                const physicsJoint = new BABYLON.PhysicsJoint(
                    BABYLON.PhysicsJoint.SpringJoint,
                    {
                        // @ts-ignore
                        length: 0,
                        stiffness: 4,
                        damping: 3,
                        collision: false,
                        // mainAxis:new BABYLON.Vector3(0,-1,0),
                        mainPivot: pivotArray[stickPointIndex], // 方块上的连接点位置
                        // connectedPivot:new BABYLON.Vector3(0,0,0), // 鼠标上的连接点位置
                    }
                )
                const stickMesh = BABYLON.MeshBuilder.CreateSphere('FollowMouseObj', {segments: 1}, this.scene)
                stickMesh.isVisible = false
                // const mat = new BABYLON.StandardMaterial('mat', this.scene)
                // mat.emissiveColor = BABYLON.Color3.Red()
                // stickMesh.material = mat
                stickMesh.physicsImpostor = new BABYLON.PhysicsImpostor(stickMesh, BABYLON.PhysicsImpostor.NoImpostor, {mass: 0, restitution: 0}, this.scene)
                stickMesh.physicsImpostor.physicsBody.collisionFilterMask = 0
                stickMesh.position = stickPoint
                if (stickMesh.physicsImpostor) {
                    this.behaviorBundleObj[stickPositionCenterIndex].mesh.physicsImpostor?.addJoint(stickMesh.physicsImpostor, physicsJoint)
                }
                if (this.behaviorBundleObj[stickPositionCenterIndex].mesh.physicsImpostor) {
                    // @ts-ignore
                    this.behaviorBundleObj[stickPositionCenterIndex].mesh.physicsImpostor.friction = 0
                }
                this.stickObjArr.push({
                    mainMesh: this.behaviorBundleObj[stickPositionCenterIndex].mesh,
                    pointMesh: stickMesh,
                    joint: physicsJoint
                })
            })
        })
    }

    addStickPositionControl = () => {
        const inputEl = document.createElement('input')
        inputEl.type = 'button'
        inputEl.id = 'stickPositionBtn'
        inputEl.style.display = 'block'
        inputEl.value = '弹性钉住+无重力漂浮'
        inputEl.onclick = () => {
            this.staticLock(false)
            this.stickPosition(true)
        }
        document.getElementById('controls')?.append(inputEl)
    }

    addNormalPhysicsControl = () => {
        const inputEl = document.createElement('input')
        inputEl.type = 'button'
        inputEl.id = 'addNormalPhysicsBtn'
        inputEl.style.display = 'block'
        inputEl.value = '掉落'
        inputEl.onclick = () => {
            this.stickPosition(false)
            this.staticLock(false)
        }
        document.getElementById('controls')?.append(inputEl)
    }
}

export default BehaviorBundle







