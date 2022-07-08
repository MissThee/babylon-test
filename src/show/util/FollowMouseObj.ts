// import * as BABYLON from '@babylonjs/core';

import type {Scene} from "@babylonjs/core/scene";
import type {Mesh} from "@babylonjs/core/Meshes/mesh";
import {Vector3, Matrix} from "@babylonjs/core/Maths/math.vector";
import {Color3} from "@babylonjs/core/Maths/math.color";
import {StandardMaterial} from "@babylonjs/core/Materials/standardMaterial";
import {PhysicsImpostor} from '@babylonjs/core/Physics/physicsImpostor'
import {PointerEventTypes} from "@babylonjs/core/Events/pointerEvents";

import {CreateSphere} from '@babylonjs/core/Meshes/Builders/sphereBuilder'

const MeshBuilder = {CreateSphere}
const BABYLON = {Color3, Vector3, StandardMaterial, MeshBuilder, PhysicsImpostor, PointerEventTypes, Matrix}

let instance: FollowMouseObj;

export default class FollowMouseObj {
    scene: Scene;
    mesh: Mesh;
    material?: StandardMaterial
    mouseVector = new BABYLON.Vector3;

    static getInstance(scene: Scene) {
        if (!instance) {
            instance = new FollowMouseObj(scene)
        }
        return instance
    }

    constructor(scene: Scene) {
        this.scene = scene
        this.mesh = BABYLON.MeshBuilder.CreateSphere('FollowMouseObj', {segments: 1}, this.scene)
        this.mesh.isPickable = false
        this.mesh.isVisible = false
        // this.initMaterial()
        this.initImpostor()
        this.initFollowMouseAction()
    }

    initMaterial() {
        this.material = new BABYLON.StandardMaterial("FollowMouseObjMaterial");
        this.material.emissiveColor = BABYLON.Color3.Red(); // 自发光颜色
        this.mesh.material = this.material
    }

    initImpostor() {
        this.mesh.physicsImpostor = new BABYLON.PhysicsImpostor(this.mesh, BABYLON.PhysicsImpostor.NoImpostor, {mass: 0, restitution: 0}, this.scene)
        this.mesh.physicsImpostor.physicsBody.collisionFilterMask = 0
    }

    initFollowMouseAction() {
        this.scene.onPointerObservable.add((pointerInfo) => {
            switch (pointerInfo.type) {
                case BABYLON.PointerEventTypes.POINTERMOVE:
                case BABYLON.PointerEventTypes.POINTERDOWN:
                    pointerInfo.event.preventDefault();
                    if (!this.mesh || !this.scene.activeCamera) return;
                    // 调整z值可让方块落在平面的高度
                    // console.log(pointerInfo.event.offsetX,pointerInfo.event.clientX,pointerInfo.event.pageX)
                    this.mouseVector.set((pointerInfo.event.offsetX) / this.scene.getEngine().getRenderWidth(), (pointerInfo.event.offsetY / this.scene.getEngine().getRenderHeight()), 0);
                    let uvec = BABYLON.Vector3.Unproject(this.mouseVector, 1, 1, BABYLON.Matrix.Identity(), this.scene.activeCamera.getViewMatrix(), this.scene.activeCamera.getProjectionMatrix());
                    const dir = uvec.subtract(this.scene.activeCamera.position).normalize();
                    // 调整此处坐标，可让方块落在垂直于轴的面上
                    const distance = -this.scene.activeCamera.position.x / dir.x;
                    this.mesh.position = this.scene.activeCamera.position.clone().add(dir.scale(distance));
            }
        })
    }
}

