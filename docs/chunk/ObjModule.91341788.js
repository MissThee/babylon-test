var l=Object.defineProperty;var c=(i,o,r)=>o in i?l(i,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[o]=r;var m=(i,o,r)=>(c(i,typeof o!="symbol"?o+"":o,r),r);import"./@babylonjsloaders_glTF.771a8b3b.js";import"./@babylonjscore_abstractScene.d5c48c49.js";import"./@babylonjscore_Actions.7cce3f43.js";import"./@babylonjscore_Animations.615099a9.js";import{a as d,C as s}from"./@babylonjscore_Maths.f3ef132c.js";import"./@babylonjscore_assetContainer.cba3bd62.js";import"./@babylonjscore_Engines.7287f97a.js";import{aE as f}from"./@babylonjscore_Misc.d81f49ec.js";import"./@babylonjscore_Audio.4b8bc6d9.js";import"./@babylonjscore_BakedVertexAnimation.61d84081.js";import"./@babylonjscore_Materials.00e32dae.js";import"./@babylonjscore_Behaviors.df7c289a.js";import"./@babylonjscore_Bones.4bdc5845.js";import"./@babylonjscore_Buffers.f937a5fd.js";import"./@babylonjscore_Cameras.db49b33d.js";import"./@babylonjscore_PostProcesses.4413212a.js";import"./@babylonjscore_Collisions.6bd46217.js";import"./@babylonjscore_Compute.71e01459.js";import"./@babylonjscore_Culling.457ad209.js";import"./@babylonjscore_Debug.c6d392dc.js";import"./@babylonjscore_Meshes.307935b5.js";import{P as a}from"./@babylonjscore_Physics.24606c9c.js";import"./@babylonjscore_Rendering.3a43e73e.js";import"./@babylonjscore_DeviceInput.c0f43152.js";import"./@babylonjscore_Events.8e5561d2.js";import"./@babylonjscore_Gamepads.ef488051.js";import"./@babylonjscore_Gizmos.8d63c4cf.js";import"./@babylonjscore_Helpers.51c9113b.js";import"./@babylonjscore_Instrumentation.93aca872.js";import"./@babylonjscore_Layers.c0605bf5.js";import"./@babylonjscore_LensFlares.ff1874ee.js";import"./@babylonjscore_Lights.ab2a2b54.js";import"./@babylonjscore_Loading.6509a8cd.js";import"./@babylonjscore_Morph.df37bd75.js";import"./@babylonjscore_node.60f33419.js";import"./@babylonjscore_Offline.9556dedd.js";import"./@babylonjscore_Particles.ea0a1760.js";import"./@babylonjscore_Probes.43ac1e9d.js";import"./@babylonjscore_scene.fc9d9dc0.js";import"./@babylonjscore_sceneComponent.4b70ec43.js";import"./@babylonjscore_Sprites.b7f7c371.js";import"./@babylonjscore_States.219926cb.js";import"./@babylonjscore_Shaders.73b25e8e.js";import"./@babylonjscore_XR.7f7d2945.js";import"./@babylonjscore_Compat.80d9493b.js";import"./tslibtslib.b6e59fa7.js";import"./@babylonjscore_ShadersWGSL.440a023d.js";import"./@babylonjscore_Inputs.ab1ffb62.js";class no{constructor(o){m(this,"scene");m(this,"assetsManager");this.scene=o,this.assetsManager=new f;const r=this.assetsManager.addMeshTask("customModule","","/module/","letterA.gltf"),p={x:0,y:5,z:-8};r.onSuccess=e=>{e.loadedMeshes.forEach((t,n)=>{t.scaling=new d(3,3,3),t.position.x+=p.x,t.position.y+=p.y,t.position.z+=p.z,t.material&&(t.material.ambientColor=new s(1,1,1),t.material.specularColor=s.Black()),n===0&&(t.physicsImpostor=new a(t,a.BoxImpostor,{mass:1,friction:1,restitution:0},o))})},this.assetsManager.load()}}export{no as default};
