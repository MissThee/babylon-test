import * as BABYLON from '@babylonjs/core';

export default class FollowMouseObj {
    scene: BABYLON.Scene;
    mesh: BABYLON.Mesh;
    static instance: FollowMouseObj

    static getInstance(scene: BABYLON.Scene) {
        if (!this.instance) {
            this.instance = new this(scene)
        }
        return this.instance
    }

    constructor(scene: BABYLON.Scene) {
        this.scene = scene
        this.mesh = BABYLON.MeshBuilder.CreateSphere('FollowMouseObj', {segments: 1}, this.scene)
        this.mesh.isPickable = false
        this.mesh.isVisible = false
        this.initImpostor()
        this.initFollowMouseAction()
    }

    initImpostor() {
        this.mesh.physicsImpostor = new BABYLON.PhysicsImpostor(this.mesh, BABYLON.PhysicsImpostor.NoImpostor, {mass: 0, restitution: 0}, this.scene)
        this.mesh.physicsImpostor.physicsBody.collisionFilterMask = 0
    }

    initFollowMouseAction() {
        this.scene.onPointerObservable.add((pointerInfo) => {
            switch (pointerInfo.type) {
                case BABYLON.PointerEventTypes.POINTERMOVE:
                    pointerInfo.event.preventDefault();
                    if (!this.mesh || !this.scene.activeCamera) return;
                    // 将鼠标在视窗的位置，映射到目标坐标系。相当于在目标空间中，视窗是一个悬浮的平面，获取平面内鼠标在目标坐标系的坐标
                    let uvec = BABYLON.Vector3.Unproject(
                        // 调整z值可修改方块落在平面的高度
                        new BABYLON.Vector3(this.scene.pointerX, this.scene.pointerY, 0), // 鼠标在视窗平面位置
                        this.scene.getEngine().getRenderWidth(),// 视窗平面宽度
                        this.scene.getEngine().getRenderHeight(),// 视窗平面高度
                        BABYLON.Matrix.Identity(),
                        this.scene.activeCamera.getViewMatrix(),
                        this.scene.activeCamera.getProjectionMatrix()
                    );
                    const dir = uvec.subtract(this.scene.activeCamera.position).normalize();
                    // const alwaysOnOnePlaneScale = -this.scene.activeCamera.position.x / dir.x; // 此值可让方块落在垂直于某轴的面上
                    const scale = this.scene.activeCamera.position.length()
                    this.mesh.position = this.scene.activeCamera.position.clone().add(dir.scale(scale));
            }
        })
    }
}

