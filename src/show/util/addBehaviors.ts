// import * as BABYLON from '@babylonjs/core';

import type {AbstractMesh, Nullable} from "@babylonjs/core";
import type {Scene} from "@babylonjs/core/scene";
import type {Mesh} from "@babylonjs/core/Meshes/mesh";
import {Vector3} from "@babylonjs/core/Maths/math.vector";
import {Color3} from "@babylonjs/core/Maths/math.color";
import {DirectionalLight} from "@babylonjs/core/Lights/directionalLight";
import {StandardMaterial} from "@babylonjs/core/Materials/standardMaterial";
import {Animation} from '@babylonjs/core/Animations/animation'
import {CubicEase} from '@babylonjs/core/Animations/easing'
import {PhysicsImpostor} from '@babylonjs/core/Physics/physicsImpostor'
import {Texture} from '@babylonjs/core/Materials/Textures/texture'
import {PointerEventTypes} from "@babylonjs/core/Events/pointerEvents";
import {PhysicsJoint} from "@babylonjs/core/Physics/physicsJoint";
import '@babylonjs/core/Culling/ray'
import {CreateSphere} from '@babylonjs/core/Meshes/Builders/sphereBuilder'

const MeshBuilder = {CreateSphere}
const BABYLON = {Color3, Vector3, DirectionalLight, StandardMaterial, MeshBuilder, Animation, CubicEase, PhysicsImpostor, Texture, PhysicsJoint, PointerEventTypes}

import FollowMouseObj from "./FollowMouseObj";
import * as Constant from "./Constant";
import CustomObj from '../object/CustomObj'
import ParticleFlare from "../object/ParticleFlare";

