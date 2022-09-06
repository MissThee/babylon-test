import {Nullable} from "@babylonjs/core/types";
import {PickingInfo} from "@babylonjs/core/Collisions/pickingInfo";
import * as BABYLON from "@babylonjs/core";
import * as Constant from "../Constant";
import ParticleFlare from "../ParticleFlare";
import FollowMouseObj from "../FollowMouseObj";

enum DraggingType {
    None,
    Static,
    Spring,
}

class DragHelper {
    readonly scene: BABYLON.Scene
    readonly followMouseMesh: BABYLON.Mesh;
    readonly dragMeshes: BABYLON.Mesh[];
    currentPickedMesh: BABYLON.Nullable<BABYLON.AbstractMesh> = null;
    pointerDownTime: number = 0;
    springDragStartFunc: BABYLON.Nullable<() => void> = null;
    currentFollowJoint: BABYLON.Nullable<BABYLON.PhysicsJoint> = null;
    draggingType: DraggingType = DraggingType.None;
    dragObservable: BABYLON.Nullable<(BABYLON.Observer<BABYLON.PointerInfo>)> = null

    constructor(scene: BABYLON.Scene, dragMeshes: BABYLON.Mesh[], enable?: boolean) {
        this.scene = scene
        this.dragMeshes = dragMeshes
        this.followMouseMesh = FollowMouseObj.getInstance(scene).mesh;
        if (enable) {
            this.enableDrag()
        }
    }

    enableDrag() {
        if (this.dragObservable) {
            return
        }
        this.dragObservable = this.scene.onPointerObservable.add((pointerInfo: BABYLON.PointerInfo) => {
            let pickingInfo: Nullable<PickingInfo> = null
            switch (pointerInfo.type) {
                case BABYLON.PointerEventTypes.POINTERUP:
                case BABYLON.PointerEventTypes.POINTERDOWN:
                    pickingInfo = this.scene.pick(
                        this.scene.pointerX,
                        this.scene.pointerY,
                        (mesh) => this.dragMeshes.some(e => e === mesh),
                        false
                    );
            }
            switch (pointerInfo.type) {
                case BABYLON.PointerEventTypes.POINTERDOWN:
                    if (this.currentPickedMesh?.physicsImpostor && this.followMouseMesh.physicsImpostor && this.currentFollowJoint) {
                        this.scene.getPhysicsEngine()?.removeJoint(this.currentPickedMesh.physicsImpostor, this.followMouseMesh.physicsImpostor, this.currentFollowJoint)
                        // removeJoint不会清除mainImpostor中的joint数据，手动清除掉无用的joint
                        // @ts-ignore
                        this.currentPickedMesh.physicsImpostor._joints.splice(this.currentPickedMesh.physicsImpostor._joints.indexOf(this.currentFollowJoint), 1)
                        this.currentFollowJoint = null
                    }
                    this.currentPickedMesh = this.getDragMesh(pickingInfo?.pickedMesh)
                    if (this.currentPickedMesh) {
                        if (Constant.canMoveCamera) {
                            this.scene.activeCamera?.detachControl();
                        }
                        if (this.currentPickedMesh.physicsImpostor) {
                            this.draggingType = DraggingType.Spring
                        } else {
                            this.draggingType = DraggingType.Static
                        }
                    } else {
                        this.draggingType = DraggingType.None
                    }
            }
            //------------------------------------------------------------------
            if (this.draggingType === DraggingType.Spring) {
                // 物理弹力拖动
                switch (pointerInfo.type) {
                    case BABYLON.PointerEventTypes.POINTERDOWN:
                        // this.currentPickedMesh = this.getDragMesh(pickingInfo?.pickedMesh)
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
                            // removeJoint不会清除mainImpostor中的joint数据，手动清除掉无用的joint
                            // @ts-ignore
                            this.currentPickedMesh.physicsImpostor._joints.splice(this.currentPickedMesh.physicsImpostor._joints.indexOf(this.currentFollowJoint), 1)
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
                        // this.currentPickedMesh = this.getDragMesh(pickingInfo?.pickedMesh)
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

    disableDrag() {
        this.scene.onPointerObservable.remove(this.dragObservable)
        this.dragObservable = null
    }

    // 找到点击的mesh所在的主Mesh。因物理状态中直接在子Mesh上增加弹力连接不能拖动整体，移动子Mesh不会影响整体，所以需找到所点击Mesh所在的主Mesh进行操作
    private getDragMesh(mesh?: BABYLON.Nullable<BABYLON.AbstractMesh>) {
        if (!mesh) {
            return null
        }
        if (!mesh.parent) {
            return mesh
        }
        for (let dragMesh of this.dragMeshes) {
            if (dragMesh === mesh) {
                return dragMesh
            }
            const result = this.findMeshInChildren(mesh, dragMesh, dragMesh)
            if (result) {
                return result
            }
        }
        return null
    }

    // 辅助遍历mesh递归操作
    private findMeshInChildren(mesh: BABYLON.AbstractMesh, parent: BABYLON.AbstractMesh, dragMesh: BABYLON.AbstractMesh): BABYLON.AbstractMesh | null {
        const childrenMeshes = parent.getChildMeshes()
        if (childrenMeshes.length) {
            for (let childrenMesh of childrenMeshes) {
                if (childrenMesh === mesh) {
                    return dragMesh
                }
                if (this.findMeshInChildren(mesh, childrenMesh, dragMesh)) {
                    return dragMesh
                }
            }
        }
        return null
    }
}


export default DragHelper