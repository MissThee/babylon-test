import{_ as X,j as h,O as W,g as J,h as Q,a as j,m as C}from"./precisionDate.1704d4c6.js";import{o as K,S as O,s as d,d as ee,p as Z,q as te,I as ie}from"./decorators.5af14a95.js";import{Matrix as v,Vector3 as N,TmpVectors as y}from"./math.vector.560c6bc4.js";import{E as re}from"./performanceConfigurator.ee04355d.js";import{S as k}from"./math.size.64d00435.js";import{R as ne,G as ae}from"./arrayTools.49279cc5.js";import{P as oe}from"./math.plane.7ea68d04.js";import{C as Y}from"./thinMaterialHelper.ab1f33f5.js";var se=function(){function s(e){this._wrapU=1,this._wrapV=1,this.wrapR=1,this.anisotropicFilteringLevel=4,this.delayLoadState=0,this._texture=null,this._engine=null,this._cachedSize=k.Zero(),this._cachedBaseSize=k.Zero(),this._initialSamplingMode=2,this._texture=e,this._texture&&(this._engine=this._texture.getEngine())}return Object.defineProperty(s.prototype,"wrapU",{get:function(){return this._wrapU},set:function(e){this._wrapU=e},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"wrapV",{get:function(){return this._wrapV},set:function(e){this._wrapV=e},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"coordinatesMode",{get:function(){return 0},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"isCube",{get:function(){return this._texture?this._texture.isCube:!1},set:function(e){!this._texture||(this._texture.isCube=e)},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"is3D",{get:function(){return this._texture?this._texture.is3D:!1},set:function(e){!this._texture||(this._texture.is3D=e)},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"is2DArray",{get:function(){return this._texture?this._texture.is2DArray:!1},set:function(e){!this._texture||(this._texture.is2DArray=e)},enumerable:!1,configurable:!0}),s.prototype.getClassName=function(){return"ThinTexture"},s.prototype.isReady=function(){return this.delayLoadState===4?(this.delayLoad(),!1):this._texture?this._texture.isReady:!1},s.prototype.delayLoad=function(){},s.prototype.getInternalTexture=function(){return this._texture},s.prototype.getSize=function(){if(this._texture){if(this._texture.width)return this._cachedSize.width=this._texture.width,this._cachedSize.height=this._texture.height,this._cachedSize;if(this._texture._size)return this._cachedSize.width=this._texture._size,this._cachedSize.height=this._texture._size,this._cachedSize}return this._cachedSize},s.prototype.getBaseSize=function(){return!this.isReady()||!this._texture?(this._cachedBaseSize.width=0,this._cachedBaseSize.height=0,this._cachedBaseSize):this._texture._size?(this._cachedBaseSize.width=this._texture._size,this._cachedBaseSize.height=this._texture._size,this._cachedBaseSize):(this._cachedBaseSize.width=this._texture.baseWidth,this._cachedBaseSize.height=this._texture.baseHeight,this._cachedBaseSize)},Object.defineProperty(s.prototype,"samplingMode",{get:function(){return this._texture?this._texture.samplingMode:this._initialSamplingMode},enumerable:!1,configurable:!0}),s.prototype.updateSamplingMode=function(e){this._texture&&this._engine&&this._engine.updateTextureSamplingMode(e,this._texture)},s.prototype.releaseInternalTexture=function(){this._texture&&(this._texture.dispose(),this._texture=null)},s.prototype.dispose=function(){this._texture&&(this.releaseInternalTexture(),this._engine=null)},s}(),ce=function(s){X(e,s);function e(t,n){n===void 0&&(n=null);var i=s.call(this,null)||this;return i.metadata=null,i.reservedDataStore=null,i._hasAlpha=!1,i._getAlphaFromRGB=!1,i.level=1,i._coordinatesIndex=0,i._coordinatesMode=0,i.wrapR=1,i.anisotropicFilteringLevel=e.DEFAULT_ANISOTROPIC_FILTERING_LEVEL,i._isCube=!1,i._gammaSpace=!0,i.invertZ=!1,i.lodLevelInAlpha=!1,i.isRenderTarget=!1,i._prefiltered=!1,i._forceSerialize=!1,i.animations=new Array,i.onDisposeObservable=new W,i._onDisposeObserver=null,i._scene=null,i._uid=null,i._parentContainer=null,i._loadingError=!1,t?e._IsScene(t)?i._scene=t:i._engine=t:i._scene=re.LastCreatedScene,i._scene&&(i.uniqueId=i._scene.getUniqueId(),i._scene.addTexture(i),i._engine=i._scene.getEngine()),i._texture=n,i._uid=null,i}return Object.defineProperty(e.prototype,"hasAlpha",{get:function(){return this._hasAlpha},set:function(t){var n=this;this._hasAlpha!==t&&(this._hasAlpha=t,this._scene&&this._scene.markAllMaterialsAsDirty(1,function(i){return i.hasTexture(n)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"getAlphaFromRGB",{get:function(){return this._getAlphaFromRGB},set:function(t){var n=this;this._getAlphaFromRGB!==t&&(this._getAlphaFromRGB=t,this._scene&&this._scene.markAllMaterialsAsDirty(1,function(i){return i.hasTexture(n)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"coordinatesIndex",{get:function(){return this._coordinatesIndex},set:function(t){var n=this;this._coordinatesIndex!==t&&(this._coordinatesIndex=t,this._scene&&this._scene.markAllMaterialsAsDirty(1,function(i){return i.hasTexture(n)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"coordinatesMode",{get:function(){return this._coordinatesMode},set:function(t){var n=this;this._coordinatesMode!==t&&(this._coordinatesMode=t,this._scene&&this._scene.markAllMaterialsAsDirty(1,function(i){return i.hasTexture(n)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapU",{get:function(){return this._wrapU},set:function(t){this._wrapU=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapV",{get:function(){return this._wrapV},set:function(t){this._wrapV=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isCube",{get:function(){return this._texture?this._texture.isCube:this._isCube},set:function(t){this._texture?this._texture.isCube=t:this._isCube=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"is3D",{get:function(){return this._texture?this._texture.is3D:!1},set:function(t){!this._texture||(this._texture.is3D=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"is2DArray",{get:function(){return this._texture?this._texture.is2DArray:!1},set:function(t){!this._texture||(this._texture.is2DArray=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gammaSpace",{get:function(){if(this._texture)this._texture._gammaSpace===null&&(this._texture._gammaSpace=this._gammaSpace);else return this._gammaSpace;return this._texture._gammaSpace&&!this._texture._useSRGBBuffer},set:function(t){if(this._texture){if(this._texture._gammaSpace===t)return;this._texture._gammaSpace=t}else{if(this._gammaSpace===t)return;this._gammaSpace=t}this._markAllSubMeshesAsTexturesDirty()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isRGBD",{get:function(){return this._texture!=null&&this._texture._isRGBD},set:function(t){this._texture&&(this._texture._isRGBD=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noMipmap",{get:function(){return!1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lodGenerationOffset",{get:function(){return this._texture?this._texture._lodGenerationOffset:0},set:function(t){this._texture&&(this._texture._lodGenerationOffset=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lodGenerationScale",{get:function(){return this._texture?this._texture._lodGenerationScale:0},set:function(t){this._texture&&(this._texture._lodGenerationScale=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"linearSpecularLOD",{get:function(){return this._texture?this._texture._linearSpecularLOD:!1},set:function(t){this._texture&&(this._texture._linearSpecularLOD=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"irradianceTexture",{get:function(){return this._texture?this._texture._irradianceTexture:null},set:function(t){this._texture&&(this._texture._irradianceTexture=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"uid",{get:function(){return this._uid||(this._uid=K()),this._uid},enumerable:!1,configurable:!0}),e.prototype.toString=function(){return this.name},e.prototype.getClassName=function(){return"BaseTexture"},Object.defineProperty(e.prototype,"onDispose",{set:function(t){this._onDisposeObserver&&this.onDisposeObservable.remove(this._onDisposeObserver),this._onDisposeObserver=this.onDisposeObservable.add(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isBlocking",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"loadingError",{get:function(){return this._loadingError},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"errorObject",{get:function(){return this._errorObject},enumerable:!1,configurable:!0}),e.prototype.getScene=function(){return this._scene},e.prototype._getEngine=function(){return this._engine},e.prototype.checkTransformsAreIdentical=function(t){return t!==null},e.prototype.getTextureMatrix=function(){return v.IdentityReadOnly},e.prototype.getReflectionTextureMatrix=function(){return v.IdentityReadOnly},e.prototype.isReadyOrNotBlocking=function(){return!this.isBlocking||this.isReady()||this.loadingError},e.prototype.scale=function(t){},Object.defineProperty(e.prototype,"canRescale",{get:function(){return!1},enumerable:!1,configurable:!0}),e.prototype._getFromCache=function(t,n,i,a,l,u){var o=this._getEngine();if(!o)return null;for(var c=o._getUseSRGBBuffer(!!l,n),f=o.getLoadedTexturesCache(),p=0;p<f.length;p++){var _=f[p];if((l===void 0||c===_._useSRGBBuffer)&&(a===void 0||a===_.invertY)&&_.url===t&&_.generateMipMaps===!n&&(!i||i===_.samplingMode)&&(u===void 0||u===_.isCube))return _.incrementReferences(),_}return null},e.prototype._rebuild=function(){},e.prototype.clone=function(){return null},Object.defineProperty(e.prototype,"textureType",{get:function(){return this._texture&&this._texture.type!==void 0?this._texture.type:0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textureFormat",{get:function(){return this._texture&&this._texture.format!==void 0?this._texture.format:5},enumerable:!1,configurable:!0}),e.prototype._markAllSubMeshesAsTexturesDirty=function(){var t=this.getScene();!t||t.markAllMaterialsAsDirty(1)},e.prototype.readPixels=function(t,n,i,a,l,u,o,c,f){if(t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=null),a===void 0&&(a=!0),l===void 0&&(l=!1),u===void 0&&(u=0),o===void 0&&(o=0),c===void 0&&(c=Number.MAX_VALUE),f===void 0&&(f=Number.MAX_VALUE),!this._texture)return null;var p=this._getEngine();if(!p)return null;var _=this.getSize(),g=_.width,m=_.height;n!==0&&(g=g/Math.pow(2,n),m=m/Math.pow(2,n),g=Math.round(g),m=Math.round(m)),c=Math.min(g,c),f=Math.min(m,f);try{return this._texture.isCube?p._readTexturePixels(this._texture,c,f,t,n,i,a,l,u,o):p._readTexturePixels(this._texture,c,f,-1,n,i,a,l,u,o)}catch{return null}},e.prototype._readPixelsSync=function(t,n,i,a,l){if(t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=null),a===void 0&&(a=!0),l===void 0&&(l=!1),!this._texture)return null;var u=this.getSize(),o=u.width,c=u.height,f=this._getEngine();if(!f)return null;n!=0&&(o=o/Math.pow(2,n),c=c/Math.pow(2,n),o=Math.round(o),c=Math.round(c));try{return this._texture.isCube?f._readTexturePixelsSync(this._texture,o,c,t,n,i,a,l):f._readTexturePixelsSync(this._texture,o,c,-1,n,i,a,l)}catch{return null}},Object.defineProperty(e.prototype,"_lodTextureHigh",{get:function(){return this._texture?this._texture._lodTextureHigh:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_lodTextureMid",{get:function(){return this._texture?this._texture._lodTextureMid:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_lodTextureLow",{get:function(){return this._texture?this._texture._lodTextureLow:null},enumerable:!1,configurable:!0}),e.prototype.dispose=function(){if(this._scene){this._scene.stopAnimation&&this._scene.stopAnimation(this),this._scene.removePendingData(this);var t=this._scene.textures.indexOf(this);if(t>=0&&this._scene.textures.splice(t,1),this._scene.onTextureRemovedObservable.notifyObservers(this),this._scene=null,this._parentContainer){var n=this._parentContainer.textures.indexOf(this);n>-1&&this._parentContainer.textures.splice(n,1),this._parentContainer=null}}this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),this.metadata=null,s.prototype.dispose.call(this)},e.prototype.serialize=function(){if(!this.name)return null;var t=O.Serialize(this);return O.AppendSerializedAnimations(this,t),t},e.WhenAllReady=function(t,n){var i=t.length;if(i===0){n();return}for(var a=0;a<t.length;a++){var l=t[a];if(l.isReady())--i===0&&n();else{var u=l.onLoadObservable;u?u.addOnce(function(){--i===0&&n()}):--i===0&&n()}}},e._IsScene=function(t){return t.getClassName()==="Scene"},e.DEFAULT_ANISOTROPIC_FILTERING_LEVEL=4,h([d()],e.prototype,"uniqueId",void 0),h([d()],e.prototype,"name",void 0),h([d()],e.prototype,"metadata",void 0),h([d("hasAlpha")],e.prototype,"_hasAlpha",void 0),h([d("getAlphaFromRGB")],e.prototype,"_getAlphaFromRGB",void 0),h([d()],e.prototype,"level",void 0),h([d("coordinatesIndex")],e.prototype,"_coordinatesIndex",void 0),h([d("coordinatesMode")],e.prototype,"_coordinatesMode",void 0),h([d()],e.prototype,"wrapU",null),h([d()],e.prototype,"wrapV",null),h([d()],e.prototype,"wrapR",void 0),h([d()],e.prototype,"anisotropicFilteringLevel",void 0),h([d()],e.prototype,"isCube",null),h([d()],e.prototype,"is3D",null),h([d()],e.prototype,"is2DArray",null),h([d()],e.prototype,"gammaSpace",null),h([d()],e.prototype,"invertZ",void 0),h([d()],e.prototype,"lodLevelInAlpha",void 0),h([d()],e.prototype,"lodGenerationOffset",null),h([d()],e.prototype,"lodGenerationScale",null),h([d()],e.prototype,"linearSpecularLOD",null),h([ee()],e.prototype,"irradianceTexture",null),h([d()],e.prototype,"isRenderTarget",void 0),e}(se);function q(s,e,t){t===void 0&&(t=!1);var n=e.width,i=e.height;if(s instanceof Float32Array){for(var a=s.byteLength/s.BYTES_PER_ELEMENT,l=new Uint8Array(a);--a>=0;){var u=s[a];u<0?u=0:u>1&&(u=1),l[a]=u*255}s=l}var o=document.createElement("canvas");o.width=n,o.height=i;var c=o.getContext("2d");if(!c)return null;var f=c.createImageData(n,i),p=f.data;if(p.set(s),c.putImageData(f,0,0),t){var _=document.createElement("canvas");_.width=n,_.height=i;var g=_.getContext("2d");return g?(g.translate(0,i),g.scale(1,-1),g.drawImage(o,0,0),_.toDataURL("image/png")):null}return o.toDataURL("image/png")}function le(s,e,t){e===void 0&&(e=0),t===void 0&&(t=0);var n=s.getInternalTexture();if(!n)return null;var i=s._readPixelsSync(e,t);return i?q(i,s.getSize(),n.invertY):null}function ue(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=0),J(this,void 0,void 0,function(){var n,i;return Q(this,function(a){switch(a.label){case 0:return n=s.getInternalTexture(),n?[4,s.readPixels(e,t)]:[2,null];case 1:return i=a.sent(),i?[2,q(i,s.getSize(),n.invertY)]:[2,null]}})})}var H=function(s){X(e,s);function e(t,n,i,a,l,u,o,c,f,p,_,g,m,A){l===void 0&&(l=e.TRILINEAR_SAMPLINGMODE),u===void 0&&(u=null),o===void 0&&(o=null),c===void 0&&(c=null),f===void 0&&(f=!1);var r=this,b,x,D,w,B,G,U,V,z;r=s.call(this,n)||this,r.url=null,r.uOffset=0,r.vOffset=0,r.uScale=1,r.vScale=1,r.uAng=0,r.vAng=0,r.wAng=0,r.uRotationCenter=.5,r.vRotationCenter=.5,r.wRotationCenter=.5,r.homogeneousRotationInUVTransform=!1,r.inspectableCustomProperties=null,r._noMipmap=!1,r._invertY=!1,r._rowGenerationMatrix=null,r._cachedTextureMatrix=null,r._projectionModeMatrix=null,r._t0=null,r._t1=null,r._t2=null,r._cachedUOffset=-1,r._cachedVOffset=-1,r._cachedUScale=0,r._cachedVScale=0,r._cachedUAng=-1,r._cachedVAng=-1,r._cachedWAng=-1,r._cachedProjectionMatrixId=-1,r._cachedURotationCenter=-1,r._cachedVRotationCenter=-1,r._cachedWRotationCenter=-1,r._cachedHomogeneousRotationInUVTransform=!1,r._cachedCoordinatesMode=-1,r._buffer=null,r._deleteBuffer=!1,r._format=null,r._delayedOnLoad=null,r._delayedOnError=null,r.onLoadObservable=new W,r._isBlocking=!0,r.name=t||"",r.url=t;var E,I=!1,T=null;typeof i=="object"&&i!==null?(E=(b=i.noMipmap)!==null&&b!==void 0?b:!1,a=(x=i.invertY)!==null&&x!==void 0?x:!Y.UseOpenGLOrientationForUV,l=(D=i.samplingMode)!==null&&D!==void 0?D:e.TRILINEAR_SAMPLINGMODE,u=(w=i.onLoad)!==null&&w!==void 0?w:null,o=(B=i.onError)!==null&&B!==void 0?B:null,c=(G=i.buffer)!==null&&G!==void 0?G:null,f=(U=i.deleteBuffer)!==null&&U!==void 0?U:!1,p=i.format,_=i.mimeType,g=i.loaderOptions,m=i.creationFlags,I=(V=i.useSRGBBuffer)!==null&&V!==void 0?V:!1,T=(z=i.internalTexture)!==null&&z!==void 0?z:null):E=!!i,r._noMipmap=E,r._invertY=a===void 0?!Y.UseOpenGLOrientationForUV:a,r._initialSamplingMode=l,r._buffer=c,r._deleteBuffer=f,r._mimeType=_,r._loaderOptions=g,r._creationFlags=m,r._useSRGBBuffer=I,r._forcedExtension=A,p&&(r._format=p);var P=r.getScene(),F=r._getEngine();if(!F)return r;F.onBeforeTextureInitObservable.notifyObservers(r);var M=function(){r._texture&&(r._texture._invertVScale&&(r.vScale*=-1,r.vOffset+=1),r._texture._cachedWrapU!==null&&(r.wrapU=r._texture._cachedWrapU,r._texture._cachedWrapU=null),r._texture._cachedWrapV!==null&&(r.wrapV=r._texture._cachedWrapV,r._texture._cachedWrapV=null),r._texture._cachedWrapR!==null&&(r.wrapR=r._texture._cachedWrapR,r._texture._cachedWrapR=null)),r.onLoadObservable.hasObservers()&&r.onLoadObservable.notifyObservers(r),u&&u(),!r.isBlocking&&P&&P.resetCachedMaterial()},L=function(S,R){r._loadingError=!0,r._errorObject={message:S,exception:R},o&&o(S,R),e.OnTextureLoadErrorObservable.notifyObservers(r)};if(!r.url)return r._delayedOnLoad=M,r._delayedOnError=L,r;if(r._texture=T!=null?T:r._getFromCache(r.url,E,l,r._invertY,I),r._texture)if(r._texture.isReady)Z.SetImmediate(function(){return M()});else{var $=r._texture.onLoadedObservable.add(M);r._texture.onErrorObservable.add(function(S){var R;L(S.message,S.exception),(R=r._texture)===null||R===void 0||R.onLoadedObservable.remove($)})}else if(!P||!P.useDelayedTextureLoading){try{r._texture=F.createTexture(r.url,E,r._invertY,P,l,M,L,r._buffer,void 0,r._format,r._forcedExtension,_,g,m,I)}catch(S){throw L("error loading",S),S}f&&(r._buffer=null)}else r.delayLoadState=4,r._delayedOnLoad=M,r._delayedOnError=L;return r}return Object.defineProperty(e.prototype,"noMipmap",{get:function(){return this._noMipmap},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mimeType",{get:function(){return this._mimeType},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isBlocking",{get:function(){return this._isBlocking},set:function(t){this._isBlocking=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"invertY",{get:function(){return this._invertY},enumerable:!1,configurable:!0}),e.prototype.updateURL=function(t,n,i,a){n===void 0&&(n=null),this.url&&(this.releaseInternalTexture(),this.getScene().markAllMaterialsAsDirty(1)),(!this.name||this.name.startsWith("data:"))&&(this.name=t),this.url=t,this._buffer=n,this._forcedExtension=a,this.delayLoadState=4,i&&(this._delayedOnLoad=i),this.delayLoad()},e.prototype.delayLoad=function(){if(this.delayLoadState===4){var t=this.getScene();!t||(this.delayLoadState=1,this._texture=this._getFromCache(this.url,this._noMipmap,this.samplingMode,this._invertY,this._useSRGBBuffer),this._texture?this._delayedOnLoad&&(this._texture.isReady?Z.SetImmediate(this._delayedOnLoad):this._texture.onLoadedObservable.add(this._delayedOnLoad)):(this._texture=t.getEngine().createTexture(this.url,this._noMipmap,this._invertY,t,this.samplingMode,this._delayedOnLoad,this._delayedOnError,this._buffer,null,this._format,this._forcedExtension,this._mimeType,this._loaderOptions,this._creationFlags,this._useSRGBBuffer),this._deleteBuffer&&(this._buffer=null)),this._delayedOnLoad=null,this._delayedOnError=null)}},e.prototype._prepareRowForTextureGeneration=function(t,n,i,a){t*=this._cachedUScale,n*=this._cachedVScale,t-=this.uRotationCenter*this._cachedUScale,n-=this.vRotationCenter*this._cachedVScale,i-=this.wRotationCenter,N.TransformCoordinatesFromFloatsToRef(t,n,i,this._rowGenerationMatrix,a),a.x+=this.uRotationCenter*this._cachedUScale+this._cachedUOffset,a.y+=this.vRotationCenter*this._cachedVScale+this._cachedVOffset,a.z+=this.wRotationCenter},e.prototype.checkTransformsAreIdentical=function(t){return t!==null&&this.uOffset===t.uOffset&&this.vOffset===t.vOffset&&this.uScale===t.uScale&&this.vScale===t.vScale&&this.uAng===t.uAng&&this.vAng===t.vAng&&this.wAng===t.wAng},e.prototype.getTextureMatrix=function(t){var n=this;if(t===void 0&&(t=1),this.uOffset===this._cachedUOffset&&this.vOffset===this._cachedVOffset&&this.uScale*t===this._cachedUScale&&this.vScale===this._cachedVScale&&this.uAng===this._cachedUAng&&this.vAng===this._cachedVAng&&this.wAng===this._cachedWAng&&this.uRotationCenter===this._cachedURotationCenter&&this.vRotationCenter===this._cachedVRotationCenter&&this.wRotationCenter===this._cachedWRotationCenter&&this.homogeneousRotationInUVTransform===this._cachedHomogeneousRotationInUVTransform)return this._cachedTextureMatrix;this._cachedUOffset=this.uOffset,this._cachedVOffset=this.vOffset,this._cachedUScale=this.uScale*t,this._cachedVScale=this.vScale,this._cachedUAng=this.uAng,this._cachedVAng=this.vAng,this._cachedWAng=this.wAng,this._cachedURotationCenter=this.uRotationCenter,this._cachedVRotationCenter=this.vRotationCenter,this._cachedWRotationCenter=this.wRotationCenter,this._cachedHomogeneousRotationInUVTransform=this.homogeneousRotationInUVTransform,(!this._cachedTextureMatrix||!this._rowGenerationMatrix)&&(this._cachedTextureMatrix=v.Zero(),this._rowGenerationMatrix=new v,this._t0=N.Zero(),this._t1=N.Zero(),this._t2=N.Zero()),v.RotationYawPitchRollToRef(this.vAng,this.uAng,this.wAng,this._rowGenerationMatrix),this.homogeneousRotationInUVTransform?(v.TranslationToRef(-this._cachedURotationCenter,-this._cachedVRotationCenter,-this._cachedWRotationCenter,y.Matrix[0]),v.TranslationToRef(this._cachedURotationCenter,this._cachedVRotationCenter,this._cachedWRotationCenter,y.Matrix[1]),v.ScalingToRef(this._cachedUScale,this._cachedVScale,0,y.Matrix[2]),v.TranslationToRef(this._cachedUOffset,this._cachedVOffset,0,y.Matrix[3]),y.Matrix[0].multiplyToRef(this._rowGenerationMatrix,this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(y.Matrix[1],this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(y.Matrix[2],this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(y.Matrix[3],this._cachedTextureMatrix),this._cachedTextureMatrix.setRowFromFloats(2,this._cachedTextureMatrix.m[12],this._cachedTextureMatrix.m[13],this._cachedTextureMatrix.m[14],1)):(this._prepareRowForTextureGeneration(0,0,0,this._t0),this._prepareRowForTextureGeneration(1,0,0,this._t1),this._prepareRowForTextureGeneration(0,1,0,this._t2),this._t1.subtractInPlace(this._t0),this._t2.subtractInPlace(this._t0),v.FromValuesToRef(this._t1.x,this._t1.y,this._t1.z,0,this._t2.x,this._t2.y,this._t2.z,0,this._t0.x,this._t0.y,this._t0.z,0,0,0,0,1,this._cachedTextureMatrix));var i=this.getScene();return i?(i.markAllMaterialsAsDirty(1,function(a){return a.hasTexture(n)}),this._cachedTextureMatrix):this._cachedTextureMatrix},e.prototype.getReflectionTextureMatrix=function(){var t=this,n=this.getScene();if(!n)return this._cachedTextureMatrix;if(this.uOffset===this._cachedUOffset&&this.vOffset===this._cachedVOffset&&this.uScale===this._cachedUScale&&this.vScale===this._cachedVScale&&this.coordinatesMode===this._cachedCoordinatesMode)if(this.coordinatesMode===e.PROJECTION_MODE){if(this._cachedProjectionMatrixId===n.getProjectionMatrix().updateFlag)return this._cachedTextureMatrix}else return this._cachedTextureMatrix;this._cachedTextureMatrix||(this._cachedTextureMatrix=v.Zero()),this._projectionModeMatrix||(this._projectionModeMatrix=v.Zero());var i=this._cachedCoordinatesMode!==this.coordinatesMode;switch(this._cachedUOffset=this.uOffset,this._cachedVOffset=this.vOffset,this._cachedUScale=this.uScale,this._cachedVScale=this.vScale,this._cachedCoordinatesMode=this.coordinatesMode,this.coordinatesMode){case e.PLANAR_MODE:{v.IdentityToRef(this._cachedTextureMatrix),this._cachedTextureMatrix[0]=this.uScale,this._cachedTextureMatrix[5]=this.vScale,this._cachedTextureMatrix[12]=this.uOffset,this._cachedTextureMatrix[13]=this.vOffset;break}case e.PROJECTION_MODE:{v.FromValuesToRef(.5,0,0,0,0,-.5,0,0,0,0,0,0,.5,.5,1,1,this._projectionModeMatrix);var a=n.getProjectionMatrix();this._cachedProjectionMatrixId=a.updateFlag,a.multiplyToRef(this._projectionModeMatrix,this._cachedTextureMatrix);break}default:v.IdentityToRef(this._cachedTextureMatrix);break}return i&&n.markAllMaterialsAsDirty(1,function(l){return l.getActiveTextures().indexOf(t)!==-1}),this._cachedTextureMatrix},e.prototype.clone=function(){var t=this,n={noMipmap:this._noMipmap,invertY:this._invertY,samplingMode:this.samplingMode,onLoad:void 0,onError:void 0,buffer:this._texture?this._texture._buffer:void 0,deleteBuffer:this._deleteBuffer,format:this.textureFormat,mimeType:this.mimeType,loaderOptions:this._loaderOptions,creationFlags:this._creationFlags,useSRGBBuffer:this._useSRGBBuffer};return O.Clone(function(){return new e(t._texture?t._texture.url:null,t.getScene(),n)},this)},e.prototype.serialize=function(){var t=this.name;e.SerializeBuffers||this.name.startsWith("data:")&&(this.name=""),this.name.startsWith("data:")&&this.url===this.name&&(this.url="");var n=s.prototype.serialize.call(this);return n?((e.SerializeBuffers||e.ForceSerializeBuffers)&&(typeof this._buffer=="string"&&this._buffer.substr(0,5)==="data:"?(n.base64String=this._buffer,n.name=n.name.replace("data:","")):this.url&&this.url.startsWith("data:")&&this._buffer instanceof Uint8Array?n.base64String="data:image/png;base64,"+te(this._buffer):(e.ForceSerializeBuffers||this.url&&this.url.startsWith("blob:")||this._forceSerialize)&&(n.base64String=!this._engine||this._engine._features.supportSyncTextureRead?le(this):ue(this))),n.invertY=this._invertY,n.samplingMode=this.samplingMode,n._creationFlags=this._creationFlags,n._useSRGBBuffer=this._useSRGBBuffer,this.name=t,n):null},e.prototype.getClassName=function(){return"Texture"},e.prototype.dispose=function(){s.prototype.dispose.call(this),this.onLoadObservable.clear(),this._delayedOnLoad=null,this._delayedOnError=null},e.Parse=function(t,n,i){if(t.customType){var a=ie.Instantiate(t.customType),l=a.Parse(t,n,i);return t.samplingMode&&l.updateSamplingMode&&l._samplingMode&&l._samplingMode!==t.samplingMode&&l.updateSamplingMode(t.samplingMode),l}if(t.isCube&&!t.isRenderTarget)return e._CubeTextureParser(t,n,i);if(!t.name&&!t.isRenderTarget)return null;var u=function(){if(o&&o._texture&&(o._texture._cachedWrapU=null,o._texture._cachedWrapV=null,o._texture._cachedWrapR=null),t.samplingMode){var c=t.samplingMode;o&&o.samplingMode!==c&&o.updateSamplingMode(c)}if(o&&t.animations)for(var f=0;f<t.animations.length;f++){var p=t.animations[f],_=ae("BABYLON.Animation");_&&o.animations.push(_.Parse(p))}},o=O.Parse(function(){var c,f,p,_=!0;if(t.noMipmap&&(_=!1),t.mirrorPlane){var g=e._CreateMirror(t.name,t.renderTargetSize,n,_);return g._waitingRenderList=t.renderList,g.mirrorPlane=oe.FromArray(t.mirrorPlane),u(),g}else if(t.isRenderTarget){var m=null;if(t.isCube){if(n.reflectionProbes)for(var A=0;A<n.reflectionProbes.length;A++){var r=n.reflectionProbes[A];if(r.name===t.name)return r.cubeTexture}}else m=e._CreateRenderTargetTexture(t.name,t.renderTargetSize,n,_,(c=t._creationFlags)!==null&&c!==void 0?c:0),m._waitingRenderList=t.renderList;return u(),m}else{var b;if(t.base64String)b=e.CreateFromBase64String(t.base64String,t.name,n,!_,t.invertY,t.samplingMode,u,(f=t._creationFlags)!==null&&f!==void 0?f:0,(p=t._useSRGBBuffer)!==null&&p!==void 0?p:!1);else{var x=void 0;t.name&&t.name.indexOf("://")>0?x=t.name:x=i+t.name,t.url&&(t.url.startsWith("data:")||e.UseSerializedUrlIfAny)&&(x=t.url),b=new e(x,n,!_,t.invertY,t.samplingMode,u)}return b}},t,n);return o},e.CreateFromBase64String=function(t,n,i,a,l,u,o,c,f,p){return u===void 0&&(u=e.TRILINEAR_SAMPLINGMODE),o===void 0&&(o=null),c===void 0&&(c=null),f===void 0&&(f=5),new e("data:"+n,i,a,l,u,o,c,t,!1,f,void 0,void 0,p)},e.LoadFromDataString=function(t,n,i,a,l,u,o,c,f,p,_){return a===void 0&&(a=!1),u===void 0&&(u=!0),o===void 0&&(o=e.TRILINEAR_SAMPLINGMODE),c===void 0&&(c=null),f===void 0&&(f=null),p===void 0&&(p=5),t.substr(0,5)!=="data:"&&(t="data:"+t),new e(t,i,l,u,o,c,f,n,a,p,void 0,void 0,_)},e.SerializeBuffers=!0,e.ForceSerializeBuffers=!1,e.OnTextureLoadErrorObservable=new W,e._CubeTextureParser=function(t,n,i){throw j("CubeTexture")},e._CreateMirror=function(t,n,i,a){throw j("MirrorTexture")},e._CreateRenderTargetTexture=function(t,n,i,a,l){throw j("RenderTargetTexture")},e.NEAREST_SAMPLINGMODE=1,e.NEAREST_NEAREST_MIPLINEAR=8,e.BILINEAR_SAMPLINGMODE=2,e.LINEAR_LINEAR_MIPNEAREST=11,e.TRILINEAR_SAMPLINGMODE=3,e.LINEAR_LINEAR_MIPLINEAR=3,e.NEAREST_NEAREST_MIPNEAREST=4,e.NEAREST_LINEAR_MIPNEAREST=5,e.NEAREST_LINEAR_MIPLINEAR=6,e.NEAREST_LINEAR=7,e.NEAREST_NEAREST=1,e.LINEAR_NEAREST_MIPNEAREST=9,e.LINEAR_NEAREST_MIPLINEAR=10,e.LINEAR_LINEAR=2,e.LINEAR_NEAREST=12,e.EXPLICIT_MODE=0,e.SPHERICAL_MODE=1,e.PLANAR_MODE=2,e.CUBIC_MODE=3,e.PROJECTION_MODE=4,e.SKYBOX_MODE=5,e.INVCUBIC_MODE=6,e.EQUIRECTANGULAR_MODE=7,e.FIXED_EQUIRECTANGULAR_MODE=8,e.FIXED_EQUIRECTANGULAR_MIRRORED_MODE=9,e.CLAMP_ADDRESSMODE=0,e.WRAP_ADDRESSMODE=1,e.MIRROR_ADDRESSMODE=2,e.UseSerializedUrlIfAny=!1,h([d()],e.prototype,"url",void 0),h([d()],e.prototype,"uOffset",void 0),h([d()],e.prototype,"vOffset",void 0),h([d()],e.prototype,"uScale",void 0),h([d()],e.prototype,"vScale",void 0),h([d()],e.prototype,"uAng",void 0),h([d()],e.prototype,"vAng",void 0),h([d()],e.prototype,"wAng",void 0),h([d()],e.prototype,"uRotationCenter",void 0),h([d()],e.prototype,"vRotationCenter",void 0),h([d()],e.prototype,"wRotationCenter",void 0),h([d()],e.prototype,"homogeneousRotationInUVTransform",void 0),h([d()],e.prototype,"isBlocking",null),e}(ce);ne("BABYLON.Texture",H);O._TextureParser=H.Parse;var fe="helperFunctions",he=`const float PI=3.1415926535897932384626433832795;
const float HALF_MIN=5.96046448e-08; 
const float LinearEncodePowerApprox=2.2;
const float GammaEncodePowerApprox=1.0/LinearEncodePowerApprox;
const vec3 LuminanceEncodeApprox=vec3(0.2126,0.7152,0.0722);
const float Epsilon=0.0000001;
#define saturate(x) clamp(x,0.0,1.0)
#define absEps(x) abs(x)+Epsilon
#define maxEps(x) max(x,Epsilon)
#define saturateEps(x) clamp(x,Epsilon,1.0)
mat3 transposeMat3(mat3 inMatrix) {
vec3 i0=inMatrix[0];
vec3 i1=inMatrix[1];
vec3 i2=inMatrix[2];
mat3 outMatrix=mat3(
vec3(i0.x,i1.x,i2.x),
vec3(i0.y,i1.y,i2.y),
vec3(i0.z,i1.z,i2.z)
);
return outMatrix;
}
mat3 inverseMat3(mat3 inMatrix) {
float a00=inMatrix[0][0],a01=inMatrix[0][1],a02=inMatrix[0][2];
float a10=inMatrix[1][0],a11=inMatrix[1][1],a12=inMatrix[1][2];
float a20=inMatrix[2][0],a21=inMatrix[2][1],a22=inMatrix[2][2];
float b01=a22*a11-a12*a21;
float b11=-a22*a10+a12*a20;
float b21=a21*a10-a11*a20;
float det=a00*b01+a01*b11+a02*b21;
return mat3(b01,(-a22*a01+a02*a21),(a12*a01-a02*a11),
b11,(a22*a00-a02*a20),(-a12*a00+a02*a10),
b21,(-a21*a00+a01*a20),(a11*a00-a01*a10))/det;
}
#if USE_EXACT_SRGB_CONVERSIONS
vec3 toLinearSpaceExact(vec3 color)
{
vec3 nearZeroSection=0.0773993808*color;
vec3 remainingSection=pow(0.947867299*(color+vec3(0.055)),vec3(2.4));
#if defined(WEBGL2) || defined(WEBGPU)
return mix(remainingSection,nearZeroSection,lessThanEqual(color,vec3(0.04045)));
#else
return
vec3(
color.r<=0.04045 ? nearZeroSection.r : remainingSection.r,
color.g<=0.04045 ? nearZeroSection.g : remainingSection.g,
color.b<=0.04045 ? nearZeroSection.b : remainingSection.b);
#endif
}
vec3 toGammaSpaceExact(vec3 color)
{
vec3 nearZeroSection=12.92*color;
vec3 remainingSection=1.055*pow(color,vec3(0.41666))-vec3(0.055);
#if defined(WEBGL2) || defined(WEBGPU)
return mix(remainingSection,nearZeroSection,lessThanEqual(color,vec3(0.0031308)));
#else
return
vec3(
color.r<=0.0031308 ? nearZeroSection.r : remainingSection.r,
color.g<=0.0031308 ? nearZeroSection.g : remainingSection.g,
color.b<=0.0031308 ? nearZeroSection.b : remainingSection.b);
#endif
}
#endif
float toLinearSpace(float color)
{
#if USE_EXACT_SRGB_CONVERSIONS
float nearZeroSection=0.0773993808*color;
float remainingSection=pow(0.947867299*(color+0.055),2.4);
return color<=0.04045 ? nearZeroSection : remainingSection;
#else
return pow(color,LinearEncodePowerApprox);
#endif
}
vec3 toLinearSpace(vec3 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return toLinearSpaceExact(color);
#else
return pow(color,vec3(LinearEncodePowerApprox));
#endif
}
vec4 toLinearSpace(vec4 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return vec4(toLinearSpaceExact(color.rgb),color.a);
#else
return vec4(pow(color.rgb,vec3(LinearEncodePowerApprox)),color.a);
#endif
}
float toGammaSpace(float color)
{
#if USE_EXACT_SRGB_CONVERSIONS
float nearZeroSection=12.92*color;
float remainingSection=1.055*pow(color,0.41666)-0.055;
return color<=0.0031308 ? nearZeroSection : remainingSection;
#else
return pow(color,GammaEncodePowerApprox);
#endif
}
vec3 toGammaSpace(vec3 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return toGammaSpaceExact(color);
#else
return pow(color,vec3(GammaEncodePowerApprox));
#endif
}
vec4 toGammaSpace(vec4 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return vec4(toGammaSpaceExact(color.rgb),color.a);
#else
return vec4(pow(color.rgb,vec3(GammaEncodePowerApprox)),color.a);
#endif
}
float square(float value)
{
return value*value;
}
vec3 square(vec3 value)
{
return value*value;
}
float pow5(float value) {
float sq=value*value;
return sq*sq*value;
}
float getLuminance(vec3 color)
{
return clamp(dot(color,LuminanceEncodeApprox),0.,1.);
}
float getRand(vec2 seed) {
return fract(sin(dot(seed.xy ,vec2(12.9898,78.233)))*43758.5453);
}
float dither(vec2 seed,float varianceAmount) {
float rand=getRand(seed);
float dither=mix(-varianceAmount/255.0,varianceAmount/255.0,rand);
return dither;
}
const float rgbdMaxRange=255.0;
vec4 toRGBD(vec3 color) {
float maxRGB=maxEps(max(color.r,max(color.g,color.b)));
float D =max(rgbdMaxRange/maxRGB,1.);
D =clamp(floor(D)/255.0,0.,1.);
vec3 rgb=color.rgb*D;
rgb=toGammaSpace(rgb);
return vec4(clamp(rgb,0.,1.),D); 
}
vec3 fromRGBD(vec4 rgbd) {
rgbd.rgb=toLinearSpace(rgbd.rgb);
return rgbd.rgb/rgbd.a;
}
vec3 parallaxCorrectNormal( vec3 vertexPos,vec3 origVec,vec3 cubeSize,vec3 cubePos ) {
vec3 invOrigVec=vec3(1.0,1.0,1.0)/origVec;
vec3 halfSize=cubeSize*0.5;
vec3 intersecAtMaxPlane=(cubePos+halfSize-vertexPos)*invOrigVec;
vec3 intersecAtMinPlane=(cubePos-halfSize-vertexPos)*invOrigVec;
vec3 largestIntersec=max(intersecAtMaxPlane,intersecAtMinPlane);
float distance=min(min(largestIntersec.x,largestIntersec.y),largestIntersec.z);
vec3 intersectPositionWS=vertexPos+origVec*distance;
return intersectPositionWS-cubePos;
}
`;C.IncludesShadersStore[fe]=he;var de="clipPlaneFragmentDeclaration",_e=`#ifdef CLIPPLANE
varying float fClipDistance;
#endif
#ifdef CLIPPLANE2
varying float fClipDistance2;
#endif
#ifdef CLIPPLANE3
varying float fClipDistance3;
#endif
#ifdef CLIPPLANE4
varying float fClipDistance4;
#endif
#ifdef CLIPPLANE5
varying float fClipDistance5;
#endif
#ifdef CLIPPLANE6
varying float fClipDistance6;
#endif
`;C.IncludesShadersStore[de]=_e;var pe="clipPlaneFragment",ge=`#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)
if (false) {}
#endif
#ifdef CLIPPLANE
else if (fClipDistance>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE2
else if (fClipDistance2>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE3
else if (fClipDistance3>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE4
else if (fClipDistance4>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE5
else if (fClipDistance5>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE6
else if (fClipDistance6>0.0)
{
discard;
}
#endif
`;C.IncludesShadersStore[pe]=ge;var ve="clipPlaneVertexDeclaration",me=`#ifdef CLIPPLANE
uniform vec4 vClipPlane;
varying float fClipDistance;
#endif
#ifdef CLIPPLANE2
uniform vec4 vClipPlane2;
varying float fClipDistance2;
#endif
#ifdef CLIPPLANE3
uniform vec4 vClipPlane3;
varying float fClipDistance3;
#endif
#ifdef CLIPPLANE4
uniform vec4 vClipPlane4;
varying float fClipDistance4;
#endif
#ifdef CLIPPLANE5
uniform vec4 vClipPlane5;
varying float fClipDistance5;
#endif
#ifdef CLIPPLANE6
uniform vec4 vClipPlane6;
varying float fClipDistance6;
#endif
`;C.IncludesShadersStore[ve]=me;var xe="clipPlaneVertex",Se=`#ifdef CLIPPLANE
fClipDistance=dot(worldPos,vClipPlane);
#endif
#ifdef CLIPPLANE2
fClipDistance2=dot(worldPos,vClipPlane2);
#endif
#ifdef CLIPPLANE3
fClipDistance3=dot(worldPos,vClipPlane3);
#endif
#ifdef CLIPPLANE4
fClipDistance4=dot(worldPos,vClipPlane4);
#endif
#ifdef CLIPPLANE5
fClipDistance5=dot(worldPos,vClipPlane5);
#endif
#ifdef CLIPPLANE6
fClipDistance6=dot(worldPos,vClipPlane6);
#endif
`;C.IncludesShadersStore[xe]=Se;export{H as T};
