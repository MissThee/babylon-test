import "@babylonjs/loaders/glTF/2.0";
import * as BABYLON from "@babylonjs/core";
import type {StickObject} from "../util/Interaction/StickHelper";
import {ISceneLoaderAsyncResult} from "@babylonjs/core/Loading/sceneLoader";

// 加载 模型
class ModuleObj implements StickObject {
    scene?: BABYLON.Scene
    mesh: BABYLON.Mesh;
    springStickPosition?: BABYLON.Vector3
    staticStickPosition?: BABYLON.Vector3
    modulePromise: Promise<void | ISceneLoaderAsyncResult>

    constructor(scene?: BABYLON.Scene) {
        const position = {x: 0, y: 5, z: 5}
        this.scene = scene;
        this.mesh = BABYLON.MeshBuilder.CreateSphere('moduleObj', {}, this.scene)
        // this.mesh.isVisible = false
        const standardMaterial = new BABYLON.StandardMaterial('', scene)
        standardMaterial.emissiveColor = new BABYLON.Color3(1, 0, 0)
        standardMaterial.specularColor = BABYLON.Color3.Black();
        standardMaterial.alpha = 0.1
        this.mesh.material = standardMaterial

        this.modulePromise = BABYLON.SceneLoader.ImportMeshAsync(null, "/module/", "letterA.gltf")
            .then(({meshes}) => {
                const m = meshes[1]
                if (m.material) {
                    (m.material as BABYLON.StandardMaterial).ambientColor = BABYLON.Color3.White(); // 使用环境光辅助提高贴图亮度
                    (m.material as BABYLON.StandardMaterial).specularColor = BABYLON.Color3.Black();
                }
                this.mesh.addChild(m)
                m.position.y -= 0.13
                m.setPivotPoint(m.getBoundingInfo().boundingBox.centerWorld)
                this.mesh.setAbsolutePosition(new BABYLON.Vector3(position.x, position.y, position.z))
                this.mesh.scaling = BABYLON.Vector3.One().scale(4)
            })
    }

    usePhysicsImpostor() {
        if (this.mesh.physicsImpostor) {
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
