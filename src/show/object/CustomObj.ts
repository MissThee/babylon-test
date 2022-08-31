import '@babylonjs/core/Animations/animatable'
import * as BABYLON from "@babylonjs/core";
import type {StickObject} from "../util/Interaction/StickHelper";

class CustomObj implements StickObject {
    scene?: BABYLON.Scene
    mesh: BABYLON.Mesh
    springStickPosition?: BABYLON.Vector3
    staticStickPosition?: BABYLON.Vector3
    options?

    constructor(name: string = 'CustomObj', options?: { materialOpt?: { textureUrl?: string; } }, scene?: BABYLON.Scene) {
        this.options = options
        this.scene = scene
        this.mesh = BABYLON.MeshBuilder.CreateBox(name, {size: 2}, this.scene);
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
        if (this.options?.materialOpt?.textureUrl) {
            const material = new BABYLON.StandardMaterial("textMaterial", this.scene);
            material.diffuseTexture = new BABYLON.Texture(this.options?.materialOpt?.textureUrl);
            material.emissiveColor = BABYLON.Color3.White().scale(0.95)
            material.specularColor = BABYLON.Color3.Black()
            this.mesh.material = material;
        }
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
