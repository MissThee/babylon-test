var W=Object.defineProperty;var X=(o,s,m)=>s in o?W(o,s,{enumerable:!0,configurable:!0,writable:!0,value:m}):o[s]=m;var g=(o,s,m)=>(X(o,typeof s!="symbol"?s+"":s,m),m);import"./@babylonjscore_abstractScene.d5c48c49.js";import"./@babylonjscore_Actions.7cce3f43.js";import"./@babylonjscore_Animations.615099a9.js";import{a,b as k}from"./@babylonjscore_Maths.f3ef132c.js";import"./@babylonjscore_assetContainer.cba3bd62.js";import"./@babylonjscore_Engines.7287f97a.js";import"./@babylonjscore_Misc.d81f49ec.js";import"./@babylonjscore_Audio.4b8bc6d9.js";import"./@babylonjscore_BakedVertexAnimation.61d84081.js";import{b as Y}from"./@babylonjscore_Materials.00e32dae.js";import"./@babylonjscore_Behaviors.df7c289a.js";import"./@babylonjscore_Bones.4bdc5845.js";import"./@babylonjscore_Buffers.f937a5fd.js";import"./@babylonjscore_Cameras.db49b33d.js";import"./@babylonjscore_PostProcesses.4413212a.js";import"./@babylonjscore_Collisions.6bd46217.js";import"./@babylonjscore_Compute.71e01459.js";import"./@babylonjscore_Culling.457ad209.js";import"./@babylonjscore_Debug.c6d392dc.js";import{p as q}from"./@babylonjscore_Meshes.307935b5.js";import{a as w,P as C}from"./@babylonjscore_Physics.24606c9c.js";import"./@babylonjscore_Rendering.3a43e73e.js";import"./@babylonjscore_DeviceInput.c0f43152.js";import{P as h}from"./@babylonjscore_Events.8e5561d2.js";import"./@babylonjscore_Gamepads.ef488051.js";import"./@babylonjscore_Gizmos.8d63c4cf.js";import"./@babylonjscore_Helpers.51c9113b.js";import"./@babylonjscore_Instrumentation.93aca872.js";import"./@babylonjscore_Layers.c0605bf5.js";import"./@babylonjscore_LensFlares.ff1874ee.js";import"./@babylonjscore_Lights.ab2a2b54.js";import"./@babylonjscore_Loading.6509a8cd.js";import"./@babylonjscore_Morph.df37bd75.js";import"./@babylonjscore_node.60f33419.js";import"./@babylonjscore_Offline.9556dedd.js";import{G,P as D}from"./@babylonjscore_Particles.ea0a1760.js";import"./@babylonjscore_Probes.43ac1e9d.js";import"./@babylonjscore_scene.fc9d9dc0.js";import"./@babylonjscore_sceneComponent.4b70ec43.js";import"./@babylonjscore_Sprites.b7f7c371.js";import"./@babylonjscore_States.219926cb.js";import"./@babylonjscore_Shaders.73b25e8e.js";import"./@babylonjscore_XR.7f7d2945.js";import"./@babylonjscore_Compat.80d9493b.js";import _ from"./FollowMouseObj.26bf6092.js";import{g as T}from"./test1.9636d219.js";import"./tslibtslib.b6e59fa7.js";import"./@babylonjscore_ShadersWGSL.440a023d.js";import"./@babylonjscore_Inputs.ab1ffb62.js";import"../entry/index.ec7cf0ad.js";var $="./assets/png/star.498ac026.png";class V{constructor(s){g(this,"scene");g(this,"particleSystem");this.scene=s,G.IsSupported?this.particleSystem=new G("particles",{capacity:2e4},s):this.particleSystem=new D("particles",2e3,s),this.particleSystem=new D("particles",2e3,s),this.particleSystem.particleTexture=new Y($),this.particleSystem.createPointEmitter(new a,new a),this.particleSystem.color1=new k(1,0,0,1),this.particleSystem.color2=new k(1.5,1.5,1.5,1),this.particleSystem.colorDead=new k(1.5,1.5,1.5,.2),this.particleSystem.minSize=.8,this.particleSystem.maxSize=1.2,this.particleSystem.minLifeTime=.3,this.particleSystem.maxLifeTime=.6,this.particleSystem.emitRate=400,this.particleSystem.targetStopDuration=.025,this.particleSystem.blendMode=D.BLENDMODE_STANDARD,this.particleSystem.minEmitPower=15,this.particleSystem.maxEmitPower=15,this.particleSystem.updateSpeed=.01,this.particleSystem.addVelocityGradient(0,2),this.particleSystem.addVelocityGradient(.5,.5),this.particleSystem.addVelocityGradient(1,0)}static getInstance(s){return this.instance||(this.instance=new this(s)),this.instance}start(s){if(this.scene.activeCamera){const m=this.scene.activeCamera.absoluteRotation;this.particleSystem.direction1=new a(-1,-1,-1).applyRotationQuaternionInPlace(m).normalize(),this.particleSystem.direction2=new a(1,1,-1).applyRotationQuaternionInPlace(m).normalize()}this.particleSystem.emitter=s.clone(),this.particleSystem.start()}}g(V,"instance");var A=V,Kt=(o,s)=>{let m;(i=>{i[i.None=0]="None",i[i.Static=1]="Static",i[i.Spring=2]="Spring"})(m||(m={}));let S=0;const y=_.getInstance(o);let e,z=0,R,P=!1,d;o.onPointerObservable.add(i=>{var r,u,f;if(S===2||S===0)switch(i.type){case h.POINTERDOWN:(e==null?void 0:e.physicsImpostor)&&y.mesh.physicsImpostor&&d&&((r=o.getPhysicsEngine())==null||r.removeJoint(e.physicsImpostor,y.mesh.physicsImpostor,d),P=!1);const t=o.pick(o.pointerX,o.pointerY,n=>s.some(p=>p.mesh===n),!1);if(e=(t==null?void 0:t.pickedMesh)||null,e&&e.rotationQuaternion&&(t==null?void 0:t.pickedPoint)){let n=t.pickedPoint.subtract(e.getAbsolutePosition()).applyRotationQuaternion(e.rotationQuaternion.invert());d=new w(w.SpringJoint,{length:0,stiffness:-T*3,damping:-T,collision:!1,mainPivot:n}),R=()=>{var p;P||y.mesh.physicsImpostor&&d&&((p=e==null?void 0:e.physicsImpostor)==null||p.addJoint(y.mesh.physicsImpostor,d),P=!0)}}break;case h.POINTERMOVE:e&&R();break;case h.POINTERUP:(e==null?void 0:e.physicsImpostor)&&y.mesh.physicsImpostor&&d&&((u=o.getPhysicsEngine())==null||u.removeJoint(e.physicsImpostor,y.mesh.physicsImpostor,d),P=!1),e=null;break}switch(i.type){case h.POINTERDOWN:z=performance.now();break;case h.POINTERUP:if(performance.now()-z<150){const t=o.pick(o.pointerX,o.pointerY,n=>s.some(p=>p.mesh===n),!1);(t==null?void 0:t.pickedMesh)&&t.ray&&(t==null?void 0:t.pickedPoint)&&o.activeCamera&&((f=t.pickedMesh.physicsImpostor)==null||f.applyImpulse(t.ray.origin.normalize().scale(-15),t.pickedPoint),A.getInstance(o).start(t.pickedPoint.clone()))}break}if(S===1)switch(i.type){case h.POINTERDOWN:const t=o.pick(o.pointerX,o.pointerY,n=>s.some(p=>p.mesh===n),!1);(t==null?void 0:t.pickedMesh)&&(t==null?void 0:t.pickedPoint)&&(e=t==null?void 0:t.pickedMesh);break;case h.POINTERMOVE:e&&(e.position=y.mesh.position.clone());break;case h.POINTERUP:e=null;break}});const O=[[0,11,-3],[0,11,-1],[0,9,1],[0,9,-1],[0,7,1],[0,7,3],[0,11,-5],[0,9,-5],[0,7,-5],[0,11,5],[0,9,5],[0,7,5]],E=i=>{S=i?1:2,i?s.forEach((r,u)=>{r.lockObj({position:O[u],rotation:[0,0,0]})}):s.forEach(r=>{r.lockObj()})};(()=>{var r;const i=document.createElement("input");i.type="button",i.id="lockStaticPositionBtn",i.style.display="block",i.value="\u9759\u6001\u9489\u4F4F",i.onclick=()=>{E(!0)},(r=document.getElementById("controls"))==null||r.append(i)})();let B=[];const F=i=>{var u,f;if(S=2,B.forEach(t=>{var n,p;t.mainMesh.physicsImpostor&&t.pointMesh.physicsImpostor&&t.joint&&((n=o.getPhysicsEngine())==null||n.removeJoint(t.mainMesh.physicsImpostor,t.pointMesh.physicsImpostor,t.joint)),(p=t.pointMesh)==null||p.dispose(),t.mainMesh.physicsImpostor&&(t.mainMesh.physicsImpostor.friction=1)}),(u=o.getPhysicsEngine())==null||u.setGravity(new a(0,T,0)),o.getEngine(),!i)return;(f=o.getPhysicsEngine())==null||f.setGravity(new a(0,0,0)),[new a(0,12,-6),new a(0,12,0),new a(0,12,6),new a(0,8,-4),new a(0,8,4),new a(0,4,0)].forEach((t,n)=>{const I=t.clone();I.y+=4,I.z-=4;const M=t.clone();M.y+=4,M.z+=4;const v=t.clone();v.y-=4,v.z-=4;const N=t.clone();N.y-=4,N.z+=4;const Q=[I,M,v,N],c=1,L=[new a(0,c,-c),new a(0,c,c),new a(0,-c,-c),new a(0,-c,c)];Q.forEach((U,x)=>{var J;const b=new w(w.SpringJoint,{length:0,stiffness:4,damping:3,collision:!1,mainPivot:L[x]}),l=q.CreateSphere("FollowMouseObj",{segments:1},o);l.isVisible=!1,l.physicsImpostor=new C(l,C.NoImpostor,{mass:0,restitution:0},o),l.physicsImpostor.physicsBody.collisionFilterMask=0,l.position=U,l.physicsImpostor&&((J=s[n].mesh.physicsImpostor)==null||J.addJoint(l.physicsImpostor,b)),s[n].mesh.physicsImpostor&&(s[n].mesh.physicsImpostor.friction=0),B.push({mainMesh:s[n].mesh,pointMesh:l,joint:b})})})};(()=>{var r;const i=document.createElement("input");i.type="button",i.id="stickPositionBtn",i.style.display="block",i.value="\u5F39\u6027\u9489\u4F4F+\u65E0\u91CD\u529B\u6F02\u6D6E",i.onclick=()=>{E(!1),F(!0)},(r=document.getElementById("controls"))==null||r.append(i)})(),(()=>{var r;const i=document.createElement("input");i.type="button",i.id="addNormalPhysicsControl",i.style.display="block",i.value="\u6389\u843D",i.onclick=()=>{F(!1),E(!1)},(r=document.getElementById("controls"))==null||r.append(i)})()};export{Kt as default};