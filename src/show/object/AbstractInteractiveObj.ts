import * as BABYLON from "@babylonjs/core";

abstract class AbstractInteractiveObj {
    scene: BABYLON.Scene
    mesh: BABYLON.Mesh
    isLockedPosition: boolean = false

    constructor(scene: BABYLON.Scene) {
        this.scene = scene
        this.mesh = new BABYLON.Mesh('InteractiveCommonObj')
    }

    show() {
        // return new Promise<void>((resolve) => {
        //     BABYLON.Animation.CreateAndStartAnimation(
        //         'showOn',
        //         this.mesh,
        //         'scaling',
        //         60,
        //         10,
        //         BABYLON.Vector3.Zero(),
        //         new BABYLON.Vector3(1, 1, 1),
        //         BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
        //         new BABYLON.CubicEase(),
        //         () => {
        //             this.usePhysicsImpostor()
        //             resolve()
        //         }
        //     )
        // })

        let animation = new BABYLON.Animation('showOn', 'scaling', 60, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        animation.setKeys([
            {frame: 0, value: BABYLON.Vector3.Zero()},
            {frame: 10, value: new BABYLON.Vector3(1, 1, 1)},
        ])
        this.mesh.animations = [animation]
        this.mesh.physicsImpostor?.dispose()
        this.mesh.physicsImpostor=null
        return new Promise<void>((resolve) => {
            this.scene.beginAnimation(this.mesh, 0, 10, false, 1, () => {
                resolve()
            })
        })
    }

    usePhysicsImpostor() {
        if (this.mesh.physicsImpostor) {
            return
        }
        this.mesh.physicsImpostor = new BABYLON.PhysicsImpostor(this.mesh, BABYLON.PhysicsImpostor.BoxImpostor, {
            mass: 1, // 质量，0时静止不动
            restitution: 0, // 碰撞弹力
            friction: 1, // 接触摩擦力
        }, this.scene)
    }

    lockObj(param?: { position?: [x: number, y: number, z: number], rotation?: [x: number, y: number, z: number] }) {
        this.isLockedPosition = !!param
        if (this.isLockedPosition) {
            // 绑定物理效果后不能执行动画，需要先清除物理效果
            this.mesh.physicsImpostor?.dispose()
            this.mesh.physicsImpostor=null
            const framePerSecond = 10
            const second = 1.5 // 动画持续总时间
            this.mesh.animations = []
            // 位置变化
            const lockPosition = new BABYLON.Animation("lockPosition", "position", framePerSecond, BABYLON.Animation.ANIMATIONTYPE_VECTOR3);
            lockPosition.setKeys([
                {frame: 0, value: this.mesh.position},
                {frame: framePerSecond * second, value: new BABYLON.Vector3(...(param?.position || []))},
            ]);
            this.mesh.animations.push(lockPosition)
            // 角度变化
            const lockRotation = new BABYLON.Animation("lockRotation", "rotation", framePerSecond, BABYLON.Animation.ANIMATIONTYPE_VECTOR3);
            lockRotation.setKeys([
                {frame: 0, value: this.mesh.rotation},
                {frame: framePerSecond * second, value: new BABYLON.Vector3(...(param?.rotation || []))},
            ]);
            this.mesh.animations.push(lockRotation)
            // 执行动画
            this.scene.beginAnimation(this.mesh, 0, framePerSecond * second, false, 4);
        } else {
            this.usePhysicsImpostor()
        }
    }
}
