// 加载 模型
// BABYLON.SceneLoader.AppendAsync("/module/", "emerald.obj",scene).then(s=>{console.log(s)})
// 加载 模型
// import * as BABYLON from '@babylonjs/core';

import type {Scene} from "@babylonjs/core/scene";
import {Vector3} from "@babylonjs/core/Maths/math.vector";
import {Color3} from "@babylonjs/core/Maths/math.color";
import {StandardMaterial} from "@babylonjs/core/Materials/standardMaterial";
import {PhysicsImpostor} from '@babylonjs/core/Physics/physicsImpostor'
import {AssetsManager} from '@babylonjs/core/Misc/assetsManager'

const BABYLON = {Color3, Vector3, StandardMaterial, PhysicsImpostor, AssetsManager}

export default (scene?: Scene) => {
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

            mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.MeshImpostor, {mass: 0, friction: 1, restitution: 0}, scene);

        });
    };
    assetsManager.load()
    return assetsManager

}