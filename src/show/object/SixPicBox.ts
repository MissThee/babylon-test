import * as BABYLON from 'babylonjs';

export default (name: string='SixPicBox') => {
    let boxMaterial
    {
        boxMaterial = new BABYLON.StandardMaterial("boxMaterial");
        boxMaterial.diffuseTexture = new BABYLON.Texture("/image/box.png");
        boxMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1); // 自发光颜色
    }

    let box;
    {
        const faceUV = [];
        // 以贴图左下角为(0,0)，四个参数分别为矩形起点(x,y)和终点(x,y)
        faceUV[0] = new BABYLON.Vector4(0, 0, 0.5, 0.33); //冲向-z轴面
        faceUV[1] = new BABYLON.Vector4(0.5, 0, 1, 0.33); //冲向z轴面
        faceUV[2] = new BABYLON.Vector4(0, 0.33, 0.5, 0.66); //冲向x轴面
        faceUV[3] = new BABYLON.Vector4(0.5, 0.33, 1.0, 0.66); //冲向-x轴面
        faceUV[4] = new BABYLON.Vector4(0, 0.66, 0.5, 1.0); //冲向y轴面
        faceUV[5] = new BABYLON.Vector4(0.5, 0.66, 1.0, 1.0); //冲向-y轴面
        box = BABYLON.MeshBuilder.CreateBox(name, {faceUV: faceUV, wrap: true, size: 2});
        box.position.y = 1
        box.position.z = 5
        box.material = boxMaterial;
    }
    return box
}