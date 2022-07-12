import{_ as Z,j as h,O as W,g as J,h as Q,a as j,m as I}from"./precisionDate.911053b8.js";import{o as K,S as O,s as d,d as ee,p as k,q as te,I as ie}from"./decorators.033fe02c.js";import{Matrix as v,Vector3 as D,TmpVectors as b}from"./math.vector.dbc48609.js";import{E as re}from"./performanceConfigurator.3a0adc9f.js";import{S as Y}from"./math.size.f34aa5eb.js";import{R as ne,G as ae}from"./arrayTools.49f8ffa1.js";import{P as oe}from"./math.plane.3df9f77f.js";import{C as H}from"./thinMaterialHelper.ab63cfd8.js";var se=function(){function s(e){this._wrapU=1,this._wrapV=1,this.wrapR=1,this.anisotropicFilteringLevel=4,this.delayLoadState=0,this._texture=null,this._engine=null,this._cachedSize=Y.Zero(),this._cachedBaseSize=Y.Zero(),this._initialSamplingMode=2,this._texture=e,this._texture&&(this._engine=this._texture.getEngine())}return Object.defineProperty(s.prototype,"wrapU",{get:function(){return this._wrapU},set:function(e){this._wrapU=e},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"wrapV",{get:function(){return this._wrapV},set:function(e){this._wrapV=e},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"coordinatesMode",{get:function(){return 0},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"isCube",{get:function(){return this._texture?this._texture.isCube:!1},set:function(e){!this._texture||(this._texture.isCube=e)},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"is3D",{get:function(){return this._texture?this._texture.is3D:!1},set:function(e){!this._texture||(this._texture.is3D=e)},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"is2DArray",{get:function(){return this._texture?this._texture.is2DArray:!1},set:function(e){!this._texture||(this._texture.is2DArray=e)},enumerable:!1,configurable:!0}),s.prototype.getClassName=function(){return"ThinTexture"},s.prototype.isReady=function(){return this.delayLoadState===4?(this.delayLoad(),!1):this._texture?this._texture.isReady:!1},s.prototype.delayLoad=function(){},s.prototype.getInternalTexture=function(){return this._texture},s.prototype.getSize=function(){if(this._texture){if(this._texture.width)return this._cachedSize.width=this._texture.width,this._cachedSize.height=this._texture.height,this._cachedSize;if(this._texture._size)return this._cachedSize.width=this._texture._size,this._cachedSize.height=this._texture._size,this._cachedSize}return this._cachedSize},s.prototype.getBaseSize=function(){return!this.isReady()||!this._texture?(this._cachedBaseSize.width=0,this._cachedBaseSize.height=0,this._cachedBaseSize):this._texture._size?(this._cachedBaseSize.width=this._texture._size,this._cachedBaseSize.height=this._texture._size,this._cachedBaseSize):(this._cachedBaseSize.width=this._texture.baseWidth,this._cachedBaseSize.height=this._texture.baseHeight,this._cachedBaseSize)},Object.defineProperty(s.prototype,"samplingMode",{get:function(){return this._texture?this._texture.samplingMode:this._initialSamplingMode},enumerable:!1,configurable:!0}),s.prototype.updateSamplingMode=function(e){this._texture&&this._engine&&this._engine.updateTextureSamplingMode(e,this._texture)},s.prototype.releaseInternalTexture=function(){this._texture&&(this._texture.dispose(),this._texture=null)},s.prototype.dispose=function(){this._texture&&(this.releaseInternalTexture(),this._engine=null)},s}(),ue=function(s){Z(e,s);function e(t){var i=s.call(this,null)||this;return i.metadata=null,i.reservedDataStore=null,i._hasAlpha=!1,i._getAlphaFromRGB=!1,i.level=1,i._coordinatesIndex=0,i._coordinatesMode=0,i.wrapR=1,i.anisotropicFilteringLevel=e.DEFAULT_ANISOTROPIC_FILTERING_LEVEL,i._isCube=!1,i._gammaSpace=!0,i.invertZ=!1,i.lodLevelInAlpha=!1,i.isRenderTarget=!1,i._prefiltered=!1,i._forceSerialize=!1,i.animations=new Array,i.onDisposeObservable=new W,i._onDisposeObserver=null,i._scene=null,i._uid=null,i._parentContainer=null,i._loadingError=!1,t?e._IsScene(t)?i._scene=t:i._engine=t:i._scene=re.LastCreatedScene,i._scene&&(i.uniqueId=i._scene.getUniqueId(),i._scene.addTexture(i),i._engine=i._scene.getEngine()),i._uid=null,i}return Object.defineProperty(e.prototype,"hasAlpha",{get:function(){return this._hasAlpha},set:function(t){var i=this;this._hasAlpha!==t&&(this._hasAlpha=t,this._scene&&this._scene.markAllMaterialsAsDirty(1,function(n){return n.hasTexture(i)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"getAlphaFromRGB",{get:function(){return this._getAlphaFromRGB},set:function(t){var i=this;this._getAlphaFromRGB!==t&&(this._getAlphaFromRGB=t,this._scene&&this._scene.markAllMaterialsAsDirty(1,function(n){return n.hasTexture(i)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"coordinatesIndex",{get:function(){return this._coordinatesIndex},set:function(t){var i=this;this._coordinatesIndex!==t&&(this._coordinatesIndex=t,this._scene&&this._scene.markAllMaterialsAsDirty(1,function(n){return n.hasTexture(i)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"coordinatesMode",{get:function(){return this._coordinatesMode},set:function(t){var i=this;this._coordinatesMode!==t&&(this._coordinatesMode=t,this._scene&&this._scene.markAllMaterialsAsDirty(1,function(n){return n.hasTexture(i)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapU",{get:function(){return this._wrapU},set:function(t){this._wrapU=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapV",{get:function(){return this._wrapV},set:function(t){this._wrapV=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isCube",{get:function(){return this._texture?this._texture.isCube:this._isCube},set:function(t){this._texture?this._texture.isCube=t:this._isCube=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"is3D",{get:function(){return this._texture?this._texture.is3D:!1},set:function(t){!this._texture||(this._texture.is3D=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"is2DArray",{get:function(){return this._texture?this._texture.is2DArray:!1},set:function(t){!this._texture||(this._texture.is2DArray=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gammaSpace",{get:function(){if(this._texture)this._texture._gammaSpace===null&&(this._texture._gammaSpace=this._gammaSpace);else return this._gammaSpace;return this._texture._gammaSpace&&!this._texture._useSRGBBuffer},set:function(t){if(this._texture){if(this._texture._gammaSpace===t)return;this._texture._gammaSpace=t}else{if(this._gammaSpace===t)return;this._gammaSpace=t}this._markAllSubMeshesAsTexturesDirty()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isRGBD",{get:function(){return this._texture!=null&&this._texture._isRGBD},set:function(t){this._texture&&(this._texture._isRGBD=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noMipmap",{get:function(){return!1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lodGenerationOffset",{get:function(){return this._texture?this._texture._lodGenerationOffset:0},set:function(t){this._texture&&(this._texture._lodGenerationOffset=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lodGenerationScale",{get:function(){return this._texture?this._texture._lodGenerationScale:0},set:function(t){this._texture&&(this._texture._lodGenerationScale=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"linearSpecularLOD",{get:function(){return this._texture?this._texture._linearSpecularLOD:!1},set:function(t){this._texture&&(this._texture._linearSpecularLOD=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"irradianceTexture",{get:function(){return this._texture?this._texture._irradianceTexture:null},set:function(t){this._texture&&(this._texture._irradianceTexture=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"uid",{get:function(){return this._uid||(this._uid=K()),this._uid},enumerable:!1,configurable:!0}),e.prototype.toString=function(){return this.name},e.prototype.getClassName=function(){return"BaseTexture"},Object.defineProperty(e.prototype,"onDispose",{set:function(t){this._onDisposeObserver&&this.onDisposeObservable.remove(this._onDisposeObserver),this._onDisposeObserver=this.onDisposeObservable.add(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isBlocking",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"loadingError",{get:function(){return this._loadingError},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"errorObject",{get:function(){return this._errorObject},enumerable:!1,configurable:!0}),e.prototype.getScene=function(){return this._scene},e.prototype._getEngine=function(){return this._engine},e.prototype.checkTransformsAreIdentical=function(t){return t!==null},e.prototype.getTextureMatrix=function(){return v.IdentityReadOnly},e.prototype.getReflectionTextureMatrix=function(){return v.IdentityReadOnly},e.prototype.isReadyOrNotBlocking=function(){return!this.isBlocking||this.isReady()||this.loadingError},e.prototype.scale=function(t){},Object.defineProperty(e.prototype,"canRescale",{get:function(){return!1},enumerable:!1,configurable:!0}),e.prototype._getFromCache=function(t,i,n,a,l,c){var o=this._getEngine();if(!o)return null;for(var u=o._getUseSRGBBuffer(!!l,i),f=o.getLoadedTexturesCache(),p=0;p<f.length;p++){var _=f[p];if((l===void 0||u===_._useSRGBBuffer)&&(a===void 0||a===_.invertY)&&_.url===t&&_.generateMipMaps===!i&&(!n||n===_.samplingMode)&&(c===void 0||c===_.isCube))return _.incrementReferences(),_}return null},e.prototype._rebuild=function(){},e.prototype.clone=function(){return null},Object.defineProperty(e.prototype,"textureType",{get:function(){return this._texture&&this._texture.type!==void 0?this._texture.type:0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textureFormat",{get:function(){return this._texture&&this._texture.format!==void 0?this._texture.format:5},enumerable:!1,configurable:!0}),e.prototype._markAllSubMeshesAsTexturesDirty=function(){var t=this.getScene();!t||t.markAllMaterialsAsDirty(1)},e.prototype.readPixels=function(t,i,n,a,l,c,o,u,f){if(t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=null),a===void 0&&(a=!0),l===void 0&&(l=!1),c===void 0&&(c=0),o===void 0&&(o=0),u===void 0&&(u=Number.MAX_VALUE),f===void 0&&(f=Number.MAX_VALUE),!this._texture)return null;var p=this._getEngine();if(!p)return null;var _=this.getSize(),g=_.width,x=_.height;i!==0&&(g=g/Math.pow(2,i),x=x/Math.pow(2,i),g=Math.round(g),x=Math.round(x)),u=Math.min(g,u),f=Math.min(x,f);try{return this._texture.isCube?p._readTexturePixels(this._texture,u,f,t,i,n,a,l,c,o):p._readTexturePixels(this._texture,u,f,-1,i,n,a,l,c,o)}catch{return null}},e.prototype._readPixelsSync=function(t,i,n,a,l){if(t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=null),a===void 0&&(a=!0),l===void 0&&(l=!1),!this._texture)return null;var c=this.getSize(),o=c.width,u=c.height,f=this._getEngine();if(!f)return null;i!=0&&(o=o/Math.pow(2,i),u=u/Math.pow(2,i),o=Math.round(o),u=Math.round(u));try{return this._texture.isCube?f._readTexturePixelsSync(this._texture,o,u,t,i,n,a,l):f._readTexturePixelsSync(this._texture,o,u,-1,i,n,a,l)}catch{return null}},Object.defineProperty(e.prototype,"_lodTextureHigh",{get:function(){return this._texture?this._texture._lodTextureHigh:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_lodTextureMid",{get:function(){return this._texture?this._texture._lodTextureMid:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_lodTextureLow",{get:function(){return this._texture?this._texture._lodTextureLow:null},enumerable:!1,configurable:!0}),e.prototype.dispose=function(){if(this._scene){this._scene.stopAnimation&&this._scene.stopAnimation(this),this._scene._removePendingData(this);var t=this._scene.textures.indexOf(this);if(t>=0&&this._scene.textures.splice(t,1),this._scene.onTextureRemovedObservable.notifyObservers(this),this._scene=null,this._parentContainer){var i=this._parentContainer.textures.indexOf(this);i>-1&&this._parentContainer.textures.splice(i,1),this._parentContainer=null}}this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),this.metadata=null,s.prototype.dispose.call(this)},e.prototype.serialize=function(){if(!this.name)return null;var t=O.Serialize(this);return O.AppendSerializedAnimations(this,t),t},e.WhenAllReady=function(t,i){var n=t.length;if(n===0){i();return}for(var a=0;a<t.length;a++){var l=t[a];if(l.isReady())--n===0&&i();else{var c=l.onLoadObservable;c?c.addOnce(function(){--n===0&&i()}):--n===0&&i()}}},e._IsScene=function(t){return t.getClassName()==="Scene"},e.DEFAULT_ANISOTROPIC_FILTERING_LEVEL=4,h([d()],e.prototype,"uniqueId",void 0),h([d()],e.prototype,"name",void 0),h([d()],e.prototype,"metadata",void 0),h([d("hasAlpha")],e.prototype,"_hasAlpha",void 0),h([d("getAlphaFromRGB")],e.prototype,"_getAlphaFromRGB",void 0),h([d()],e.prototype,"level",void 0),h([d("coordinatesIndex")],e.prototype,"_coordinatesIndex",void 0),h([d("coordinatesMode")],e.prototype,"_coordinatesMode",void 0),h([d()],e.prototype,"wrapU",null),h([d()],e.prototype,"wrapV",null),h([d()],e.prototype,"wrapR",void 0),h([d()],e.prototype,"anisotropicFilteringLevel",void 0),h([d()],e.prototype,"isCube",null),h([d()],e.prototype,"is3D",null),h([d()],e.prototype,"is2DArray",null),h([d()],e.prototype,"gammaSpace",null),h([d()],e.prototype,"invertZ",void 0),h([d()],e.prototype,"lodLevelInAlpha",void 0),h([d()],e.prototype,"lodGenerationOffset",null),h([d()],e.prototype,"lodGenerationScale",null),h([d()],e.prototype,"linearSpecularLOD",null),h([ee()],e.prototype,"irradianceTexture",null),h([d()],e.prototype,"isRenderTarget",void 0),e}(se);function q(s,e,t){t===void 0&&(t=!1);var i=e.width,n=e.height;if(s instanceof Float32Array){for(var a=s.byteLength/s.BYTES_PER_ELEMENT,l=new Uint8Array(a);--a>=0;){var c=s[a];c<0?c=0:c>1&&(c=1),l[a]=c*255}s=l}var o=document.createElement("canvas");o.width=i,o.height=n;var u=o.getContext("2d");if(!u)return null;var f=u.createImageData(i,n),p=f.data;if(p.set(s),u.putImageData(f,0,0),t){var _=document.createElement("canvas");_.width=i,_.height=n;var g=_.getContext("2d");return g?(g.translate(0,n),g.scale(1,-1),g.drawImage(o,0,0),_.toDataURL("image/png")):null}return o.toDataURL("image/png")}function le(s,e,t){e===void 0&&(e=0),t===void 0&&(t=0);var i=s.getInternalTexture();if(!i)return null;var n=s._readPixelsSync(e,t);return n?q(n,s.getSize(),i.invertY):null}function ce(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=0),J(this,void 0,void 0,function(){var i,n;return Q(this,function(a){switch(a.label){case 0:return i=s.getInternalTexture(),i?[4,s.readPixels(e,t)]:[2,null];case 1:return n=a.sent(),n?[2,q(n,s.getSize(),i.invertY)]:[2,null]}})})}var $=function(s){Z(e,s);function e(t,i,n,a,l,c,o,u,f,p,_,g,x,A){l===void 0&&(l=e.TRILINEAR_SAMPLINGMODE),c===void 0&&(c=null),o===void 0&&(o=null),u===void 0&&(u=null),f===void 0&&(f=!1);var r=this,S,m,w,N,B,G,U,z,V;r=s.call(this,i)||this,r.url=null,r.uOffset=0,r.vOffset=0,r.uScale=1,r.vScale=1,r.uAng=0,r.vAng=0,r.wAng=0,r.uRotationCenter=.5,r.vRotationCenter=.5,r.wRotationCenter=.5,r.homogeneousRotationInUVTransform=!1,r.inspectableCustomProperties=null,r._noMipmap=!1,r._invertY=!1,r._rowGenerationMatrix=null,r._cachedTextureMatrix=null,r._projectionModeMatrix=null,r._t0=null,r._t1=null,r._t2=null,r._cachedUOffset=-1,r._cachedVOffset=-1,r._cachedUScale=0,r._cachedVScale=0,r._cachedUAng=-1,r._cachedVAng=-1,r._cachedWAng=-1,r._cachedProjectionMatrixId=-1,r._cachedURotationCenter=-1,r._cachedVRotationCenter=-1,r._cachedWRotationCenter=-1,r._cachedHomogeneousRotationInUVTransform=!1,r._cachedCoordinatesMode=-1,r._buffer=null,r._deleteBuffer=!1,r._format=null,r._delayedOnLoad=null,r._delayedOnError=null,r.onLoadObservable=new W,r._isBlocking=!0,r.name=t||"",r.url=t;var R,C=!1,T=null;typeof n=="object"&&n!==null?(R=(S=n.noMipmap)!==null&&S!==void 0?S:!1,a=(m=n.invertY)!==null&&m!==void 0?m:!H.UseOpenGLOrientationForUV,l=(w=n.samplingMode)!==null&&w!==void 0?w:e.TRILINEAR_SAMPLINGMODE,c=(N=n.onLoad)!==null&&N!==void 0?N:null,o=(B=n.onError)!==null&&B!==void 0?B:null,u=(G=n.buffer)!==null&&G!==void 0?G:null,f=(U=n.deleteBuffer)!==null&&U!==void 0?U:!1,p=n.format,_=n.mimeType,g=n.loaderOptions,x=n.creationFlags,C=(z=n.useSRGBBuffer)!==null&&z!==void 0?z:!1,T=(V=n.internalTexture)!==null&&V!==void 0?V:null):R=!!n,r._noMipmap=R,r._invertY=a===void 0?!H.UseOpenGLOrientationForUV:a,r._initialSamplingMode=l,r._buffer=u,r._deleteBuffer=f,r._mimeType=_,r._loaderOptions=g,r._creationFlags=x,r._useSRGBBuffer=C,r._forcedExtension=A,p&&(r._format=p);var M=r.getScene(),F=r._getEngine();if(!F)return r;F.onBeforeTextureInitObservable.notifyObservers(r);var E=function(){r._texture&&(r._texture._invertVScale&&(r.vScale*=-1,r.vOffset+=1),r._texture._cachedWrapU!==null&&(r.wrapU=r._texture._cachedWrapU,r._texture._cachedWrapU=null),r._texture._cachedWrapV!==null&&(r.wrapV=r._texture._cachedWrapV,r._texture._cachedWrapV=null),r._texture._cachedWrapR!==null&&(r.wrapR=r._texture._cachedWrapR,r._texture._cachedWrapR=null)),r.onLoadObservable.hasObservers()&&r.onLoadObservable.notifyObservers(r),c&&c(),!r.isBlocking&&M&&M.resetCachedMaterial()},L=function(y,P){r._loadingError=!0,r._errorObject={message:y,exception:P},o&&o(y,P),e.OnTextureLoadErrorObservable.notifyObservers(r)};if(!r.url)return r._delayedOnLoad=E,r._delayedOnError=L,r;if(r._texture=T!=null?T:r._getFromCache(r.url,R,l,r._invertY,C),r._texture)if(r._texture.isReady)k.SetImmediate(function(){return E()});else{var X=r._texture.onLoadedObservable.add(E);r._texture.onErrorObservable.add(function(y){var P;L(y.message,y.exception),(P=r._texture)===null||P===void 0||P.onLoadedObservable.remove(X)})}else if(!M||!M.useDelayedTextureLoading){try{r._texture=F.createTexture(r.url,R,r._invertY,M,l,E,L,r._buffer,void 0,r._format,r._forcedExtension,_,g,x,C)}catch(y){throw L("error loading",y),y}f&&(r._buffer=null)}else r.delayLoadState=4,r._delayedOnLoad=E,r._delayedOnError=L;return r}return Object.defineProperty(e.prototype,"noMipmap",{get:function(){return this._noMipmap},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mimeType",{get:function(){return this._mimeType},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isBlocking",{get:function(){return this._isBlocking},set:function(t){this._isBlocking=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"invertY",{get:function(){return this._invertY},enumerable:!1,configurable:!0}),e.prototype.updateURL=function(t,i,n,a){i===void 0&&(i=null),this.url&&(this.releaseInternalTexture(),this.getScene().markAllMaterialsAsDirty(1)),(!this.name||this.name.startsWith("data:"))&&(this.name=t),this.url=t,this._buffer=i,this._forcedExtension=a,this.delayLoadState=4,n&&(this._delayedOnLoad=n),this.delayLoad()},e.prototype.delayLoad=function(){if(this.delayLoadState===4){var t=this.getScene();!t||(this.delayLoadState=1,this._texture=this._getFromCache(this.url,this._noMipmap,this.samplingMode,this._invertY,this._useSRGBBuffer),this._texture?this._delayedOnLoad&&(this._texture.isReady?k.SetImmediate(this._delayedOnLoad):this._texture.onLoadedObservable.add(this._delayedOnLoad)):(this._texture=t.getEngine().createTexture(this.url,this._noMipmap,this._invertY,t,this.samplingMode,this._delayedOnLoad,this._delayedOnError,this._buffer,null,this._format,this._forcedExtension,this._mimeType,this._loaderOptions,this._creationFlags,this._useSRGBBuffer),this._deleteBuffer&&(this._buffer=null)),this._delayedOnLoad=null,this._delayedOnError=null)}},e.prototype._prepareRowForTextureGeneration=function(t,i,n,a){t*=this._cachedUScale,i*=this._cachedVScale,t-=this.uRotationCenter*this._cachedUScale,i-=this.vRotationCenter*this._cachedVScale,n-=this.wRotationCenter,D.TransformCoordinatesFromFloatsToRef(t,i,n,this._rowGenerationMatrix,a),a.x+=this.uRotationCenter*this._cachedUScale+this._cachedUOffset,a.y+=this.vRotationCenter*this._cachedVScale+this._cachedVOffset,a.z+=this.wRotationCenter},e.prototype.checkTransformsAreIdentical=function(t){return t!==null&&this.uOffset===t.uOffset&&this.vOffset===t.vOffset&&this.uScale===t.uScale&&this.vScale===t.vScale&&this.uAng===t.uAng&&this.vAng===t.vAng&&this.wAng===t.wAng},e.prototype.getTextureMatrix=function(t){var i=this;if(t===void 0&&(t=1),this.uOffset===this._cachedUOffset&&this.vOffset===this._cachedVOffset&&this.uScale*t===this._cachedUScale&&this.vScale===this._cachedVScale&&this.uAng===this._cachedUAng&&this.vAng===this._cachedVAng&&this.wAng===this._cachedWAng&&this.uRotationCenter===this._cachedURotationCenter&&this.vRotationCenter===this._cachedVRotationCenter&&this.wRotationCenter===this._cachedWRotationCenter&&this.homogeneousRotationInUVTransform===this._cachedHomogeneousRotationInUVTransform)return this._cachedTextureMatrix;this._cachedUOffset=this.uOffset,this._cachedVOffset=this.vOffset,this._cachedUScale=this.uScale*t,this._cachedVScale=this.vScale,this._cachedUAng=this.uAng,this._cachedVAng=this.vAng,this._cachedWAng=this.wAng,this._cachedURotationCenter=this.uRotationCenter,this._cachedVRotationCenter=this.vRotationCenter,this._cachedWRotationCenter=this.wRotationCenter,this._cachedHomogeneousRotationInUVTransform=this.homogeneousRotationInUVTransform,(!this._cachedTextureMatrix||!this._rowGenerationMatrix)&&(this._cachedTextureMatrix=v.Zero(),this._rowGenerationMatrix=new v,this._t0=D.Zero(),this._t1=D.Zero(),this._t2=D.Zero()),v.RotationYawPitchRollToRef(this.vAng,this.uAng,this.wAng,this._rowGenerationMatrix),this.homogeneousRotationInUVTransform?(v.TranslationToRef(-this._cachedURotationCenter,-this._cachedVRotationCenter,-this._cachedWRotationCenter,b.Matrix[0]),v.TranslationToRef(this._cachedURotationCenter,this._cachedVRotationCenter,this._cachedWRotationCenter,b.Matrix[1]),v.ScalingToRef(this._cachedUScale,this._cachedVScale,0,b.Matrix[2]),v.TranslationToRef(this._cachedUOffset,this._cachedVOffset,0,b.Matrix[3]),b.Matrix[0].multiplyToRef(this._rowGenerationMatrix,this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(b.Matrix[1],this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(b.Matrix[2],this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(b.Matrix[3],this._cachedTextureMatrix),this._cachedTextureMatrix.setRowFromFloats(2,this._cachedTextureMatrix.m[12],this._cachedTextureMatrix.m[13],this._cachedTextureMatrix.m[14],1)):(this._prepareRowForTextureGeneration(0,0,0,this._t0),this._prepareRowForTextureGeneration(1,0,0,this._t1),this._prepareRowForTextureGeneration(0,1,0,this._t2),this._t1.subtractInPlace(this._t0),this._t2.subtractInPlace(this._t0),v.FromValuesToRef(this._t1.x,this._t1.y,this._t1.z,0,this._t2.x,this._t2.y,this._t2.z,0,this._t0.x,this._t0.y,this._t0.z,0,0,0,0,1,this._cachedTextureMatrix));var n=this.getScene();return n?(n.markAllMaterialsAsDirty(1,function(a){return a.hasTexture(i)}),this._cachedTextureMatrix):this._cachedTextureMatrix},e.prototype.getReflectionTextureMatrix=function(){var t=this,i=this.getScene();if(!i)return this._cachedTextureMatrix;if(this.uOffset===this._cachedUOffset&&this.vOffset===this._cachedVOffset&&this.uScale===this._cachedUScale&&this.vScale===this._cachedVScale&&this.coordinatesMode===this._cachedCoordinatesMode)if(this.coordinatesMode===e.PROJECTION_MODE){if(this._cachedProjectionMatrixId===i.getProjectionMatrix().updateFlag)return this._cachedTextureMatrix}else return this._cachedTextureMatrix;this._cachedTextureMatrix||(this._cachedTextureMatrix=v.Zero()),this._projectionModeMatrix||(this._projectionModeMatrix=v.Zero());var n=this._cachedCoordinatesMode!==this.coordinatesMode;switch(this._cachedUOffset=this.uOffset,this._cachedVOffset=this.vOffset,this._cachedUScale=this.uScale,this._cachedVScale=this.vScale,this._cachedCoordinatesMode=this.coordinatesMode,this.coordinatesMode){case e.PLANAR_MODE:{v.IdentityToRef(this._cachedTextureMatrix),this._cachedTextureMatrix[0]=this.uScale,this._cachedTextureMatrix[5]=this.vScale,this._cachedTextureMatrix[12]=this.uOffset,this._cachedTextureMatrix[13]=this.vOffset;break}case e.PROJECTION_MODE:{v.FromValuesToRef(.5,0,0,0,0,-.5,0,0,0,0,0,0,.5,.5,1,1,this._projectionModeMatrix);var a=i.getProjectionMatrix();this._cachedProjectionMatrixId=a.updateFlag,a.multiplyToRef(this._projectionModeMatrix,this._cachedTextureMatrix);break}default:v.IdentityToRef(this._cachedTextureMatrix);break}return n&&i.markAllMaterialsAsDirty(1,function(l){return l.getActiveTextures().indexOf(t)!==-1}),this._cachedTextureMatrix},e.prototype.clone=function(){var t=this,i={noMipmap:this._noMipmap,invertY:this._invertY,samplingMode:this.samplingMode,onLoad:void 0,onError:void 0,buffer:this._texture?this._texture._buffer:void 0,deleteBuffer:this._deleteBuffer,format:this.textureFormat,mimeType:this.mimeType,loaderOptions:this._loaderOptions,creationFlags:this._creationFlags,useSRGBBuffer:this._useSRGBBuffer};return O.Clone(function(){return new e(t._texture?t._texture.url:null,t.getScene(),i)},this)},e.prototype.serialize=function(){var t=this.name;e.SerializeBuffers||this.name.startsWith("data:")&&(this.name=""),this.name.startsWith("data:")&&this.url===this.name&&(this.url="");var i=s.prototype.serialize.call(this);return i?((e.SerializeBuffers||e.ForceSerializeBuffers)&&(typeof this._buffer=="string"&&this._buffer.substr(0,5)==="data:"?(i.base64String=this._buffer,i.name=i.name.replace("data:","")):this.url&&this.url.startsWith("data:")&&this._buffer instanceof Uint8Array?i.base64String="data:image/png;base64,"+te(this._buffer):(e.ForceSerializeBuffers||this.url&&this.url.startsWith("blob:")||this._forceSerialize)&&(i.base64String=!this._engine||this._engine._features.supportSyncTextureRead?le(this):ce(this))),i.invertY=this._invertY,i.samplingMode=this.samplingMode,i._creationFlags=this._creationFlags,i._useSRGBBuffer=this._useSRGBBuffer,this.name=t,i):null},e.prototype.getClassName=function(){return"Texture"},e.prototype.dispose=function(){s.prototype.dispose.call(this),this.onLoadObservable.clear(),this._delayedOnLoad=null,this._delayedOnError=null},e.Parse=function(t,i,n){if(t.customType){var a=ie.Instantiate(t.customType),l=a.Parse(t,i,n);return t.samplingMode&&l.updateSamplingMode&&l._samplingMode&&l._samplingMode!==t.samplingMode&&l.updateSamplingMode(t.samplingMode),l}if(t.isCube&&!t.isRenderTarget)return e._CubeTextureParser(t,i,n);if(!t.name&&!t.isRenderTarget)return null;var c=function(){if(o&&o._texture&&(o._texture._cachedWrapU=null,o._texture._cachedWrapV=null,o._texture._cachedWrapR=null),t.samplingMode){var u=t.samplingMode;o&&o.samplingMode!==u&&o.updateSamplingMode(u)}if(o&&t.animations)for(var f=0;f<t.animations.length;f++){var p=t.animations[f],_=ae("BABYLON.Animation");_&&o.animations.push(_.Parse(p))}},o=O.Parse(function(){var u,f,p,_=!0;if(t.noMipmap&&(_=!1),t.mirrorPlane){var g=e._CreateMirror(t.name,t.renderTargetSize,i,_);return g._waitingRenderList=t.renderList,g.mirrorPlane=oe.FromArray(t.mirrorPlane),c(),g}else if(t.isRenderTarget){var x=null;if(t.isCube){if(i.reflectionProbes)for(var A=0;A<i.reflectionProbes.length;A++){var r=i.reflectionProbes[A];if(r.name===t.name)return r.cubeTexture}}else x=e._CreateRenderTargetTexture(t.name,t.renderTargetSize,i,_,(u=t._creationFlags)!==null&&u!==void 0?u:0),x._waitingRenderList=t.renderList;return c(),x}else{var S;if(t.base64String)S=e.CreateFromBase64String(t.base64String,t.name,i,!_,t.invertY,t.samplingMode,c,(f=t._creationFlags)!==null&&f!==void 0?f:0,(p=t._useSRGBBuffer)!==null&&p!==void 0?p:!1);else{var m=void 0;t.name&&t.name.indexOf("://")>0?m=t.name:m=n+t.name,t.url&&(t.url.startsWith("data:")||e.UseSerializedUrlIfAny)&&(m=t.url),S=new e(m,i,!_,t.invertY,t.samplingMode,c)}return S}},t,i);return o},e.CreateFromBase64String=function(t,i,n,a,l,c,o,u,f,p){return c===void 0&&(c=e.TRILINEAR_SAMPLINGMODE),o===void 0&&(o=null),u===void 0&&(u=null),f===void 0&&(f=5),new e("data:"+i,n,a,l,c,o,u,t,!1,f,void 0,void 0,p)},e.LoadFromDataString=function(t,i,n,a,l,c,o,u,f,p,_){return a===void 0&&(a=!1),c===void 0&&(c=!0),o===void 0&&(o=e.TRILINEAR_SAMPLINGMODE),u===void 0&&(u=null),f===void 0&&(f=null),p===void 0&&(p=5),t.substr(0,5)!=="data:"&&(t="data:"+t),new e(t,n,l,c,o,u,f,i,a,p,void 0,void 0,_)},e.SerializeBuffers=!0,e.ForceSerializeBuffers=!1,e.OnTextureLoadErrorObservable=new W,e._CubeTextureParser=function(t,i,n){throw j("CubeTexture")},e._CreateMirror=function(t,i,n,a){throw j("MirrorTexture")},e._CreateRenderTargetTexture=function(t,i,n,a,l){throw j("RenderTargetTexture")},e.NEAREST_SAMPLINGMODE=1,e.NEAREST_NEAREST_MIPLINEAR=8,e.BILINEAR_SAMPLINGMODE=2,e.LINEAR_LINEAR_MIPNEAREST=11,e.TRILINEAR_SAMPLINGMODE=3,e.LINEAR_LINEAR_MIPLINEAR=3,e.NEAREST_NEAREST_MIPNEAREST=4,e.NEAREST_LINEAR_MIPNEAREST=5,e.NEAREST_LINEAR_MIPLINEAR=6,e.NEAREST_LINEAR=7,e.NEAREST_NEAREST=1,e.LINEAR_NEAREST_MIPNEAREST=9,e.LINEAR_NEAREST_MIPLINEAR=10,e.LINEAR_LINEAR=2,e.LINEAR_NEAREST=12,e.EXPLICIT_MODE=0,e.SPHERICAL_MODE=1,e.PLANAR_MODE=2,e.CUBIC_MODE=3,e.PROJECTION_MODE=4,e.SKYBOX_MODE=5,e.INVCUBIC_MODE=6,e.EQUIRECTANGULAR_MODE=7,e.FIXED_EQUIRECTANGULAR_MODE=8,e.FIXED_EQUIRECTANGULAR_MIRRORED_MODE=9,e.CLAMP_ADDRESSMODE=0,e.WRAP_ADDRESSMODE=1,e.MIRROR_ADDRESSMODE=2,e.UseSerializedUrlIfAny=!1,h([d()],e.prototype,"url",void 0),h([d()],e.prototype,"uOffset",void 0),h([d()],e.prototype,"vOffset",void 0),h([d()],e.prototype,"uScale",void 0),h([d()],e.prototype,"vScale",void 0),h([d()],e.prototype,"uAng",void 0),h([d()],e.prototype,"vAng",void 0),h([d()],e.prototype,"wAng",void 0),h([d()],e.prototype,"uRotationCenter",void 0),h([d()],e.prototype,"vRotationCenter",void 0),h([d()],e.prototype,"wRotationCenter",void 0),h([d()],e.prototype,"homogeneousRotationInUVTransform",void 0),h([d()],e.prototype,"isBlocking",null),e}(ue);ne("BABYLON.Texture",$);O._TextureParser=$.Parse;var fe="helperFunctions",he=`const float PI=3.1415926535897932384626433832795;
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
float toLinearSpace(float color)
{
return pow(color,LinearEncodePowerApprox);
}
vec3 toLinearSpace(vec3 color)
{
return pow(color,vec3(LinearEncodePowerApprox));
}
vec4 toLinearSpace(vec4 color)
{
return vec4(pow(color.rgb,vec3(LinearEncodePowerApprox)),color.a);
}
vec3 toGammaSpace(vec3 color)
{
return pow(color,vec3(GammaEncodePowerApprox));
}
vec4 toGammaSpace(vec4 color)
{
return vec4(pow(color.rgb,vec3(GammaEncodePowerApprox)),color.a);
}
float toGammaSpace(float color)
{
return pow(color,GammaEncodePowerApprox);
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
`;I.IncludesShadersStore[fe]=he;var de="clipPlaneFragmentDeclaration",_e=`#ifdef CLIPPLANE
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
`;I.IncludesShadersStore[de]=_e;var pe="clipPlaneFragment",ge=`#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)
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
`;I.IncludesShadersStore[pe]=ge;var ve="clipPlaneVertexDeclaration",xe=`#ifdef CLIPPLANE
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
`;I.IncludesShadersStore[ve]=xe;var me="clipPlaneVertex",ye=`#ifdef CLIPPLANE
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
`;I.IncludesShadersStore[me]=ye;export{$ as T};
