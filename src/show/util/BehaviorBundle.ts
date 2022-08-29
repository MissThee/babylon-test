import * as BABYLON from '@babylonjs/core';
import '@babylonjs/core/Culling/ray'
import FollowMouseObj from "./FollowMouseObj";
import * as Constant from "./Constant";
import ParticleFlare from "./ParticleFlare";
import * as AnimationUtil from './Interaction/AnimationUtil'
import {Nullable} from "@babylonjs/core/types";
import {PickingInfo} from "@babylonjs/core/Collisions/pickingInfo";

// 全局物体锁定状态

enum DraggingType {
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
    followMouseMesh: BABYLON.Mesh;
    currentPickedMesh: BABYLON.Nullable<BABYLON.AbstractMesh> = null;
    pointerDownTime: number = 0;
    springDragStartFunc: BABYLON.Nullable<() => void> = null;
    currentFollowJoint: BABYLON.Nullable<BABYLON.PhysicsJoint> = null;
    behaviorBundleObj: BehaviorBundleObj[];
    draggingType: DraggingType = DraggingType.None;

    constructor(scene: BABYLON.Scene, behaviorBundleObj: BehaviorBundleObj[]) {
        this.scene = scene
        this.behaviorBundleObj = behaviorBundleObj
        this.followMouseMesh = FollowMouseObj.getInstance(scene).mesh;
    }

