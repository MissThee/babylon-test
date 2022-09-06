import * as Constant from './util/Constant'
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
    // scene.clearColor = new BABYLON.Color4(0,0,0,0) // 透明画布
    // scene.autoClear = false // 不自动清除画布，只要局部没有新的绘制内容一直保留留内容
    scene.ambientColor = BABYLON.Color3.White(); // 场景环境光。可让ambientTexture材质的颜色有效果，越大颜色越鲜艳
    // let am = 1
    // setInterval(() => {
    //     am -= 0.01
    //     scene.ambientColor = BABYLON.Color3.White().scale(am)
    //     am <= 0 && (am = 1)
    // }, 20)
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
    const followMouseMesh = FollowMouseObj.getInstance(scene).mesh
    // 创建 场景板
    const SceneBoard = (await import ('./object/SceneBoard')).default
    const sceneBoard = new SceneBoard(scene, {h: sceneSize.height, v: sceneSize.width, d: sceneSize.deep})
    sceneBoard.groundBoard.lightSources.forEach(e => {
        e !== groundShadowLight && sceneBoard.groundBoard._removeLightSource(e, false) // 下部场景版仅受light1影响
    })
    // groundShadowLight.includedOnlyMeshes=[sceneBoard.groundBoard]

    const interactiveObjs: (StickObject & { subPhysicMeshes?: BABYLON.Mesh[] })[] = [] // 交互对象
    const scalingTmpArr: BABYLON.Vector3[] = [] // 交互对象初始缩放值

    // 创建 组合字母
    {
        const LetterObj = (await import('./object/LetterObj')).default
        const letterObj = new LetterObj("D", scene)
        letterObj.springStickPosition = new BABYLON.Vector3(1, 11, -12)
        letterObj.staticStickPosition = new BABYLON.Vector3(-8, 14, -4)
        letterObj.mesh.scaling = BABYLON.Vector3.One().scale(0.7)
        letterObj.mesh.position = new BABYLON.Vector3(-5, 16, -16)
        interactiveObjs.push(letterObj)
        scalingTmpArr.push(letterObj.mesh.scaling.clone())
        letterObj.mesh.scaling = BABYLON.Vector3.Zero()
    }
    {
        const LetterObj = (await import('./object/LetterObj')).default
        const letterObj = new LetterObj("E", scene)
        letterObj.springStickPosition = new BABYLON.Vector3(-1, 9, -4)
        letterObj.staticStickPosition = new BABYLON.Vector3(-8, 14, 4)
        letterObj.mesh.scaling = BABYLON.Vector3.One().scale(0.7)
        letterObj.mesh.position = new BABYLON.Vector3(-5, 16, -6)
        interactiveObjs.push(letterObj)
        scalingTmpArr.push(letterObj.mesh.scaling.clone())
        letterObj.mesh.scaling = BABYLON.Vector3.Zero()
    }
    {
        const LetterObj = (await import('./object/LetterObj')).default
        const letterObj = new LetterObj("M", scene)
        letterObj.springStickPosition = new BABYLON.Vector3(1, 11, 4)
        letterObj.staticStickPosition = new BABYLON.Vector3(-8, 6, -4)
        letterObj.mesh.scaling = BABYLON.Vector3.One().scale(0.7)
        letterObj.mesh.position = new BABYLON.Vector3(-5, 16, 3)
        interactiveObjs.push(letterObj)
        scalingTmpArr.push(letterObj.mesh.scaling.clone())
        letterObj.mesh.scaling = BABYLON.Vector3.Zero()
    }
    {
        const LetterObj = (await import('./object/LetterObj')).default
        const letterObj = new LetterObj("O", scene)
        letterObj.springStickPosition = new BABYLON.Vector3(-1, 9, 13)
        letterObj.staticStickPosition = new BABYLON.Vector3(-8, 6, 4)
        letterObj.mesh.scaling = BABYLON.Vector3.One().scale(0.7)
        letterObj.mesh.position = new BABYLON.Vector3(-5, 16, 12)
        interactiveObjs.push(letterObj)
        scalingTmpArr.push(letterObj.mesh.scaling.clone())
        letterObj.mesh.scaling = BABYLON.Vector3.Zero()
    }

    // 创建 方块
    const customObjOptions: { initPosition: BABYLON.Vector3, staticStickPosition: BABYLON.Vector3, springStickPosition?: BABYLON.Vector3 }[] = [
        {initPosition: new BABYLON.Vector3(0, 11, -15), staticStickPosition: new BABYLON.Vector3(-4, 11, -3)},
        {initPosition: new BABYLON.Vector3(0, 9, -12), staticStickPosition: new BABYLON.Vector3(-4, 11, -1)},
        {initPosition: new BABYLON.Vector3(0, 7, -9), staticStickPosition: new BABYLON.Vector3(-4, 11, 1)},
        {initPosition: new BABYLON.Vector3(0, 5, -6), staticStickPosition: new BABYLON.Vector3(-4, 11, 3)},
        {initPosition: new BABYLON.Vector3(0, 3, -3), staticStickPosition: new BABYLON.Vector3(-4, 9, 3)},
        {initPosition: new BABYLON.Vector3(0, 1, 0), staticStickPosition: new BABYLON.Vector3(-4, 9, 1)},

        {initPosition: new BABYLON.Vector3(0, 11, -10), staticStickPosition: new BABYLON.Vector3(-4, 9, -1)},
        {initPosition: new BABYLON.Vector3(0, 9, -7), staticStickPosition: new BABYLON.Vector3(-4, 9, -3)},
        {initPosition: new BABYLON.Vector3(0, 7, -4), staticStickPosition: new BABYLON.Vector3(-4, 7, -3)},
        {initPosition: new BABYLON.Vector3(0, 5, -1), staticStickPosition: new BABYLON.Vector3(-4, 7, -1)},
        {initPosition: new BABYLON.Vector3(0, 3, 2), staticStickPosition: new BABYLON.Vector3(-4, 7, 1)},
        {initPosition: new BABYLON.Vector3(0, 1, 5), staticStickPosition: new BABYLON.Vector3(-4, 7, 3)},

        {initPosition: new BABYLON.Vector3(0, 11, -5), staticStickPosition: new BABYLON.Vector3(-4, 11, -3)},
        {initPosition: new BABYLON.Vector3(0, 9, -2), staticStickPosition: new BABYLON.Vector3(-4, 11, -1)},
        {initPosition: new BABYLON.Vector3(0, 7, 1), staticStickPosition: new BABYLON.Vector3(-4, 11, 1)},
        {initPosition: new BABYLON.Vector3(0, 5, 4), staticStickPosition: new BABYLON.Vector3(-4, 11, 3)},
        {initPosition: new BABYLON.Vector3(0, 3, 7), staticStickPosition: new BABYLON.Vector3(-4, 9, 3)},
        {initPosition: new BABYLON.Vector3(0, 1, 10), staticStickPosition: new BABYLON.Vector3(-4, 9, 1)},

        {initPosition: new BABYLON.Vector3(0, 11, 0), staticStickPosition: new BABYLON.Vector3(-4, 9, -1)},
        {initPosition: new BABYLON.Vector3(0, 9, 3), staticStickPosition: new BABYLON.Vector3(-4, 9, -3)},
        {initPosition: new BABYLON.Vector3(0, 7, 6), staticStickPosition: new BABYLON.Vector3(-4, 7, -3)},
        {initPosition: new BABYLON.Vector3(0, 5, 9), staticStickPosition: new BABYLON.Vector3(-4, 7, -1)},
        {initPosition: new BABYLON.Vector3(0, 3, 12), staticStickPosition: new BABYLON.Vector3(-4, 7, 1)},
        {initPosition: new BABYLON.Vector3(0, 1, 15), staticStickPosition: new BABYLON.Vector3(-4, 7, 3)},
    ]

    const CustomObj = (await import( './object/CustomObj')).default
    interactiveObjs.push(...customObjOptions.map((e) => {
        const box = new CustomObj(scene)
        e.staticStickPosition && (box.staticStickPosition = e.staticStickPosition);
        e.springStickPosition && (box.springStickPosition = e.springStickPosition);
        e.initPosition && (box.mesh.position = e.initPosition)
        scalingTmpArr.push(box.mesh.scaling.clone())
        box.mesh.scaling = BABYLON.Vector3.Zero()
        return box
    }))

    // 创建 包裹模型物体
    const ModuleObj = (await import("./object/ModuleObj")).default
    const moduleObj = new ModuleObj(scene)
    moduleObj.staticStickPosition = new BABYLON.Vector3(0, 5, 10)
    interactiveObjs.push(moduleObj)
    const moduleObjPromise = moduleObj.modulePromise.then(() => {
        moduleObj.mesh.position = new BABYLON.Vector3(0, 4, 18)
        scalingTmpArr.push(moduleObj.mesh.scaling.clone())
        moduleObj.mesh.scaling = BABYLON.Vector3.Zero()
    })

    // 创建 细节碰撞模型物体
    const ModuleDiscObj = (await import("./object/ModuleDiscObj")).default
    const moduleDiscObj = new ModuleDiscObj('A', scene)
    moduleDiscObj.staticStickPosition = new BABYLON.Vector3(0, 13, 10)
    moduleDiscObj.springStickPosition = new BABYLON.Vector3(7, 10, 18)
    interactiveObjs.push(moduleDiscObj)
    const moduleDiscObjPromise = moduleDiscObj.modulePromise.then(() => {
        moduleDiscObj.mesh.position = new BABYLON.Vector3(0, 10, 18)
        scalingTmpArr.push(moduleDiscObj.mesh.scaling.clone())
        moduleDiscObj.mesh.scaling = BABYLON.Vector3.Zero()
    })

    // 泛光效果
    const gl = new BABYLON.GlowLayer("glow", scene, {
        mainTextureSamples: 4,
        mainTextureFixedSize: 256,
        blurKernelSize: 16, // 发光范围
    });
    gl.intensity = 0.45

    // gl.customEmissiveColorSelector = (mesh, subMesh, material, result) => {
    //     if (mesh.name === "colorBox") {
    //         const color = (material as BABYLON.StandardMaterial).emissiveColor
    //         result.set(color.r, color.g, color.b, 1);
    //     } else {
    //         result.set(0, 0, 0, 0);
    //     }
    // }

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

    // 循环渲染
    engine.runRenderLoop(() => {
        stats?.begin();
        if (isEnableObjectPositionLimit) {
            PhysicsStableHelper.limitMeshPosition(followMouseMesh, sceneSize)
            PhysicsStableHelper.limitRotateVelocity(interactiveObjs.map(e => e.mesh))
            PhysicsStableHelper.limitLinearVelocity(interactiveObjs.map(e => e.mesh))
            PhysicsStableHelper.ignoreMiniVelocity(interactiveObjs.map(e => e.mesh))
            // 拥有4个以上弹性连接的mesh，需要降低速度
            // @ts-ignore
            const getSpringStickMeshArr = interactiveObjs.map(e => e.mesh).filter(e => e.physicsImpostor?._joints?.length >= 4)
            PhysicsStableHelper.reduceRotateVelocity(getSpringStickMeshArr)
            PhysicsStableHelper.reduceLinearVelocity(getSpringStickMeshArr)
        }
        scene.render();
        stats?.end();
    })

    // 适应尺寸
    window.addEventListener('resize', () => {
        engine.resize();
    })

}
