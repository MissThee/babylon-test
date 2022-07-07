// 加载 模型
// BABYLON.SceneLoader.AppendAsync("/module/", "emerald.obj",scene).then(s=>{console.log(s)})
// 加载 模型
import * as BABYLON from '@babylonjs/core';

export default (scene?: BABYLON.Scene) => {
    const assetsManager = new BABYLON.AssetsManager();
    const meshTask1 = assetsManager.addMeshTask("customModule", "", "/module/", "bunny.obj")
    meshTask1.onSuccess = (t: { loadedMeshes: any[]; }) => {
        t.loadedMeshes.forEach((mesh) => {
            mesh.scaling = new BABYLON.Vector3(30, 30, 30)
            // mesh.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1)
            mesh.position.z -= 5
            mesh.position.y += 5
            mesh.position.x -= 5
            const mat = new BABYLON.StandardMaterial('mat')
            mat.emissiveColor = BABYLON.Color3.Blue()
            mesh.material = mat

            mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.MeshImpostor, {mass: 0, friction:1, restitution: 0},scene);

        });
    };
    assetsManager.load()
    return assetsManager


    //
    // BABYLON.SceneLoader.ImportMesh("", "module/", "skull.babylon", scene, function (newMeshes) {
    //     // Set the target of the camera to the first imported mesh
    //
    //     let skull = newMeshes[0];
    //
    //     skull.physicsImpostor = new BABYLON.PhysicsImpostor(skull, BABYLON.PhysicsImpostor.MeshImpostor, {mass: 0, friction: 0, restitution: 0.3});
    //
    //     var ticker = 0;
    //
    //     let spheres = [];
    //
    //     scene.registerBeforeRender(function() {
    //         if(ticker++ % 60) return;
    //
    //         let s = BABYLON.MeshBuilder.CreateSphere("s", {diameter: 5});
    //         s.position.y = 100;
    //         s.position.z = 65 + Math.random() * 20;
    //         s.position.x = -10 + Math.random() * 20;
    //
    //         s.physicsImpostor = new BABYLON.PhysicsImpostor(s, BABYLON.PhysicsImpostor.SphereImpostor, {mass: 1});
    //         spheres.push(s);
    //
    //         spheres.forEach(function(sphere) {
    //             if(sphere.position.y < 0) {
    //                 sphere.dispose();
    //             }
    //         });
    //
    //         spheres = spheres.filter(s => !s.isDisposed());
    //
    //     });
    // });

}