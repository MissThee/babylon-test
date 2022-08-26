import '@babylonjs/core/Animations/animatable'
import * as BABYLON from "@babylonjs/core";

class CustomObj {
    scene: BABYLON.Scene
    mesh: BABYLON.Mesh
    options?

    constructor(scene: BABYLON.Scene, name: string = 'CustomObj', options?: { materialOpt?: { textureUrl?: string; } }) {
        this.options = options
        this.scene = scene
        this.mesh = BABYLON.MeshBuilder.CreateBox(name, {size: 2}, this.scene);
        this.mesh.scaling = BABYLON.Vector3.Zero()
        this.mesh.isPickable = true
        this.useMaterial()
    }

    private useMaterial() {
        if (this.mesh.material) {
            return
        }
        if (this.options?.materialOpt?.textureUrl) {
            const material = new BABYLON.StandardMaterial("textMaterial", this.scene);
            material.diffuseTexture = new BABYLON.Texture(this.options?.materialOpt?.textureUrl);
            material.emissiveColor = new BABYLON.Color3(1, 1, 1)
            material.specularColor = BABYLON.Color3.Black()
            this.mesh.material = material;
        }
    }

    usePhysicsImpostor() {
        if (this.mesh.physicsImpostor && !this.mesh.physicsImpostor.isDisposed) {
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
