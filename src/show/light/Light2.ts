import * as BABYLON from '@babylonjs/core';
import {sceneColor} from "../util/Constant";

export default class Light1 {
    scene: BABYLON.Scene;
    light: BABYLON.DirectionalLight;

    constructor(scene: BABYLON.Scene) {
        this.scene = scene
        this.light = new BABYLON.DirectionalLight('light1', new BABYLON.Vector3(-1, 0, -1), scene); // 平行光
        this.light.intensity = 0.1;
        this.light.diffuse = BABYLON.Color3.White();
    }
}

