import{a as Ci,E as D}from"./@babylonjscore_Engines.a7c830c0.js";import{L as j,N as Bi,a as vi,O as Di,v as ci,w as wi,G as Ri}from"./@babylonjscore_Misc.329df4d9.js";import{C as Fi}from"./@babylonjscore_Cameras.c6ce826c.js";import{b as Zi,C as Ti,a as Ai}from"./@babylonjscore_Maths.42afce42.js";import{T as Ei,G as Oi,M as Gi}from"./@babylonjscore_Meshes.896ebf22.js";import{n as zi,M as xi,H as Wi,C as _i}from"./@babylonjscore_Materials.49fd589a.js";import{c as Hi}from"./@babylonjscore_Animations.ea9e461f.js";import{L as qi}from"./@babylonjscore_Lights.ab9a75bc.js";import{S as Ji}from"./@babylonjscore_sceneComponent.5f0854c6.js";import{S as Qi}from"./@babylonjscore_scene.b072ee35.js";import{A as ki}from"./@babylonjscore_abstractScene.a7cd866f.js";import{A as Vi}from"./@babylonjscore_assetContainer.d20cb31c.js";import{b as Si}from"./@babylonjscore_Actions.0e30626e.js";import{S as Ui}from"./@babylonjscore_Bones.5bf57496.js";import{M as Yi}from"./@babylonjscore_Morph.1da5b78b.js";import{C as Xi,O as Ki,A as $i}from"./@babylonjscore_Physics.061917a4.js";import{R as nn}from"./@babylonjscore_Probes.734673ea.js";import{b as tn}from"./@babylonjscore_PostProcesses.028f5b5f.js";var q=function(){function i(){}return Object.defineProperty(i,"ForceFullSceneLoadingForIncremental",{get:function(){return i._ForceFullSceneLoadingForIncremental},set:function(t){i._ForceFullSceneLoadingForIncremental=t},enumerable:!1,configurable:!0}),Object.defineProperty(i,"ShowLoadingScreen",{get:function(){return i._ShowLoadingScreen},set:function(t){i._ShowLoadingScreen=t},enumerable:!1,configurable:!0}),Object.defineProperty(i,"loggingLevel",{get:function(){return i._LoggingLevel},set:function(t){i._LoggingLevel=t},enumerable:!1,configurable:!0}),Object.defineProperty(i,"CleanBoneMatrixWeights",{get:function(){return i._CleanBoneMatrixWeights},set:function(t){i._CleanBoneMatrixWeights=t},enumerable:!1,configurable:!0}),i._ForceFullSceneLoadingForIncremental=!1,i._ShowLoadingScreen=!0,i._CleanBoneMatrixWeights=!1,i._LoggingLevel=0,i}(),J;(function(i){i[i.Clean=0]="Clean",i[i.Stop=1]="Stop",i[i.Sync=2]="Sync",i[i.NoSync=3]="NoSync"})(J||(J={}));var A=function(){function i(){}return Object.defineProperty(i,"ForceFullSceneLoadingForIncremental",{get:function(){return q.ForceFullSceneLoadingForIncremental},set:function(t){q.ForceFullSceneLoadingForIncremental=t},enumerable:!1,configurable:!0}),Object.defineProperty(i,"ShowLoadingScreen",{get:function(){return q.ShowLoadingScreen},set:function(t){q.ShowLoadingScreen=t},enumerable:!1,configurable:!0}),Object.defineProperty(i,"loggingLevel",{get:function(){return q.loggingLevel},set:function(t){q.loggingLevel=t},enumerable:!1,configurable:!0}),Object.defineProperty(i,"CleanBoneMatrixWeights",{get:function(){return q.CleanBoneMatrixWeights},set:function(t){q.CleanBoneMatrixWeights=t},enumerable:!1,configurable:!0}),i.GetDefaultPlugin=function(){return i._RegisteredPlugins[".babylon"]},i._GetPluginForExtension=function(t){var u=i._RegisteredPlugins[t];return u||(j.Warn("Unable to find a plugin to load "+t+" files. Trying to use .babylon default plugin. To load from a specific filetype (eg. gltf) see: https://doc.babylonjs.com/how_to/load_from_any_file_type"),i.GetDefaultPlugin())},i._GetPluginForDirectLoad=function(t){for(var u in i._RegisteredPlugins){var r=i._RegisteredPlugins[u].plugin;if(r.canDirectLoad&&r.canDirectLoad(t))return i._RegisteredPlugins[u]}return i.GetDefaultPlugin()},i._GetPluginForFilename=function(t){var u=t.indexOf("?");u!==-1&&(t=t.substring(0,u));var r=t.lastIndexOf("."),a=t.substring(r,t.length).toLowerCase();return i._GetPluginForExtension(a)},i._GetDirectLoad=function(t){return t.substr(0,5)==="data:"?t.substr(5):null},i._FormatErrorMessage=function(t,u,r){var a="Unable to load from "+t.url;return u?a+=": ".concat(u):r&&(a+=": ".concat(r)),a},i._LoadData=function(t,u,r,a,n,f,o){var s=i._GetDirectLoad(t.url),e=o?i._GetPluginForExtension(o):s?i._GetPluginForDirectLoad(t.url):i._GetPluginForFilename(t.url),l;if(e.plugin.createPlugin!==void 0?l=e.plugin.createPlugin():l=e.plugin,!l)throw"The loader plugin corresponding to the file type you are trying to load has not been found. If using es6, please import the plugin you wish to use before.";if(i.OnPluginActivatedObservable.notifyObservers(l),s&&(l.canDirectLoad&&l.canDirectLoad(t.url)||!Bi(t.url))){if(l.directLoad){var M=l.directLoad(u,s);M.then?M.then(function(_){r(l,_)}).catch(function(_){n("Error in directLoad of _loadData: "+_,_)}):r(l,M)}else r(l,s);return l}var h=e.isBinary,c=function(_,z){if(u.isDisposed){n("Scene has been disposed");return}r(l,_,z)},y=null,g=!1,v=l.onDisposeObservable;v&&v.add(function(){g=!0,y&&(y.abort(),y=null),f()});var d=function(){if(!g){var _=function(x,I){n(x==null?void 0:x.statusText,I)},z=t.file||t.url;y=l.loadFile?l.loadFile(u,z,c,a,h,_):u._loadFile(z,c,a,!0,h,_)}},S=u.getEngine(),b=S.enableOfflineSupport;if(b){for(var m=!1,k=0,E=u.disableOfflineSupportExceptionRules;k<E.length;k++){var P=E[k];if(P.test(t.url)){m=!0;break}}b=!m}return b&&Ci.OfflineProviderFactory?u.offlineProvider=Ci.OfflineProviderFactory(t.url,d,S.disableManifestCheck):d(),l},i._GetFileInfo=function(t,u){var r,a,n=null;if(!u)r=t,a=vi.GetFilename(t),t=vi.GetFolderPath(t);else if(u.name){var f=u;r="file:".concat(f.name),a=f.name,n=f}else if(typeof u=="string"&&u.startsWith("data:"))r=u,a="";else{var o=u;if(o.substr(0,1)==="/")return vi.Error("Wrong sceneFilename parameter"),null;r=t+o,a=o}return{url:r,rootUrl:t,name:a,file:n}},i.GetPluginForExtension=function(t){return i._GetPluginForExtension(t).plugin},i.IsPluginForExtensionAvailable=function(t){return!!i._RegisteredPlugins[t]},i.RegisterPlugin=function(t){if(typeof t.extensions=="string"){var u=t.extensions;i._RegisteredPlugins[u.toLowerCase()]={plugin:t,isBinary:!1}}else{var r=t.extensions;Object.keys(r).forEach(function(a){i._RegisteredPlugins[a.toLowerCase()]={plugin:t,isBinary:r[a].isBinary}})}},i.ImportMesh=function(t,u,r,a,n,f,o,s){if(r===void 0&&(r=""),a===void 0&&(a=D.LastCreatedScene),n===void 0&&(n=null),f===void 0&&(f=null),o===void 0&&(o=null),s===void 0&&(s=null),!a)return j.Error("No scene available to import mesh to"),null;var e=i._GetFileInfo(u,r);if(!e)return null;var l={};a.addPendingData(l);var M=function(){a.removePendingData(l)},h=function(g,v){var d=i._FormatErrorMessage(e,g,v);o?o(a,d,new ci(d,wi.SceneLoaderError,v)):j.Error(d),M()},c=f?function(g){try{f(g)}catch(v){h("Error in onProgress callback: "+v,v)}}:void 0,y=function(g,v,d,S,b,m,k){if(a.importedMeshesFiles.push(e.url),n)try{n(g,v,d,S,b,m,k)}catch(E){h("Error in onSuccess callback: "+E,E)}a.removePendingData(l)};return i._LoadData(e,a,function(g,v,d){if(g.rewriteRootURL&&(e.rootUrl=g.rewriteRootURL(e.rootUrl,d)),g.importMesh){var S=g,b=new Array,m=new Array,k=new Array;if(!S.importMesh(t,a,v,e.rootUrl,b,m,k,h))return;a.loadingPluginName=g.name,y(b,m,k,[],[],[],[])}else{var E=g;E.importMeshAsync(t,a,v,e.rootUrl,c,e.name).then(function(P){a.loadingPluginName=g.name,y(P.meshes,P.particleSystems,P.skeletons,P.animationGroups,P.transformNodes,P.geometries,P.lights)}).catch(function(P){h(P.message,P)})}},c,h,M,s)},i.ImportMeshAsync=function(t,u,r,a,n,f){return r===void 0&&(r=""),a===void 0&&(a=D.LastCreatedScene),n===void 0&&(n=null),f===void 0&&(f=null),new Promise(function(o,s){i.ImportMesh(t,u,r,a,function(e,l,M,h,c,y,g){o({meshes:e,particleSystems:l,skeletons:M,animationGroups:h,transformNodes:c,geometries:y,lights:g})},n,function(e,l,M){s(M||new Error(l))},f)})},i.Load=function(t,u,r,a,n,f,o){return u===void 0&&(u=""),r===void 0&&(r=D.LastCreatedEngine),a===void 0&&(a=null),n===void 0&&(n=null),f===void 0&&(f=null),o===void 0&&(o=null),r?i.Append(t,u,new Qi(r),a,n,f,o):(vi.Error("No engine available"),null)},i.LoadAsync=function(t,u,r,a,n){return u===void 0&&(u=""),r===void 0&&(r=D.LastCreatedEngine),a===void 0&&(a=null),n===void 0&&(n=null),new Promise(function(f,o){i.Load(t,u,r,function(s){f(s)},a,function(s,e,l){o(l||new Error(e))},n)})},i.Append=function(t,u,r,a,n,f,o){var s=this;if(u===void 0&&(u=""),r===void 0&&(r=D.LastCreatedScene),a===void 0&&(a=null),n===void 0&&(n=null),f===void 0&&(f=null),o===void 0&&(o=null),!r)return j.Error("No scene available to append to"),null;var e=i._GetFileInfo(t,u);if(!e)return null;var l={};r.addPendingData(l);var M=function(){r.removePendingData(l)};i.ShowLoadingScreen&&!this._ShowingLoadingScreen&&(this._ShowingLoadingScreen=!0,r.getEngine().displayLoadingUI(),r.executeWhenReady(function(){r.getEngine().hideLoadingUI(),s._ShowingLoadingScreen=!1}));var h=function(g,v){var d=i._FormatErrorMessage(e,g,v);f?f(r,d,new ci(d,wi.SceneLoaderError,v)):j.Error(d),M()},c=n?function(g){try{n(g)}catch(v){h("Error in onProgress callback",v)}}:void 0,y=function(){if(a)try{a(r)}catch(g){h("Error in onSuccess callback",g)}r.removePendingData(l)};return i._LoadData(e,r,function(g,v){if(g.load){var d=g;if(!d.load(r,v,e.rootUrl,h))return;r.loadingPluginName=g.name,y()}else{var S=g;S.loadAsync(r,v,e.rootUrl,c,e.name).then(function(){r.loadingPluginName=g.name,y()}).catch(function(b){h(b.message,b)})}},c,h,M,o)},i.AppendAsync=function(t,u,r,a,n){return u===void 0&&(u=""),r===void 0&&(r=D.LastCreatedScene),a===void 0&&(a=null),n===void 0&&(n=null),new Promise(function(f,o){i.Append(t,u,r,function(s){f(s)},a,function(s,e,l){o(l||new Error(e))},n)})},i.LoadAssetContainer=function(t,u,r,a,n,f,o){if(u===void 0&&(u=""),r===void 0&&(r=D.LastCreatedScene),a===void 0&&(a=null),n===void 0&&(n=null),f===void 0&&(f=null),o===void 0&&(o=null),!r)return j.Error("No scene available to load asset container to"),null;var s=i._GetFileInfo(t,u);if(!s)return null;var e={};r.addPendingData(e);var l=function(){r.removePendingData(e)},M=function(y,g){var v=i._FormatErrorMessage(s,y,g);f?f(r,v,new ci(v,wi.SceneLoaderError,g)):j.Error(v),l()},h=n?function(y){try{n(y)}catch(g){M("Error in onProgress callback",g)}}:void 0,c=function(y){if(a)try{a(y)}catch(g){M("Error in onSuccess callback",g)}r.removePendingData(e)};return i._LoadData(s,r,function(y,g){if(y.loadAssetContainer){var v=y,d=v.loadAssetContainer(r,g,s.rootUrl,M);if(!d)return;r.loadingPluginName=y.name,c(d)}else if(y.loadAssetContainerAsync){var S=y;S.loadAssetContainerAsync(r,g,s.rootUrl,h,s.name).then(function(b){r.loadingPluginName=y.name,c(b)}).catch(function(b){M(b.message,b)})}else M("LoadAssetContainer is not supported by this plugin. Plugin did not provide a loadAssetContainer or loadAssetContainerAsync method.")},h,M,l,o)},i.LoadAssetContainerAsync=function(t,u,r,a,n){return u===void 0&&(u=""),r===void 0&&(r=D.LastCreatedScene),a===void 0&&(a=null),n===void 0&&(n=null),new Promise(function(f,o){i.LoadAssetContainer(t,u,r,function(s){f(s)},a,function(s,e,l){o(l||new Error(e))},n)})},i.ImportAnimations=function(t,u,r,a,n,f,o,s,e,l){if(u===void 0&&(u=""),r===void 0&&(r=D.LastCreatedScene),a===void 0&&(a=!0),n===void 0&&(n=J.Clean),f===void 0&&(f=null),o===void 0&&(o=null),s===void 0&&(s=null),e===void 0&&(e=null),l===void 0&&(l=null),!r){j.Error("No scene available to load animations to");return}if(a){for(var M=0,h=r.animatables;M<h.length;M++){var c=h[M];c.reset()}r.stopAllAnimations(),r.animationGroups.slice().forEach(function(d){d.dispose()});var y=r.getNodes();y.forEach(function(d){d.animations&&(d.animations=[])})}else switch(n){case J.Clean:r.animationGroups.slice().forEach(function(d){d.dispose()});break;case J.Stop:r.animationGroups.forEach(function(d){d.stop()});break;case J.Sync:r.animationGroups.forEach(function(d){d.reset(),d.restart()});break;case J.NoSync:break;default:j.Error("Unknown animation group loading mode value '"+n+"'");return}var g=r.animatables.length,v=function(d){d.mergeAnimationsTo(r,r.animatables.slice(g),f),d.dispose(),r.onAnimationFileImportedObservable.notifyObservers(r),o&&o(r)};this.LoadAssetContainer(t,u,r,v,s,e,l)},i.ImportAnimationsAsync=function(t,u,r,a,n,f,o,s,e,l){return u===void 0&&(u=""),r===void 0&&(r=D.LastCreatedScene),a===void 0&&(a=!0),n===void 0&&(n=J.Clean),f===void 0&&(f=null),s===void 0&&(s=null),l===void 0&&(l=null),new Promise(function(M,h){i.ImportAnimations(t,u,r,a,n,f,function(c){M(c)},s,function(c,y,g){h(g||new Error(y))},l)})},i.NO_LOGGING=0,i.MINIMAL_LOGGING=1,i.SUMMARY_LOGGING=2,i.DETAILED_LOGGING=3,i.OnPluginActivatedObservable=new Di,i._RegisteredPlugins={},i._ShowingLoadingScreen=!1,i}(),en=function(){function i(t,u,r){u===void 0&&(u=""),r===void 0&&(r="black");var a=this;this._renderingCanvas=t,this._loadingText=u,this._loadingDivBackgroundColor=r,this._resizeLoadingUI=function(){var n=a._renderingCanvas.getBoundingClientRect(),f=window.getComputedStyle(a._renderingCanvas).position;!a._loadingDiv||(a._loadingDiv.style.position=f==="fixed"?"fixed":"absolute",a._loadingDiv.style.left=n.left+"px",a._loadingDiv.style.top=n.top+"px",a._loadingDiv.style.width=n.width+"px",a._loadingDiv.style.height=n.height+"px")}}return i.prototype.displayLoadingUI=function(){if(!this._loadingDiv){this._loadingDiv=document.createElement("div"),this._loadingDiv.id="babylonjsLoadingDiv",this._loadingDiv.style.opacity="0",this._loadingDiv.style.transition="opacity 1.5s ease",this._loadingDiv.style.pointerEvents="none",this._loadingDiv.style.display="grid",this._loadingDiv.style.gridTemplateRows="100%",this._loadingDiv.style.gridTemplateColumns="100%",this._loadingDiv.style.justifyItems="center",this._loadingDiv.style.alignItems="center",this._loadingTextDiv=document.createElement("div"),this._loadingTextDiv.style.position="absolute",this._loadingTextDiv.style.left="0",this._loadingTextDiv.style.top="50%",this._loadingTextDiv.style.marginTop="80px",this._loadingTextDiv.style.width="100%",this._loadingTextDiv.style.height="20px",this._loadingTextDiv.style.fontFamily="Arial",this._loadingTextDiv.style.fontSize="14px",this._loadingTextDiv.style.color="white",this._loadingTextDiv.style.textAlign="center",this._loadingTextDiv.style.zIndex="1",this._loadingTextDiv.innerHTML="Loading",this._loadingDiv.appendChild(this._loadingTextDiv),this._loadingTextDiv.innerHTML=this._loadingText,this._style=document.createElement("style"),this._style.type="text/css";var t=`@-webkit-keyframes spin1 {                    0% { -webkit-transform: rotate(0deg);}
                    100% { -webkit-transform: rotate(360deg);}
                }                @keyframes spin1 {                    0% { transform: rotate(0deg);}
                    100% { transform: rotate(360deg);}
                }`;this._style.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(this._style);var u=!!window.SVGSVGElement,r=new Image;i.DefaultLogoUrl?r.src=i.DefaultLogoUrl:r.src=u?"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODAuMTcgMjA4LjA0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6I2UwNjg0Yjt9LmNscy0ze2ZpbGw6I2JiNDY0Yjt9LmNscy00e2ZpbGw6I2UwZGVkODt9LmNscy01e2ZpbGw6I2Q1ZDJjYTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkJhYnlsb25Mb2dvPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iUGFnZV9FbGVtZW50cyIgZGF0YS1uYW1lPSJQYWdlIEVsZW1lbnRzIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik05MC4wOSwwLDAsNTJWMTU2bDkwLjA5LDUyLDkwLjA4LTUyVjUyWiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxODAuMTcgNTIuMDEgMTUxLjk3IDM1LjczIDEyNC44NSA1MS4zOSAxNTMuMDUgNjcuNjcgMTgwLjE3IDUyLjAxIi8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjI3LjEyIDY3LjY3IDExNy4yMSAxNS42NiA5MC4wOCAwIDAgNTIuMDEgMjcuMTIgNjcuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iNjEuODkgMTIwLjMgOTAuMDggMTM2LjU4IDExOC4yOCAxMjAuMyA5MC4wOCAxMDQuMDIgNjEuODkgMTIwLjMiLz48cG9seWdvbiBjbGFzcz0iY2xzLTMiIHBvaW50cz0iMTUzLjA1IDY3LjY3IDE1My4wNSAxNDAuMzcgOTAuMDggMTc2LjcyIDI3LjEyIDE0MC4zNyAyNy4xMiA2Ny42NyAwIDUyLjAxIDAgMTU2LjAzIDkwLjA4IDIwOC4wNCAxODAuMTcgMTU2LjAzIDE4MC4xNyA1Mi4wMSAxNTMuMDUgNjcuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTMiIHBvaW50cz0iOTAuMDggNzEuNDYgNjEuODkgODcuNzQgNjEuODkgMTIwLjMgOTAuMDggMTA0LjAyIDExOC4yOCAxMjAuMyAxMTguMjggODcuNzQgOTAuMDggNzEuNDYiLz48cG9seWdvbiBjbGFzcz0iY2xzLTQiIHBvaW50cz0iMTUzLjA1IDY3LjY3IDExOC4yOCA4Ny43NCAxMTguMjggMTIwLjMgOTAuMDggMTM2LjU4IDkwLjA4IDE3Ni43MiAxNTMuMDUgMTQwLjM3IDE1My4wNSA2Ny42NyIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNSIgcG9pbnRzPSIyNy4xMiA2Ny42NyA2MS44OSA4Ny43NCA2MS44OSAxMjAuMyA5MC4wOCAxMzYuNTggOTAuMDggMTc2LjcyIDI3LjEyIDE0MC4zNyAyNy4xMiA2Ny42NyIvPjwvZz48L2c+PC9zdmc+":"https://cdn.babylonjs.com/Assets/babylonLogo.png",r.style.width="150px",r.style.gridColumn="1",r.style.gridRow="1",r.style.top="50%",r.style.left="50%",r.style.transform="translate(-50%, -50%)",r.style.position="absolute";var a=document.createElement("div");a.style.width="300px",a.style.gridColumn="1",a.style.gridRow="1",a.style.top="50%",a.style.left="50%",a.style.transform="translate(-50%, -50%)",a.style.position="absolute";var n=new Image;if(i.DefaultSpinnerUrl?n.src=i.DefaultSpinnerUrl:n.src=u?"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTIgMzkyIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2UwNjg0Yjt9LmNscy0ye2ZpbGw6bm9uZTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPlNwaW5uZXJJY29uPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iU3Bpbm5lciI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDAuMjEsMTI2LjQzYzMuNy03LjMxLDcuNjctMTQuNDQsMTItMjEuMzJsMy4zNi01LjEsMy41Mi01YzEuMjMtMS42MywyLjQxLTMuMjksMy42NS00LjkxczIuNTMtMy4yMSwzLjgyLTQuNzlBMTg1LjIsMTg1LjIsMCwwLDEsODMuNCw2Ny40M2EyMDgsMjA4LDAsMCwxLDE5LTE1LjY2YzMuMzUtMi40MSw2Ljc0LTQuNzgsMTAuMjUtN3M3LjExLTQuMjgsMTAuNzUtNi4zMmM3LjI5LTQsMTQuNzMtOCwyMi41My0xMS40OSwzLjktMS43Miw3Ljg4LTMuMywxMi00LjY0YTEwNC4yMiwxMDQuMjIsMCwwLDEsMTIuNDQtMy4yMyw2Mi40NCw2Mi40NCwwLDAsMSwxMi43OC0xLjM5QTI1LjkyLDI1LjkyLDAsMCwxLDE5NiwyMS40NGE2LjU1LDYuNTUsMCwwLDEsMi4wNSw5LDYuNjYsNi42NiwwLDAsMS0xLjY0LDEuNzhsLS40MS4yOWEyMi4wNywyMi4wNywwLDAsMS01Ljc4LDMsMzAuNDIsMzAuNDIsMCwwLDEtNS42NywxLjYyLDM3LjgyLDM3LjgyLDAsMCwxLTUuNjkuNzFjLTEsMC0xLjkuMTgtMi44NS4yNmwtMi44NS4yNHEtNS43Mi41MS0xMS40OCwxLjFjLTMuODQuNC03LjcxLjgyLTExLjU4LDEuNGExMTIuMzQsMTEyLjM0LDAsMCwwLTIyLjk0LDUuNjFjLTMuNzIsMS4zNS03LjM0LDMtMTAuOTQsNC42NHMtNy4xNCwzLjUxLTEwLjYsNS41MUExNTEuNiwxNTEuNiwwLDAsMCw2OC41Niw4N0M2Ny4yMyw4OC40OCw2Niw5MCw2NC42NCw5MS41NnMtMi41MSwzLjE1LTMuNzUsNC43M2wtMy41NCw0LjljLTEuMTMsMS42Ni0yLjIzLDMuMzUtMy4zMyw1YTEyNywxMjcsMCwwLDAtMTAuOTMsMjEuNDksMS41OCwxLjU4LDAsMSwxLTMtMS4xNVM0MC4xOSwxMjYuNDcsNDAuMjEsMTI2LjQzWiIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgd2lkdGg9IjM5MiIgaGVpZ2h0PSIzOTIiLz48L2c+PC9nPjwvc3ZnPg==":"https://cdn.babylonjs.com/Assets/loadingIcon.png",n.style.animation="spin1 0.75s infinite linear",n.style.webkitAnimation="spin1 0.75s infinite linear",n.style.transformOrigin="50% 50%",n.style.webkitTransformOrigin="50% 50%",!u){var f={w:16,h:18.5},o={w:30,h:30};r.style.width="".concat(f.w,"vh"),r.style.height="".concat(f.h,"vh"),r.style.left="calc(50% - ".concat(f.w/2,"vh)"),r.style.top="calc(50% - ".concat(f.h/2,"vh)"),n.style.width="".concat(o.w,"vh"),n.style.height="".concat(o.h,"vh"),n.style.left="calc(50% - ".concat(o.w/2,"vh)"),n.style.top="calc(50% - ".concat(o.h/2,"vh)")}a.appendChild(n),this._loadingDiv.appendChild(r),this._loadingDiv.appendChild(a),this._resizeLoadingUI(),window.addEventListener("resize",this._resizeLoadingUI),this._loadingDiv.style.backgroundColor=this._loadingDivBackgroundColor,document.body.appendChild(this._loadingDiv),this._loadingDiv.style.opacity="1"}},i.prototype.hideLoadingUI=function(){var t=this;if(!!this._loadingDiv){var u=function(){t._loadingDiv&&(t._loadingDiv.parentElement&&t._loadingDiv.parentElement.removeChild(t._loadingDiv),t._loadingDiv=null),t._style&&(t._style.parentElement&&t._style.parentElement.removeChild(t._style),t._style=null),window.removeEventListener("resize",t._resizeLoadingUI)};this._loadingDiv.style.opacity="0",this._loadingDiv.addEventListener("transitionend",u)}},Object.defineProperty(i.prototype,"loadingUIText",{get:function(){return this._loadingText},set:function(t){this._loadingText=t,this._loadingTextDiv&&(this._loadingTextDiv.innerHTML=this._loadingText)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"loadingUIBackgroundColor",{get:function(){return this._loadingDivBackgroundColor},set:function(t){this._loadingDivBackgroundColor=t,this._loadingDiv&&(this._loadingDiv.style.backgroundColor=this._loadingDivBackgroundColor)},enumerable:!1,configurable:!0}),i.DefaultLogoUrl="",i.DefaultSpinnerUrl="",i}();Ci.DefaultLoadingScreenFactory=function(i){return new en(i)};var bi=function(){function i(){}return i.LoaderInjectedPhysicsEngine=void 0,i}(),ai={},V={},ji=function(i,t,u,r){if(!t.materials)return null;for(var a=0,n=t.materials.length;a<n;a++){var f=t.materials[a];if(i(f))return{parsedMaterial:f,material:xi.Parse(f,u,r)}}return null},rn=function(i,t,u){for(var r in t)if(i.name===t[r])return u.push(i.id),!0;return i.parentId!==void 0&&u.indexOf(i.parentId)!==-1?(u.push(i.id),!0):!1},ui=function(i,t){return i+" of "+(t?t.file+" from "+t.name+" version: "+t.version+", exporter version: "+t.exporter_version:"unknown")},pi=function(i,t){var u=t;if(t._waitingData.lods){if(t._waitingData.lods.ids&&t._waitingData.lods.ids.length>0){var r=t._waitingData.lods.ids,a=u.isEnabled(!1);if(t._waitingData.lods.distances){var n=t._waitingData.lods.distances;if(n.length>=r.length){var f=n.length>r.length?n[n.length-1]:0;u.setEnabled(!1);for(var o=0;o<r.length;o++){var s=r[o],e=i.getMeshById(s);e!=null&&u.addLODLevel(n[o],e)}f>0&&u.addLODLevel(f,null),a===!0&&u.setEnabled(!0)}else vi.Warn("Invalid level of detail distances for "+t.name)}}t._waitingData.lods=null}},mi=function(i,t,u){if(typeof i!="number"){var r=u.getLastEntryById(i);if(r&&t!==void 0&&t!==null){var a=r.instances[parseInt(t)];return a}return r}var n=ai[i];if(n&&t!==void 0&&t!==null){var a=n.instances[parseInt(t)];return a}return n},hi=function(i,t){return typeof i!="number"?t.getLastMaterialById(i,!0):V[i]},Pi=function(i,t,u,r,a){a===void 0&&(a=!1);var n=new Vi(i),f="importScene has failed JSON parse";try{var o=JSON.parse(t);f="";var s=A.loggingLevel===A.DETAILED_LOGGING,e=void 0,l=void 0;if(o.environmentTexture!==void 0&&o.environmentTexture!==null){var M=o.isPBR!==void 0?o.isPBR:!0;if(o.environmentTextureType&&o.environmentTextureType==="BABYLON.HDRCubeTexture"){var h=o.environmentTextureSize?o.environmentTextureSize:128,c=new Wi((o.environmentTexture.match(/https?:\/\//g)?"":u)+o.environmentTexture,i,h,!0,!M,void 0,o.environmentTexturePrefilterOnLoad);o.environmentTextureRotationY&&(c.rotationY=o.environmentTextureRotationY),i.environmentTexture=c}else if(typeof o.environmentTexture=="object"){var y=_i.Parse(o.environmentTexture,i,u);i.environmentTexture=y}else if(o.environmentTexture.endsWith(".env")){var g=new _i((o.environmentTexture.match(/https?:\/\//g)?"":u)+o.environmentTexture,i,o.environmentTextureForcedExtension);o.environmentTextureRotationY&&(g.rotationY=o.environmentTextureRotationY),i.environmentTexture=g}else{var v=_i.CreateFromPrefilteredData((o.environmentTexture.match(/https?:\/\//g)?"":u)+o.environmentTexture,i,o.environmentTextureForcedExtension);o.environmentTextureRotationY&&(v.rotationY=o.environmentTextureRotationY),i.environmentTexture=v}if(o.createDefaultSkybox===!0){var d=i.activeCamera!==void 0&&i.activeCamera!==null?(i.activeCamera.maxZ-i.activeCamera.minZ)/2:1e3,S=o.skyboxBlurLevel||0;i.createDefaultSkybox(i.environmentTexture,M,d,S)}n.environmentTexture=i.environmentTexture}if(o.environmentIntensity!==void 0&&o.environmentIntensity!==null&&(i.environmentIntensity=o.environmentIntensity),o.lights!==void 0&&o.lights!==null)for(e=0,l=o.lights.length;e<l;e++){var b=o.lights[e],m=qi.Parse(b,i);m&&(ai[b.uniqueId]=m,n.lights.push(m),m._parentContainer=n,f+=e===0?`
	Lights:`:"",f+=`
		`+m.toString(s))}if(o.reflectionProbes!==void 0&&o.reflectionProbes!==null)for(e=0,l=o.reflectionProbes.length;e<l;e++){var k=o.reflectionProbes[e],E=nn.Parse(k,i,u);E&&(n.reflectionProbes.push(E),E._parentContainer=n,f+=e===0?`
	Reflection Probes:`:"",f+=`
		`+E.toString(s))}if(o.animations!==void 0&&o.animations!==null)for(e=0,l=o.animations.length;e<l;e++){var P=o.animations[e],_=Ri("BABYLON.Animation");if(_){var z=_.Parse(P);i.animations.push(z),n.animations.push(z),f+=e===0?`
	Animations:`:"",f+=`
		`+z.toString(s)}}if(o.materials!==void 0&&o.materials!==null)for(e=0,l=o.materials.length;e<l;e++){var x=o.materials[e],I=xi.Parse(x,i,u);if(I){V[x.uniqueId||x.id]=I,n.materials.push(I),I._parentContainer=n,f+=e===0?`
	Materials:`:"",f+=`
		`+I.toString(s);var W=I.getActiveTextures();W.forEach(function(w){n.textures.indexOf(w)==-1&&(n.textures.push(w),w._parentContainer=n)})}}if(o.multiMaterials!==void 0&&o.multiMaterials!==null)for(e=0,l=o.multiMaterials.length;e<l;e++){var X=o.multiMaterials[e],R=zi.ParseMultiMaterial(X,i);V[X.uniqueId||X.id]=R,n.multiMaterials.push(R),R._parentContainer=n,f+=e===0?`
	MultiMaterials:`:"",f+=`
		`+R.toString(s);var W=R.getActiveTextures();W.forEach(function(B){n.textures.indexOf(B)==-1&&(n.textures.push(B),B._parentContainer=n)})}if(o.morphTargetManagers!==void 0&&o.morphTargetManagers!==null)for(var K=0,Q=o.morphTargetManagers;K<Q.length;K++){var di=Q[K],fi=Yi.Parse(di,i);n.morphTargetManagers.push(fi),fi._parentContainer=n}if(o.skeletons!==void 0&&o.skeletons!==null)for(e=0,l=o.skeletons.length;e<l;e++){var yi=o.skeletons[e],C=Ui.Parse(yi,i);n.skeletons.push(C),C._parentContainer=n,f+=e===0?`
	Skeletons:`:"",f+=`
		`+C.toString(s)}var $=o.geometries;if($!=null){var L=new Array,U=$.vertexData;if(U!=null)for(e=0,l=U.length;e<l;e++){var ii=U[e];L.push(Oi.Parse(ii,i,u))}L.forEach(function(w){w&&(n.geometries.push(w),w._parentContainer=n)})}if(o.transformNodes!==void 0&&o.transformNodes!==null)for(e=0,l=o.transformNodes.length;e<l;e++){var ni=o.transformNodes[e],ti=Ei.Parse(ni,i,u);ai[ni.uniqueId]=ti,n.transformNodes.push(ti),ti._parentContainer=n}if(o.meshes!==void 0&&o.meshes!==null)for(e=0,l=o.meshes.length;e<l;e++){var ei=o.meshes[e],N=Gi.Parse(ei,i,u);if(ai[ei.uniqueId]=N,n.meshes.push(N),N._parentContainer=n,N.hasInstances)for(var G=0,ri=N.instances;G<ri.length;G++){var F=ri[G];n.meshes.push(F),F._parentContainer=n}f+=e===0?`
	Meshes:`:"",f+=`
		`+N.toString(s)}if(o.cameras!==void 0&&o.cameras!==null)for(e=0,l=o.cameras.length;e<l;e++){var Mi=o.cameras[e],O=Fi.Parse(Mi,i);ai[Mi.uniqueId]=O,n.cameras.push(O),O._parentContainer=n,f+=e===0?`
	Cameras:`:"",f+=`
		`+O.toString(s)}if(o.postProcesses!==void 0&&o.postProcesses!==null)for(e=0,l=o.postProcesses.length;e<l;e++){var Ii=o.postProcesses[e],H=tn.Parse(Ii,i,u);H&&(n.postProcesses.push(H),H._parentContainer=n,f+=e===0?`
Postprocesses:`:"",f+=`
		`+H.toString())}if(o.animationGroups!==void 0&&o.animationGroups!==null)for(e=0,l=o.animationGroups.length;e<l;e++){var Li=o.animationGroups[e],gi=Hi.Parse(Li,i);n.animationGroups.push(gi),gi._parentContainer=n,f+=e===0?`
	AnimationGroups:`:"",f+=`
		`+gi.toString(s)}for(e=0,l=i.cameras.length;e<l;e++){var O=i.cameras[e];O._waitingParentId!==null&&(O.parent=mi(O._waitingParentId,O._waitingParentInstanceIndex,i),O._waitingParentId=null,O._waitingParentInstanceIndex=null)}for(e=0,l=i.lights.length;e<l;e++){var m=i.lights[e];m&&m._waitingParentId!==null&&(m.parent=mi(m._waitingParentId,m._waitingParentInstanceIndex,i),m._waitingParentId=null,m._waitingParentInstanceIndex=null)}for(e=0,l=i.transformNodes.length;e<l;e++){var p=i.transformNodes[e];p._waitingParentId!==null&&(p.parent=mi(p._waitingParentId,p._waitingParentInstanceIndex,i),p._waitingParentId=null,p._waitingParentInstanceIndex=null)}for(e=0,l=i.meshes.length;e<l;e++){var N=i.meshes[e];N._waitingParentId!==null&&(N.parent=mi(N._waitingParentId,N._waitingParentInstanceIndex,i),N._waitingParentId=null,N._waitingParentInstanceIndex=null),N._waitingData.lods&&pi(i,N)}for(i.multiMaterials.forEach(function(w){w._waitingSubMaterialsUniqueIds.forEach(function(B){w.subMaterials.push(hi(B,i))}),w._waitingSubMaterialsUniqueIds=[]}),i.meshes.forEach(function(w){w._waitingMaterialId!==null&&(w.material=hi(w._waitingMaterialId,i),w._waitingMaterialId=null)}),e=0,l=i.skeletons.length;e<l;e++){var C=i.skeletons[e];C._hasWaitingData&&(C.bones!=null&&C.bones.forEach(function(B){if(B._waitingTransformNodeId){var Ni=i.getLastEntryById(B._waitingTransformNodeId);Ni&&B.linkTransformNode(Ni),B._waitingTransformNodeId=null}}),C._hasWaitingData=null)}for(e=0,l=i.meshes.length;e<l;e++){var oi=i.meshes[e];oi._waitingData.freezeWorldMatrix?(oi.freezeWorldMatrix(),oi._waitingData.freezeWorldMatrix=null):oi.computeWorldMatrix(!0)}for(e=0,l=i.lights.length;e<l;e++){var m=i.lights[e];if(m._excludedMeshesIds.length>0){for(var li=0;li<m._excludedMeshesIds.length;li++){var si=i.getMeshById(m._excludedMeshesIds[li]);si&&m.excludedMeshes.push(si)}m._excludedMeshesIds=[]}if(m._includedOnlyMeshesIds.length>0){for(var Z=0;Z<m._includedOnlyMeshesIds.length;Z++){var T=i.getMeshById(m._includedOnlyMeshesIds[Z]);T&&m.includedOnlyMeshes.push(T)}m._includedOnlyMeshesIds=[]}}for(ki.Parse(o,i,n,u),e=0,l=i.meshes.length;e<l;e++){var N=i.meshes[e];N._waitingData.actions&&(Si.Parse(N._waitingData.actions,N,i),N._waitingData.actions=null)}o.actions!==void 0&&o.actions!==null&&Si.Parse(o.actions,null,i)}catch(w){var Y=ui("loadAssets",o?o.producer:"Unknown")+f;if(r)r(Y,w);else throw j.Log(Y),w}finally{ai={},V={},a||n.removeAllFromScene(),f!==null&&A.loggingLevel!==A.NO_LOGGING&&j.Log(ui("loadAssets",o?o.producer:"Unknown")+(A.loggingLevel!==A.MINIMAL_LOGGING?f:""))}return n};A.RegisterPlugin({name:"babylon.js",extensions:".babylon",canDirectLoad:function(i){return i.indexOf("babylon")!==-1},importMesh:function(i,t,u,r,a,n,f,o){var s,e="importMesh has failed JSON parse";try{var l=JSON.parse(u);e="";var M=A.loggingLevel===A.DETAILED_LOGGING;i?Array.isArray(i)||(i=[i]):i=null;var h=new Array,c=new Map,y=[];if(l.transformNodes!==void 0&&l.transformNodes!==null)for(var g=0,v=l.transformNodes.length;g<v;g++){var d=l.transformNodes[g],S=Ei.Parse(d,t,r);y.push(S),c.set(S._waitingParsedUniqueId,S),S._waitingParsedUniqueId=null}if(l.meshes!==void 0&&l.meshes!==null){for(var b=[],m=[],k=[],E=[],P=function(C,$){var L=l.meshes[C];if(i===null||rn(L,i,h)){if(i!==null&&delete i[i.indexOf(L.name)],L.geometryId!==void 0&&L.geometryId!==null&&l.geometries!==void 0&&l.geometries!==null){var U=!1;["boxes","spheres","cylinders","toruses","grounds","planes","torusKnots","vertexData"].forEach(function(T){U===!0||!l.geometries[T]||!Array.isArray(l.geometries[T])||l.geometries[T].forEach(function(Y){if(Y.id===L.geometryId){switch(T){case"vertexData":Oi.Parse(Y,t,r);break}U=!0}})}),U===!1&&j.Warn("Geometry not found for mesh "+L.id)}if(L.materialUniqueId||L.materialId){var ii=L.materialUniqueId?k:m,ni=ii.indexOf(L.materialUniqueId||L.materialId)!==-1;if(ni===!1&&l.multiMaterials!==void 0&&l.multiMaterials!==null)for(var ti=function(T,Y){ii.push(T);var w=ji(Y,l,t,r);w&&w.material&&(V[w.parsedMaterial.uniqueId||w.parsedMaterial.id]=w.material,e+=`
	Material `+w.material.toString(M))},ei=0,N=l.multiMaterials.length;ei<N;ei++){var G=l.multiMaterials[ei];if(L.materialUniqueId&&G.uniqueId===L.materialUniqueId||G.id===L.materialId){G.materialsUniqueIds?G.materialsUniqueIds.forEach(function(T){return ti(T,function(Y){return Y.uniqueId===T})}):G.materials.forEach(function(T){return ti(T,function(Y){return Y.id===T})}),ii.push(G.uniqueId||G.id);var ri=zi.ParseMultiMaterial(G,t);V[G.uniqueId||G.id]=ri,ri&&(ni=!0,e+=`
	Multi-Material `+ri.toString(M));break}}if(ni===!1){ii.push(L.materialUniqueId||L.materialId);var F=ji(function(T){return L.materialUniqueId&&T.uniqueId===L.materialUniqueId||T.id===L.materialId},l,t,r);!F||!F.material?j.Warn("Material not found for mesh "+L.id):(V[F.parsedMaterial.uniqueId||F.parsedMaterial.id]=F.material,e+=`
	Material `+F.material.toString(M))}}if(L.skeletonId>-1&&l.skeletons!==void 0&&l.skeletons!==null){var Mi=b.indexOf(L.skeletonId)>-1;if(!Mi)for(var O=0,Ii=l.skeletons.length;O<Ii;O++){var H=l.skeletons[O];if(H.id===L.skeletonId){var Li=Ui.Parse(H,t);f.push(Li),b.push(H.id),e+=`
	Skeleton `+Li.toString(M)}}}if(L.morphTargetManagerId>-1&&l.morphTargetManagers!==void 0&&l.morphTargetManagers!==null){var gi=E.indexOf(L.morphTargetManagerId)>-1;if(!gi)for(var p=0,oi=l.morphTargetManagers.length;p<oi;p++){var li=l.morphTargetManagers[p];if(li.id===L.morphTargetManagerId){var si=Yi.Parse(li,t);E.push(si.uniqueId),e+=`
Morph target `+si.toString()}}}var Z=Gi.Parse(L,t,r);a.push(Z),c.set(Z._waitingParsedUniqueId,Z),Z._waitingParsedUniqueId=null,e+=`
	Mesh `+Z.toString(M)}},g=0,v=l.meshes.length;g<v;g++)P(g,v);t.multiMaterials.forEach(function(C){C._waitingSubMaterialsUniqueIds.forEach(function($){C.subMaterials.push(hi($,t))}),C._waitingSubMaterialsUniqueIds=[]}),t.meshes.forEach(function(C){C._waitingMaterialId!==null&&(C.material=hi(C._waitingMaterialId,t),C._waitingMaterialId=null)});for(var g=0,v=t.transformNodes.length;g<v;g++){var _=t.transformNodes[g];if(_._waitingParentId!==null){var z=c.get(parseInt(_._waitingParentId))||null;z===null&&(z=t.getLastEntryById(_._waitingParentId));var x=z;_._waitingParentInstanceIndex&&(x=z.instances[parseInt(_._waitingParentInstanceIndex)],_._waitingParentInstanceIndex=null),_.parent=x,_._waitingParentId=null}}for(var I=void 0,g=0,v=t.meshes.length;g<v;g++){if(I=t.meshes[g],I._waitingParentId){var W=c.get(parseInt(I._waitingParentId))||null;W===null&&(W=t.getLastEntryById(I._waitingParentId));var x=W;if(I._waitingParentInstanceIndex&&(x=W.instances[parseInt(I._waitingParentInstanceIndex)],I._waitingParentInstanceIndex=null),I.parent=x,((s=I.parent)===null||s===void 0?void 0:s.getClassName())==="TransformNode"){var X=y.indexOf(I.parent);X>-1&&y.splice(X,1)}I._waitingParentId=null}I._waitingData.lods&&pi(t,I)}for(var R=0,K=y;R<K.length;R++){var _=K[R];_.dispose()}for(var g=0,v=t.skeletons.length;g<v;g++){var Q=t.skeletons[g];Q._hasWaitingData&&(Q.bones!=null&&Q.bones.forEach(function(L){if(L._waitingTransformNodeId){var U=t.getLastEntryById(L._waitingTransformNodeId);U&&L.linkTransformNode(U),L._waitingTransformNodeId=null}}),Q._hasWaitingData=null)}for(var g=0,v=t.meshes.length;g<v;g++)I=t.meshes[g],I._waitingData.freezeWorldMatrix?(I.freezeWorldMatrix(),I._waitingData.freezeWorldMatrix=null):I.computeWorldMatrix(!0)}if(l.particleSystems!==void 0&&l.particleSystems!==null){var di=ki.GetIndividualParser(Ji.NAME_PARTICLESYSTEM);if(di)for(var g=0,v=l.particleSystems.length;g<v;g++){var fi=l.particleSystems[g];h.indexOf(fi.emitterId)!==-1&&n.push(di(fi,t,r))}}return!0}catch(C){var yi=ui("importMesh",l?l.producer:"Unknown")+e;if(o)o(yi,C);else throw j.Log(yi),C}finally{e!==null&&A.loggingLevel!==A.NO_LOGGING&&j.Log(ui("importMesh",l?l.producer:"Unknown")+(A.loggingLevel!==A.MINIMAL_LOGGING?e:""))}return!1},load:function(i,t,u,r){var a="importScene has failed JSON parse";try{var n=JSON.parse(t);if(a="",n.useDelayedTextureLoading!==void 0&&n.useDelayedTextureLoading!==null&&(i.useDelayedTextureLoading=n.useDelayedTextureLoading&&!A.ForceFullSceneLoadingForIncremental),n.autoClear!==void 0&&n.autoClear!==null&&(i.autoClear=n.autoClear),n.clearColor!==void 0&&n.clearColor!==null&&(i.clearColor=Zi.FromArray(n.clearColor)),n.ambientColor!==void 0&&n.ambientColor!==null&&(i.ambientColor=Ti.FromArray(n.ambientColor)),n.gravity!==void 0&&n.gravity!==null&&(i.gravity=Ai.FromArray(n.gravity)),n.useRightHandedSystem!==void 0&&(i.useRightHandedSystem=!!n.useRightHandedSystem),n.fogMode&&n.fogMode!==0)switch(i.fogMode=n.fogMode,i.fogColor=Ti.FromArray(n.fogColor),i.fogStart=n.fogStart,i.fogEnd=n.fogEnd,i.fogDensity=n.fogDensity,a+="	Fog mode for scene:  ",i.fogMode){case 1:a+=`exp
`;break;case 2:a+=`exp2
`;break;case 3:a+=`linear
`;break}if(n.physicsEnabled){var f=void 0;n.physicsEngine==="cannon"?f=new Xi(void 0,void 0,bi.LoaderInjectedPhysicsEngine):n.physicsEngine==="oimo"?f=new Ki(void 0,bi.LoaderInjectedPhysicsEngine):n.physicsEngine==="ammo"&&(f=new $i(void 0,bi.LoaderInjectedPhysicsEngine,void 0)),a="	Physics engine "+(n.physicsEngine?n.physicsEngine:"oimo")+` enabled
`;var o=n.physicsGravity?Ai.FromArray(n.physicsGravity):null;i.enablePhysics(o,f)}n.metadata!==void 0&&n.metadata!==null&&(i.metadata=n.metadata),n.collisionsEnabled!==void 0&&n.collisionsEnabled!==null&&(i.collisionsEnabled=n.collisionsEnabled);var s=Pi(i,t,u,r,!0);return s?(n.autoAnimate&&i.beginAnimation(i,n.autoAnimateFrom,n.autoAnimateTo,n.autoAnimateLoop,n.autoAnimateSpeed||1),n.activeCameraID!==void 0&&n.activeCameraID!==null&&i.setActiveCameraById(n.activeCameraID),!0):!1}catch(l){var e=ui("importScene",n?n.producer:"Unknown")+a;if(r)r(e,l);else throw j.Log(e),l}finally{a!==null&&A.loggingLevel!==A.NO_LOGGING&&j.Log(ui("importScene",n?n.producer:"Unknown")+(A.loggingLevel!==A.MINIMAL_LOGGING?a:""))}return!1},loadAssetContainer:function(i,t,u,r){var a=Pi(i,t,u,r);return a}});export{A as S,q as a};