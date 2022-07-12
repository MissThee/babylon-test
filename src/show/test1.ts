import type CustomObj from './object/CustomObj'
import type {Mesh} from "@babylonjs/core/Meshes/mesh";
import * as Constant from './util/Constant'
import * as AssetsImage from '../../src/assets/image'

// import * as BABYLON from '@babylonjs/core';
// import "@babylonjs/loaders";

// import CoordinateLine from "./util/CoordinateLine";
// import SixPicBox from "./object/SixPicBox";
// import ObjModule from "./object/ObjModule";
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

    const canvasEl = document.getElementById('app') as HTMLCanvasElement;

    // 创建 引擎
    const {Engine} = await import("@babylonjs/core/Engines/engine")
    await import ('@babylonjs/core/Audio/audioSceneComponent')// 引入声音插件
    const engine = new Engine(canvasEl, true, {preserveDrawingBuffer: true, stencil: true}, false);
    // 创建 场景
    const {Scene} = await import("@babylonjs/core/scene")
    const scene = new Scene(engine);

    const {Vector3} = await import("@babylonjs/core/Maths/math.vector");
    const {Color4, Color3} = await import( "@babylonjs/core/Maths/math.color");
    scene.clearColor = new Color4(247 / 255, 207 / 255, 212 / 255, 1)
    scene.ambientColor = new Color3(1, 1, 1); // 场景环境光。可让材质的环境光有效果
    // 添加 物理引擎
    const cannonJSPluginPromise = import( "@babylonjs/core/Physics/Plugins/cannonJSPlugin")
    const cannonPromise = import('cannon')
    const [{CannonJSPlugin}, cannonPromiseRes] = await Promise.all([cannonJSPluginPromise, cannonPromise])
    await import('@babylonjs/core/Physics/physicsEngineComponent')
    scene.enablePhysics(new Vector3(0, Constant.gravity, 0), new CannonJSPlugin(true, 1, cannonPromiseRes.default));
    // 创建 相机
    const {ArcRotateCamera} = await import("@babylonjs/core/Cameras/arcRotateCamera")
    const camera = new ArcRotateCamera(
        'ArcRotateCamera',
        0,
        0.5 * Math.PI,
        Constant.sceneDeep / 2 + Constant.cameraDistanceFix + Constant.cameraDistance,
        new Vector3(
            0,
            Constant.cameraDistance * Math.tan(Constant.cameraFov) / 2,
            0
        ),
        scene
    )
    camera.fov = Constant.cameraFov
    camera.lowerRadiusLimit = 2
    if (Constant.canMoveCamera) {
        camera.attachControl(canvasEl, false)
    }
    // 创建 光源
    const Light1 = (await import("./light/Light1")).default
    const light1 = new Light1(scene)
    // new CoordinateLine()
    // 创建 点击声音
    import("./sound/ClickSound").then(value => {
        new value.default(scene)
    })
    // SixPicBox(scene)
    // ObjModule(scene)

    // 创建 场景挡板
    const SceneBoard = (await import ('./object/SceneBoard')).default
    new SceneBoard(scene, {
        h: Constant.cameraDistance * Math.tan(Constant.cameraFov),
        v: Constant.cameraDistance * Math.tan(Constant.cameraFov) * (canvasEl.width / canvasEl.height),
        d: Constant.sceneDeep,
    })

    // 创建 粒子效果
    const ParticleFlare = (await import ("./object/ParticleFlare")).default
    const particleFlare = new ParticleFlare(scene)

    // 创建 影子生成器
    const {ShadowGenerator} = await import("@babylonjs/core/Lights/Shadows/shadowGenerator")
    await import ('@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent')
    const shadowGenerator = new ShadowGenerator(1024, light1.light);

    const CustomObj = (await import( './object/CustomObj')).default

    // 创建 方块
    const customObjArr: CustomObj[] = []
    setTimeout(() => {
        customObjOptions.forEach((e, index) => {
            setTimeout(() => {
                const box = new CustomObj(scene, e.name, e.option)
                box.mesh.position = new Vector3(...e.initPosition)
                customObjArr.push(box)
                shadowGenerator.addShadowCaster(box.mesh);
            }, index * 80)
        })
        // 创建 可交互对象，添加交互动作
        // 创建 粒子点击交互动作
        import( "./util/addBehaviors").then(value => {
            const addBehaviors = value.default
            addBehaviors(scene, customObjArr, particleFlare)
        });
    }, 500)

    // ------------------------------------------------------------------------
    // 限制物体位置
    const sceneBoxHeight = Constant.cameraDistance * Math.tan(Constant.cameraFov)
    const sceneBoxWidth = Constant.cameraDistance * Math.tan(Constant.cameraFov) * (canvasEl.width / canvasEl.height)
    const safePadding = 0.5
    const limitMeshPosition = (mesh: Mesh) => {
        if (mesh.position.x >= Constant.sceneDeep / 2 - safePadding) {
            mesh.position.x = Constant.sceneDeep / 2 - safePadding
            mesh.physicsImpostor?.setLinearVelocity(Vector3.Zero())
        }
        if (mesh.position.x < -Constant.sceneDeep / 2 + safePadding) {
            mesh.position.x = -Constant.sceneDeep / 2 + safePadding
            mesh.physicsImpostor?.setLinearVelocity(Vector3.Zero())
        }
        if (mesh.position.z > sceneBoxWidth / 2 - safePadding) {
            mesh.position.z = sceneBoxWidth / 2 - safePadding
            mesh.physicsImpostor?.setLinearVelocity(Vector3.Zero())
        }
        if (mesh.position.z < -sceneBoxWidth / 2 + safePadding) {
            mesh.position.z = -sceneBoxWidth / 2 + safePadding
            mesh.physicsImpostor?.setLinearVelocity(Vector3.Zero())
        }
        if (mesh.position.y > sceneBoxHeight - safePadding) {
            mesh.position.y = sceneBoxHeight - safePadding
            mesh.physicsImpostor?.setLinearVelocity(Vector3.Zero())
        }
        if (mesh.position.y < safePadding) {
            mesh.position.y = safePadding
            mesh.physicsImpostor?.setLinearVelocity(Vector3.Zero())
        }
    }

    // 减少物体角速度
    const reduceRotateSpeed = (meshArr: Mesh[]) => {
        for (let mesh of meshArr) {
            const angularVelocity = mesh.physicsImpostor?.getAngularVelocity()
            if (angularVelocity && !angularVelocity?.equals(Vector3.Zero())) {
                mesh.physicsImpostor?.setAngularVelocity(angularVelocity.scale(0.9))
            }
        }
    }

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
        {
            customObjArr.forEach(e => limitMeshPosition(e.mesh))
            limitMeshPosition(FollowMouseObj.getInstance(scene).mesh)
            reduceRotateSpeed(customObjArr.slice(0, 6).map(e => e.mesh))
        }
        scene.render();
        stats?.end();
    })
    // 适应尺寸
    window.addEventListener('resize', () => {
        engine.resize();
    })
}