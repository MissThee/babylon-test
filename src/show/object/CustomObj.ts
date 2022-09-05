import '@babylonjs/core/Animations/animatable'
import * as BABYLON from "@babylonjs/core";
import type {StickObject} from "../util/Interaction/StickHelper";

class CustomObj implements StickObject {
    scene?: BABYLON.Scene
    mesh: BABYLON.Mesh
    springStickPosition?: BABYLON.Vector3
    staticStickPosition?: BABYLON.Vector3

    constructor(scene?: BABYLON.Scene) {
        this.scene = scene
        this.mesh = BABYLON.MeshBuilder.CreateBox('customObj', {size: 2}, this.scene);
        this.mesh.isPickable = true
        this.mesh.receiveShadows = true
        // this.mesh.isVisible = false
        // this.mesh.scaling = BABYLON.Vector3.Zero()
        this.useMaterial()
    }

    private useMaterial() {
        if (this.mesh.material) {
            return
        }
        const material = new BABYLON.StandardMaterial("customObjMaterial", this.scene);
        material.alpha=0.7
        material.emissiveColor = BABYLON.Color3.FromHSV(Math.random() * 360, 1, 1).scale(0.5)
        material.ambientColor = material.emissiveColor
        this.mesh.material = material;
    }

    usePhysicsImpostor() {
        if (this.mesh.physicsImpostor) {
            return
        }
        this.mesh.physicsImpostor = new BABYLON.PhysicsImpostor(this.mesh, BABYLON.PhysicsImpostor.BoxImpostor, {
            mass: 1, // 质量，0时静止不动
            restitution: 0, // 碰撞弹力
            friction: 1, // 接触摩擦力
        }, this.scene)
    }

}

export default CustomObj
