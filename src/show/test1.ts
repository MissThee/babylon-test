import * as Constant from './util/Constant'
import * as AssetsImage from '../../src/assets/image'
import * as BABYLON from '@babylonjs/core';
import PhysicsStableHelper from "./util/PhysicsStableHelper";
import StickHelper, {StickObject} from "./util/Interaction/StickHelper"
import * as AnimationUtil from "./util/Interaction/AnimationUtil";
import DragHelper from "./util/Interaction/DragHelper";
import './util/RefreshAfterResize'

const timeout = (sleepTime: number) => new Promise((resolve) => setTimeout(resolve, sleepTime))

export default async () => {
    // 创建 画布
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
    scene.ambientColor =  BABYLON.Color3.White(); // 场景环境光。可让ambientTexture材质的颜色有效果，越大颜色越鲜艳
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
        new BABYLON.Vector3(0, sceneSize.height / 2, 0),
        scene
    )
    camera.fov = Constant.cameraFov
    camera.lowerRadiusLimit = 2
    Constant.canMoveCamera && camera.attachControl(scene.getEngine().getRenderingCanvas(), false)

    // 创建 光源
    const GroundShadowLight = (await import("./light/GroundShadowLight")).default
    const groundShadowLight = new GroundShadowLight(scene)
    // 创建 光源
    const FrontLight = (await import("./light/FrontLight")).default
    const frontLight = new FrontLight(scene)

    // 创建 影子生成器
    await import ('@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent')
    const shadowGenerator = new BABYLON.ShadowGenerator(1024, groundShadowLight);
    shadowGenerator.usePercentageCloserFiltering = true

    // 创建 点击声音
    const ClickSound = (await import("./sound/ClickSound")).default
    new ClickSound(scene)

    //------------------------------------------------------------------------------------------------------------

    // 创建 基础参考坐标
    // const CoordinateLine = (await import("./util/CoordinateLine")).default
    // new CoordinateLine(scene)

    // 创建 鼠标映射位置物体
    const FollowMouseObj = (await import( "./util/FollowMouseObj")).default;
    const followMouseObj = FollowMouseObj.getInstance(scene).mesh
    // 创建 场景板
    const SceneBoard = (await import ('./object/SceneBoard')).default
    const sceneBoard = new SceneBoard(scene, {h: sceneSize.height, v: sceneSize.width, d: sceneSize.deep})
    sceneBoard.groundBoard.lightSources.forEach(e => {
        e !== groundShadowLight  && sceneBoard.groundBoard._removeLightSource(e, false) // 下部场景版仅受light1影响
    })
    // groundShadowLight.includedOnlyMeshes=[sceneBoard.groundBoard]

    const interactiveObjs: (StickObject & { subPhysicMeshes?: BABYLON.Mesh[] })[] = [] // 交互对象
    const scalingTmpArr: BABYLON.Vector3[] = [] // 交互对象初始缩放值

    // 创建 组合字母
    {
        const LetterObj = (await import('./object/LetterObj')).default
        const letterObj = new LetterObj("A", scene)
        letterObj.springStickPosition = new BABYLON.Vector3(-3, 14, -25)
        letterObj.staticStickPosition = new BABYLON.Vector3(3, 6, 9)
        letterObj.mesh.scaling = BABYLON.Vector3.One().scale(0.7)
        letterObj.mesh.position = new BABYLON.Vector3(-5, 8, -16)
        interactiveObjs.push(letterObj)
        scalingTmpArr.push(letterObj.mesh.scaling.clone())
        letterObj.mesh.scaling = BABYLON.Vector3.Zero()
    }
    {
        const LetterObj = (await import('./object/LetterObj')).default
        const letterObj = new LetterObj("B", scene)
        letterObj.springStickPosition = new BABYLON.Vector3(-3, 10, -17)
        letterObj.staticStickPosition = new BABYLON.Vector3(3, 6, 17)
        letterObj.mesh.scaling = BABYLON.Vector3.One().scale(0.7)
        letterObj.mesh.position = new BABYLON.Vector3(-5, 12, -6)
        interactiveObjs.push(letterObj)
        scalingTmpArr.push(letterObj.mesh.scaling.clone())
        letterObj.mesh.scaling = BABYLON.Vector3.Zero()
    }
    {
        const LetterObj = (await import('./object/LetterObj')).default
        const letterObj = new LetterObj("C", scene)
        letterObj.springStickPosition = new BABYLON.Vector3(-3, 6, -9)
        letterObj.staticStickPosition = new BABYLON.Vector3(3, 6, 25)
        letterObj.mesh.scaling = BABYLON.Vector3.One().scale(0.7)
        letterObj.mesh.position = new BABYLON.Vector3(-5, 16, 3)
        interactiveObjs.push(letterObj)
        scalingTmpArr.push(letterObj.mesh.scaling.clone())
        letterObj.mesh.scaling = BABYLON.Vector3.Zero()
    }
    // 创建 方块
    const customObjOptions = [
        {name: "textBoxBlue1", option: {materialOpt: {textureUrl: AssetsImage.sideBlue1}}, initPosition: [0, 15, -12], staticStickPosition: [0, 11, -3], springStickPosition: [0, 12, -4]},
        {name: "textBoxBlue2", option: {materialOpt: {textureUrl: AssetsImage.sideBlue2}}, initPosition: [0, 13, -9], staticStickPosition: [0, 11, -1], springStickPosition: [0, 16, 0]},
        {name: "textBoxBlue3", option: {materialOpt: {textureUrl: AssetsImage.sideBlue3}}, initPosition: [0, 11, -6], staticStickPosition: [0, 9, 1], springStickPosition: [0, 12, 4]},
        {name: "textBoxBlue4", option: {materialOpt: {textureUrl: AssetsImage.sideBlue4}}, initPosition: [0, 9, -3], staticStickPosition: [0, 9, -1], springStickPosition: [0, 8, -4]},
        {name: "textBoxBlue5", option: {materialOpt: {textureUrl: AssetsImage.sideBlue5}}, initPosition: [0, 11, 0], staticStickPosition: [0, 7, 1], springStickPosition: [0, 8, 4]},
        {name: "textBoxBlue6", option: {materialOpt: {textureUrl: AssetsImage.sideBlue6}}, initPosition: [0, 13, 3], staticStickPosition: [0, 7, 3], springStickPosition: [0, 4, 0]},
        {name: "textBoxOrange1", option: {materialOpt: {textureUrl: AssetsImage.sideOrange1}}, initPosition: [0, 10, 6], staticStickPosition: [0, 11, -5]},
        {name: "textBoxOrange2", option: {materialOpt: {textureUrl: AssetsImage.sideOrange2}}, initPosition: [0, 13, 6], staticStickPosition: [0, 9, -5]},
        {name: "textBoxOrange3", option: {materialOpt: {textureUrl: AssetsImage.sideOrange3}}, initPosition: [0, 16, 6], staticStickPosition: [0, 7, -5]},
        {name: "textBoxOrange4", option: {materialOpt: {textureUrl: AssetsImage.sideOrange4}}, initPosition: [0, 19, 9], staticStickPosition: [0, 11, 5]},
        {name: "textBoxOrange5", option: {materialOpt: {textureUrl: AssetsImage.sideOrange5}}, initPosition: [0, 16, 9], staticStickPosition: [0, 9, 5]},
        {name: "textBoxOrange6", option: {materialOpt: {textureUrl: AssetsImage.sideOrange6}}, initPosition: [0, 13, 9], staticStickPosition: [0, 7, 5]},
    ]
    const CustomObj = (await import( './object/CustomObj')).default
    interactiveObjs.push(...customObjOptions.map((e) => {
        const box = new CustomObj(e.name, e.option, scene)
        e.staticStickPosition && (box.staticStickPosition = new BABYLON.Vector3(...e.staticStickPosition));
        e.springStickPosition && (box.springStickPosition = new BABYLON.Vector3(...e.springStickPosition));
        e.initPosition && (box.mesh.position = new BABYLON.Vector3(...e.initPosition))
        scalingTmpArr.push(box.mesh.scaling.clone())
        box.mesh.scaling = BABYLON.Vector3.Zero()
        return box
    }))

    // 创建 包裹模型物体
    const ModuleObj = (await import("./object/ModuleObj")).default
    const moduleObj = new ModuleObj(scene)
    moduleObj.staticStickPosition = new BABYLON.Vector3(0, 15, 0)
    interactiveObjs.push(moduleObj)
    const moduleObjPromise = moduleObj.modulePromise.then(() => {
        moduleObj.mesh.position = new BABYLON.Vector3(0, 5, 5)
        scalingTmpArr.push(moduleObj.mesh.scaling.clone())
        moduleObj.mesh.scaling = BABYLON.Vector3.Zero()
    })

    // 创建 细节碰撞模型物体
    const ModuleDiscObj = (await import("./object/ModuleDiscObj")).default
    const moduleDiscObj = new ModuleDiscObj('A', scene)
    moduleDiscObj.staticStickPosition = new BABYLON.Vector3(0, 15, -10)
    moduleDiscObj.springStickPosition = new BABYLON.Vector3(8, 10, 10)
    interactiveObjs.push(moduleDiscObj)
    const moduleDiscObjPromise = moduleDiscObj.modulePromise.then(() => {
        moduleDiscObj.mesh.position = new BABYLON.Vector3(0, 16, -5)
        scalingTmpArr.push(moduleDiscObj.mesh.scaling.clone())
        moduleDiscObj.mesh.scaling = BABYLON.Vector3.Zero()
    })

    let isEnableObjectPositionLimit = false
    // 初始化内容
    scene
        .whenReadyAsync(false)
        .then(async () => {
            await moduleObjPromise
            await moduleDiscObjPromise
            interactiveObjs.forEach(e => {
                shadowGenerator.addShadowCaster(e.mesh); // 生成影子。自动作用于children
            })
            const lastIndex = interactiveObjs.length - 1
            for (let index = 0; index < lastIndex; index++) {
                const interactiveObj = interactiveObjs[index]
                await timeout(100)
                AnimationUtil.animationZoomShow(interactiveObj.mesh, scalingTmpArr[index])
            }
            await timeout(100)
            await AnimationUtil.animationZoomShow(interactiveObjs[lastIndex].mesh, scalingTmpArr[lastIndex])
            scalingTmpArr.length = 0
        })
        .then(() => {
            isEnableObjectPositionLimit = true
            interactiveObjs.forEach(e => e.usePhysicsImpostor())
            // 增加 鼠标物体交互、粒子效果
            new DragHelper(scene, interactiveObjs.flatMap(e => [e.mesh, ...(e.subPhysicMeshes || [])]), true)
            // 增加 钉住物体交互
            const stickHelper = new StickHelper(scene, interactiveObjs)
            stickHelper.addTestButton()
        })

    // 性能监测
    let stats: Stats;
    import('stats.js').then(value => {
        stats = new value.default()
        document.body.appendChild(stats.dom)
    })

    // 临时设置是否需要减少速度
    let isNeedReduceVelocity = false
    window.addEventListener('stateSpringStick', () => {
        isNeedReduceVelocity = true
    })
    window.addEventListener('statePhysic', () => {
        isNeedReduceVelocity = false
    })
    window.addEventListener('statePhysic', () => {
        isNeedReduceVelocity = false
    })
    // 循环渲染
    engine.runRenderLoop(() => {
        stats?.begin();
        if (isEnableObjectPositionLimit) {
            PhysicsStableHelper.limitMeshPosition(followMouseObj, sceneSize)
            PhysicsStableHelper.limitRotateVelocity(interactiveObjs.map(e => e.mesh))
            PhysicsStableHelper.limitLinearVelocity(interactiveObjs.map(e => e.mesh))
            if (isNeedReduceVelocity) {
                PhysicsStableHelper.reduceRotateVelocity(interactiveObjs.filter(e => !(e.mesh.name.startsWith('textBoxOrange') || e.mesh.name.startsWith('moduleObj'))).map(e => e.mesh))
                PhysicsStableHelper.reduceLinearVelocity(interactiveObjs.filter(e => !(e.mesh.name.startsWith('textBoxOrange') || e.mesh.name.startsWith('moduleObj'))).map(e => e.mesh))
            }
        }
        scene.render();
        stats?.end();
    })

    // 适应尺寸
    window.addEventListener('resize', () => {
        engine.resize();
    })

}
