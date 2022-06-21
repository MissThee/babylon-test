import * as BABYLON from 'babylonjs';
import "babylonjs-loaders";
import CreateBaseLine from "./util/CreateBaseLine";
import CANNON from 'cannon'
import Stats from 'stats.js'
import ClickSound from "./sound/ClickSound";
import SixPicBox from "./object/SixPicBox";
import ObjModule from "./object/ObjModule";
import TextBox from "./object/TextBox";
import Ground from './object/Ground'
import FollowMouseCube from "./object/FollowMouseCube";
import CustomObj from './object/CustomObj'

window.CANNON = CANNON

const stats = new Stats();
document.body.appendChild(stats.dom)

const canvasEl = document.getElementById('app') as HTMLCanvasElement;

let delta = 0
const gravity = -9.81
// 创建 引擎
const engine = new BABYLON.Engine(canvasEl, true, {preserveDrawingBuffer: true, stencil: true}, true);
// 创建 场景
const scene = new BABYLON.Scene(engine);
{
    scene.ambientColor = new BABYLON.Color3(1, 1, 1); // 场景谈价环境光。可让材质的环境光有效果
    scene.enablePhysics(new BABYLON.Vector3(0, gravity * 16, 0), new BABYLON.CannonJSPlugin());
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
new FollowMouseCube(scene)

const textBox1 = new CustomObj(scene, 'textBox1', {materialOpt: {textureUrl: "/image/side1.png"}})
const textBox2 = new CustomObj(scene, 'textBox2', {materialOpt: {textureUrl: "/image/side2.png"}})
const textBox3 = new CustomObj(scene, 'textBox3', {materialOpt: {textureUrl: "/image/side3.png"}})
const textBox4 = new CustomObj(scene, 'textBox4', {materialOpt: {textureUrl: "/image/side4.png"}})
const textBox5 = new CustomObj(scene, 'textBox5', {materialOpt: {textureUrl: "/image/side5.png"}})
const textBox6 = new CustomObj(scene, 'textBox6', {materialOpt: {textureUrl: "/image/side6.png"}})

textBox1.mesh.position = new BABYLON.Vector3(0, 4, 0);
textBox2.mesh.position = new BABYLON.Vector3(0, 5, 3);
textBox3.mesh.position = new BABYLON.Vector3(0, 6, 6);
textBox4.mesh.position = new BABYLON.Vector3(0, 9, 5);
textBox5.mesh.position = new BABYLON.Vector3(0, 11, 2);
textBox6.mesh.position = new BABYLON.Vector3(0, 13, -1);

// const staticSphere = BABYLON.MeshBuilder.CreateLines('staticSphere', {points: [new BABYLON.Vector3(0, 5, -2),new BABYLON.Vector3(0, 5, 2)]}, scene)
// staticSphere.physicsImpostor = new BABYLON.PhysicsImpostor(staticSphere, BABYLON.PhysicsImpostor.RopeImpostor, {
//     mass: 0, // 质量，0时静止不动
//     restitution: 0, // 碰撞弹力
//     friction: 0 // 接触摩擦力
// }, scene)


let lockPosition = false
window.addEventListener('dblclick', () => {
    setInterval(() => {

    }, 1000)
    lockPosition = !lockPosition
    if (lockPosition) {
        textBox1.lockObj({position: [0, 7, 3], rotation: [0, 0, 0]})
        textBox2.lockObj({position: [0, 7, 5], rotation: [0, 0, 0]})
        textBox3.lockObj({position: [0, 7, 7], rotation: [0, 0, 0]})
        textBox4.lockObj({position: [0, 5, 4], rotation: [0, 0, 0]})
        textBox5.lockObj({position: [0, 5, 6], rotation: [0, 0, 0]})
        textBox6.lockObj({position: [0, 3, 5], rotation: [0, 0, 0]})
    } else {
        textBox1.lockObj()
        textBox2.lockObj()
        textBox3.lockObj()
        textBox4.lockObj()
        textBox5.lockObj()
        textBox6.lockObj()
    }
})

const beforeRender = () => {
    textBox1.mesh.position.x = 0
    textBox2.mesh.position.x = 0
    textBox3.mesh.position.x = 0
    textBox4.mesh.position.x = 0
    textBox5.mesh.position.x = 0
    textBox6.mesh.position.x = 0
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

