import "@babylonjs/loaders/glTF/2.0";
import * as BABYLON from "@babylonjs/core";


// 加载 模型
class ModuleBoxObj {
    scene: BABYLON.Scene
    mesh: BABYLON.Mesh

    constructor(scene: BABYLON.Scene) {
        this.scene = scene;
        const position = {x: 0, y: 6, z: 6}

        this.mesh = new BABYLON.Mesh('wrapperMesh', this.scene)
        this.mesh.isVisible = true

        const material = new BABYLON.StandardMaterial('')
        material.alpha = 0.5
        material.emissiveColor = BABYLON.Color3.Red()
        const subMeshArr: BABYLON.Mesh[] = []
        { // 左
            const subMesh = BABYLON.MeshBuilder.CreateBox('A1', {height: 0.76, width: 0.22, depth: 0.1}, this.scene)
            subMesh.rotation.x = Math.PI / 180 * 23
            subMesh.position.z -= 0.14
            subMesh.position.y += 0.08
            subMeshArr.push(subMesh)
        }
        { // 右
            const subMesh = BABYLON.MeshBuilder.CreateBox('A2', {height: 0.76, width: 0.22, depth: 0.1}, this.scene)
            subMesh.rotation.x = -Math.PI / 180 * 23
            subMesh.position.z += 0.14
            subMesh.position.y += 0.08
            subMeshArr.push(subMesh)
        }
        { // 中
            const subMesh = BABYLON.MeshBuilder.CreateBox('A3', {height: 0.1, width: 0.22, depth: 0.4}, this.scene)
            subMesh.position.y -= 0.005
            subMeshArr.push(subMesh)
        }
        subMeshArr.forEach(e => {
            // e.material = material
            e.isVisible = false
        })

        BABYLON.SceneLoader.LoadAssetContainerAsync('./module/', 'letterA.gltf', scene)
            .then((container) => {
                container.addAllToScene(); // 加入到场景中

                const m = container.meshes[1]
                m.name = 'letter'
                if (m.material) {
                    (m.material as BABYLON.StandardMaterial).ambientColor = BABYLON.Color3.White(); // 使用环境光辅助提高贴图亮度
                    (m.material as BABYLON.StandardMaterial).specularColor = BABYLON.Color3.Black();
                    // (m.material as StandardMaterial).alpha = 0.1;
                }

                this.mesh.addChild(m)
                subMeshArr.forEach(e => {
                    this.mesh.addChild(e)
                })

                this.mesh.position.x += position.x
                this.mesh.position.y += position.y
                this.mesh.position.z += position.z
                this.mesh.scaling = BABYLON.Vector3.One().scale(10)

                subMeshArr.forEach(e => {
                    e.physicsImpostor = new BABYLON.PhysicsImpostor(e, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0})
                })
                this.mesh.physicsImpostor = new BABYLON.PhysicsImpostor(this.mesh, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 3, friction: 1, restitution: 0}, this.scene)

                // m.physicsImpostor = new BABYLON.PhysicsImpostor(
                //     BABYLON.MeshBuilder.CreateBox(''),
                //     BABYLON.PhysicsImpostor.NoImpostor,
                //     {mass: 0, friction: 1, restitution: 0},
                //     this.scene
                // );
            })

    }
}

export default ModuleBoxObj