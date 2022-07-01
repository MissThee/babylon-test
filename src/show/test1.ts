import * as BABYLON from 'babylonjs';
// import "babylonjs-loaders";

import CoordinateLine from "./util/CoordinateLine";
import SixPicBox from "./object/SixPicBox";
import ObjModule from "./object/ObjModule";

import FollowMouseObj from "./util/FollowMouseObj";
import * as Constant from './util/Constant'
import CANNON from 'cannon'
import Stats from 'stats.js'
import ClickSound from "./sound/ClickSound";
import SceneBoard from './object/SceneBoard'
import CustomObj from './object/CustomObj'
import Light1 from "./light/Light1";
import addBehaviors from "./util/addBehaviors";

const stats = new Stats();
document.body.appendChild(stats.dom)
const canvasEl = document.getElementById('app') as HTMLCanvasElement;

const canMoveCamera = false

let delta = 0
// 创建 引擎
const engine = new BABYLON.Engine(canvasEl, true, {preserveDrawingBuffer: true, stencil: true}, false);
// 创建 场景
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color4(247 / 255, 207 / 255, 212 / 255, 1)
scene.ambientColor = new BABYLON.Color3(1, 1, 1); // 场景环境光。可让材质的环境光有效果
scene.enablePhysics(new BABYLON.Vector3(0, Constant.gravity, 0), new BABYLON.CannonJSPlugin(true, 1, CANNON));
// 创建 相机
const camera = new BABYLON.ArcRotateCamera('ArcRotateCamera', 0, 0.5 * Math.PI, 30, new BABYLON.Vector3(0, 10, 0), scene)
camera.lowerRadiusLimit = 2
if (canMoveCamera) {
    camera.attachControl(canvasEl, false);
}
// 创建 光源
const light1 = new Light1(scene)
// new CoordinateLine()
// 点击 声音
new ClickSound(scene)
// SixPicBox(scene)
// ObjModule(scene)
new SceneBoard(scene)

const shadowGenerator = new BABYLON.ShadowGenerator(1024, light1.light);

const customObjOptions = [
    {name: "textBoxBlue1", option: {materialOpt: {textureUrl: "/image/sideBlue1.png"}}, initPosition: [0, 16, -12]},
    {name: "textBoxBlue2", option: {materialOpt: {textureUrl: "/image/sideBlue2.png"}}, initPosition: [0, 14, -9]},
    {name: "textBoxBlue3", option: {materialOpt: {textureUrl: "/image/sideBlue3.png"}}, initPosition: [0, 12, -6]},
    {name: "textBoxBlue4", option: {materialOpt: {textureUrl: "/image/sideBlue4.png"}}, initPosition: [0, 10, -3]},
    {name: "textBoxBlue5", option: {materialOpt: {textureUrl: "/image/sideBlue5.png"}}, initPosition: [0, 12, 0]},
    {name: "textBoxBlue6", option: {materialOpt: {textureUrl: "/image/sideBlue6.png"}}, initPosition: [0, 14, 3]},
    {name: "textBoxOrange1", option: {materialOpt: {textureUrl: "/image/sideOrange1.png"}}, initPosition: [0, 10, 6]},
    {name: "textBoxOrange2", option: {materialOpt: {textureUrl: "/image/sideOrange2.png"}}, initPosition: [0, 13, 6]},
    {name: "textBoxOrange3", option: {materialOpt: {textureUrl: "/image/sideOrange3.png"}}, initPosition: [0, 16, 6]},
    {name: "textBoxOrange4", option: {materialOpt: {textureUrl: "/image/sideOrange4.png"}}, initPosition: [0, 19, 9]},
    {name: "textBoxOrange5", option: {materialOpt: {textureUrl: "/image/sideOrange5.png"}}, initPosition: [0, 16, 9]},
    {name: "textBoxOrange6", option: {materialOpt: {textureUrl: "/image/sideOrange6.png"}}, initPosition: [0, 13, 9]},
]
const customObjArr: CustomObj[] = []
setTimeout(() => {
    customObjOptions.forEach((e, index) => {
        setTimeout(() => {
            const box = new CustomObj(scene, e.name, e.option)
            box.mesh.position = new BABYLON.Vector3(...e.initPosition)
            customObjArr.push(box)
            shadowGenerator.addShadowCaster(box.mesh);
        }, index * 80)
    })
}, 500)

// 可交互对象，添加交互动作
addBehaviors(scene, customObjArr)
// ------------------------------------------------------------------------
const limitMeshPosition = (mesh: BABYLON.Mesh) => {
    if (mesh.position.x > 5) {
        mesh.position.x = 5
    }
    if (mesh.position.x < -9) {
        mesh.position.x = -9
    }
    if (mesh.position.z < -19) {
        mesh.position.z = -19
    }
    if (mesh.position.z > 19) {
        mesh.position.z = 19
    }
    if (mesh.position.y > 19) {
        mesh.position.y = 19
    }
    if (mesh.position.y < 1) {
        mesh.position.y = 1
    }
}

const reduceRotateSpeed = (meshArr: BABYLON.Mesh[]) => {
    for (let mesh of meshArr) {
        const angularVelocity = mesh.physicsImpostor?.getAngularVelocity()
        if (angularVelocity && !angularVelocity?.equals(BABYLON.Vector3.Zero())) {
            mesh.physicsImpostor?.setAngularVelocity(angularVelocity.scale(0.9))
        }
    }
}

// 循环渲染
engine.runRenderLoop(() => {
    stats.begin();
    {
        customObjArr.forEach(e => limitMeshPosition(e.mesh))
        limitMeshPosition(FollowMouseObj.getInstance(scene).mesh)
        reduceRotateSpeed(customObjArr.slice(0, 6).map(e => e.mesh))
    }
    scene.render();
    stats.end();
})

// 适应尺寸
window.addEventListener('resize', () => {
    engine.resize();
})

