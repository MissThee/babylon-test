import * as BABYLON from "babylonjs";

export default class SceneBoard {
    scene: BABYLON.Scene

    constructor(scene: BABYLON.Scene) {
        this.scene = scene

        const sideLength = 40
        const deepLength = 40

        // 场景下部地板
        {
            const groundMaterial = new BABYLON.StandardMaterial('SceneBoardMaterial')
            // groundMaterial.ambientColor = new BABYLON.Color3(0.87, 0.71, 0.73)
            groundMaterial.emissiveColor = new BABYLON.Color3(0.87, 0.71, 0.73)
            // groundMaterial.diffuseColor = new BABYLON.Color3(0.87, 0.71, 0.73)
            // groundMaterial.diffuseColor = new BABYLON.Color3(1,1,1)
            let ground = BABYLON.MeshBuilder.CreateGround('ground', {
                width: deepLength, // x轴方向宽度
                height: sideLength, // z轴方向宽度
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
                width: deepLength, // x轴方向宽度
                height: sideLength, // y轴方向宽度
                sideOrientation: 0
            })
            wallRight.position.y = sideLength / 2
            wallRight.position.z = sideLength / 2
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
                width: deepLength, // x轴方向宽度
                height: sideLength, // y轴方向宽度
                sideOrientation: 1
            })
            wallLeft.position.y = sideLength / 2
            wallLeft.position.z = -sideLength / 2
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
                width: sideLength, // x轴方向宽度
                height: sideLength, // y轴方向宽度
                sideOrientation: 1
            })
            wallBack.position.y = sideLength / 2
            wallBack.position.x = -deepLength / 2
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
            // 场景限制物体前后的透明板
            let wallLimit = BABYLON.MeshBuilder.CreatePlane('wallLimit', {
                width: sideLength, // x轴方向宽度
                height: sideLength, // y轴方向宽度
                sideOrientation: 0
            })
            wallLimit.position.y = sideLength / 2
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

            const wallLimitFront = wallLimit
            wallLimitFront.position.x = 6
            const wallLimitBack = wallLimit.clone()
            wallLimitBack.position.x = -10

            // 场景限制物体上部的透明板
            let wallLimitTop = BABYLON.MeshBuilder.CreatePlane('wallLimitTop', {
                width: sideLength, // x轴方向宽度
                height: sideLength, // y轴方向宽度
                sideOrientation: 0
            })
            wallLimitTop.position.y = 20
            wallLimitTop.rotation.x = Math.PI / 2

            wallLimitTop.physicsImpostor = new BABYLON.PhysicsImpostor(
                wallLimitTop, BABYLON.PhysicsImpostor.BoxImpostor,
                {
                    mass: 0,
                    restitution: 1,
                    friction: 1
                }
            )
            wallLimitTop.isVisible = false
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
