import * as  BABYLON from "babylonjs";

class CustomObj {
    scene: BABYLON.Scene
    mesh: BABYLON.Mesh
    material?: BABYLON.StandardMaterial
    pointerDragBehavior?: BABYLON.PointerDragBehavior
    isLockedPosition: boolean = false
    options?

    constructor(scene: BABYLON.Scene, name: string = 'TextBox', options?: { materialOpt?: { textureUrl?: string; } }) {
        this.options = options
        this.scene = scene
        this.mesh = BABYLON.MeshBuilder.CreateBox(name, {size: 2}, this.scene);
        this.useMaterial()
        this.usePointerDragBehavior()
        this.usePhysicsImpostor()
    }

    useMaterial() {
        this.material = new BABYLON.StandardMaterial("textMaterial", this.scene);
        this.material.diffuseTexture = new BABYLON.Texture(this.options?.materialOpt?.textureUrl || "/image/testMaterial.png");
        this.mesh.material = this.material;
    }

    usePointerDragBehavior() {
        this.pointerDragBehavior = new BABYLON.PointerDragBehavior({dragPlaneNormal: new BABYLON.Vector3(1, 0, 0)});
        this.pointerDragBehavior.dragDeltaRatio = 1
        this.mesh.addBehavior(this.pointerDragBehavior);
    }

    usePhysicsImpostor() {
        this.mesh.physicsImpostor = new BABYLON.PhysicsImpostor(this.mesh, BABYLON.PhysicsImpostor.BoxImpostor, {
            mass: 1, // 质量，0时静止不动
            restitution: 0.4, // 碰撞弹力
            friction: 1, // 接触摩擦力
        }, this.scene);

        if (this.pointerDragBehavior) {
            this.pointerDragBehavior.useObjectOrientationForDragging = false
        }
        this.pointerDragBehavior?.onDragStartObservable.add((event) => {
            this.mesh.physicsImpostor?.sleep();
            console.log("dragStart", event);
        })
        this.pointerDragBehavior?.onDragObservable.add((event) => {
            console.log("drag", event);
        })
        this.pointerDragBehavior?.onDragEndObservable.add((event) => {
            this.mesh.physicsImpostor?.wakeUp()
            console.log("dragEnd", event);
        })
    }

    lockObj(param?: { position: [x: number, y: number, z: number], rotation?: [x: number, y: number, z: number] }): void
    lockObj(param?: { position?: [x: number, y: number, z: number], rotation: [x: number, y: number, z: number] }): void
    lockObj(param?: { position?: [x: number, y: number, z: number], rotation?: [x: number, y: number, z: number] }) {
        this.isLockedPosition = !!param
        if (this.isLockedPosition) {
            // 绑定物理效果后不能执行动画，需要先清除物理效果
            this.mesh.physicsImpostor?.dispose()
            const framePerSecond = 10
            const second = 0.8 // 动画持续总时间
            // 位置动画
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