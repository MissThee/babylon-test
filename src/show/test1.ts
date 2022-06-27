import * as BABYLON from 'babylonjs';
import "babylonjs-loaders";
import CreateBaseLine from "./util/CreateBaseLine";
import FollowMouseObj from "./util/FollowMouseObj";
import * as Constant from './util/Constant'
import CANNON from 'cannon'
// @ts-ignore
// import Ammo from "./util/ammo"
import Stats from 'stats.js'
import ClickSound from "./sound/ClickSound";
import SixPicBox from "./object/SixPicBox";
import ObjModule from "./object/ObjModule";
import TextBox from "./object/TextBox";
import Ground from './object/Ground'
import CustomObj from './object/CustomObj'

const stats = new Stats();
document.body.appendChild(stats.dom)
const canvasEl = document.getElementById('app') as HTMLCanvasElement;

let delta = 0
// 创建 引擎
const engine = new BABYLON.Engine(canvasEl, true, {preserveDrawingBuffer: true, stencil: true}, true);
// 创建 场景
const scene = new BABYLON.Scene(engine);
{
    scene.ambientColor = new BABYLON.Color3(1, 1, 1); // 场景谈价环境光。可让材质的环境光有效果
    scene.enablePhysics(new BABYLON.Vector3(0, Constant.gravity, 0), new BABYLON.CannonJSPlugin(true, 1, CANNON));
    // scene.enablePhysics(new BABYLON.Vector3(0, gravity, 0), new BABYLON.AmmoJSPlugin(true, Ammo));
}
// 创建 相机
const camera = new BABYLON.ArcRotateCamera('ArcRotateCamera', 0.1 * Math.PI, 0.35 * Math.PI, 20, BABYLON.Vector3.Zero(), scene)
{
// 相机关联画布，为了让相机操作生效
    camera.attachControl(canvasEl, false);
    camera.lowerRadiusLimit = 2
}
// 创建光源
new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(3, 3, 3), scene);
CreateBaseLine()
ClickSound(canvasEl)
// SixPicBox()
// ObjModule()
Ground()

const customObjOptions = [
    {name: "textBox1", option: {materialOpt: {textureUrl: "/image/side1.png"}}, initPosition: [0, 12, 0]},
    {name: "textBox2", option: {materialOpt: {textureUrl: "/image/side2.png"}}, initPosition: [0, 12, 3]},
    {name: "textBox3", option: {materialOpt: {textureUrl: "/image/side3.png"}}, initPosition: [0, 12, 6]},
    {name: "textBox4", option: {materialOpt: {textureUrl: "/image/side4.png"}}, initPosition: [0, 8, 1]},
    {name: "textBox5", option: {materialOpt: {textureUrl: "/image/side5.png"}}, initPosition: [0, 8, 5]},
    {name: "textBox6", option: {materialOpt: {textureUrl: "/image/side6.png"}}, initPosition: [0, 4, 3]},
]
const customObjArr: CustomObj[] = []
customObjOptions.forEach(e => {
    const box = new CustomObj(scene, e.name, e.option)
    box.mesh.position = new BABYLON.Vector3(...e.initPosition)
    customObjArr.push(box)
})

// ------------------------物理弹力拖动------------------------
const followMouseObj = new FollowMouseObj(scene)
let currentFollowJoint: BABYLON.Nullable<BABYLON.PhysicsJoint>
let currentPickedMesh: BABYLON.Nullable<BABYLON.AbstractMesh>
// 鼠标事件监听
scene.onPointerObservable.add((pointerInfo) => {
    switch (pointerInfo.type) {
        case BABYLON.PointerEventTypes.POINTERDOWN:
            const pickInfo = scene.pick(
                scene.pointerX,
                scene.pointerY,
                (mesh) => customObjArr.some(e => e.mesh === mesh),
                true
            );
            currentPickedMesh = pickInfo?.pickedMesh || null
            if (currentPickedMesh) {
                scene.activeCamera?.detachControl();
                // 每次需要创建新的PhysicsJoint，否则使用addJoint使用此joint会一直保持首次关联的物体
                currentFollowJoint = new BABYLON.PhysicsJoint(
                    BABYLON.PhysicsJoint.SpringJoint,
                    {
                        length: 0,
                        stiffness: -Constant.gravity * 3,
                        damping: -Constant.gravity,
                        collision: false,
                        // mainAxis:new BABYLON.Vector3(0,-1,0),
                        // mainPivot: new BABYLON.Vector3(0, 1, 0), // 方块上的连接点位置
                        // connectedPivot:new BABYLON.Vector3(0,0,0), // 鼠标上的连接点位置
                    }
                )
                if (followMouseObj.mesh.physicsImpostor) {
                    currentPickedMesh.physicsImpostor?.addJoint(followMouseObj.mesh.physicsImpostor, currentFollowJoint)
                }
            }
            break;
        case BABYLON.PointerEventTypes.POINTERUP:
            scene.activeCamera?.attachControl();
            if (currentPickedMesh?.physicsImpostor && followMouseObj.mesh.physicsImpostor) {
                scene.getPhysicsEngine()?.removeJoint(currentPickedMesh.physicsImpostor, followMouseObj.mesh.physicsImpostor, currentFollowJoint)
            }
            break;
    }
})

