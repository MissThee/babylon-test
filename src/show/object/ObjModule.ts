import "@babylonjs/loaders/glTF/2.0";
import * as BABYLON from "@babylonjs/core";
import {StandardMaterial} from "@babylonjs/core/Materials/standardMaterial";

// 加载 模型
class ObjModule {
    scene: BABYLON.Scene
    assetsManager: BABYLON.AssetsManager

    constructor(scene: BABYLON.Scene) {
        this.scene = scene;

        const position = {x: 0, y: 5, z: 0}

        this.assetsManager = new BABYLON.AssetsManager();
        const meshTask1 = this.assetsManager.addMeshTask("customModule", "", "/module/", "letterA.gltf")


        meshTask1.onSuccess = (t: BABYLON.MeshAssetTask) => {
            t.loadedMeshes.forEach((mesh, index) => {
                // mesh.position.x += position.x
                // mesh.position.y += position.y
                // mesh.position.z += position.z
                // mesh.rotation.y = 0.5

                if (mesh.material) {
                    (mesh.material as StandardMaterial).ambientColor = new BABYLON.Color3(1, 1, 1); // 使用环境光辅助提高贴图亮度
                    (mesh.material as StandardMaterial).specularColor = BABYLON.Color3.Black();
                    // (mesh.material as StandardMaterial).emissiveColor = new BABYLON.Color3(1, 1, 1);
                }
                // const mat = new BABYLON.StandardMaterial('mat')
                // mat.emissiveColor = BABYLON.Color3.Blue()
                // mat.specularColor=  BABYLON.Color3.Black()
                // mesh.material = mat
                // mesh.children.forEach((e: { physicsImpostor: PhysicsImpostor; })=>{
                //     e.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 1, friction: 1, restitution: 0}, scene);
                // })
                if (index === 0) {

                    mesh.position.y -= 0.13
                    // 创建包裹用的盒
                    const wrapperMesh = BABYLON.MeshBuilder.CreateBox('box', {size: 1})
                    {
                        const standardMaterial = new BABYLON.StandardMaterial('', scene)
                        standardMaterial.emissiveColor = new BABYLON.Color3(1, 0, 0)
                        standardMaterial.alpha = 0.05
                        wrapperMesh.material = standardMaterial
                    }
                    // 包裹为子模型
                    wrapperMesh.addChild(mesh)
                    wrapperMesh.setAbsolutePosition(new BABYLON.Vector3(position.x, position.y, position.z))
                    wrapperMesh.scaling = new BABYLON.Vector3(4, 4, 4)
                    wrapperMesh.physicsImpostor = new BABYLON.PhysicsImpostor(wrapperMesh, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 1, friction: 10, restitution: 0}, scene);
                }
            });
        };
        this.assetsManager.load()

        // BABYLON.SceneLoader.AppendAsync("/module/", "emerald.obj",scene)


    }
}

export default ObjModule
