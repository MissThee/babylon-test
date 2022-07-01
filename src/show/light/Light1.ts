import * as BABYLON from "babylonjs";


export default class Light1 {
    scene: BABYLON.Scene;
    light: BABYLON.DirectionalLight;

    constructor(scene: BABYLON.Scene) {
        this.scene = scene
        this.light = new BABYLON.DirectionalLight('light2', new BABYLON.Vector3(0, -1, 0), scene); // 平行光，找不到的面全黑
        this.light.intensity = 0.1;
        this.light.position = new BABYLON.Vector3(0, 30, 0);
        this.light.diffuse = new BABYLON.Color3(1, 1, 1);
    }
}

// 创建光源
// const light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene); // 模拟环境光，照不到的面也有暗光
// light1.diffuse = new BABYLON.Color3(1, 1, 1); // 漫反射
// light1.specular = new BABYLON.Color3(1, 1, 1); // 镜面反射
// light1.groundColor = new BABYLON.Color3(1, 1, 1); // 环境光
//
// const light2 = new BABYLON.DirectionalLight('light2', new BABYLON.Vector3(0, -1, 0), scene); // 平行光，找不到的面全黑
// light2.intensity = 0.1;
// light2.position = new BABYLON.Vector3(0, 30, 0);
// light2.diffuse = new BABYLON.Color3(1, 1, 1);
// const light3 = new BABYLON.PointLight('light3', new BABYLON.Vector3(2, 2, 2), scene); // 点光
// light3.range = 100; // 点光和聚光灯适用
// light3.intensity = 0.5;
// const light2 = new BABYLON.SpotLight("light4", // 聚光灯
//     new BABYLON.Vector3(0, 2, -10), // 位置
//     new BABYLON.Vector3(0, -1, 0), // 方向
//     Math.PI / 6, // 散发角度
//     1, // 能量，光照距离
//     scene);