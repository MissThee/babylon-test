import "@babylonjs/loaders/glTF/2.0";
import * as BABYLON from "@babylonjs/core";
import type {StandardMaterial} from "@babylonjs/core/Materials/standardMaterial";
import type {BehaviorBundleObj} from "../util/BehaviorBundle";

// 加载 模型
class ModuleObj implements BehaviorBundleObj {
    scene: BABYLON.Scene
    mesh: BABYLON.Mesh;
    endScaling = BABYLON.Vector3.One().scale(4)

    constructor(scene: BABYLON.Scene) {
        const position = {x: 0, y: 5, z: 0}
        this.scene = scene;
        this.mesh = BABYLON.MeshBuilder.CreateSphere('box', {}, this.scene)
        this.mesh.isPickable = true
        // this.mesh.isVisible = false
        const standardMaterial = new BABYLON.StandardMaterial('', scene)
        standardMaterial.emissiveColor = new BABYLON.Color3(1, 0, 0)
        standardMaterial.specularColor = BABYLON.Color3.Black();
        standardMaterial.alpha = 0.1
        this.mesh.material = standardMaterial


        BABYLON.SceneLoader.ImportMeshAsync(null, "/module/", "letterA.gltf")
            .then(({meshes}) => {
                meshes.forEach((m, index) => {
                    if (m.material) {
                        (m.material as StandardMaterial).ambientColor = BABYLON.Color3.White(); // 使用环境光辅助提高贴图亮度
                        (m.material as StandardMaterial).specularColor = BABYLON.Color3.Black();
                    }
                    if (index === 0) {
                        this.mesh.addChild(m)
                        // m.position.y -= 0.13
                        this.mesh.setAbsolutePosition(new BABYLON.Vector3(position.x, position.y, position.z))
                        this.mesh.scaling = BABYLON.Vector3.One().scale(4)
                        // 包裹为子模型
                    }
                });
            })
    }

    usePhysicsImpostor() {
        if (this.mesh.physicsImpostor && !this.mesh.physicsImpostor.isDisposed) {
            return
        }
        this.mesh.physicsImpostor = new BABYLON.PhysicsImpostor(
            this.mesh,
            BABYLON.PhysicsImpostor.SphereImpostor,
            {mass: 1, friction: 1, restitution: 0},
            this.scene
        );

    }

}

export default ModuleObj
