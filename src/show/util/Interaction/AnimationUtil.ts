import * as BABYLON from "@babylonjs/core";

export const animationZoomShow = (mesh: BABYLON.Mesh, forceScaling?: BABYLON.Vector3) => {
    const meshScaling = mesh.scaling
    mesh.physicsImpostor?.dispose()
    mesh.physicsImpostor = null
    mesh.scaling = BABYLON.Vector3.Zero()
    const framePerSecond = 60
    const second = 0.3 // 动画持续总时间
    return new Promise<void>((resolve) => {
        BABYLON.Animation.CreateAndStartAnimation(
            'zoomShow',
            mesh,
            'scaling',
            framePerSecond,
            framePerSecond * second,
            BABYLON.Vector3.Zero(),
            forceScaling || meshScaling,
            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
            new BABYLON.CubicEase(),
            () => {
                resolve()
            }
        )
    })

    // -----------------------------------------------------
    // const mesh = behaviorBundleObj.mesh
    // const endScaling = behaviorBundleObj.endScaling || BABYLON.Vector3.One()
    // let animation = new BABYLON.Animation('showOn', 'scaling', 60, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
    // animation.setKeys([
    //     {frame: 0, value: BABYLON.Vector3.Zero()},
    //     {frame: 10, value: endScaling},
    // ])
    // mesh.animations = [animation]
    // mesh.physicsImpostor?.dispose()
    // return new Promise<void>((resolve) => {
    //     const mesh = behaviorBundleObj.mesh
    //     mesh.isVisible = true
    //     this.scene.beginAnimation(mesh, 0, 10, false, 1, resolve)
    // })
}
export const animationMove = (mesh: BABYLON.Mesh, param: { position?: BABYLON.Vector3, rotation?: BABYLON.Vector3 }) => {
    // 绑定物理效果后不能执行动画，需要先清除物理效果
    mesh.physicsImpostor?.dispose()
    mesh.physicsImpostor = null
    const framePerSecond = 60
    const second = 0.3 // 动画持续总时间

    // 位置变化
    const lockPositionPromise = new Promise<void>((resolve) => {
        if (!param.position) {
            resolve()
            return
        }
        BABYLON.Animation.CreateAndStartAnimation(
            'lockPosition',
            mesh,
            'position',
            framePerSecond,
            framePerSecond * second,
            mesh.position,
            param.position,
            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
            undefined,//new BABYLON.CubicEase(),
            resolve
        )
    })
    // 角度变化
    const lockRotationPromise = new Promise<void>((resolve) => {
        if (!param.rotation) {
            resolve()
            return
        }
        BABYLON.Animation.CreateAndStartAnimation(
            'lockRotation',
            mesh,
            'rotation',
            framePerSecond,
            framePerSecond * second,
            mesh.rotation,
            param.rotation,
            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
            undefined,//  new BABYLON.CubicEase(),
            resolve
        )
    })
    return Promise.all([lockPositionPromise, lockRotationPromise])

    // mesh.animations = []
    // // 位置变化
    // const lockPosition = new BABYLON.Animation("lockPosition", "position", framePerSecond, BABYLON.Animation.ANIMATIONTYPE_VECTOR3);
    // lockPosition.setKeys([
    //     {frame: 0, value: mesh.position},
    //     {frame: framePerSecond * second, value: new BABYLON.Vector3(...(param?.position || []))},
    // ]);
    // mesh.animations.push(lockPosition)
    // // 角度变化
    // const lockRotation = new BABYLON.Animation("lockRotation", "rotation", framePerSecond, BABYLON.Animation.ANIMATIONTYPE_VECTOR3);
    // lockRotation.setKeys([
    //     {frame: 0, value: mesh.rotation},
    //     {frame: framePerSecond * second, value: new BABYLON.Vector3(...(param?.rotation || []))},
    // ]);
    // mesh.animations.push(lockRotation)
    // // 执行动画
    // this.scene.beginAnimation(mesh, 0, framePerSecond * second, false, 4);
}