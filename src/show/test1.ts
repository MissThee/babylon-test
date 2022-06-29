import * as BABYLON from 'babylonjs';
import "babylonjs-loaders";
import CreateBaseLine from "./util/CreateBaseLine";
import FollowMouseObj from "./util/FollowMouseObj";
import * as Constant from './util/Constant'
import CANNON from 'cannon'
import Stats from 'stats.js'
import ClickSound from "./sound/ClickSound";
import SixPicBox from "./object/SixPicBox";
import ObjModule from "./object/ObjModule";
import Ground from './object/Ground'
import SceneBoard from './object/SceneBoard'
import CustomObj from './object/CustomObj'

const stats = new Stats();
document.body.appendChild(stats.dom)
const canvasEl = document.getElementById('app') as HTMLCanvasElement;

const canMoveCamera = false

let delta = 0
// 创建 引擎
const engine = new BABYLON.Engine(canvasEl, true, {preserveDrawingBuffer: true, stencil: true}, true);
// 创建 场景
const scene = new BABYLON.Scene(engine);
{
    // scene.ambientColor = new BABYLON.Color3(0.87, 0.71, 0.73); // 场景环境光。可让材质的环境光有效果
    scene.ambientColor = new BABYLON.Color3(1, 1, 1); // 场景环境光。可让材质的环境光有效果
    scene.enablePhysics(new BABYLON.Vector3(0, Constant.gravity, 0), new BABYLON.CannonJSPlugin(true, 1, CANNON));
}
// 创建 相机
// const camera = new BABYLON.ArcRotateCamera('ArcRotateCamera', 0.1 * Math.PI, 0.35 * Math.PI, 20, BABYLON.Vector3.Zero(), scene)
const camera = new BABYLON.ArcRotateCamera('ArcRotateCamera', 0, 0.5 * Math.PI, 30, new BABYLON.Vector3(0, 10, 0), scene)
{
// 相机关联画布，为了让相机操作生效
    if (canMoveCamera) {
        camera.attachControl(canvasEl, false);
    }
    camera.lowerRadiusLimit = 2
}
// 创建光源
// const light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene); // 模拟环境光，照不到的面也有暗光
// light1.diffuse = new BABYLON.Color3(1, 1, 1); // 漫反射
// light1.specular = new BABYLON.Color3(1, 1, 1); // 镜面反射
// light1.groundColor = new BABYLON.Color3(1, 1, 1); // 环境光
const light2 = new BABYLON.DirectionalLight('light2', new BABYLON.Vector3(0, -1, 0), scene); // 平行光，找不到的面全黑
light2.intensity = 0.1;
light2.position = new BABYLON.Vector3(0, 30, 0)
light2.diffuse = new BABYLON.Color3(1, 1, 1)
// const light3 = new BABYLON.PointLight('light3', new BABYLON.Vector3(2, 2, 2), scene); // 点光
// light3.range = 100; // 点光和聚光灯适用
// light3.intensity = 0.5;
// const light2 = new BABYLON.SpotLight("light4", // 聚光灯
//     new BABYLON.Vector3(0, 2, -10), // 位置
//     new BABYLON.Vector3(0, -1, 0), // 方向
//     Math.PI / 6, // 散发角度
//     1, // 能量，光照距离
//     scene);

// CreateBaseLine()

ClickSound(canvasEl)
// SixPicBox()
// ObjModule()
SceneBoard()

// const ground = Ground()
// const groundMat = new BABYLON.StandardMaterial("textMaterial", scene)
// ground.material = groundMat
// groundMat.ambientColor = new BABYLON.Color3(1, 1, 1) // 环境；由环境背景光照明的材料的颜色或质地。(需要设置场景的环境颜色)
// groundMat.specularColor = new BABYLON.Color3(1, 0, 0) // 镜面，也叫高光；光线给材质的亮点(需要创建光源才有效果)
// groundMat.diffuseColor = new BABYLON.Color3(1, 0, 0) // 漫反射；在光线下观察的材料的基本颜色或质地(需要创建光源才有效果)
// groundMat.emissiveColor = new BABYLON.Color3(0, 1, 0) // 发光；发光材料的颜色或质地，如自发光
// 使用diffuseTexture、specularTexture、emissiveTexture以及ambientTexture等属性中的一个或多个来设置一个材质的纹理。其中，ambientTexture只有在没有设置场景环境颜色的时候才被使用。

