var p=Object.defineProperty;var s=(o,t,i)=>t in o?p(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var r=(o,t,i)=>(s(o,typeof t!="symbol"?t+"":t,i),i);import"./@babylonjscore_abstractScene.a7cd866f.js";import"./@babylonjscore_Actions.0e30626e.js";import"./@babylonjscore_Animations.ea9e461f.js";import{a as m,C as e}from"./@babylonjscore_Maths.42afce42.js";import"./@babylonjscore_assetContainer.d20cb31c.js";import"./@babylonjscore_Engines.a7c830c0.js";import"./@babylonjscore_Misc.329df4d9.js";import"./@babylonjscore_Audio.9f08a7b4.js";import"./@babylonjscore_BakedVertexAnimation.a09f0759.js";import"./@babylonjscore_Materials.49fd589a.js";import"./@babylonjscore_Behaviors.d1a939c8.js";import"./@babylonjscore_Bones.5bf57496.js";import"./@babylonjscore_Buffers.c351261b.js";import"./@babylonjscore_Cameras.c6ce826c.js";import"./@babylonjscore_PostProcesses.028f5b5f.js";import"./@babylonjscore_Collisions.8a0e928d.js";import"./@babylonjscore_Compute.21a77b9f.js";import"./@babylonjscore_Culling.f738e368.js";import"./@babylonjscore_Debug.e3f8c61d.js";import"./@babylonjscore_Meshes.896ebf22.js";import"./@babylonjscore_Physics.061917a4.js";import"./@babylonjscore_Rendering.98162e5e.js";import"./@babylonjscore_DeviceInput.667dddf3.js";import"./@babylonjscore_Events.9219334a.js";import"./@babylonjscore_Gamepads.ed4be94a.js";import"./@babylonjscore_Gizmos.7b07042e.js";import"./@babylonjscore_Helpers.60c56b38.js";import"./@babylonjscore_Instrumentation.d039f990.js";import"./@babylonjscore_Layers.54d46376.js";import"./@babylonjscore_LensFlares.e51ac091.js";import{D as h}from"./@babylonjscore_Lights.ab9a75bc.js";import"./@babylonjscore_Loading.1653106a.js";import"./@babylonjscore_Morph.1da5b78b.js";import"./@babylonjscore_node.43bedde8.js";import"./@babylonjscore_Offline.0f165c7b.js";import"./@babylonjscore_Particles.6d203a63.js";import"./@babylonjscore_Probes.734673ea.js";import"./@babylonjscore_scene.b072ee35.js";import"./@babylonjscore_sceneComponent.5f0854c6.js";import"./@babylonjscore_Sprites.8b4ad5c7.js";import"./@babylonjscore_States.f9db8fc7.js";import"./@babylonjscore_Shaders.eb9cec10.js";import"./@babylonjscore_XR.48ea8f9c.js";import"./@babylonjscore_Compat.1e5a884f.js";import{s as l}from"./test1.6c924acf.js";import"./tslibtslib.b6e59fa7.js";import"./@babylonjscore_ShadersWGSL.7b1bee3a.js";import"./@babylonjscore_Inputs.a1677f61.js";import"../entry/index.445116c4.js";class st{constructor(t){r(this,"scene");r(this,"light");this.scene=t,this.light=new h("light1",new m(0,-1,0),t),this.light.intensity=1,this.light.diffuse=new e(...l.map(i=>i/5)),this.light.position=new m(0,30,0)}}export{st as default};