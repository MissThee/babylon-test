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
            // material.ambientTexture=new BABYLON.Texture(this.options?.materialOpt?.textureUrl);
            // material.emissiveTexture = new BABYLON.Texture(this.options?.materialOpt?.textureUrl); // 自发光材质，不受光照影响，仅受自身emissiveColor影响
            // material.specularTexture = new BABYLON.Texture(this.options?.materialOpt?.textureUrl); // 高光材质，受光线specularColor和自身specularColor影响
            // material.emissiveColor = BABYLON.Color3.White().scale(0.95) // 自发光颜色
            material.ambientColor = BABYLON.Color3.White()
            // material.specularColor = BABYLON.Color3.Black() // 高光颜色
            // material.diffuseColor = BABYLON.Color3.Black() // 本身颜色，不会增加亮度，无光照不显示颜色
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
