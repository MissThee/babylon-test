// import * as BABYLON from '@babylonjs/core';

import type {Scene} from "@babylonjs/core/scene";
import type {Mesh} from "@babylonjs/core/Meshes/mesh";
import {Vector4} from "@babylonjs/core/Maths/math.vector";
import {Color3} from "@babylonjs/core/Maths/math.color";
import {StandardMaterial} from "@babylonjs/core/Materials/standardMaterial";
import {Texture} from '@babylonjs/core/Materials/Textures/texture'
import {CreateBox} from '@babylonjs/core/Meshes/Builders/boxBuilder'

const MeshBuilder = {CreateBox}
const BABYLON = {Color3, Vector4, StandardMaterial, MeshBuilder, Texture}

export default class SixPicBox {
    scene: Scene
    mesh: Mesh
    material: StandardMaterial

    constructor(scene: Scene) {
        this.scene = scene
        this.material = new BABYLON.StandardMaterial("boxMaterial");
        this.material.diffuseTexture = new BABYLON.Texture("/image/box.png");
        this.material.emissiveColor = new BABYLON.Color3(1, 1, 1); // 自发光颜色

        this.mesh = BABYLON.MeshBuilder.CreateBox('SixPicBox', {
            // 以贴图左下角为(0,0)，四个参数分别为矩形起点(x,y)和终点(x,y)
            faceUV: [
                new BABYLON.Vector4(0, 0, 0.5, 0.33), //冲向-z轴面
                new BABYLON.Vector4(0.5, 0, 1, 0.33), //冲向z轴面
                new BABYLON.Vector4(0, 0.33, 0.5, 0.66), //冲向x轴面
                new BABYLON.Vector4(0.5, 0.33, 1.0, 0.66), //冲向-x轴面
                new BABYLON.Vector4(0, 0.66, 0.5, 1.0), //冲向y轴面
                new BABYLON.Vector4(0.5, 0.66, 1.0, 1.0), //冲向-y轴面
            ],
            wrap: true,
            size: 2
        }, scene);
        this.mesh.position.y = 1
        this.mesh.position.z = 5
        this.mesh.material = this.material;
    }
}