// ------------------------固定静态位置切换------------------------
let isStaticLock = false
const staticLockPositionInfo: Array<[x: number, y: number, z: number]> = [
    [0, 7, 3], [0, 7, 5], [0, 7, 7], [0, 5, 4], [0, 5, 6], [0, 3, 5],
]
const staticLock = (enable: boolean) => {
    isStaticLock = enable
    if (enable) {
        customObjArr.forEach((e, index) => {
            e.lockObj({position: staticLockPositionInfo[index], rotation: [0, 0, 0]})
        })
    } else {
        customObjArr.forEach(e => {
            e.lockObj()
        })
    }
}
const addLockStaticPositionControl = () => {
    const inputEl = document.createElement('input')
    inputEl.type = 'button'
    inputEl.id = 'lockStaticPositionBtn'
    inputEl.style.display = 'block'
    inputEl.value = 'lockStaticPosition 静态钉住'
    inputEl.onclick = () => {
        staticLock(true)
    }
    document.getElementById('controls')?.append(inputEl)
}
addLockStaticPositionControl()

// ------------------------固定弹力位置------------------------
let isStickLock = false
let stickObjArr: { mainMesh: BABYLON.Mesh, pointMesh: BABYLON.Mesh, joint: BABYLON.PhysicsJoint }[] = []
const stickPosition = (enable: boolean) => {
    isStickLock = enable
    stickObjArr.forEach(stickObj => {
        if (stickObj.mainMesh.physicsImpostor && stickObj.pointMesh.physicsImpostor && stickObj.joint) {
            scene.getPhysicsEngine()?.removeJoint(stickObj.mainMesh.physicsImpostor, stickObj.pointMesh.physicsImpostor, stickObj.joint)
        }
        if (stickObj.pointMesh) {
            stickObj.pointMesh.dispose();
        }
    })
    stickObjArr = []
    if (!enable) {
        return
    }

    const stickPositionCenterArr = [
        new BABYLON.Vector3(0, 12, -3),
        new BABYLON.Vector3(0, 12, 3),
        new BABYLON.Vector3(0, 12, 9),
        new BABYLON.Vector3(0, 8, -1),
        new BABYLON.Vector3(0, 8, 7),
        new BABYLON.Vector3(0, 4, 3),
    ]
    stickPositionCenterArr.forEach((stickPositionCenter, stickPositionCenterIndex) => {
        const verticalMargin = 5
        const horizontalMargin = 5

        const meshStickPositionTop1 = stickPositionCenter.clone()
        meshStickPositionTop1.y += verticalMargin
        meshStickPositionTop1.z -= horizontalMargin
        const meshStickPositionTop2 = stickPositionCenter.clone()
        meshStickPositionTop2.y += verticalMargin
        meshStickPositionTop2.z += horizontalMargin
        const meshStickPositionBottom1 = stickPositionCenter.clone()
        meshStickPositionBottom1.y -= verticalMargin
        meshStickPositionBottom1.z -= horizontalMargin
        const meshStickPositionBottom2 = stickPositionCenter.clone()
        meshStickPositionBottom2.y -= verticalMargin
        meshStickPositionBottom2.z += horizontalMargin

        const stickPointArray = [meshStickPositionTop1, meshStickPositionTop2, meshStickPositionBottom1, meshStickPositionBottom2]
        const pivotDistance = 1
        const pivotArray = [
            new BABYLON.Vector3(0, pivotDistance, -pivotDistance),
            new BABYLON.Vector3(0, pivotDistance, pivotDistance),
            new BABYLON.Vector3(0, -pivotDistance, -pivotDistance),
            new BABYLON.Vector3(0, -pivotDistance, pivotDistance),
        ]
        stickPointArray.forEach((stickPoint, stickPointIndex) => {
            const physicsJoint = new BABYLON.PhysicsJoint(
                BABYLON.PhysicsJoint.SpringJoint,
                {
                    length: 1,
                    stiffness: 2,
                    damping: 5,
                    collision: false,
                    // mainAxis:new BABYLON.Vector3(0,-1,0),
                    mainPivot: pivotArray[stickPointIndex], // 方块上的连接点位置
                    // connectedPivot:new BABYLON.Vector3(0,0,0), // 鼠标上的连接点位置
                }
            )
            const stickMesh = BABYLON.MeshBuilder.CreateSphere('FollowMouseObj', {segments: 1}, scene)
            stickMesh.isVisible = false
            stickMesh.physicsImpostor = new BABYLON.PhysicsImpostor(stickMesh, BABYLON.PhysicsImpostor.NoImpostor, {mass: 0, restitution: 0}, scene)
            stickMesh.physicsImpostor.physicsBody.collisionFilterMask = 0
            stickMesh.position = stickPoint
            if (stickMesh.physicsImpostor) {
                customObjArr[stickPositionCenterIndex].mesh.physicsImpostor?.addJoint(stickMesh.physicsImpostor, physicsJoint)
            }
            stickObjArr.push({
                mainMesh: customObjArr[stickPositionCenterIndex].mesh,
                pointMesh: stickMesh,
                joint: physicsJoint
            })
        })
    })
}
let needApplyImpulse = false
scene.onPointerObservable.add((pointerInfo) => {
    if (isStickLock) {
        switch (pointerInfo.type) {
            case BABYLON.PointerEventTypes.POINTERDOWN:
                needApplyImpulse = true
                break
            case BABYLON.PointerEventTypes.POINTERMOVE:
                needApplyImpulse = false
                break
            case BABYLON.PointerEventTypes.POINTERUP:
                if (needApplyImpulse) {
                    const pickInfo = scene.pick(
                        scene.pointerX,
                        scene.pointerY,
                        (mesh) => customObjArr.some(e => e.mesh === mesh),
                        true
                    );
                    if (pickInfo?.pickedMesh&&pickInfo.ray && pickInfo?.pickedPoint && scene.activeCamera) {
                        pickInfo.pickedMesh.physicsImpostor?.applyImpulse( pickInfo.ray.origin.normalize().scale(-10) ,pickInfo.pickedPoint)
                    }
                }
                break
        }
    }
})


