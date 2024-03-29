// 限制物体位置
import * as BABYLON from "@babylonjs/core";

abstract class PhysicsStableHelper {
    static limitMeshPosition(meshArr: BABYLON.Mesh | BABYLON.Mesh[], option: { height: number, width: number, deep: number, safePadding?: number }) {
        option.safePadding = option.safePadding || 0.5
        for (let mesh of Array.isArray(meshArr) ? meshArr : [meshArr]) {
            if (mesh.position.x >= option.deep / 2 - option.safePadding) {
                mesh.position.x = option.deep / 2 - option.safePadding
                mesh.physicsImpostor?.setLinearVelocity(BABYLON.Vector3.Zero())
            }
            if (mesh.position.x <= -option.deep / 2 + option.safePadding) {
                mesh.position.x = -option.deep / 2 + option.safePadding
                mesh.physicsImpostor?.setLinearVelocity(BABYLON.Vector3.Zero())
            }
            if (mesh.position.z >= option.width / 2 - option.safePadding) {
                mesh.position.z = option.width / 2 - option.safePadding
                mesh.physicsImpostor?.setLinearVelocity(BABYLON.Vector3.Zero())
            }
            if (mesh.position.z <= -option.width / 2 + option.safePadding) {
                mesh.position.z = -option.width / 2 + option.safePadding
                mesh.physicsImpostor?.setLinearVelocity(BABYLON.Vector3.Zero())
            }
            if (mesh.position.y >= option.height - option.safePadding) {
                mesh.position.y = option.height - option.safePadding
                mesh.physicsImpostor?.setLinearVelocity(BABYLON.Vector3.Zero())
            }
            if (mesh.position.y <= option.safePadding) {
                mesh.position.y = option.safePadding
                mesh.physicsImpostor?.setLinearVelocity(BABYLON.Vector3.Zero())
            }
        }
    }

    // 减少物体角速度
    static reduceRotateVelocity(meshArr: BABYLON.Mesh[]) {
        for (let mesh of Array.isArray(meshArr) ? meshArr : [meshArr]) {
            const angularVelocity = mesh.physicsImpostor?.getAngularVelocity()
            if (angularVelocity && !angularVelocity?.equals(BABYLON.Vector3.Zero())) {
                mesh.physicsImpostor?.setAngularVelocity(angularVelocity.scale(0.9))
            }
        }
    }

    // 减少物体线速度
    static reduceLinearVelocity(meshArr: BABYLON.Mesh[]) {
        for (let mesh of Array.isArray(meshArr) ? meshArr : [meshArr]) {
            const angularVelocity = mesh.physicsImpostor?.getLinearVelocity()
            if (angularVelocity && !angularVelocity?.equals(BABYLON.Vector3.Zero())) {
                mesh.physicsImpostor?.setLinearVelocity(angularVelocity.scale(0.9))
            }
        }
    }

    // 限制物体角速度
    static limitRotateVelocity(meshArr: BABYLON.Mesh[]) {
        for (let mesh of Array.isArray(meshArr) ? meshArr : [meshArr]) {
            const angularVelocity = mesh.physicsImpostor?.getAngularVelocity()
            if (angularVelocity && !angularVelocity?.equals(BABYLON.Vector3.Zero())) {
                const maxVelocitySpeed = 30
                mesh.physicsImpostor?.setAngularVelocity(new BABYLON.Vector3(
                    Math.min(Math.abs(angularVelocity.x), maxVelocitySpeed) * (angularVelocity.x >= 0 ? 1 : -1),
                    Math.min(Math.abs(angularVelocity.y), maxVelocitySpeed) * (angularVelocity.y >= 0 ? 1 : -1),
                    Math.min(Math.abs(angularVelocity.z), maxVelocitySpeed) * (angularVelocity.z >= 0 ? 1 : -1),
                ))
            }
        }
    }

    // 限制物体线速度
    static limitLinearVelocity(meshArr: BABYLON.Mesh[]) {
        const maxSpeed = 100
        for (let mesh of Array.isArray(meshArr) ? meshArr : [meshArr]) {
            const linearVelocity = mesh.physicsImpostor?.getLinearVelocity()
            if (linearVelocity && !linearVelocity?.equals(BABYLON.Vector3.Zero())) {
                const scaleRate = maxSpeed / linearVelocity.length()
                if (scaleRate < 1) {
                    mesh.physicsImpostor?.setLinearVelocity(linearVelocity.scale(scaleRate))
                }
            }
        }
    }

    // 忽略过小的线速度
    static ignoreMiniVelocity(meshArr: BABYLON.Mesh[]) {
        const minSpeed = 0.05
        for (let mesh of Array.isArray(meshArr) ? meshArr : [meshArr]) {
            const linearVelocity = mesh.physicsImpostor?.getLinearVelocity()
            if (linearVelocity && !linearVelocity?.equals(BABYLON.Vector3.Zero())) {
                if (linearVelocity.length() < minSpeed) {
                    mesh.physicsImpostor?.setLinearVelocity(BABYLON.Vector3.Zero())
                }
            }
        }
    }

}

export default PhysicsStableHelper