    addPointerBehavior() {
        // --------------------------鼠标交互-------------------------
        this.scene.onPointerObservable.add((pointerInfo) => {
            let pickingInfo: Nullable<PickingInfo> = null
            switch (pointerInfo.type) {
                case BABYLON.PointerEventTypes.POINTERUP:
                case BABYLON.PointerEventTypes.POINTERDOWN:
                    pickingInfo = this.scene.pick(
                        this.scene.pointerX,
                        this.scene.pointerY,
                        (mesh) => this.behaviorBundleObj.some(e => e.mesh === mesh),
                        false
                    );
            }
            switch (pointerInfo.type) {
                case BABYLON.PointerEventTypes.POINTERDOWN:
                    if (pickingInfo?.pickedMesh) {
                        if (Constant.canMoveCamera) {
                            this.scene.activeCamera?.detachControl();
                        }
                        if (pickingInfo?.pickedMesh.physicsImpostor && !pickingInfo?.pickedMesh.physicsImpostor.isDisposed) {
                            this.draggingType = DraggingType.Spring
                        } else {
                            this.draggingType = DraggingType.Static
                        }
                    } else {
                        this.draggingType = DraggingType.None
                    }
                    if (this.currentPickedMesh?.physicsImpostor && this.followMouseMesh.physicsImpostor && this.currentFollowJoint) {
                        this.scene.getPhysicsEngine()?.removeJoint(this.currentPickedMesh.physicsImpostor, this.followMouseMesh.physicsImpostor, this.currentFollowJoint)
                        this.currentFollowJoint = null
                    }
            }
            //------------------------------------------------------------------
            if (this.draggingType === DraggingType.Spring) {
                // 物理弹力拖动
                switch (pointerInfo.type) {
                    case BABYLON.PointerEventTypes.POINTERDOWN:
                        this.currentPickedMesh = pickingInfo?.pickedMesh || null
                        if (this.currentPickedMesh && this.currentPickedMesh.rotationQuaternion && pickingInfo?.pickedPoint) {
                            let mainPivot = pickingInfo.pickedPoint
                                .subtract(this.currentPickedMesh.getAbsolutePosition()) // 找到点击位置
                                .applyRotationQuaternion(this.currentPickedMesh.rotationQuaternion.invert()) // 以方块当前旋转角度，调整点击位置
                            // 每次需要创建新的PhysicsJoint，否则使用addJoint使用此joint会一直保持首次关联的物体
                            const joint = new BABYLON.PhysicsJoint(
                                BABYLON.PhysicsJoint.SpringJoint,
                                {
                                    // @ts-ignore
                                    length: 0,
                                    stiffness: -Constant.gravity * 3,
                                    damping: -Constant.gravity,
                                    collision: false,
                                    // mainAxis:new BABYLON.Vector3(0,-1,0),
                                    mainPivot, // 方块上的连接点位置
                                    // connectedPivot:new BABYLON.Vector3(0,0,0), // 鼠标上的连接点位置
                                }
                            )
                            this.springDragStartFunc = () => {
                                if (this.currentFollowJoint) {
                                    return
                                }
                                this.currentFollowJoint = joint
                                if (this.followMouseMesh.physicsImpostor) {
                                    this.currentPickedMesh?.physicsImpostor?.addJoint(this.followMouseMesh.physicsImpostor, this.currentFollowJoint)
                                }
                            }
                        }
                        break;
                    case BABYLON.PointerEventTypes.POINTERMOVE:
                        this.springDragStartFunc?.()
                        break;
                    case BABYLON.PointerEventTypes.POINTERUP:
                        if (this.currentPickedMesh?.physicsImpostor && this.followMouseMesh.physicsImpostor && this.currentFollowJoint) {
                            this.scene.getPhysicsEngine()?.removeJoint(this.currentPickedMesh.physicsImpostor, this.followMouseMesh.physicsImpostor, this.currentFollowJoint)
                            this.currentFollowJoint = null
                        }
                        break;
                }
                // 物理施加一个点的冲力
                switch (pointerInfo.type) {
                    case BABYLON.PointerEventTypes.POINTERDOWN:
                        this.pointerDownTime = performance.now()
                        break
                    case BABYLON.PointerEventTypes.POINTERUP:
                        if (performance.now() - this.pointerDownTime < 150) {
                            if (pickingInfo?.pickedMesh && pickingInfo.ray && pickingInfo?.pickedPoint && this.scene.activeCamera) {
                                pickingInfo.pickedMesh.physicsImpostor?.applyImpulse(pickingInfo.ray.origin.normalize().scale(-15), pickingInfo.pickedPoint)
                                // 创建 粒子效果
                                ParticleFlare.getInstance(this.scene).start(pickingInfo.pickedPoint.clone())
                            }
                        }
                        break
                }
            } else if (this.draggingType === DraggingType.Static) {
                // 静态拖动
                switch (pointerInfo.type) {
                    case BABYLON.PointerEventTypes.POINTERDOWN:
                        if (pickingInfo?.pickedMesh && pickingInfo?.pickedPoint) {
                            this.currentPickedMesh = pickingInfo?.pickedMesh
                        }
                        break;
                    case  BABYLON.PointerEventTypes.POINTERMOVE:
                        if (this.currentPickedMesh) {
                            this.currentPickedMesh.position = this.followMouseMesh.position.clone()
                        }
                        break;
                }
            }
            //------------------------------------------------------------------
            switch (pointerInfo.type) {
                case BABYLON.PointerEventTypes.POINTERUP:
                    this.draggingType = DraggingType.None
                    this.currentPickedMesh = null
                    if (Constant.canMoveCamera) {
                        this.scene.activeCamera?.attachControl();
                    }
            }
        })
    }

    // ------------------------固定静态位置------------------------

    staticLock = (enable: boolean) => {
        const staticLockPositionInfo: Array<[x: number, y: number, z: number]> = [
            [0, 11, -3], [0, 11, -1], [0, 9, 1], [0, 9, -1], [0, 7, 1], [0, 7, 3],
            [0, 11, -5], [0, 9, -5], [0, 7, -5], [0, 11, 5], [0, 9, 5], [0, 7, 5],
            [0, 16, 0]
        ]

        if (enable) {
            this.behaviorBundleObj.forEach((e, index) => {
                AnimationUtil.animationMove(e.mesh, {position: new BABYLON.Vector3(...staticLockPositionInfo[index]), rotation: BABYLON.Vector3.Zero()})
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







