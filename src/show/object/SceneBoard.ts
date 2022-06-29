import * as BABYLON from "babylonjs";

export default () => {
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
    sideMaterial.emissiveColor = new BABYLON.Color3(247/255,207/255,212/255)
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
