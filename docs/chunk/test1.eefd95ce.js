import{_ as e}from"../entry/index.5ef5b17e.js";const F=-9.81,_=.25*Math.PI,c=20,l=20,G=5;var J="./assets/png/sideBlue1.17798b99.png",q="./assets/png/sideBlue2.50a28214.png",H="./assets/png/sideBlue3.95dcf770.png",W="./assets/png/sideBlue4.5d3718f0.png",$="./assets/png/sideBlue5.82996cfe.png",k="./assets/png/sideBlue6.69ee6118.png",K="./assets/png/sideOrange1.70a2764f.png",N="./assets/png/sideOrange2.2e63a6e4.png",Q="./assets/png/sideOrange3.b7de6a98.png",X="./assets/png/sideOrange4.3ca086e8.png",Y="./assets/png/sideOrange5.1a718c6f.png",tt="./assets/png/sideOrange6.4d19e8c1.png";const et=[{name:"textBoxBlue1",option:{materialOpt:{textureUrl:J}},initPosition:[0,16,-12]},{name:"textBoxBlue2",option:{materialOpt:{textureUrl:q}},initPosition:[0,14,-9]},{name:"textBoxBlue3",option:{materialOpt:{textureUrl:H}},initPosition:[0,12,-6]},{name:"textBoxBlue4",option:{materialOpt:{textureUrl:W}},initPosition:[0,10,-3]},{name:"textBoxBlue5",option:{materialOpt:{textureUrl:$}},initPosition:[0,12,0]},{name:"textBoxBlue6",option:{materialOpt:{textureUrl:k}},initPosition:[0,14,3]},{name:"textBoxOrange1",option:{materialOpt:{textureUrl:K}},initPosition:[0,10,6]},{name:"textBoxOrange2",option:{materialOpt:{textureUrl:N}},initPosition:[0,13,6]},{name:"textBoxOrange3",option:{materialOpt:{textureUrl:Q}},initPosition:[0,16,6]},{name:"textBoxOrange4",option:{materialOpt:{textureUrl:X}},initPosition:[0,19,9]},{name:"textBoxOrange5",option:{materialOpt:{textureUrl:Y}},initPosition:[0,16,9]},{name:"textBoxOrange6",option:{materialOpt:{textureUrl:tt}},initPosition:[0,13,9]}];var ot=async()=>{const u=document.getElementById("app"),{Engine:f}=await e(()=>import("./engine.030dae1e.js"),["chunk/engine.030dae1e.js","chunk/precisionDate.911053b8.js","chunk/performanceConfigurator.3a0adc9f.js","chunk/perfCounter.20926986.js","chunk/engine.dynamicBuffer.1561c86f.js"]);await e(()=>import("./audioSceneComponent.62a06c43.js"),["chunk/audioSceneComponent.62a06c43.js","chunk/sound.f150e3e6.js","chunk/decorators.033fe02c.js","chunk/precisionDate.911053b8.js","chunk/performanceConfigurator.3a0adc9f.js","chunk/arrayTools.49f8ffa1.js","chunk/math.vector.dbc48609.js","chunk/math.color.a4c793a9.js","chunk/engine.030dae1e.js","chunk/perfCounter.20926986.js","chunk/engine.dynamicBuffer.1561c86f.js","chunk/scene.600fc970.js","chunk/math.plane.3df9f77f.js","chunk/lightConstants.3b1d6040.js"]);const O=new f(u,!0,{preserveDrawingBuffer:!0,stencil:!0},!1),{Scene:B}=await e(()=>import("./scene.600fc970.js").then(function(t){return t.s}),["chunk/scene.600fc970.js","chunk/precisionDate.911053b8.js","chunk/performanceConfigurator.3a0adc9f.js","chunk/decorators.033fe02c.js","chunk/arrayTools.49f8ffa1.js","chunk/math.vector.dbc48609.js","chunk/math.color.a4c793a9.js","chunk/math.plane.3df9f77f.js","chunk/lightConstants.3b1d6040.js","chunk/perfCounter.20926986.js"]),o=new B(O),{Vector3:n}=await e(()=>import("./math.vector.dbc48609.js"),["chunk/math.vector.dbc48609.js","chunk/arrayTools.49f8ffa1.js","chunk/performanceConfigurator.3a0adc9f.js"]),{Color4:h,Color3:I}=await e(()=>import("./math.color.a4c793a9.js"),["chunk/math.color.a4c793a9.js","chunk/arrayTools.49f8ffa1.js"]);o.clearColor=new h(247/255,207/255,212/255,1),o.ambientColor=new I(1,1,1);const L=e(()=>import("./cannonJSPlugin.edf63eef.js"),["chunk/cannonJSPlugin.edf63eef.js","chunk/precisionDate.911053b8.js","chunk/performanceConfigurator.3a0adc9f.js","chunk/math.vector.dbc48609.js","chunk/arrayTools.49f8ffa1.js","chunk/math.plane.3df9f77f.js","chunk/decorators.033fe02c.js","chunk/math.color.a4c793a9.js","chunk/physicsImpostor.2290e173.js","chunk/abstractMesh.2a621fb8.js","chunk/engine.030dae1e.js","chunk/perfCounter.20926986.js","chunk/engine.dynamicBuffer.1561c86f.js","chunk/node.c2e9b9af.js","chunk/math.axis.99d5e86d.js","chunk/scene.600fc970.js","chunk/lightConstants.3b1d6040.js","chunk/boundingInfo.536615f6.js","chunk/math.functions.8d0abdec.js","chunk/mesh.0fd9eeec.js","chunk/material.264cedf3.js","chunk/materialHelper.532e5e98.js","chunk/light.9e8c0fea.js","chunk/thinMaterialHelper.ab63cfd8.js","chunk/physicsJoint.eb621db1.js","chunk/physicsEngine.7712aca7.js"]),V=e(()=>import("./cannon.c6cb7e9d.js").then(function(t){return t.c}),["chunk/cannon.c6cb7e9d.js","chunk/commonjsHelpers.4655abbe.js"]),[{CannonJSPlugin:y},R]=await Promise.all([L,V]);await e(()=>import("./physicsEngineComponent.a6fcdb16.js"),["chunk/physicsEngineComponent.a6fcdb16.js","chunk/precisionDate.911053b8.js","chunk/performanceConfigurator.3a0adc9f.js","chunk/abstractMesh.2a621fb8.js","chunk/math.vector.dbc48609.js","chunk/arrayTools.49f8ffa1.js","chunk/engine.030dae1e.js","chunk/perfCounter.20926986.js","chunk/engine.dynamicBuffer.1561c86f.js","chunk/math.plane.3df9f77f.js","chunk/decorators.033fe02c.js","chunk/math.color.a4c793a9.js","chunk/node.c2e9b9af.js","chunk/math.axis.99d5e86d.js","chunk/scene.600fc970.js","chunk/lightConstants.3b1d6040.js","chunk/boundingInfo.536615f6.js","chunk/math.functions.8d0abdec.js","chunk/physicsEngine.7712aca7.js","chunk/physicsJoint.eb621db1.js"]),o.enablePhysics(new n(0,F,0),new y(!0,1,R.default));const{ArcRotateCamera:A}=await e(()=>import("./arcRotateCamera.c87e7d4a.js"),["chunk/arcRotateCamera.c87e7d4a.js","chunk/precisionDate.911053b8.js","chunk/performanceConfigurator.3a0adc9f.js","chunk/decorators.033fe02c.js","chunk/arrayTools.49f8ffa1.js","chunk/math.vector.dbc48609.js","chunk/math.color.a4c793a9.js","chunk/node.c2e9b9af.js","chunk/mesh.0fd9eeec.js","chunk/abstractMesh.2a621fb8.js","chunk/engine.030dae1e.js","chunk/perfCounter.20926986.js","chunk/engine.dynamicBuffer.1561c86f.js","chunk/math.plane.3df9f77f.js","chunk/math.axis.99d5e86d.js","chunk/scene.600fc970.js","chunk/lightConstants.3b1d6040.js","chunk/boundingInfo.536615f6.js","chunk/math.functions.8d0abdec.js","chunk/material.264cedf3.js","chunk/materialHelper.532e5e98.js","chunk/light.9e8c0fea.js","chunk/thinMaterialHelper.ab63cfd8.js","chunk/animation.fe5e0942.js","chunk/math.size.f34aa5eb.js"]),P=new A("ArcRotateCamera",0,.5*Math.PI,l/2+G+c,new n(0,c*Math.tan(_)/2,0),o);P.fov=_,P.lowerRadiusLimit=2;const D=(await e(()=>import("./Light1.e290549b.js"),["chunk/Light1.e290549b.js","chunk/math.vector.dbc48609.js","chunk/arrayTools.49f8ffa1.js","chunk/performanceConfigurator.3a0adc9f.js","chunk/directionalLight.7f6db0e6.js","chunk/precisionDate.911053b8.js","chunk/decorators.033fe02c.js","chunk/math.color.a4c793a9.js","chunk/node.c2e9b9af.js","chunk/light.9e8c0fea.js","chunk/lightConstants.3b1d6040.js","chunk/math.axis.99d5e86d.js"])).default,T=new D(o);e(()=>import("./ClickSound.dffdee07.js"),["chunk/ClickSound.dffdee07.js","chunk/standardMaterial.1dc958a6.js","chunk/precisionDate.911053b8.js","chunk/performanceConfigurator.3a0adc9f.js","chunk/decorators.033fe02c.js","chunk/arrayTools.49f8ffa1.js","chunk/math.vector.dbc48609.js","chunk/math.color.a4c793a9.js","chunk/scene.600fc970.js","chunk/math.plane.3df9f77f.js","chunk/lightConstants.3b1d6040.js","chunk/perfCounter.20926986.js","chunk/material.264cedf3.js","chunk/boundingInfo.536615f6.js","chunk/math.functions.8d0abdec.js","chunk/materialHelper.532e5e98.js","chunk/node.c2e9b9af.js","chunk/light.9e8c0fea.js","chunk/thinMaterialHelper.ab63cfd8.js","chunk/clipPlaneVertex.0a6963c3.js","chunk/math.size.f34aa5eb.js","chunk/engine.030dae1e.js","chunk/engine.dynamicBuffer.1561c86f.js","chunk/effectFallbacks.3639882d.js","chunk/imageProcessingFunctions.b7998f35.js","chunk/instancesDeclaration.e0c3d070.js","chunk/sound.f150e3e6.js"]).then(t=>{new t.default(o)});const b=(await e(()=>import("./SceneBoard.89b4145c.js"),["chunk/SceneBoard.89b4145c.js","chunk/math.color.a4c793a9.js","chunk/arrayTools.49f8ffa1.js","chunk/standardMaterial.1dc958a6.js","chunk/precisionDate.911053b8.js","chunk/performanceConfigurator.3a0adc9f.js","chunk/decorators.033fe02c.js","chunk/math.vector.dbc48609.js","chunk/scene.600fc970.js","chunk/math.plane.3df9f77f.js","chunk/lightConstants.3b1d6040.js","chunk/perfCounter.20926986.js","chunk/material.264cedf3.js","chunk/boundingInfo.536615f6.js","chunk/math.functions.8d0abdec.js","chunk/materialHelper.532e5e98.js","chunk/node.c2e9b9af.js","chunk/light.9e8c0fea.js","chunk/thinMaterialHelper.ab63cfd8.js","chunk/clipPlaneVertex.0a6963c3.js","chunk/math.size.f34aa5eb.js","chunk/engine.030dae1e.js","chunk/engine.dynamicBuffer.1561c86f.js","chunk/effectFallbacks.3639882d.js","chunk/imageProcessingFunctions.b7998f35.js","chunk/instancesDeclaration.e0c3d070.js","chunk/physicsImpostor.2290e173.js","chunk/abstractMesh.2a621fb8.js","chunk/math.axis.99d5e86d.js","chunk/mesh.0fd9eeec.js","chunk/physicsJoint.eb621db1.js"])).default;new b(o,{h:c*Math.tan(_),v:c*Math.tan(_)*(u.width/u.height),d:l});const U=(await e(()=>import("./ParticleFlare.a319802f.js"),["chunk/ParticleFlare.a319802f.js","chunk/math.vector.dbc48609.js","chunk/arrayTools.49f8ffa1.js","chunk/performanceConfigurator.3a0adc9f.js","chunk/math.color.a4c793a9.js","chunk/clipPlaneVertex.0a6963c3.js","chunk/precisionDate.911053b8.js","chunk/decorators.033fe02c.js","chunk/math.size.f34aa5eb.js","chunk/math.plane.3df9f77f.js","chunk/thinMaterialHelper.ab63cfd8.js","chunk/engine.dynamicBuffer.1561c86f.js","chunk/imageProcessingFunctions.b7998f35.js"])).default,C=new U(o),{ShadowGenerator:M}=await e(()=>import("./shadowGenerator.be468958.js").then(function(t){return t.s}),["chunk/shadowGenerator.be468958.js","chunk/precisionDate.911053b8.js","chunk/performanceConfigurator.3a0adc9f.js","chunk/math.vector.dbc48609.js","chunk/arrayTools.49f8ffa1.js","chunk/math.color.a4c793a9.js","chunk/math.plane.3df9f77f.js","chunk/decorators.033fe02c.js","chunk/light.9e8c0fea.js","chunk/node.c2e9b9af.js","chunk/lightConstants.3b1d6040.js","chunk/materialHelper.532e5e98.js","chunk/scene.600fc970.js","chunk/perfCounter.20926986.js","chunk/thinMaterialHelper.ab63cfd8.js","chunk/clipPlaneVertex.0a6963c3.js","chunk/math.size.f34aa5eb.js","chunk/engine.030dae1e.js","chunk/engine.dynamicBuffer.1561c86f.js","chunk/effectFallbacks.3639882d.js"]);await e(()=>import("./shadowGeneratorSceneComponent.06644c70.js"),["chunk/shadowGeneratorSceneComponent.06644c70.js","chunk/shadowGenerator.be468958.js","chunk/precisionDate.911053b8.js","chunk/performanceConfigurator.3a0adc9f.js","chunk/math.vector.dbc48609.js","chunk/arrayTools.49f8ffa1.js","chunk/math.color.a4c793a9.js","chunk/math.plane.3df9f77f.js","chunk/decorators.033fe02c.js","chunk/light.9e8c0fea.js","chunk/node.c2e9b9af.js","chunk/lightConstants.3b1d6040.js","chunk/materialHelper.532e5e98.js","chunk/scene.600fc970.js","chunk/perfCounter.20926986.js","chunk/thinMaterialHelper.ab63cfd8.js","chunk/clipPlaneVertex.0a6963c3.js","chunk/math.size.f34aa5eb.js","chunk/engine.030dae1e.js","chunk/engine.dynamicBuffer.1561c86f.js","chunk/effectFallbacks.3639882d.js","chunk/boundingInfo.536615f6.js","chunk/instancesDeclaration.e0c3d070.js"]);const S=new M(1024,T.light),z=(await e(()=>import("./CustomObj.2aef2bec.js"),["chunk/CustomObj.2aef2bec.js","chunk/math.vector.dbc48609.js","chunk/arrayTools.49f8ffa1.js","chunk/performanceConfigurator.3a0adc9f.js","chunk/math.color.a4c793a9.js","chunk/standardMaterial.1dc958a6.js","chunk/precisionDate.911053b8.js","chunk/decorators.033fe02c.js","chunk/scene.600fc970.js","chunk/math.plane.3df9f77f.js","chunk/lightConstants.3b1d6040.js","chunk/perfCounter.20926986.js","chunk/material.264cedf3.js","chunk/boundingInfo.536615f6.js","chunk/math.functions.8d0abdec.js","chunk/materialHelper.532e5e98.js","chunk/node.c2e9b9af.js","chunk/light.9e8c0fea.js","chunk/thinMaterialHelper.ab63cfd8.js","chunk/clipPlaneVertex.0a6963c3.js","chunk/math.size.f34aa5eb.js","chunk/engine.030dae1e.js","chunk/engine.dynamicBuffer.1561c86f.js","chunk/effectFallbacks.3639882d.js","chunk/imageProcessingFunctions.b7998f35.js","chunk/instancesDeclaration.e0c3d070.js","chunk/animation.fe5e0942.js","chunk/physicsImpostor.2290e173.js","chunk/abstractMesh.2a621fb8.js","chunk/math.axis.99d5e86d.js","chunk/mesh.0fd9eeec.js","chunk/physicsJoint.eb621db1.js"])).default,m=[];setTimeout(()=>{et.forEach((t,s)=>{setTimeout(()=>{const a=new z(o,t.name,t.option);a.mesh.position=new n(...t.initPosition),m.push(a),S.addShadowCaster(a.mesh)},s*80)}),e(()=>import("./addBehaviors.d34b9db6.js"),["chunk/addBehaviors.d34b9db6.js","chunk/math.vector.dbc48609.js","chunk/arrayTools.49f8ffa1.js","chunk/performanceConfigurator.3a0adc9f.js","chunk/math.color.a4c793a9.js","chunk/directionalLight.7f6db0e6.js","chunk/precisionDate.911053b8.js","chunk/decorators.033fe02c.js","chunk/node.c2e9b9af.js","chunk/light.9e8c0fea.js","chunk/lightConstants.3b1d6040.js","chunk/math.axis.99d5e86d.js","chunk/standardMaterial.1dc958a6.js","chunk/scene.600fc970.js","chunk/math.plane.3df9f77f.js","chunk/perfCounter.20926986.js","chunk/material.264cedf3.js","chunk/boundingInfo.536615f6.js","chunk/math.functions.8d0abdec.js","chunk/materialHelper.532e5e98.js","chunk/thinMaterialHelper.ab63cfd8.js","chunk/clipPlaneVertex.0a6963c3.js","chunk/math.size.f34aa5eb.js","chunk/engine.030dae1e.js","chunk/engine.dynamicBuffer.1561c86f.js","chunk/effectFallbacks.3639882d.js","chunk/imageProcessingFunctions.b7998f35.js","chunk/instancesDeclaration.e0c3d070.js","chunk/animation.fe5e0942.js","chunk/physicsImpostor.2290e173.js","chunk/abstractMesh.2a621fb8.js","chunk/mesh.0fd9eeec.js","chunk/physicsJoint.eb621db1.js","chunk/FollowMouseObj.493c4af3.js","entry/index.5ef5b17e.js"]).then(t=>{t.default(o,m,C)})},500);const x=c*Math.tan(_),g=c*Math.tan(_)*(u.width/u.height),i=.5,v=t=>{var s,a,d,p,E,w;t.position.x>=l/2-i&&(t.position.x=l/2-i,(s=t.physicsImpostor)==null||s.setLinearVelocity(n.Zero())),t.position.x<-l/2+i&&(t.position.x=-l/2+i,(a=t.physicsImpostor)==null||a.setLinearVelocity(n.Zero())),t.position.z>g/2-i&&(t.position.z=g/2-i,(d=t.physicsImpostor)==null||d.setLinearVelocity(n.Zero())),t.position.z<-g/2+i&&(t.position.z=-g/2+i,(p=t.physicsImpostor)==null||p.setLinearVelocity(n.Zero())),t.position.y>x-i&&(t.position.y=x-i,(E=t.physicsImpostor)==null||E.setLinearVelocity(n.Zero())),t.position.y<i&&(t.position.y=i,(w=t.physicsImpostor)==null||w.setLinearVelocity(n.Zero()))},Z=t=>{var s,a;for(let d of t){const p=(s=d.physicsImpostor)==null?void 0:s.getAngularVelocity();p&&!(p!=null&&p.equals(n.Zero()))&&((a=d.physicsImpostor)==null||a.setAngularVelocity(p.scale(.9)))}};let r;e(()=>import("./stats.min.9a999e0b.js").then(function(t){return t.s}),["chunk/stats.min.9a999e0b.js","chunk/commonjsHelpers.4655abbe.js"]).then(t=>{r=new t.default,document.body.appendChild(r.dom)});const j=(await e(()=>import("./FollowMouseObj.493c4af3.js").then(function(t){return t.a}),["chunk/FollowMouseObj.493c4af3.js","chunk/math.vector.dbc48609.js","chunk/arrayTools.49f8ffa1.js","chunk/performanceConfigurator.3a0adc9f.js","chunk/math.color.a4c793a9.js","chunk/standardMaterial.1dc958a6.js","chunk/precisionDate.911053b8.js","chunk/decorators.033fe02c.js","chunk/scene.600fc970.js","chunk/math.plane.3df9f77f.js","chunk/lightConstants.3b1d6040.js","chunk/perfCounter.20926986.js","chunk/material.264cedf3.js","chunk/boundingInfo.536615f6.js","chunk/math.functions.8d0abdec.js","chunk/materialHelper.532e5e98.js","chunk/node.c2e9b9af.js","chunk/light.9e8c0fea.js","chunk/thinMaterialHelper.ab63cfd8.js","chunk/clipPlaneVertex.0a6963c3.js","chunk/math.size.f34aa5eb.js","chunk/engine.030dae1e.js","chunk/engine.dynamicBuffer.1561c86f.js","chunk/effectFallbacks.3639882d.js","chunk/imageProcessingFunctions.b7998f35.js","chunk/instancesDeclaration.e0c3d070.js","chunk/physicsImpostor.2290e173.js","chunk/abstractMesh.2a621fb8.js","chunk/math.axis.99d5e86d.js","chunk/mesh.0fd9eeec.js","chunk/physicsJoint.eb621db1.js"])).default;O.runRenderLoop(()=>{r==null||r.begin(),m.forEach(t=>v(t.mesh)),v(j.getInstance(o).mesh),Z(m.slice(0,6).map(t=>t.mesh)),o.render(),r==null||r.end()}),window.addEventListener("resize",()=>{O.resize()})},nt=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"}));export{F as g,l as s,nt as t};
