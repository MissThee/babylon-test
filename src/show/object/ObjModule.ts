// 加载 模型
// BABYLON.SceneLoader.AppendAsync("/module/", "emerald.obj",scene).then(s=>{console.log(s)})
// 加载 模型
import * as BABYLON from "babylonjs";

export default  () => {
    const assetsManager = new BABYLON.AssetsManager();
    const meshTask1 = assetsManager.addMeshTask("emerald", "", "/module/", "emerald.obj")
    meshTask1.onSuccess = (t: { loadedMeshes: any[]; }) => {
        t.loadedMeshes.forEach((m) => {
            m.position.x -= 20;
            m.position.z -= 30;
        });
    };
    assetsManager.load()
    return assetsManager
}