light2.shadowMinZ = 0
light2.shadowMaxZ = 50
const shadowGenerator = new BABYLON.ShadowGenerator(1024, light2);
shadowGenerator.useBlurCloseExponentialShadowMap = true
// shadowGenerator.useBlurExponentialShadowMap = true;
// shadowGenerator.useKernelBlur=true
// shadowGenerator.blurKernel=30
// shadowGenerator.blurScale=20
// shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW
// shadowGenerator.depthScale=10
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
    shadowGenerator.addShadowCaster(box.mesh);
})

// 增加阴影
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
            if (currentPickedMesh && pointerInfo.pickInfo?.pickedPoint) {
                if (canMoveCamera) {
                    scene.activeCamera?.detachControl();
                }
                const mainPivot = pointerInfo.pickInfo.pickedPoint.subtract(currentPickedMesh.getAbsolutePosition())
                // 每次需要创建新的PhysicsJoint，否则使用addJoint使用此joint会一直保持首次关联的物体
                currentFollowJoint = new BABYLON.PhysicsJoint(
                    BABYLON.PhysicsJoint.SpringJoint,
                    {
                        length: 0,
                        stiffness: -Constant.gravity * 3,
                        damping: -Constant.gravity,
                        collision: false,
                        // mainAxis:new BABYLON.Vector3(0,-1,0),
                        mainPivot: mainPivot, // 方块上的连接点位置
                        // connectedPivot:new BABYLON.Vector3(0,0,0), // 鼠标上的连接点位置
                    }
                )
                if (followMouseObj.mesh.physicsImpostor) {
                    currentPickedMesh.physicsImpostor?.addJoint(followMouseObj.mesh.physicsImpostor, currentFollowJoint)
                }
            }
            break;
        case BABYLON.PointerEventTypes.POINTERUP:
            if (canMoveCamera) {
                scene.activeCamera?.attachControl();
            }
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
        stickObj.pointMesh?.dispose();
        if (stickObj.mainMesh.physicsImpostor) {
            stickObj.mainMesh.physicsImpostor.friction = 1
        }
    })
    stickObjArr = []
    scene.getEngine()
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
        const verticalMargin = 10
        const horizontalMargin = 10
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
                    length: 2,
                    stiffness: 15,
                    damping: 10,
                    collision: false,
                    // mainAxis:new BABYLON.Vector3(0,-1,0),
                    mainPivot: pivotArray[stickPointIndex], // 方块上的连接点位置
                    // connectedPivot:new BABYLON.Vector3(0,0,0), // 鼠标上的连接点位置
                }
            )
            const stickMesh = BABYLON.MeshBuilder.CreateSphere('FollowMouseObj', {segments: 1}, scene)
            stickMesh.isVisible = false
            // const mat = new BABYLON.StandardMaterial('mat', scene)
            // mat.emissiveColor = BABYLON.Color3.Red()
            // stickMesh.material = mat
            stickMesh.physicsImpostor = new BABYLON.PhysicsImpostor(stickMesh, BABYLON.PhysicsImpostor.NoImpostor, {mass: 0, restitution: 0}, scene)
            stickMesh.physicsImpostor.physicsBody.collisionFilterMask = 0
            stickMesh.position = stickPoint
            if (stickMesh.physicsImpostor) {
                customObjArr[stickPositionCenterIndex].mesh.physicsImpostor?.addJoint(stickMesh.physicsImpostor, physicsJoint)
            }
            if (customObjArr[stickPositionCenterIndex].mesh.physicsImpostor) {
                // @ts-ignore
                customObjArr[stickPositionCenterIndex].mesh.physicsImpostor.friction = 0
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
                    if (pickInfo?.pickedMesh && pickInfo.ray && pickInfo?.pickedPoint && scene.activeCamera) {
                        pickInfo.pickedMesh.physicsImpostor?.applyImpulse(pickInfo.ray.origin.normalize().scale(-10), pickInfo.pickedPoint)
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
const limitMeshPostion = (mesh: BABYLON.Mesh) => {
    if (mesh.position.x > 6) {
        mesh.position.x = 5
    }
    if (mesh.position.x < -10) {
        mesh.position.x = -9
    }
    if (mesh.position.z < -20) {
        mesh.position.z = -19
    }
    if (mesh.position.z > 20) {
        mesh.position.z = 19
    }
    if (mesh.position.y > 20) {
        mesh.position.y = 19
    }
    if (mesh.position.y < 0) {
        mesh.position.y = 1
    }
}
const beforeRender = () => {
    customObjArr.forEach(e => {
        limitMeshPostion(e.mesh)
    })
    limitMeshPostion(followMouseObj.mesh)
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

