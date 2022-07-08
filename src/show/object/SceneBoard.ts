// import * as BABYLON from '@babylonjs/core';

import type {Scene} from "@babylonjs/core/scene";
import {Color3} from "@babylonjs/core/Maths/math.color";
import {StandardMaterial} from "@babylonjs/core/Materials/standardMaterial";
import {PhysicsImpostor} from '@babylonjs/core/Physics/physicsImpostor'
import {CreateGround} from '@babylonjs/core/Meshes/Builders/groundBuilder'
import {CreatePlane} from '@babylonjs/core/Meshes/Builders/planeBuilder'

const MeshBuilder = {CreateGround, CreatePlane}
const BABYLON = {Color3, StandardMaterial, MeshBuilder, PhysicsImpostor}

export default class SceneBoard {
    scene: Scene
    sideVerticalLength: number = 40
    sideHorizontalLength: number = 40
    deepLength: number = 10

    constructor(scene: Scene, size?: { v?: number, h?: number, d?: number }) {
        this.scene = scene
        this.sideVerticalLength = size?.v || this.sideVerticalLength
        this.sideHorizontalLength = size?.h || this.sideHorizontalLength
        this.deepLength = size?.d || this.deepLength

        // 场景下部地板
        {
            const groundMaterial = new BABYLON.StandardMaterial('SceneBoardMaterial')
            // groundMaterial.ambientColor = new BABYLON.Color3(0.87, 0.71, 0.73)
            groundMaterial.emissiveColor = new BABYLON.Color3(0.87, 0.71, 0.73)
            // groundMaterial.diffuseColor = new BABYLON.Color3(0.87, 0.71, 0.73)
            // groundMaterial.diffuseColor = new BABYLON.Color3(1,1,1)
            let ground = BABYLON.MeshBuilder.CreateGround('ground', {
                width: this.deepLength, // x轴方向宽度
                height: this.sideVerticalLength, // z轴方向宽度
            })
            // ground.position.y = -5
            ground.physicsImpostor = new BABYLON.PhysicsImpostor(
                ground, BABYLON.PhysicsImpostor.BoxImpostor,
                {
                    mass: 0,
                    restitution: 1,
                    friction: 1
                }
            )
            ground.material = groundMaterial
            ground.receiveShadows = true
        }

        const sideMaterial = new BABYLON.StandardMaterial('SceneBoardMaterial')
        sideMaterial.emissiveColor = new BABYLON.Color3(247 / 255, 207 / 255, 212 / 255)
        // sideMaterial.ambientColor = new BABYLON.Color3(0.87, 0.71, 0.73)
        // sideMaterial.diffuseColor = new BABYLON.Color3(0.87, 0.71, 0.73)

        {
            // 场景右边挡板
            let wallRight = BABYLON.MeshBuilder.CreatePlane('wallRight', {
                width: this.deepLength, // x轴方向宽度
                height: this.sideHorizontalLength, // y轴方向宽度
                sideOrientation: 0
            })
            wallRight.position.y = this.sideHorizontalLength / 2
            wallRight.position.z = this.sideVerticalLength / 2
            wallRight.physicsImpostor = new BABYLON.PhysicsImpostor(
                wallRight, BABYLON.PhysicsImpostor.BoxImpostor,
                {
                    mass: 0,
                    restitution: 1,
                    friction: 1
                }
            )
            wallRight.material = sideMaterial
        }

        {
            // 场景左边挡板
            let wallLeft = BABYLON.MeshBuilder.CreatePlane('wallLeft', {
                width: this.deepLength, // x轴方向宽度
                height: this.sideHorizontalLength, // y轴方向宽度
                sideOrientation: 1
            })
            wallLeft.position.y = this.sideHorizontalLength / 2
            wallLeft.position.z = -this.sideVerticalLength / 2
            wallLeft.physicsImpostor = new BABYLON.PhysicsImpostor(
                wallLeft, BABYLON.PhysicsImpostor.BoxImpostor,
                {
                    mass: 0,
                    restitution: 1,
                    friction: 1
                }
            )
            wallLeft.material = sideMaterial
        }

        {
            // 场景背部背景板
            let wallBack = BABYLON.MeshBuilder.CreatePlane('wallBack', {
                width: this.sideVerticalLength, // x轴方向宽度
                height: this.sideHorizontalLength, // y轴方向宽度
                sideOrientation: 1
            })
            wallBack.position.y = this.sideHorizontalLength / 2
            wallBack.position.x = -this.deepLength / 2
            wallBack.rotation.y = Math.PI / 2

            wallBack.physicsImpostor = new BABYLON.PhysicsImpostor(
                wallBack, BABYLON.PhysicsImpostor.BoxImpostor,
                {
                    mass: 0,
                    restitution: 1,
                    friction: 1
                }
            )
            wallBack.material = sideMaterial
        }

        {
            // 场景限制物体前方透明板
            let wallLimit = BABYLON.MeshBuilder.CreatePlane('wallLimit', {
                width: this.sideVerticalLength, // x轴方向宽度
                height: this.sideHorizontalLength, // y轴方向宽度
                sideOrientation: 0
            })
            wallLimit.position.y = this.sideHorizontalLength / 2
            wallLimit.rotation.y = Math.PI / 2

            wallLimit.physicsImpostor = new BABYLON.PhysicsImpostor(
                wallLimit, BABYLON.PhysicsImpostor.BoxImpostor,
                {
                    mass: 0,
                    restitution: 1,
                    friction: 1
                }
            )
            wallLimit.isVisible = false

            wallLimit.position.x = this.deepLength / 2
        }

        {
            // 场景限制物体上部的透明板
            let wallLimitTop = BABYLON.MeshBuilder.CreatePlane('wallLimitTop', {
                width: this.deepLength, // x轴方向宽度
                height: this.sideVerticalLength, // y轴方向宽度
                sideOrientation: 1
            })
            wallLimitTop.position.y = this.sideHorizontalLength
            wallLimitTop.rotation.x = Math.PI / 2

            wallLimitTop.physicsImpostor = new BABYLON.PhysicsImpostor(
                wallLimitTop, BABYLON.PhysicsImpostor.BoxImpostor,
                {
                    mass: 0,
                    restitution: 1,
                    friction: 1
                }
            )
            wallLimitTop.material = sideMaterial
        }
    }
}
// const groundMat = new BABYLON.StandardMaterial("textMaterial", scene)
// ground.material = groundMat
// groundMat.ambientColor = new BABYLON.Color3(1, 1, 1) // 环境；由环境背景光照明的材料的颜色或质地。(需要设置场景的环境颜色)
// groundMat.specularColor = new BABYLON.Color3(1, 0, 0) // 镜面，也叫高光；光线给材质的亮点(需要创建光源才有效果)
// groundMat.diffuseColor = new BABYLON.Color3(1, 0, 0) // 漫反射；在光线下观察的材料的基本颜色或质地(需要创建光源才有效果)
// groundMat.emissiveColor = new BABYLON.Color3(0, 1, 0) // 发光；发光材料的颜色或质地，如自发光
// 使用diffuseTexture、specularTexture、emissiveTexture以及ambientTexture等属性中的一个或多个来设置一个材质的纹理。其中，ambientTexture只有在没有设置场景环境颜色的时候才被使用。
