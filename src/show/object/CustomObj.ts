// import * as BABYLON from '@babylonjs/core';

import type {Scene} from "@babylonjs/core/scene";
import type {Mesh} from "@babylonjs/core/Meshes/mesh";
import {Vector3} from "@babylonjs/core/Maths/math.vector";
import {Color3} from "@babylonjs/core/Maths/math.color";
import {StandardMaterial} from "@babylonjs/core/Materials/standardMaterial";
import {Animation} from '@babylonjs/core/Animations/animation'
import {CubicEase} from '@babylonjs/core/Animations/easing'
import {PhysicsImpostor} from '@babylonjs/core/Physics/physicsImpostor'
import {Texture} from '@babylonjs/core/Materials/Textures/texture'
import '@babylonjs/core/Animations/animatable'
import {CreateBox} from '@babylonjs/core/Meshes/Builders/boxBuilder'

const MeshBuilder = {CreateBox}
const BABYLON = {Color3, Vector3, StandardMaterial, MeshBuilder, Animation, CubicEase, PhysicsImpostor, Texture}

class CustomObj {
    scene: Scene
    mesh: Mesh
    material?: StandardMaterial
    isLockedPosition: boolean = false
    options?

    constructor(scene: Scene, name: string = 'CustomObj', options?: { materialOpt?: { textureUrl?: string; } }) {
        this.options = options
        this.scene = scene
        this.mesh = BABYLON.MeshBuilder.CreateBox(name, {size: 2}, this.scene);
        this.mesh.isPickable = true
        this.useMaterial()
        this.mesh.scaling = new BABYLON.Vector3(2, 2, 2)
        BABYLON.Animation.CreateAndStartAnimation(
            'showOn',
            this.mesh,
            'scaling',
            60,
            10,
            BABYLON.Vector3.Zero(),
            new BABYLON.Vector3(1, 1, 1),
            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
            new BABYLON.CubicEase(),
            () => {
                this.usePhysicsImpostor()
            }
        )
    }

    useMaterial() {
        if (this.mesh.material) {
            return
        }
        if (this.options?.materialOpt?.textureUrl) {
            this.material = new BABYLON.StandardMaterial("textMaterial", this.scene);
            this.material.diffuseTexture = new BABYLON.Texture(this.options?.materialOpt?.textureUrl);
            this.material.emissiveColor = new BABYLON.Color3(1, 1, 1)
            this.material.specularColor = new BABYLON.Color3(0.05, 0.05, 0.05)
            this.mesh.material = this.material;
        }
    }

    usePhysicsImpostor() {
        if (this.mesh.physicsImpostor && !this.mesh.physicsImpostor.isDisposed) {
            return
        }
        this.mesh.physicsImpostor = new BABYLON.PhysicsImpostor(this.mesh, BABYLON.PhysicsImpostor.BoxImpostor, {
            mass: 1, // 质量，0时静止不动
            restitution: 0, // 碰撞弹力
            friction: 1, // 接触摩擦力
        }, this.scene)
    }


    lockObj(param?: { position: [x: number, y: number, z: number], rotation?: [x: number, y: number, z: number] }): void
    lockObj(param?: { position?: [x: number, y: number, z: number], rotation: [x: number, y: number, z: number] }): void
    lockObj(param?: { position?: [x: number, y: number, z: number], rotation?: [x: number, y: number, z: number] }) {
        this.isLockedPosition = !!param
        if (this.isLockedPosition) {
            // 绑定物理效果后不能执行动画，需要先清除物理效果
            this.mesh.physicsImpostor?.dispose()
            const framePerSecond = 10
            const second = 1.5 // 动画持续总时间
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

export default CustomObj