import * as BABYLON from '@babylonjs/core';

//https://playground.babylonjs.com/#Y642I8 编辑node后导出generate code获得
class DirectMeshAndShadowColorMaterial extends BABYLON.NodeMaterial {
    constructor(option: { shadowColor: BABYLON.Color3, meshColor: BABYLON.Color3 } = {shadowColor: BABYLON.Color3.Black(), meshColor: BABYLON.Color3.White()}, scene?: BABYLON.Scene) {
        super("node", scene)

// InputBlock
        const position = new BABYLON.InputBlock("position");
        position.visibleInInspector = false;
        position.visibleOnFrame = false;
        position.target = 1;
        position.setAsAttribute("position");

// TransformBlock
        const worldPos = new BABYLON.TransformBlock("worldPos");
        worldPos.visibleInInspector = false;
        worldPos.visibleOnFrame = false;
        worldPos.target = 1;
        worldPos.complementZ = 0;
        worldPos.complementW = 1;

// InputBlock
        const world = new BABYLON.InputBlock("world");
        world.visibleInInspector = false;
        world.visibleOnFrame = false;
        world.target = 1;
        world.setAsSystemValue(BABYLON.NodeMaterialSystemValues.World);

// TransformBlock
        const Worldnormal = new BABYLON.TransformBlock("World normal");
        Worldnormal.visibleInInspector = false;
        Worldnormal.visibleOnFrame = false;
        Worldnormal.target = 1;
        Worldnormal.complementZ = 0;
        Worldnormal.complementW = 0;

// InputBlock
        const normal = new BABYLON.InputBlock("normal");
        normal.visibleInInspector = false;
        normal.visibleOnFrame = false;
        normal.target = 1;
        normal.setAsAttribute("normal");

// LightBlock
        const Lights = new BABYLON.LightBlock("Lights");
        Lights.visibleInInspector = false;
        Lights.visibleOnFrame = false;
        Lights.target = 3;

// InputBlock
        const cameraPosition = new BABYLON.InputBlock("cameraPosition");
        cameraPosition.visibleInInspector = false;
        cameraPosition.visibleOnFrame = false;
        cameraPosition.target = 1;
        cameraPosition.setAsSystemValue(BABYLON.NodeMaterialSystemValues.CameraPosition);

// AddBlock
        const Add = new BABYLON.AddBlock("Add");
        Add.visibleInInspector = false;
        Add.visibleOnFrame = false;
        Add.target = 4;

// ScaleBlock
        const Scale = new BABYLON.ScaleBlock("Scale");
        Scale.visibleInInspector = false;
        Scale.visibleOnFrame = false;
        Scale.target = 4;

// InputBlock
        const Meshcolor = new BABYLON.InputBlock("Mesh color");
        Meshcolor.visibleInInspector = false;
        Meshcolor.visibleOnFrame = false;
        Meshcolor.target = 1;
        Meshcolor.value = option.meshColor;
        Meshcolor.isConstant = false;

// ScaleBlock
        const Scale1 = new BABYLON.ScaleBlock("Scale");
        Scale1.visibleInInspector = false;
        Scale1.visibleOnFrame = false;
        Scale1.target = 4;

// ScaleBlock
        const Scale2 = new BABYLON.ScaleBlock("Scale");
        Scale2.visibleInInspector = false;
        Scale2.visibleOnFrame = false;
        Scale2.target = 4;

// InputBlock
        const Shadowcolor = new BABYLON.InputBlock("Shadow color");
        Shadowcolor.visibleInInspector = true;
        Shadowcolor.visibleOnFrame = false;
        Shadowcolor.target = 1;
        Shadowcolor.value = option.shadowColor;
        Shadowcolor.isConstant = false;

// OneMinusBlock
        const Oneminus = new BABYLON.OneMinusBlock("One minus");
        Oneminus.visibleInInspector = false;
        Oneminus.visibleOnFrame = false;
        Oneminus.target = 4;

// InputBlock
        const Shadowcolorstrength = new BABYLON.InputBlock("Shadow color strength");
        Shadowcolorstrength.visibleInInspector = false;
        Shadowcolorstrength.visibleOnFrame = false;
        Shadowcolorstrength.target = 1;
        Shadowcolorstrength.value = 1;
        Shadowcolorstrength.min = 0;
        Shadowcolorstrength.max = 1;
        Shadowcolorstrength.isBoolean = false;
        Shadowcolorstrength.matrixMode = 0;
        Shadowcolorstrength.animationType = BABYLON.AnimatedInputBlockTypes.None;
        Shadowcolorstrength.isConstant = false;

// FragmentOutputBlock
        const fragmentOutput = new BABYLON.FragmentOutputBlock("fragmentOutput");
        fragmentOutput.visibleInInspector = false;
        fragmentOutput.visibleOnFrame = false;
        fragmentOutput.target = 2;
        fragmentOutput.convertToGammaSpace = false;
        fragmentOutput.convertToLinearSpace = false;
        fragmentOutput.useLogarithmicDepth = false;

// TransformBlock
        const worldPosviewProjectionTransform = new BABYLON.TransformBlock("worldPos * viewProjectionTransform");
        worldPosviewProjectionTransform.visibleInInspector = false;
        worldPosviewProjectionTransform.visibleOnFrame = false;
        worldPosviewProjectionTransform.target = 1;
        worldPosviewProjectionTransform.complementZ = 0;
        worldPosviewProjectionTransform.complementW = 1;

// InputBlock
        const viewProjection = new BABYLON.InputBlock("viewProjection");
        viewProjection.visibleInInspector = false;
        viewProjection.visibleOnFrame = false;
        viewProjection.target = 1;
        viewProjection.setAsSystemValue(BABYLON.NodeMaterialSystemValues.ViewProjection);

// VertexOutputBlock
        const vertexOutput = new BABYLON.VertexOutputBlock("vertexOutput");
        vertexOutput.visibleInInspector = false;
        vertexOutput.visibleOnFrame = false;
        vertexOutput.target = 1;

// Connections
        position.output.connectTo(worldPos.vector);
        world.output.connectTo(worldPos.transform);
        worldPos.output.connectTo(worldPosviewProjectionTransform.vector);
        viewProjection.output.connectTo(worldPosviewProjectionTransform.transform);
        worldPosviewProjectionTransform.output.connectTo(vertexOutput.vector);
        Meshcolor.output.connectTo(Scale.input);
        worldPos.output.connectTo(Lights.worldPosition);
        normal.output.connectTo(Worldnormal.vector);
        world.output.connectTo(Worldnormal.transform);
        Worldnormal.output.connectTo(Lights.worldNormal);
        cameraPosition.output.connectTo(Lights.cameraPosition);
        Lights.shadow.connectTo(Scale.factor);
        Scale.output.connectTo(Add.left);
        Shadowcolor.output.connectTo(Scale2.input);
        Lights.shadow.connectTo(Oneminus.input);
        Oneminus.output.connectTo(Scale2.factor);
        Scale2.output.connectTo(Scale1.input);
        Shadowcolorstrength.output.connectTo(Scale1.factor);
        Scale1.output.connectTo(Add.right);
        Add.output.connectTo(fragmentOutput.rgb);

// Output nodes
        this.addOutputNode(vertexOutput);
        this.addOutputNode(fragmentOutput);
        this.build();
    }
}

export default DirectMeshAndShadowColorMaterial