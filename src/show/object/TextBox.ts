import * as BABYLON from "babylonjs";

export default (name: string = 'TextBox') => {
    let textMaterial
    {
        textMaterial = new BABYLON.StandardMaterial("textMaterial");
        textMaterial.diffuseTexture = new BABYLON.Texture("/image/testMaterial.png");
    }

    let box: BABYLON.Mesh;
    {
        box = BABYLON.MeshBuilder.CreateBox(name, {size: 2});
        box.material = textMaterial;
    }

// 一个面方向拖动
    const pointerDragBehavior = new BABYLON.PointerDragBehavior({dragPlaneNormal: new BABYLON.Vector3(1, 0, 0)});
    {
        pointerDragBehavior.dragDeltaRatio = 1
    }
    box.addBehavior(pointerDragBehavior);


// 物理效果

    return box;
}