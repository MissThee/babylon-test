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
    {name: "textBox1", option: {materialOpt: {textureUrl: "/image/side1.png"}}, initPosition: [0, 4, 0]},
    {name: "textBox2", option: {materialOpt: {textureUrl: "/image/side2.png"}}, initPosition: [0, 5, 3]},
    {name: "textBox3", option: {materialOpt: {textureUrl: "/image/side3.png"}}, initPosition: [0, 6, 6]},
    {name: "textBox4", option: {materialOpt: {textureUrl: "/image/side4.png"}}, initPosition: [0, 9, 5]},
    {name: "textBox5", option: {materialOpt: {textureUrl: "/image/side5.png"}}, initPosition: [0, 11, 2]},
    {name: "textBox6", option: {materialOpt: {textureUrl: "/image/side6.png"}}, initPosition: [0, 13, -1]},
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


let lockPosition = false
const lockPositionInfo: Array<[x: number, y: number, z: number]> = [
    [0, 7, 3], [0, 7, 5], [0, 7, 7], [0, 5, 4], [0, 5, 6], [0, 3, 5],
]

window.addEventListener('dblclick', () => {
    lockPosition = !lockPosition
    if (lockPosition) {
        customObjArr.forEach((e, index) => {
            e.lockObj({position: lockPositionInfo[index], rotation: [0, 0, 0]})
        })
    } else {
        customObjArr.forEach(e => {
            e.lockObj()
        })
    }
})

const beforeRender = () => {
    customObjArr.forEach(e => {
        e.mesh.position.x = 0
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

