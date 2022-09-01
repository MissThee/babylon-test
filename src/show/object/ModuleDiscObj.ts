import "@babylonjs/loaders/glTF/2.0";
import * as BABYLON from "@babylonjs/core";
import {AssetContainer} from "@babylonjs/core/assetContainer";
import {StickObject} from "../util/Interaction/StickHelper";


// 加载 模型
class ModuleDiscObj implements StickObject {
    scene?: BABYLON.Scene
    mesh: BABYLON.Mesh
    subPhysicMeshes: BABYLON.Mesh[] = []
    shadowMesh?: BABYLON.AbstractMesh
    springStickPosition?: BABYLON.Vector3
    staticStickPosition?: BABYLON.Vector3
    modulePromise: Promise<void | AssetContainer>

    constructor(letter: string, scene?: BABYLON.Scene) {
        this.scene = scene;
        const position = {x: 0, y: 0, z: 0}

        this.mesh = new BABYLON.Mesh('wrapperMesh', this.scene) // BABYLON.MeshBuilder.CreateBox('', {size: 0.5}) //
        this.mesh.isVisible = false

        const material = new BABYLON.StandardMaterial('')
        material.alpha = 0.5
        material.emissiveColor = BABYLON.Color3.Red()

        this.buildSubMesh(letter)
        this.subPhysicMeshes.forEach(e => {
            // e.material = material
            e.isVisible = false
        })

        this.modulePromise = BABYLON.SceneLoader.LoadAssetContainerAsync('/module/', this.getModuleName(letter), this.scene)
            .then((container) => {
                container.addAllToScene(); // 加入到场景中
                const m = container.meshes[1]
                this.shadowMesh = m
                m.name = 'letter-' + letter
                m.receiveShadows = true
                if (m.material) {
                    (m.material as BABYLON.StandardMaterial).ambientColor = BABYLON.Color3.White().scale(0.95); // 使用环境光辅助提高贴图亮度
                    (m.material as BABYLON.StandardMaterial).specularColor = BABYLON.Color3.Black();
                }
                this.mesh.addChild(m)
                this.subPhysicMeshes.forEach(e => {
                    this.mesh.addChild(e)
                })

                this.mesh.setAbsolutePosition(new BABYLON.Vector3(position.x, position.y, position.z))
                this.mesh.scaling = BABYLON.Vector3.One().scale(8)
            })
    }

    usePhysicsImpostor() {
        if (this.mesh.physicsImpostor) {
            return
        }
        this.subPhysicMeshes.forEach(e => e.physicsImpostor = new BABYLON.PhysicsImpostor(e, BABYLON.PhysicsImpostor.BoxImpostor))
        this.mesh.physicsImpostor = new BABYLON.PhysicsImpostor(this.mesh, BABYLON.PhysicsImpostor.NoImpostor, {mass: 1, friction: 1, restitution: 0}, this.scene)
    }

    buildSubMesh(letter: string) {
        let subMeshIndex = 0
        switch (letter) {
            case 'A': {
                { // 左
                    const subMesh = BABYLON.MeshBuilder.CreateBox('A1', {height: 0.76, width: 0.22, depth: 0.1}, this.scene)
                    subMesh.name = letter + subMeshIndex++
                    subMesh.rotation.x = Math.PI / 180 * 23
                    subMesh.position.z -= 0.14
                    subMesh.position.y += 0.08
                    this.subPhysicMeshes.push(subMesh)
                }
                { // 右
                    const subMesh = BABYLON.MeshBuilder.CreateBox('A2', {height: 0.76, width: 0.22, depth: 0.1}, this.scene)
                    subMesh.name = letter + subMeshIndex++
                    subMesh.rotation.x = -Math.PI / 180 * 23
                    subMesh.position.z += 0.14
                    subMesh.position.y += 0.08
                    this.subPhysicMeshes.push(subMesh)
                }
                { // 中
                    const subMesh = BABYLON.MeshBuilder.CreateBox('A3', {height: 0.1, width: 0.22, depth: 0.4}, this.scene)
                    subMesh.name = letter + subMeshIndex++
                    subMesh.position.y -= 0.005
                    this.subPhysicMeshes.push(subMesh)
                }
            }
        }
    }

    getModuleName(letter: string) {
        switch (letter) {
            case 'A': {
                return 'letterA.gltf'
            }
        }
        throw 'no matched module'
    }
}

export default ModuleDiscObj