const addStickPositionControl = () => {
    const inputEl = document.createElement('input')
    inputEl.type = 'button'
    inputEl.id = 'stickPositionBtn'
    inputEl.style.display = 'block'
    inputEl.value = 'stickPositionBtn 物理弹性钉住'
    inputEl.onclick = () => {
        staticLock(false)
        stickPosition(true)
    }
    document.getElementById('controls')?.append(inputEl)
}
addStickPositionControl()


const addNormalPhysicsControl = () => {
    const inputEl = document.createElement('input')
    inputEl.type = 'button'
    inputEl.id = 'addNormalPhysicsControl'
    inputEl.style.display = 'block'
    inputEl.value = 'addNormalPhysicsControl 物理掉落'
    inputEl.onclick = () => {
        stickPosition(false)
        staticLock(false)
    }
    document.getElementById('controls')?.append(inputEl)
}
addNormalPhysicsControl()

// ------------------------------------------------------------------------
const beforeRender = () => {
    customObjArr.forEach(e => {
        if (e.mesh.position.x > 5) {
            e.mesh.position.x = 5
        }
        if (e.mesh.position.x < -5) {
            e.mesh.position.x = -5
        }
    })
}

let prePerformance = 0
// 循环渲染
engine.runRenderLoop(() => {
    if (prePerformance === 0) {
        prePerformance = performance.now()
    }
    const currentPerformance = performance.now()
    delta = currentPerformance - prePerformance
    prePerformance = currentPerformance
    stats.begin();
    beforeRender();
    scene.render();
    stats.end();
})

// 适应尺寸
window.addEventListener('resize', () => {
    engine.resize();
})

