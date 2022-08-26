import type CustomObj from './object/CustomObj'
import * as Constant from './util/Constant'
import * as AssetsImage from '../../src/assets/image'
import * as BABYLON from '@babylonjs/core';
import PhysicsStableHelper from "./util/PhysicsStableHelper";
import BehaviorBundle from "./util/BehaviorBundle"
// import SixPicBox from "./object/SixPicBox";

// 方块配置
const customObjOptions = [
    {name: "textBoxBlue1", option: {materialOpt: {textureUrl: AssetsImage.sideBlue1}}, initPosition: [0, 16, -12]},
    {name: "textBoxBlue2", option: {materialOpt: {textureUrl: AssetsImage.sideBlue2}}, initPosition: [0, 14, -9]},
    {name: "textBoxBlue3", option: {materialOpt: {textureUrl: AssetsImage.sideBlue3}}, initPosition: [0, 12, -6]},
    {name: "textBoxBlue4", option: {materialOpt: {textureUrl: AssetsImage.sideBlue4}}, initPosition: [0, 10, -3]},
    {name: "textBoxBlue5", option: {materialOpt: {textureUrl: AssetsImage.sideBlue5}}, initPosition: [0, 12, 0]},
    {name: "textBoxBlue6", option: {materialOpt: {textureUrl: AssetsImage.sideBlue6}}, initPosition: [0, 14, 3]},
    {name: "textBoxOrange1", option: {materialOpt: {textureUrl: AssetsImage.sideOrange1}}, initPosition: [0, 10, 6]},
    {name: "textBoxOrange2", option: {materialOpt: {textureUrl: AssetsImage.sideOrange2}}, initPosition: [0, 13, 6]},
    {name: "textBoxOrange3", option: {materialOpt: {textureUrl: AssetsImage.sideOrange3}}, initPosition: [0, 16, 6]},
    {name: "textBoxOrange4", option: {materialOpt: {textureUrl: AssetsImage.sideOrange4}}, initPosition: [0, 19, 9]},
    {name: "textBoxOrange5", option: {materialOpt: {textureUrl: AssetsImage.sideOrange5}}, initPosition: [0, 16, 9]},
    {name: "textBoxOrange6", option: {materialOpt: {textureUrl: AssetsImage.sideOrange6}}, initPosition: [0, 13, 9]},
]

export default async () => {
    const canvasEl = document.createElement('canvas');
    canvasEl.style.userSelect = 'none'
    canvasEl.style.width = '100%'
    canvasEl.style.height = '100%'
    canvasEl.style.display = 'block'
    canvasEl.style.position = 'relative'
    canvasEl.style.overflow = 'hidden'
    document.getElementById('app')?.appendChild(canvasEl)
    // 创建 引擎
    await import ('@babylonjs/core/Audio/audioSceneComponent')// 引入声音插件
    const engine = new BABYLON.Engine(canvasEl, true, {preserveDrawingBuffer: true, stencil: true}, false);
    // 创建 场景
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(...Constant.sceneColor, 1)
    scene.ambientColor = new BABYLON.Color3(1, 1, 1); // 场景环境光。可让ambientTexture材质的颜色有效果，越大颜色越鲜艳

    // 添加 物理引擎
    const cannon = await import('cannon')
    await import('@babylonjs/core/Physics/physicsEngineComponent')
    scene.enablePhysics(new BABYLON.Vector3(0, Constant.gravity, 0), new BABYLON.CannonJSPlugin(true, 1, cannon));

    const sceneSize = {
        height: Constant.cameraDistance * Math.tan(Constant.cameraFov),
        width: Constant.cameraDistance * Math.tan(Constant.cameraFov) * (scene.getEngine().getRenderWidth() / scene.getEngine().getRenderHeight()),
        deep: Constant.sceneDeep,
    }

    // 创建 相机
    const camera = new BABYLON.ArcRotateCamera(
        'ArcRotateCamera',
        0,
        0.5 * Math.PI,
        Constant.sceneDeep / 2 + Constant.cameraDistanceFix + Constant.cameraDistance,
        new BABYLON.Vector3(
            0,
            sceneSize.height / 2,
            0
        ),
        scene
    )
    camera.fov = Constant.cameraFov
    camera.lowerRadiusLimit = 2
    if (Constant.canMoveCamera) {
        camera.attachControl(scene.getEngine().getRenderingCanvas(), false)
    }

    // 创建 光源
    const Light1 = (await import("./light/Light1")).default
    const light1 = new Light1(scene)
    // const Light2 = (await import("./light/Light2")).default
    // const light2 = new Light2(scene)

    // 创建 点击声音
    import("./sound/ClickSound").then(value => {
        new value.default(scene)
    })

    const CoordinateLine = (await import("./util/CoordinateLine")).default
    new CoordinateLine(scene)

    // SixPicBox(scene)
    const ObjModule = (await import("./object/ObjModule")).default
    new ObjModule(scene)


    const SceneBoard = (await import ('./object/SceneBoard')).default
    new SceneBoard(scene, {h: sceneSize.height, v: sceneSize.width, d: sceneSize.deep})

    // 创建 影子生成器
    await import ('@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent')
    const shadowGenerator = new BABYLON.ShadowGenerator(1024, light1.light);
    const CustomObj = (await import( './object/CustomObj')).default

    // 创建 方块
    const customObjArr: CustomObj[] = []
    customObjOptions.forEach((e) => {
        const box = new CustomObj(scene, e.name, e.option)
        box.mesh.position = new BABYLON.Vector3(...e.initPosition)
        customObjArr.push(box)
        shadowGenerator.addShadowCaster(box.mesh);
    })

    const behaviorBundle = new BehaviorBundle(scene, customObjArr)
    behaviorBundle.addLockStaticPositionControl()
    behaviorBundle.addNormalPhysicsControl()
    behaviorBundle.addStickPositionControl()
    scene.whenReadyAsync(false).then(() => {
        customObjArr.forEach((e, index) => {
            setTimeout(() => {
                behaviorBundle.animateShow(e.mesh).then(() => {
                    if (index === customObjArr.length - 1) {
                        customObjArr.forEach(e => {
                            e.usePhysicsImpostor()
                        })
                        setTimeout(() => {
                            // 创建 可交互对象，添加交互动作。粒子点击交互动作
                            behaviorBundle.addPointerBehavior()
                        }, 2000)
                    }
                })
            }, index * 100)
        })
    })

    // 性能监测
    let stats: Stats;
    import('stats.js').then(value => {
        stats = new value.default()
        document.body.appendChild(stats.dom)
    })
    const FollowMouseObj = (await import( "./util/FollowMouseObj")).default;

    // 循环渲染
    engine.runRenderLoop(() => {
        stats?.begin();
        PhysicsStableHelper.limitMeshPosition([...customObjArr.map(e => e.mesh), FollowMouseObj.getInstance(scene).mesh], sceneSize)
        PhysicsStableHelper.limitRotateVelocity(customObjArr.map(e => e.mesh))
        PhysicsStableHelper.limitLinearVelocity(customObjArr.map(e => e.mesh))
        PhysicsStableHelper.reduceRotateVelocity(customObjArr.slice(0, 6).map(e => e.mesh))
        scene.render();
        stats?.end();
    })
    // 适应尺寸
    window.addEventListener('resize', () => {
        engine.resize();
    })
}
