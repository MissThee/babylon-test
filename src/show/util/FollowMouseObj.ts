import * as  BABYLON from "babylonjs";


class FollowMouseObj {
    mesh
    material?: BABYLON.StandardMaterial
    scene: BABYLON.Scene;
    mouseVector = new BABYLON.Vector3;

    static instance: FollowMouseObj

    static getInstance(scene: BABYLON.Scene) {
        if (!FollowMouseObj.instance) {
            FollowMouseObj.instance = new FollowMouseObj(scene)
        }
        return FollowMouseObj.instance
    }

    constructor(scene: BABYLON.Scene) {
        this.scene = scene
        this.mesh = BABYLON.MeshBuilder.CreateSphere('FollowMouseObj', {segments: 1}, this.scene)
        this.mesh.isPickable = false
        this.mesh.isVisible = false
        this.initMaterial()
        this.initImpostor()
        this.initFollowMouseAction()
    }

    initMaterial() {
        this.material = new BABYLON.StandardMaterial("FollowMouseObjMaterial");
        this.material.diffuseColor = BABYLON.Color3.Teal(); // 自发光颜色
        this.mesh.material = this.material
    }

    initImpostor() {
        this.mesh.physicsImpostor = new BABYLON.PhysicsImpostor(this.mesh, BABYLON.PhysicsImpostor.NoImpostor, {mass: 0, restitution: 0}, this.scene)
        this.mesh.physicsImpostor.physicsBody.collisionFilterMask = 0
    }

    initFollowMouseAction() {
        this.scene.onPointerObservable.add((pointerInfo) => {
            if (pointerInfo.type === 4) {
                pointerInfo.event.preventDefault();
                if (!this.mesh) return;
                if (!this.scene.activeCamera) return;
                // 调整z值可让方块落在平面的高度
                this.mouseVector.set((pointerInfo.event.clientX / this.scene.getEngine().getRenderWidth()), (pointerInfo.event.clientY / this.scene.getEngine().getRenderHeight()), 0.5);
                let uvec = BABYLON.Vector3.Unproject(this.mouseVector, 1, 1, BABYLON.Matrix.Identity(), this.scene.activeCamera.getViewMatrix(), this.scene.activeCamera.getProjectionMatrix());
                const dir = uvec.subtract(this.scene.activeCamera.position).normalize();
                // 调整此处坐标，可让方块落在垂直于轴的面上
                const distance = -this.scene.activeCamera.position.x / dir.x;
                this.mesh.position = this.scene.activeCamera.position.clone().add(dir.scale(distance));
            }
        })
    }
}

export default FollowMouseObj