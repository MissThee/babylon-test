import * as BABYLON from '@babylonjs/core';
import '@babylonjs/core/Culling/ray'
import FollowMouseObj from "../FollowMouseObj";
import * as Constant from "../Constant";
import * as AnimationUtil from '../Interaction/AnimationUtil'

// 全局物体锁定状态

export declare interface StickObject {
    mesh: BABYLON.Mesh,
    springStickPosition?: BABYLON.Vector3
    staticStickPosition?: BABYLON.Vector3
    usePhysicsImpostor: () => void
}

export declare interface SpringStickInfo {
    mainMesh: BABYLON.Mesh
    pointMesh: BABYLON.Mesh
    joint: BABYLON.PhysicsJoint
}

class StickHelper {
    readonly scene: BABYLON.Scene
    readonly followMouseMesh: BABYLON.Mesh;
    readonly stickObjects: StickObject[];

    constructor(scene: BABYLON.Scene, stickObjects: StickObject[]) {
        this.scene = scene
        this.stickObjects = stickObjects
        this.followMouseMesh = FollowMouseObj.getInstance(scene).mesh;
    }

    springStickInfoArr: SpringStickInfo[] = []
    springStick = (targetMesh: BABYLON.Mesh, stickCenter: BABYLON.Vector3) => {
        this.stickObjects.find(e => e.mesh === targetMesh)?.usePhysicsImpostor()
        if (!stickCenter) {
            return
        }
        if (targetMesh.physicsImpostor) {
            targetMesh.physicsImpostor.friction = 0;
        }

        const verticalMargin = 4
        const horizontalMargin = 4
        const meshStickPositionTop1 = stickCenter.clone()
        meshStickPositionTop1.y += verticalMargin
        meshStickPositionTop1.z -= horizontalMargin
        const meshStickPositionTop2 = stickCenter.clone()
        meshStickPositionTop2.y += verticalMargin
        meshStickPositionTop2.z += horizontalMargin
        const meshStickPositionBottom1 = stickCenter.clone()
        meshStickPositionBottom1.y -= verticalMargin
        meshStickPositionBottom1.z -= horizontalMargin
        const meshStickPositionBottom2 = stickCenter.clone()
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
            const joint = new BABYLON.PhysicsJoint(
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
            const pointMesh = BABYLON.MeshBuilder.CreateSphere('stickPoint', {segments: 1}, this.scene)
            pointMesh.isVisible = false
            pointMesh.physicsImpostor = new BABYLON.PhysicsImpostor(pointMesh, BABYLON.PhysicsImpostor.NoImpostor, {mass: 0, restitution: 0}, this.scene)
            pointMesh.physicsImpostor.physicsBody.collisionFilterMask = 0
            pointMesh.position = stickPoint
            if (pointMesh.physicsImpostor) {
                targetMesh.physicsImpostor?.addJoint(pointMesh.physicsImpostor, joint)
            }
            this.springStickInfoArr.push({mainMesh: targetMesh, pointMesh, joint})
        })
    }
    removeSpringStick = (targetMesh: BABYLON.Mesh) => {
        this.stickObjects.find(e => e.mesh === targetMesh)?.usePhysicsImpostor()
        for (let i = this.springStickInfoArr.length - 1; i >= 0; i--) {
            const mainMesh = this.springStickInfoArr[i].mainMesh
            if (mainMesh === targetMesh) {
                const stickObj = this.springStickInfoArr[i]
                if (mainMesh.physicsImpostor && stickObj.pointMesh.physicsImpostor && stickObj.joint) {
                    this.scene.getPhysicsEngine()?.removeJoint(mainMesh.physicsImpostor, stickObj.pointMesh.physicsImpostor, stickObj.joint)
                    // removeJoint不会清除mainImpostor中的joint数据，手动清除掉无用的joint
                    // @ts-ignore
                    mainMesh.physicsImpostor._joints.splice(mainMesh.physicsImpostor._joints.indexOf(stickObj.joint), 1)
                    stickObj.pointMesh.dispose()
                }
                if (mainMesh.physicsImpostor) {
                    mainMesh.physicsImpostor.friction = 1
                }
                this.springStickInfoArr.splice(i, 1)
            }
        }
    }

    removeSpringStickAll = () => {
        this.scene.getPhysicsEngine()?.setGravity(new BABYLON.Vector3(0, Constant.gravity, 0))
        this.stickObjects.forEach(e => {
            e.usePhysicsImpostor()
            this.removeSpringStick(e.mesh)
        })
    }
    springStickAll = () => {
        this.scene.getPhysicsEngine()?.setGravity(new BABYLON.Vector3(0, 0, 0))
        this.stickObjects.forEach((e, i) => {
            e.usePhysicsImpostor()
            e.springStickPosition && this.springStick(e.mesh, e.springStickPosition)
        })
    }
    staticStickAll = () => {
        this.stickObjects.forEach((e, index) => {
            e.staticStickPosition && AnimationUtil.animationMove(e.mesh, {position: e.staticStickPosition, rotation: BABYLON.Vector3.Zero()})
        })
    }

    addTestButton() {
        // 添加各种测试状态按钮
        {
            const inputEl = document.createElement('input')
            inputEl.type = 'button'
            inputEl.id = 'stickPositionBtn'
            inputEl.style.display = 'block'
            inputEl.value = '漂浮'
            inputEl.onclick = () => {
                this.springStickAll()
                window.dispatchEvent(new Event('stateSpringStick'))
            }
            document.getElementById('controls')?.append(inputEl)
        }
        {
            const inputEl = document.createElement('input')
            inputEl.type = 'button'
            inputEl.id = 'addNormalPhysicsBtn'
            inputEl.style.display = 'block'
            inputEl.value = '掉落'
            inputEl.onclick = () => {
                this.removeSpringStickAll()
                window.dispatchEvent(new Event('statePhysic'))
            }
            document.getElementById('controls')?.append(inputEl)
        }
        {
            const inputEl = document.createElement('input')
            inputEl.type = 'button'
            inputEl.id = 'lockStaticPositionBtn'
            inputEl.style.display = 'block'
            inputEl.value = '静态'
            inputEl.onclick = () => {
                this.staticStickAll()
                window.dispatchEvent(new Event('stateStatic'))
            }
            document.getElementById('controls')?.append(inputEl)
        }
    }
}

export default StickHelper