export default (scene: Scene, customObjArr: CustomObj[], particleFlare: ParticleFlare) => {
    // 拖动基础变量
    enum PositionLockType {
        None,
        Static,
        Spring,
    }

    let positionLockType: PositionLockType = PositionLockType.None
    const followMouseObj = FollowMouseObj.getInstance(scene)
    let currentPickedMesh: Nullable<AbstractMesh>
    let pointerDownTime: number = 0
    let springDragStartFunc: () => void
    let isSpringDragging: boolean = false
    let currentFollowJoint: Nullable<PhysicsJoint>
    scene.onPointerObservable.add((pointerInfo) => {
        // 物理弹力拖动
        if (positionLockType === PositionLockType.Spring || positionLockType === PositionLockType.None) {
            switch (pointerInfo.type) {
                case PointerEventTypes.POINTERDOWN:
                    if (currentPickedMesh?.physicsImpostor && followMouseObj.mesh.physicsImpostor && currentFollowJoint) {
                        scene.getPhysicsEngine()?.removeJoint(currentPickedMesh.physicsImpostor, followMouseObj.mesh.physicsImpostor, currentFollowJoint)
                        isSpringDragging = false
                    }
                    const pickingInfo = scene.pick(
                        scene.pointerX,
                        scene.pointerY,
                        (mesh) => customObjArr.some(e => e.mesh === mesh),
                        false
                    );
                    currentPickedMesh = pickingInfo?.pickedMesh || null
                    if (currentPickedMesh && currentPickedMesh.rotationQuaternion && pickingInfo?.pickedPoint) {
                        if (Constant.canMoveCamera) {
                            scene.activeCamera?.detachControl();
                        }
                        let mainPivot = pickingInfo.pickedPoint
                            .subtract(currentPickedMesh.getAbsolutePosition()) // 找到点击位置
                            .applyRotationQuaternion(currentPickedMesh.rotationQuaternion.invert()) // 以方块当前旋转角度，调整点击位置
                        // 每次需要创建新的PhysicsJoint，否则使用addJoint使用此joint会一直保持首次关联的物体
                        currentFollowJoint = new BABYLON.PhysicsJoint(
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
                        springDragStartFunc = () => {
                            if (isSpringDragging) {
                                return
                            }
                            if (followMouseObj.mesh.physicsImpostor && currentFollowJoint) {
                                currentPickedMesh?.physicsImpostor?.addJoint(followMouseObj.mesh.physicsImpostor, currentFollowJoint)
                                isSpringDragging = true
                            }

                        }

                    }
                    break;
                case BABYLON.PointerEventTypes.POINTERMOVE:
                    if (currentPickedMesh) {
                        springDragStartFunc()
                    }
                    break;
                case BABYLON.PointerEventTypes.POINTERUP:
                    if (Constant.canMoveCamera) {
                        scene.activeCamera?.attachControl();
                    }
                    if (currentPickedMesh?.physicsImpostor && followMouseObj.mesh.physicsImpostor && currentFollowJoint) {
                        scene.getPhysicsEngine()?.removeJoint(currentPickedMesh.physicsImpostor, followMouseObj.mesh.physicsImpostor, currentFollowJoint)
                        isSpringDragging = false
                    }
                    currentPickedMesh = null
                    break;
            }
        }
        // 物理施加一个点的冲力
        switch (pointerInfo.type) {
            case BABYLON.PointerEventTypes.POINTERDOWN:
                pointerDownTime = performance.now()
                break
            case BABYLON.PointerEventTypes.POINTERUP:
                if (performance.now() - pointerDownTime < 150) {
                    const pickingInfo = scene.pick(
                        scene.pointerX,
                        scene.pointerY,
                        (mesh) => customObjArr.some(e => e.mesh === mesh),
                        false
                    );
                    if (pickingInfo?.pickedMesh && pickingInfo.ray && pickingInfo?.pickedPoint && scene.activeCamera) {
                        pickingInfo.pickedMesh.physicsImpostor?.applyImpulse(pickingInfo.ray.origin.normalize().scale(-15), pickingInfo.pickedPoint)
                        particleFlare.particleSystem.emitter = followMouseObj.mesh.position.clone().add(
                            scene.activeCamera.position.subtract(pickingInfo.pickedPoint).normalize().scale(Constant.sceneDeep / 2)
                        )
                        particleFlare.particleSystem.start()
                    }
                }
                break
        }
        // 静态拖动
        if (positionLockType === PositionLockType.Static) {
            switch (pointerInfo.type) {
                case BABYLON.PointerEventTypes.POINTERDOWN:
                    const pickingInfo = scene.pick(
                        scene.pointerX,
                        scene.pointerY,
                        (mesh) => customObjArr.some(e => e.mesh === mesh),
                        false
                    );
                    if (pickingInfo?.pickedMesh && pickingInfo?.pickedPoint) {
                        currentPickedMesh = pickingInfo?.pickedMesh
                        if (Constant.canMoveCamera) {
                            scene.activeCamera?.detachControl();
                        }
                    }
                    break;
                case  BABYLON.PointerEventTypes.POINTERMOVE:
                    if (currentPickedMesh) {
                        currentPickedMesh.position = followMouseObj.mesh.position.clone()
                    }
                    break;
                case BABYLON.PointerEventTypes.POINTERUP:
                    currentPickedMesh = null
                    if (Constant.canMoveCamera) {
                        scene.activeCamera?.attachControl();
                    }
                    break;
            }
        }
    })

    // ------------------------固定静态位置------------------------
    const staticLockPositionInfo: Array<[x: number, y: number, z: number]> = [
        [0, 11, -3], [0, 11, -1], [0, 9, 1], [0, 9, -1], [0, 7, 1], [0, 7, 3],
        [0, 11, -5], [0, 9, -5], [0, 7, -5], [0, 11, 5], [0, 9, 5], [0, 7, 5],
    ]
    const staticLock = (enable: boolean) => {
        positionLockType = enable ? PositionLockType.Static : PositionLockType.Spring
        if (enable) {
            customObjArr.forEach((e, index) => {
                e.lockObj({position: staticLockPositionInfo[index], rotation: [0, 0, 0]})
            })
        } else {
            customObjArr.forEach(e => {
                e.lockObj()
            })
        }
    }
    const addLockStaticPositionControl = () => {
        const inputEl = document.createElement('input')
        inputEl.type = 'button'
        inputEl.id = 'lockStaticPositionBtn'
        inputEl.style.display = 'block'
        inputEl.value = '静态钉住'
        inputEl.onclick = () => {
            staticLock(true)
        }
        document.getElementById('controls')?.append(inputEl)
    }
    setTimeout(() => {
        addLockStaticPositionControl()
    }, 3000)
    // ------------------------固定弹力位置------------------------
    let stickObjArr: { mainMesh: Mesh, pointMesh: Mesh, joint: PhysicsJoint }[] = []
    const stickPosition = (enable: boolean) => {
        positionLockType = enable ? PositionLockType.Spring : PositionLockType.Spring
        stickObjArr.forEach(stickObj => {
            if (stickObj.mainMesh.physicsImpostor && stickObj.pointMesh.physicsImpostor && stickObj.joint) {
                scene.getPhysicsEngine()?.removeJoint(stickObj.mainMesh.physicsImpostor, stickObj.pointMesh.physicsImpostor, stickObj.joint)
            }
            stickObj.pointMesh?.dispose();
            if (stickObj.mainMesh.physicsImpostor) {
                stickObj.mainMesh.physicsImpostor.friction = 1
            }
        })
        scene.getPhysicsEngine()?.setGravity(new BABYLON.Vector3(0, Constant.gravity, 0))

        scene.getEngine()
        if (!enable) {
            return
        }
        scene.getPhysicsEngine()?.setGravity(new BABYLON.Vector3(0, 0, 0))

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
                const stickMesh = BABYLON.MeshBuilder.CreateSphere('FollowMouseObj', {segments: 1}, scene)
                stickMesh.isVisible = false
                // const mat = new BABYLON.StandardMaterial('mat', scene)
                // mat.emissiveColor = BABYLON.Color3.Red()
                // stickMesh.material = mat
                stickMesh.physicsImpostor = new BABYLON.PhysicsImpostor(stickMesh, BABYLON.PhysicsImpostor.NoImpostor, {mass: 0, restitution: 0}, scene)
                stickMesh.physicsImpostor.physicsBody.collisionFilterMask = 0
                stickMesh.position = stickPoint
                if (stickMesh.physicsImpostor) {
                    customObjArr[stickPositionCenterIndex].mesh.physicsImpostor?.addJoint(stickMesh.physicsImpostor, physicsJoint)
                }
                if (customObjArr[stickPositionCenterIndex].mesh.physicsImpostor) {
                    // @ts-ignore
                    customObjArr[stickPositionCenterIndex].mesh.physicsImpostor.friction = 0
                }
                stickObjArr.push({
                    mainMesh: customObjArr[stickPositionCenterIndex].mesh,
                    pointMesh: stickMesh,
                    joint: physicsJoint
                })
            })
        })
    }

    const addStickPositionControl = () => {
        const inputEl = document.createElement('input')
        inputEl.type = 'button'
        inputEl.id = 'stickPositionBtn'
        inputEl.style.display = 'block'
        inputEl.value = '弹性钉住+无重力漂浮'
        inputEl.onclick = () => {
            staticLock(false)
            stickPosition(true)
        }
        document.getElementById('controls')?.append(inputEl)
    }
    setTimeout(() => {
        addStickPositionControl()
    }, 3000)

    const addNormalPhysicsControl = () => {
        const inputEl = document.createElement('input')
        inputEl.type = 'button'
        inputEl.id = 'addNormalPhysicsControl'
        inputEl.style.display = 'block'
        inputEl.value = '掉落'
        inputEl.onclick = () => {
            stickPosition(false)
            staticLock(false)
        }
        document.getElementById('controls')?.append(inputEl)
    }

    setTimeout(() => {
        addNormalPhysicsControl()
    }, 3000)
}