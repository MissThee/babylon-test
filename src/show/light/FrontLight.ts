import * as BABYLON from '@babylonjs/core';

export default class GroundShadowLight extends BABYLON.DirectionalLight {
    constructor(scene: BABYLON.Scene) {
        super('frontLight', new BABYLON.Vector3(-1,0,0), scene)
        this.intensity = 0.2;
        this.diffuse = BABYLON.Color3.White()
        this.specular = BABYLON.Color3.Black()
        // this.setEnabled(false)
    }
}
