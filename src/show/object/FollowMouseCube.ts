import * as  BABYLON from "babylonjs";

class FollowMouseCube {
    mesh
    scene
    mouseVector = new BABYLON.Vector3;

    constructor(scene: BABYLON.Scene) {
        this.scene = scene
        this.mesh = BABYLON.MeshBuilder.CreateBox('FollowMouseCube', {size: 1}, this.scene)
        this.initFollowMouseAction()
    }

    initFollowMouseAction() {
        this.scene.onPointerObservable.add((pointerInfo) => {
            if (pointerInfo.type === 4) {
                // TODO: this seems extreme, getting a mesh to follow the cursor.
                pointerInfo.event.preventDefault();
                if (!this.mesh) return;
                if (!this.scene.activeCamera) return;
                this.mouseVector.set((pointerInfo.event.clientX / this.scene.getEngine().getRenderWidth()), (pointerInfo.event.clientY / this.scene.getEngine().getRenderHeight()), 0.5);
                let uvec = BABYLON.Vector3.Unproject(this.mouseVector, 1, 1, BABYLON.Matrix.Identity(), this.scene.activeCamera.getViewMatrix(), this.scene.activeCamera.getProjectionMatrix());
                const dir = uvec.subtract(this.scene.activeCamera.position).normalize();
                const distance = -this.scene.activeCamera.position.x / dir.x;
                this.mesh.position = this.scene.activeCamera.position.clone().add(dir.scale(distance));
            }
        })
    }
}

export default FollowMouseCube