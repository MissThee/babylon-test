import * as BABYLON from "babylonjs";

export default (name: string = 'ground') => {
    let ground
    {
        ground = BABYLON.MeshBuilder.CreateGround(name, {
            width: 20, // x轴方向宽度
            height: 100 // z轴方向宽度
        })
        ground.position.y = -5
        ground.physicsImpostor = new BABYLON.PhysicsImpostor(
            ground, BABYLON.PhysicsImpostor.BoxImpostor,
            {
                mass: 0,
                restitution: 1,
                friction: 1
            }
        )
    }
    return ground
}
