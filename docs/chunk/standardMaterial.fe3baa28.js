import{_ as O,M as k,j as S,a1 as d,S as y,e as o,g as m,a2 as C,I as p,a3 as Y,a as X,a4 as W,i as R,x as j,H as U,a5 as F,k as Q,w as Z}from"./test1.990751a6.js";import{M as V,a as D}from"./material.4eb4d890.js";import{M as h}from"./materialHelper.19d69264.js";import{T as I}from"./clipPlaneVertex.58e6a1d5.js";import{E as q}from"./effectFallbacks.db57095f.js";import"./imageProcessingFunctions.117736a4.js";import"./instancesDeclaration.872520ba.js";var H=function(){function a(){this.previousWorldMatrices={},this.previousBones={}}return a.AddUniforms=function(e){e.push("previousWorld","previousViewProjection","mPreviousBones")},a.AddSamplers=function(e){},a.prototype.bindForSubMesh=function(e,n,i,r,l){if(n.prePassRenderer&&n.prePassRenderer.enabled&&n.prePassRenderer.currentRTisSceneRT&&n.prePassRenderer.getIndex(2)!==-1){this.previousWorldMatrices[i.uniqueId]||(this.previousWorldMatrices[i.uniqueId]=r.clone()),this.previousViewProjection||(this.previousViewProjection=n.getTransformMatrix().clone(),this.currentViewProjection=n.getTransformMatrix().clone());var t=n.getEngine();this.currentViewProjection.updateFlag!==n.getTransformMatrix().updateFlag?(this._lastUpdateFrameId=t.frameId,this.previousViewProjection.copyFrom(this.currentViewProjection),this.currentViewProjection.copyFrom(n.getTransformMatrix())):this._lastUpdateFrameId!==t.frameId&&(this._lastUpdateFrameId=t.frameId,this.previousViewProjection.copyFrom(this.currentViewProjection)),e.setMatrix("previousWorld",this.previousWorldMatrices[i.uniqueId]),e.setMatrix("previousViewProjection",this.previousViewProjection),this.previousWorldMatrices[i.uniqueId]=r.clone()}},a}(),K=function(a){O(e,a);function e(n,i,r){r===void 0&&(r=!0);var l=a.call(this,n,i)||this;return l._normalMatrix=new k,l._storeEffectOnSubMeshes=r,l}return e.prototype.getEffect=function(){return this._storeEffectOnSubMeshes?this._activeEffect:a.prototype.getEffect.call(this)},e.prototype.isReady=function(n,i){return n?!this._storeEffectOnSubMeshes||!n.subMeshes||n.subMeshes.length===0?!0:this.isReadyForSubMesh(n,n.subMeshes[0],i):!1},e.prototype._isReadyForSubMesh=function(n){var i=n.materialDefines;return!!(!this.checkReadyOnEveryCall&&n.effect&&i&&i._renderId===this.getScene().getRenderId())},e.prototype.bindOnlyWorldMatrix=function(n){this._activeEffect.setMatrix("world",n)},e.prototype.bindOnlyNormalMatrix=function(n){this._activeEffect.setMatrix("normalMatrix",n)},e.prototype.bind=function(n,i){!i||this.bindForSubMesh(n,i,i.subMeshes[0])},e.prototype._afterBind=function(n,i){i===void 0&&(i=null),a.prototype._afterBind.call(this,n,i),this.getScene()._cachedEffect=i},e.prototype._mustRebind=function(n,i,r){return r===void 0&&(r=1),n.isCachedMaterialInvalid(this,i,r)},e}(V),E=function(){function a(){}return Object.defineProperty(a,"DiffuseTextureEnabled",{get:function(){return this._DiffuseTextureEnabled},set:function(e){this._DiffuseTextureEnabled!==e&&(this._DiffuseTextureEnabled=e,S.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(a,"DetailTextureEnabled",{get:function(){return this._DetailTextureEnabled},set:function(e){this._DetailTextureEnabled!==e&&(this._DetailTextureEnabled=e,S.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(a,"AmbientTextureEnabled",{get:function(){return this._AmbientTextureEnabled},set:function(e){this._AmbientTextureEnabled!==e&&(this._AmbientTextureEnabled=e,S.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(a,"OpacityTextureEnabled",{get:function(){return this._OpacityTextureEnabled},set:function(e){this._OpacityTextureEnabled!==e&&(this._OpacityTextureEnabled=e,S.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(a,"ReflectionTextureEnabled",{get:function(){return this._ReflectionTextureEnabled},set:function(e){this._ReflectionTextureEnabled!==e&&(this._ReflectionTextureEnabled=e,S.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(a,"EmissiveTextureEnabled",{get:function(){return this._EmissiveTextureEnabled},set:function(e){this._EmissiveTextureEnabled!==e&&(this._EmissiveTextureEnabled=e,S.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(a,"SpecularTextureEnabled",{get:function(){return this._SpecularTextureEnabled},set:function(e){this._SpecularTextureEnabled!==e&&(this._SpecularTextureEnabled=e,S.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(a,"BumpTextureEnabled",{get:function(){return this._BumpTextureEnabled},set:function(e){this._BumpTextureEnabled!==e&&(this._BumpTextureEnabled=e,S.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(a,"LightmapTextureEnabled",{get:function(){return this._LightmapTextureEnabled},set:function(e){this._LightmapTextureEnabled!==e&&(this._LightmapTextureEnabled=e,S.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(a,"RefractionTextureEnabled",{get:function(){return this._RefractionTextureEnabled},set:function(e){this._RefractionTextureEnabled!==e&&(this._RefractionTextureEnabled=e,S.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(a,"ColorGradingTextureEnabled",{get:function(){return this._ColorGradingTextureEnabled},set:function(e){this._ColorGradingTextureEnabled!==e&&(this._ColorGradingTextureEnabled=e,S.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(a,"FresnelEnabled",{get:function(){return this._FresnelEnabled},set:function(e){this._FresnelEnabled!==e&&(this._FresnelEnabled=e,S.MarkAllMaterialsAsDirty(4))},enumerable:!1,configurable:!0}),Object.defineProperty(a,"ClearCoatTextureEnabled",{get:function(){return this._ClearCoatTextureEnabled},set:function(e){this._ClearCoatTextureEnabled!==e&&(this._ClearCoatTextureEnabled=e,S.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(a,"ClearCoatBumpTextureEnabled",{get:function(){return this._ClearCoatBumpTextureEnabled},set:function(e){this._ClearCoatBumpTextureEnabled!==e&&(this._ClearCoatBumpTextureEnabled=e,S.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(a,"ClearCoatTintTextureEnabled",{get:function(){return this._ClearCoatTintTextureEnabled},set:function(e){this._ClearCoatTintTextureEnabled!==e&&(this._ClearCoatTintTextureEnabled=e,S.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(a,"SheenTextureEnabled",{get:function(){return this._SheenTextureEnabled},set:function(e){this._SheenTextureEnabled!==e&&(this._SheenTextureEnabled=e,S.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(a,"AnisotropicTextureEnabled",{get:function(){return this._AnisotropicTextureEnabled},set:function(e){this._AnisotropicTextureEnabled!==e&&(this._AnisotropicTextureEnabled=e,S.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(a,"ThicknessTextureEnabled",{get:function(){return this._ThicknessTextureEnabled},set:function(e){this._ThicknessTextureEnabled!==e&&(this._ThicknessTextureEnabled=e,S.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(a,"RefractionIntensityTextureEnabled",{get:function(){return this._ThicknessTextureEnabled},set:function(e){this._RefractionIntensityTextureEnabled!==e&&(this._RefractionIntensityTextureEnabled=e,S.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(a,"TranslucencyIntensityTextureEnabled",{get:function(){return this._ThicknessTextureEnabled},set:function(e){this._TranslucencyIntensityTextureEnabled!==e&&(this._TranslucencyIntensityTextureEnabled=e,S.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),Object.defineProperty(a,"IridescenceTextureEnabled",{get:function(){return this._IridescenceTextureEnabled},set:function(e){this._IridescenceTextureEnabled!==e&&(this._IridescenceTextureEnabled=e,S.MarkAllMaterialsAsDirty(1))},enumerable:!1,configurable:!0}),a._DiffuseTextureEnabled=!0,a._DetailTextureEnabled=!0,a._AmbientTextureEnabled=!0,a._OpacityTextureEnabled=!0,a._ReflectionTextureEnabled=!0,a._EmissiveTextureEnabled=!0,a._SpecularTextureEnabled=!0,a._BumpTextureEnabled=!0,a._LightmapTextureEnabled=!0,a._RefractionTextureEnabled=!0,a._ColorGradingTextureEnabled=!0,a._FresnelEnabled=!0,a._ClearCoatTextureEnabled=!0,a._ClearCoatBumpTextureEnabled=!0,a._ClearCoatTintTextureEnabled=!0,a._SheenTextureEnabled=!0,a._AnisotropicTextureEnabled=!0,a._ThicknessTextureEnabled=!0,a._RefractionIntensityTextureEnabled=!0,a._TranslucencyIntensityTextureEnabled=!0,a._IridescenceTextureEnabled=!0,a}(),J="defaultFragmentDeclaration",ee=`uniform vec4 vEyePosition;
uniform vec4 vDiffuseColor;
#ifdef SPECULARTERM
uniform vec4 vSpecularColor;
#endif
uniform vec3 vEmissiveColor;
uniform vec3 vAmbientColor;
uniform float visibility;
#ifdef DIFFUSE
uniform vec2 vDiffuseInfos;
#endif
#ifdef AMBIENT
uniform vec2 vAmbientInfos;
#endif
#ifdef OPACITY 
uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;
uniform vec2 vTangentSpaceParams;
#endif
#ifdef ALPHATEST
uniform float alphaCutOff;
#endif
#if defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_PROJECTION) || defined(REFRACTION) || defined(PREPASS)
uniform mat4 view;
#endif
#ifdef REFRACTION
uniform vec4 vRefractionInfos;
#ifndef REFRACTIONMAP_3D
uniform mat4 refractionMatrix;
#endif
#ifdef REFRACTIONFRESNEL
uniform vec4 refractionLeftColor;
uniform vec4 refractionRightColor;
#endif
#if defined(USE_LOCAL_REFRACTIONMAP_CUBIC) && defined(REFRACTIONMAP_3D)
uniform vec3 vRefractionPosition;
uniform vec3 vRefractionSize; 
#endif
#endif
#if defined(SPECULAR) && defined(SPECULARTERM)
uniform vec2 vSpecularInfos;
#endif
#ifdef DIFFUSEFRESNEL
uniform vec4 diffuseLeftColor;
uniform vec4 diffuseRightColor;
#endif
#ifdef OPACITYFRESNEL
uniform vec4 opacityParts;
#endif
#ifdef EMISSIVEFRESNEL
uniform vec4 emissiveLeftColor;
uniform vec4 emissiveRightColor;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;
#if defined(REFLECTIONMAP_PLANAR) || defined(REFLECTIONMAP_CUBIC) || defined(REFLECTIONMAP_PROJECTION) || defined(REFLECTIONMAP_EQUIRECTANGULAR) || defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_SKYBOX)
uniform mat4 reflectionMatrix;
#endif
#ifndef REFLECTIONMAP_SKYBOX
#if defined(USE_LOCAL_REFLECTIONMAP_CUBIC) && defined(REFLECTIONMAP_CUBIC)
uniform vec3 vReflectionPosition;
uniform vec3 vReflectionSize; 
#endif
#endif
#ifdef REFLECTIONFRESNEL
uniform vec4 reflectionLeftColor;
uniform vec4 reflectionRightColor;
#endif
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;
#endif
#define ADDITIONAL_FRAGMENT_DECLARATION
`;d.IncludesShadersStore[J]=ee;var ne="defaultUboDeclaration",ie=`layout(std140,column_major) uniform;
uniform Material
{
vec4 diffuseLeftColor;
vec4 diffuseRightColor;
vec4 opacityParts;
vec4 reflectionLeftColor;
vec4 reflectionRightColor;
vec4 refractionLeftColor;
vec4 refractionRightColor;
vec4 emissiveLeftColor;
vec4 emissiveRightColor;
vec2 vDiffuseInfos;
vec2 vAmbientInfos;
vec2 vOpacityInfos;
vec2 vReflectionInfos;
vec3 vReflectionPosition;
vec3 vReflectionSize;
vec2 vEmissiveInfos;
vec2 vLightmapInfos;
vec2 vSpecularInfos;
vec3 vBumpInfos;
mat4 diffuseMatrix;
mat4 ambientMatrix;
mat4 opacityMatrix;
mat4 reflectionMatrix;
mat4 emissiveMatrix;
mat4 lightmapMatrix;
mat4 specularMatrix;
mat4 bumpMatrix;
vec2 vTangentSpaceParams;
float pointSize;
float alphaCutOff;
mat4 refractionMatrix;
vec4 vRefractionInfos;
vec3 vRefractionPosition;
vec3 vRefractionSize;
vec4 vSpecularColor;
vec3 vEmissiveColor;
vec4 vDiffuseColor;
vec3 vAmbientColor;
#define ADDITIONAL_UBO_DECLARATION
};
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;d.IncludesShadersStore[ne]=ie;var te="prePassDeclaration",re=`#ifdef PREPASS
#extension GL_EXT_draw_buffers : require
layout(location=0) out highp vec4 glFragData[{X}];highp vec4 gl_FragColor;
#ifdef PREPASS_DEPTH
varying highp vec3 vViewPos;
#endif
#ifdef PREPASS_VELOCITY
varying highp vec4 vCurrentPosition;varying highp vec4 vPreviousPosition;
#endif
#endif
`;d.IncludesShadersStore[te]=re;var ae="oitDeclaration",oe=`#ifdef ORDER_INDEPENDENT_TRANSPARENCY
#extension GL_EXT_draw_buffers : require
layout(location=0) out vec2 depth; 
layout(location=1) out vec4 frontColor;
layout(location=2) out vec4 backColor;
#define MAX_DEPTH 99999.0
highp vec4 gl_FragColor;
uniform sampler2D oitDepthSampler;
uniform sampler2D oitFrontColorSampler;
#endif
`;d.IncludesShadersStore[ae]=oe;var se="mainUVVaryingDeclaration",le=`#ifdef MAINUV{X}
varying vec2 vMainUV{X};
#endif
`;d.IncludesShadersStore[se]=le;var fe="lightFragmentDeclaration",de=`#ifdef LIGHT{X}
uniform vec4 vLightData{X};
uniform vec4 vLightDiffuse{X};
#ifdef SPECULARTERM
uniform vec4 vLightSpecular{X};
#else
vec4 vLightSpecular{X}=vec4(0.);
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float viewFrustumZ{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float frustumLengths{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float cascadeBlendFactor{X};
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
uniform highp sampler2DArray depthSampler{X};
uniform vec2 lightSizeUVCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float depthCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float penumbraDarkness{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
#else
uniform highp sampler2DArray shadowSampler{X};
#endif
#ifdef SHADOWCSMDEBUG{X}
const vec3 vCascadeColorsMultiplier{X}[8]=vec3[8]
(
vec3 ( 1.5,0.0,0.0 ),
vec3 ( 0.0,1.5,0.0 ),
vec3 ( 0.0,0.0,5.5 ),
vec3 ( 1.5,0.0,5.5 ),
vec3 ( 1.5,1.5,0.0 ),
vec3 ( 1.0,1.0,1.0 ),
vec3 ( 0.0,1.0,5.5 ),
vec3 ( 0.5,3.5,0.75 )
);
vec3 shadowDebug{X};
#endif
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
int index{X}=-1;
#else
int index{X}=SHADOWCSMNUM_CASCADES{X}-1;
#endif
float diff{X}=0.;
#elif defined(SHADOWCUBE{X})
uniform samplerCube shadowSampler{X};
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DShadow shadowSampler{X};
uniform highp sampler2D depthSampler{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DShadow shadowSampler{X};
#else
uniform sampler2D shadowSampler{X};
#endif
uniform mat4 lightMatrix{X};
#endif
uniform vec4 shadowsInfo{X};
uniform vec2 depthValues{X};
#endif
#ifdef SPOTLIGHT{X}
uniform vec4 vLightDirection{X};
uniform vec4 vLightFalloff{X};
#elif defined(POINTLIGHT{X})
uniform vec4 vLightFalloff{X};
#elif defined(HEMILIGHT{X})
uniform vec3 vLightGround{X};
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
uniform mat4 textureProjectionMatrix{X};
uniform sampler2D projectionLightSampler{X};
#endif
#endif
`;d.IncludesShadersStore[fe]=de;var ue="lightUboDeclaration",ce=`#ifdef LIGHT{X}
uniform Light{X}
{
vec4 vLightData;
vec4 vLightDiffuse;
vec4 vLightSpecular;
#ifdef SPOTLIGHT{X}
vec4 vLightDirection;
vec4 vLightFalloff;
#elif defined(POINTLIGHT{X})
vec4 vLightFalloff;
#elif defined(HEMILIGHT{X})
vec3 vLightGround;
#endif
vec4 shadowsInfo;
vec2 depthValues;
} light{X};
#ifdef PROJECTEDLIGHTTEXTURE{X}
uniform mat4 textureProjectionMatrix{X};
uniform sampler2D projectionLightSampler{X};
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float viewFrustumZ{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float frustumLengths{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float cascadeBlendFactor{X};
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
uniform highp sampler2DArray depthSampler{X};
uniform vec2 lightSizeUVCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float depthCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float penumbraDarkness{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
#else
uniform highp sampler2DArray shadowSampler{X};
#endif
#ifdef SHADOWCSMDEBUG{X}
const vec3 vCascadeColorsMultiplier{X}[8]=vec3[8]
(
vec3 ( 1.5,0.0,0.0 ),
vec3 ( 0.0,1.5,0.0 ),
vec3 ( 0.0,0.0,5.5 ),
vec3 ( 1.5,0.0,5.5 ),
vec3 ( 1.5,1.5,0.0 ),
vec3 ( 1.0,1.0,1.0 ),
vec3 ( 0.0,1.0,5.5 ),
vec3 ( 0.5,3.5,0.75 )
);
vec3 shadowDebug{X};
#endif
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
int index{X}=-1;
#else
int index{X}=SHADOWCSMNUM_CASCADES{X}-1;
#endif
float diff{X}=0.;
#elif defined(SHADOWCUBE{X})
uniform samplerCube shadowSampler{X}; 
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DShadow shadowSampler{X};
uniform highp sampler2D depthSampler{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DShadow shadowSampler{X};
#else
uniform sampler2D shadowSampler{X};
#endif
uniform mat4 lightMatrix{X};
#endif
#endif
#endif
`;d.IncludesShadersStore[ue]=ce;var he="lightsFragmentFunctions",pe=`struct lightingInfo
{
vec3 diffuse;
#ifdef SPECULARTERM
vec3 specular;
#endif
#ifdef NDOTL
float ndl;
#endif
};
lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {
lightingInfo result;
vec3 lightVectorW;
float attenuation=1.0;
if (lightData.w==0.)
{
vec3 direction=lightData.xyz-vPositionW;
attenuation=max(0.,1.0-length(direction)/range);
lightVectorW=normalize(direction);
}
else
{
lightVectorW=normalize(-lightData.xyz);
}
float ndl=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightVectorW);
float specComp=max(0.,dot(vNormal,angleW));
specComp=pow(specComp,max(1.,glossiness));
result.specular=specComp*specularColor*attenuation;
#endif
return result;
}
lightingInfo computeSpotLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec4 lightDirection,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {
lightingInfo result;
vec3 direction=lightData.xyz-vPositionW;
vec3 lightVectorW=normalize(direction);
float attenuation=max(0.,1.0-length(direction)/range);
float cosAngle=max(0.,dot(lightDirection.xyz,-lightVectorW));
if (cosAngle>=lightDirection.w)
{
cosAngle=max(0.,pow(cosAngle,lightData.w));
attenuation*=cosAngle;
float ndl=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightVectorW);
float specComp=max(0.,dot(vNormal,angleW));
specComp=pow(specComp,max(1.,glossiness));
result.specular=specComp*specularColor*attenuation;
#endif
return result;
}
result.diffuse=vec3(0.);
#ifdef SPECULARTERM
result.specular=vec3(0.);
#endif
#ifdef NDOTL
result.ndl=0.;
#endif
return result;
}
lightingInfo computeHemisphericLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,vec3 groundColor,float glossiness) {
lightingInfo result;
float ndl=dot(vNormal,lightData.xyz)*0.5+0.5;
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=mix(groundColor,diffuseColor,ndl);
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightData.xyz);
float specComp=max(0.,dot(vNormal,angleW));
specComp=pow(specComp,max(1.,glossiness));
result.specular=specComp*specularColor;
#endif
return result;
}
#define inline
vec3 computeProjectionTextureDiffuseLighting(sampler2D projectionLightSampler,mat4 textureProjectionMatrix){
vec4 strq=textureProjectionMatrix*vec4(vPositionW,1.0);
strq/=strq.w;
vec3 textureColor=texture2D(projectionLightSampler,strq.xy).rgb;
return textureColor;
}`;d.IncludesShadersStore[he]=pe;var ve="shadowsFragmentFunctions",me=`#ifdef SHADOWS
#ifndef SHADOWFLOAT
float unpack(vec4 color)
{
const vec4 bit_shift=vec4(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);
return dot(color,bit_shift);
}
#endif
float computeFallOff(float value,vec2 clipSpace,float frustumEdgeFalloff)
{
float mask=smoothstep(1.0-frustumEdgeFalloff,1.00000012,clamp(dot(clipSpace,clipSpace),0.,1.));
return mix(value,1.0,mask);
}
#define inline
float computeShadowCube(vec3 lightPosition,samplerCube shadowSampler,float darkness,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
depth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadow=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadow=textureCube(shadowSampler,directionToLight).x;
#endif
return depth>shadow ? darkness : 1.0;
}
#define inline
float computeShadowWithPoissonSamplingCube(vec3 lightPosition,samplerCube shadowSampler,float mapSize,float darkness,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
depth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
float visibility=1.;
vec3 poissonDisk[4];
poissonDisk[0]=vec3(-1.0,1.0,-1.0);
poissonDisk[1]=vec3(1.0,-1.0,-1.0);
poissonDisk[2]=vec3(-1.0,-1.0,-1.0);
poissonDisk[3]=vec3(1.0,-1.0,1.0);
#ifndef SHADOWFLOAT
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[0]*mapSize))<depth) visibility-=0.25;
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[1]*mapSize))<depth) visibility-=0.25;
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[2]*mapSize))<depth) visibility-=0.25;
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[3]*mapSize))<depth) visibility-=0.25;
#else
if (textureCube(shadowSampler,directionToLight+poissonDisk[0]*mapSize).x<depth) visibility-=0.25;
if (textureCube(shadowSampler,directionToLight+poissonDisk[1]*mapSize).x<depth) visibility-=0.25;
if (textureCube(shadowSampler,directionToLight+poissonDisk[2]*mapSize).x<depth) visibility-=0.25;
if (textureCube(shadowSampler,directionToLight+poissonDisk[3]*mapSize).x<depth) visibility-=0.25;
#endif
return min(1.0,visibility+darkness);
}
#define inline
float computeShadowWithESMCube(vec3 lightPosition,samplerCube shadowSampler,float darkness,float depthScale,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
float shadowPixelDepth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadowMapSample=textureCube(shadowSampler,directionToLight).x;
#endif
float esm=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness); 
return esm;
}
#define inline
float computeShadowWithCloseESMCube(vec3 lightPosition,samplerCube shadowSampler,float darkness,float depthScale,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
float shadowPixelDepth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadowMapSample=textureCube(shadowSampler,directionToLight).x;
#endif
float esm=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);
return esm;
}
#if defined(WEBGL2) || defined(WEBGPU)
#define inline
float computeShadowCSM(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray shadowSampler,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
vec3 uvLayer=vec3(uv.x,uv.y,layer);
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadow=unpack(texture2D(shadowSampler,uvLayer));
#else
float shadow=texture2D(shadowSampler,uvLayer).x;
#endif
return shadowPixelDepth>shadow ? computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff) : 1.;
}
#endif
#define inline
float computeShadow(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadow=unpack(texture2D(shadowSampler,uv));
#else
float shadow=texture2D(shadowSampler,uv).x;
#endif
return shadowPixelDepth>shadow ? computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff) : 1.;
}
}
#define inline
float computeShadowWithPoissonSampling(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float mapSize,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
float visibility=1.;
vec2 poissonDisk[4];
poissonDisk[0]=vec2(-0.94201624,-0.39906216);
poissonDisk[1]=vec2(0.94558609,-0.76890725);
poissonDisk[2]=vec2(-0.094184101,-0.92938870);
poissonDisk[3]=vec2(0.34495938,0.29387760);
#ifndef SHADOWFLOAT
if (unpack(texture2D(shadowSampler,uv+poissonDisk[0]*mapSize))<shadowPixelDepth) visibility-=0.25;
if (unpack(texture2D(shadowSampler,uv+poissonDisk[1]*mapSize))<shadowPixelDepth) visibility-=0.25;
if (unpack(texture2D(shadowSampler,uv+poissonDisk[2]*mapSize))<shadowPixelDepth) visibility-=0.25;
if (unpack(texture2D(shadowSampler,uv+poissonDisk[3]*mapSize))<shadowPixelDepth) visibility-=0.25;
#else
if (texture2D(shadowSampler,uv+poissonDisk[0]*mapSize).x<shadowPixelDepth) visibility-=0.25;
if (texture2D(shadowSampler,uv+poissonDisk[1]*mapSize).x<shadowPixelDepth) visibility-=0.25;
if (texture2D(shadowSampler,uv+poissonDisk[2]*mapSize).x<shadowPixelDepth) visibility-=0.25;
if (texture2D(shadowSampler,uv+poissonDisk[3]*mapSize).x<shadowPixelDepth) visibility-=0.25;
#endif
return computeFallOff(min(1.0,visibility+darkness),clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithESM(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float depthScale,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(texture2D(shadowSampler,uv));
#else
float shadowMapSample=texture2D(shadowSampler,uv).x;
#endif
float esm=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness);
return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithCloseESM(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float depthScale,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0); 
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(texture2D(shadowSampler,uv));
#else
float shadowMapSample=texture2D(shadowSampler,uv).x;
#endif
float esm=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);
return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);
}
}
#ifdef IS_NDC_HALF_ZRANGE
#define ZINCLIP clipSpace.z
#else
#define ZINCLIP uvDepth.z
#endif
#if defined(WEBGL2) || defined(WEBGPU)
#define GREATEST_LESS_THAN_ONE 0.99999994
#define inline
float computeShadowWithCSMPCF1(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
vec4 uvDepthLayer=vec4(uvDepth.x,uvDepth.y,layer,uvDepth.z);
float shadow=texture2D(shadowSampler,uvDepthLayer);
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
#define inline
float computeShadowWithCSMPCF3(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=3.-2.*st;
vec2 uvw1=1.+2.*st;
vec2 u=vec2((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;
vec2 v=vec2((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[0]),layer,uvDepth.z));
shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[0]),layer,uvDepth.z));
shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[1]),layer,uvDepth.z));
shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[1]),layer,uvDepth.z));
shadow=shadow/16.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
#define inline
float computeShadowWithCSMPCF5(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=4.-3.*st;
vec2 uvw1=vec2(7.);
vec2 uvw2=1.+3.*st;
vec3 u=vec3((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;
vec3 v=vec3((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[0]),layer,uvDepth.z));
shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[0]),layer,uvDepth.z));
shadow+=uvw2.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[0]),layer,uvDepth.z));
shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[1]),layer,uvDepth.z));
shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[1]),layer,uvDepth.z));
shadow+=uvw2.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[1]),layer,uvDepth.z));
shadow+=uvw0.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[2]),layer,uvDepth.z));
shadow+=uvw1.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[2]),layer,uvDepth.z));
shadow+=uvw2.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[2]),layer,uvDepth.z));
shadow=shadow/144.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
#define inline
float computeShadowWithPCF1(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,float darkness,float frustumEdgeFalloff)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=ZINCLIP;
float shadow=texture2D(shadowSampler,uvDepth);
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithPCF3(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=ZINCLIP;
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=3.-2.*st;
vec2 uvw1=1.+2.*st;
vec2 u=vec2((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;
vec2 v=vec2((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[0]),uvDepth.z));
shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[0]),uvDepth.z));
shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[1]),uvDepth.z));
shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[1]),uvDepth.z));
shadow=shadow/16.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithPCF5(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=ZINCLIP;
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=4.-3.*st;
vec2 uvw1=vec2(7.);
vec2 uvw2=1.+3.*st;
vec3 u=vec3((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;
vec3 v=vec3((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[0]),uvDepth.z));
shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[0]),uvDepth.z));
shadow+=uvw2.x*uvw0.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[0]),uvDepth.z));
shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[1]),uvDepth.z));
shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[1]),uvDepth.z));
shadow+=uvw2.x*uvw1.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[1]),uvDepth.z));
shadow+=uvw0.x*uvw2.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[2]),uvDepth.z));
shadow+=uvw1.x*uvw2.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[2]),uvDepth.z));
shadow+=uvw2.x*uvw2.y*texture2D(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[2]),uvDepth.z));
shadow=shadow/144.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
const vec3 PoissonSamplers32[64]=vec3[64](
vec3(0.06407013,0.05409927,0.),
vec3(0.7366577,0.5789394,0.),
vec3(-0.6270542,-0.5320278,0.),
vec3(-0.4096107,0.8411095,0.),
vec3(0.6849564,-0.4990818,0.),
vec3(-0.874181,-0.04579735,0.),
vec3(0.9989998,0.0009880066,0.),
vec3(-0.004920578,-0.9151649,0.),
vec3(0.1805763,0.9747483,0.),
vec3(-0.2138451,0.2635818,0.),
vec3(0.109845,0.3884785,0.),
vec3(0.06876755,-0.3581074,0.),
vec3(0.374073,-0.7661266,0.),
vec3(0.3079132,-0.1216763,0.),
vec3(-0.3794335,-0.8271583,0.),
vec3(-0.203878,-0.07715034,0.),
vec3(0.5912697,0.1469799,0.),
vec3(-0.88069,0.3031784,0.),
vec3(0.5040108,0.8283722,0.),
vec3(-0.5844124,0.5494877,0.),
vec3(0.6017799,-0.1726654,0.),
vec3(-0.5554981,0.1559997,0.),
vec3(-0.3016369,-0.3900928,0.),
vec3(-0.5550632,-0.1723762,0.),
vec3(0.925029,0.2995041,0.),
vec3(-0.2473137,0.5538505,0.),
vec3(0.9183037,-0.2862392,0.),
vec3(0.2469421,0.6718712,0.),
vec3(0.3916397,-0.4328209,0.),
vec3(-0.03576927,-0.6220032,0.),
vec3(-0.04661255,0.7995201,0.),
vec3(0.4402924,0.3640312,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.)
);
const vec3 PoissonSamplers64[64]=vec3[64](
vec3(-0.613392,0.617481,0.),
vec3(0.170019,-0.040254,0.),
vec3(-0.299417,0.791925,0.),
vec3(0.645680,0.493210,0.),
vec3(-0.651784,0.717887,0.),
vec3(0.421003,0.027070,0.),
vec3(-0.817194,-0.271096,0.),
vec3(-0.705374,-0.668203,0.),
vec3(0.977050,-0.108615,0.),
vec3(0.063326,0.142369,0.),
vec3(0.203528,0.214331,0.),
vec3(-0.667531,0.326090,0.),
vec3(-0.098422,-0.295755,0.),
vec3(-0.885922,0.215369,0.),
vec3(0.566637,0.605213,0.),
vec3(0.039766,-0.396100,0.),
vec3(0.751946,0.453352,0.),
vec3(0.078707,-0.715323,0.),
vec3(-0.075838,-0.529344,0.),
vec3(0.724479,-0.580798,0.),
vec3(0.222999,-0.215125,0.),
vec3(-0.467574,-0.405438,0.),
vec3(-0.248268,-0.814753,0.),
vec3(0.354411,-0.887570,0.),
vec3(0.175817,0.382366,0.),
vec3(0.487472,-0.063082,0.),
vec3(-0.084078,0.898312,0.),
vec3(0.488876,-0.783441,0.),
vec3(0.470016,0.217933,0.),
vec3(-0.696890,-0.549791,0.),
vec3(-0.149693,0.605762,0.),
vec3(0.034211,0.979980,0.),
vec3(0.503098,-0.308878,0.),
vec3(-0.016205,-0.872921,0.),
vec3(0.385784,-0.393902,0.),
vec3(-0.146886,-0.859249,0.),
vec3(0.643361,0.164098,0.),
vec3(0.634388,-0.049471,0.),
vec3(-0.688894,0.007843,0.),
vec3(0.464034,-0.188818,0.),
vec3(-0.440840,0.137486,0.),
vec3(0.364483,0.511704,0.),
vec3(0.034028,0.325968,0.),
vec3(0.099094,-0.308023,0.),
vec3(0.693960,-0.366253,0.),
vec3(0.678884,-0.204688,0.),
vec3(0.001801,0.780328,0.),
vec3(0.145177,-0.898984,0.),
vec3(0.062655,-0.611866,0.),
vec3(0.315226,-0.604297,0.),
vec3(-0.780145,0.486251,0.),
vec3(-0.371868,0.882138,0.),
vec3(0.200476,0.494430,0.),
vec3(-0.494552,-0.711051,0.),
vec3(0.612476,0.705252,0.),
vec3(-0.578845,-0.768792,0.),
vec3(-0.772454,-0.090976,0.),
vec3(0.504440,0.372295,0.),
vec3(0.155736,0.065157,0.),
vec3(0.391522,0.849605,0.),
vec3(-0.620106,-0.328104,0.),
vec3(0.789239,-0.419965,0.),
vec3(-0.545396,0.538133,0.),
vec3(-0.178564,-0.596057,0.)
);
#define inline
float computeShadowWithCSMPCSS(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,int searchTapCount,int pcfTapCount,vec3[64] poissonSamplers,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
vec4 uvDepthLayer=vec4(uvDepth.x,uvDepth.y,layer,uvDepth.z);
float blockerDepth=0.0;
float sumBlockerDepth=0.0;
float numBlocker=0.0;
for (int i=0; i<searchTapCount; i ++) {
blockerDepth=texture2D(depthSampler,vec3(uvDepth.xy+(lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse*PoissonSamplers32[i].xy),layer)).r;
if (blockerDepth<depthMetric) {
sumBlockerDepth+=blockerDepth;
numBlocker++;
}
}
if (numBlocker<1.0) {
return 1.0;
}
else
{
float avgBlockerDepth=sumBlockerDepth/numBlocker;
float AAOffset=shadowMapSizeInverse*10.;
float penumbraRatio=((depthMetric-avgBlockerDepth)*depthCorrection+AAOffset);
vec4 filterRadius=vec4(penumbraRatio*lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse,0.,0.);
float random=getRand(vPositionFromLight.xy);
float rotationAngle=random*3.1415926;
vec2 rotationVector=vec2(cos(rotationAngle),sin(rotationAngle));
float shadow=0.;
for (int i=0; i<pcfTapCount; i++) {
vec4 offset=vec4(poissonSamplers[i],0.);
offset=vec4(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.,0.);
shadow+=texture2D(shadowSampler,uvDepthLayer+offset*filterRadius);
}
shadow/=float(pcfTapCount);
shadow=mix(shadow,1.,min((depthMetric-avgBlockerDepth)*depthCorrection*penumbraDarkness,1.));
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithPCSS(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,int searchTapCount,int pcfTapCount,vec3[64] poissonSamplers)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=ZINCLIP;
float blockerDepth=0.0;
float sumBlockerDepth=0.0;
float numBlocker=0.0;
for (int i=0; i<searchTapCount; i ++) {
blockerDepth=texture2D(depthSampler,uvDepth.xy+(lightSizeUV*shadowMapSizeInverse*PoissonSamplers32[i].xy)).r;
if (blockerDepth<depthMetric) {
sumBlockerDepth+=blockerDepth;
numBlocker++;
}
}
if (numBlocker<1.0) {
return 1.0;
}
else
{
float avgBlockerDepth=sumBlockerDepth/numBlocker;
float AAOffset=shadowMapSizeInverse*10.;
float penumbraRatio=((depthMetric-avgBlockerDepth)+AAOffset);
float filterRadius=penumbraRatio*lightSizeUV*shadowMapSizeInverse;
float random=getRand(vPositionFromLight.xy);
float rotationAngle=random*3.1415926;
vec2 rotationVector=vec2(cos(rotationAngle),sin(rotationAngle));
float shadow=0.;
for (int i=0; i<pcfTapCount; i++) {
vec3 offset=poissonSamplers[i];
offset=vec3(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.);
shadow+=texture2D(shadowSampler,uvDepth+offset*filterRadius);
}
shadow/=float(pcfTapCount);
shadow=mix(shadow,1.,depthMetric-avgBlockerDepth);
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
}
#define inline
float computeShadowWithPCSS16(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{
return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32);
}
#define inline
float computeShadowWithPCSS32(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{
return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32);
}
#define inline
float computeShadowWithPCSS64(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{
return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64);
}
#define inline
float computeShadowWithCSMPCSS16(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);
}
#define inline
float computeShadowWithCSMPCSS32(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);
}
#define inline
float computeShadowWithCSMPCSS64(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64,lightSizeUVCorrection,depthCorrection,penumbraDarkness);
}
#endif
#endif
`;d.IncludesShadersStore[ve]=me;var Ee="samplerFragmentDeclaration",ge=`#ifdef _DEFINENAME_
#if _DEFINENAME_DIRECTUV==1
#define v_VARYINGNAME_UV vMainUV1
#elif _DEFINENAME_DIRECTUV==2
#define v_VARYINGNAME_UV vMainUV2
#elif _DEFINENAME_DIRECTUV==3
#define v_VARYINGNAME_UV vMainUV3
#elif _DEFINENAME_DIRECTUV==4
#define v_VARYINGNAME_UV vMainUV4
#elif _DEFINENAME_DIRECTUV==5
#define v_VARYINGNAME_UV vMainUV5
#elif _DEFINENAME_DIRECTUV==6
#define v_VARYINGNAME_UV vMainUV6
#else
varying vec2 v_VARYINGNAME_UV;
#endif
uniform sampler2D _SAMPLERNAME_Sampler;
#endif
`;d.IncludesShadersStore[Ee]=ge;var Se="fresnelFunction",Ae=`#ifdef FRESNEL
float computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)
{
float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);
return clamp(fresnelTerm,0.,1.);
}
#endif
`;d.IncludesShadersStore[Se]=Ae;var Te="reflectionFunction",_e=`vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)
{
float lon=atan(direction.z,direction.x);
float lat=acos(direction.y);
vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;
float s=sphereCoords.x*0.5+0.5;
float t=sphereCoords.y;
return vec3(s,t,0); 
}
vec3 computeMirroredFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)
{
float lon=atan(direction.z,direction.x);
float lat=acos(direction.y);
vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;
float s=sphereCoords.x*0.5+0.5;
float t=sphereCoords.y;
return vec3(1.0-s,t,0); 
}
vec3 computeEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{
vec3 cameraToVertex=normalize(worldPos.xyz-eyePosition);
vec3 r=normalize(reflect(cameraToVertex,worldNormal));
r=vec3(reflectionMatrix*vec4(r,0));
float lon=atan(r.z,r.x);
float lat=acos(r.y);
vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;
float s=sphereCoords.x*0.5+0.5;
float t=sphereCoords.y;
return vec3(s,t,0);
}
vec3 computeSphericalCoords(vec4 worldPos,vec3 worldNormal,mat4 view,mat4 reflectionMatrix)
{
vec3 viewDir=normalize(vec3(view*worldPos));
vec3 viewNormal=normalize(vec3(view*vec4(worldNormal,0.0)));
vec3 r=reflect(viewDir,viewNormal);
r=vec3(reflectionMatrix*vec4(r,0));
r.z=r.z-1.0;
float m=2.0*length(r);
return vec3(r.x/m+0.5,1.0-r.y/m-0.5,0);
}
vec3 computePlanarCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{
vec3 viewDir=worldPos.xyz-eyePosition;
vec3 coords=normalize(reflect(viewDir,worldNormal));
return vec3(reflectionMatrix*vec4(coords,1));
}
vec3 computeCubicCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{
vec3 viewDir=normalize(worldPos.xyz-eyePosition);
vec3 coords=reflect(viewDir,worldNormal);
coords=vec3(reflectionMatrix*vec4(coords,0));
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;
}
vec3 computeCubicLocalCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix,vec3 reflectionSize,vec3 reflectionPosition)
{
vec3 viewDir=normalize(worldPos.xyz-eyePosition);
vec3 coords=reflect(viewDir,worldNormal);
coords=parallaxCorrectNormal(worldPos.xyz,coords,reflectionSize,reflectionPosition);
coords=vec3(reflectionMatrix*vec4(coords,0));
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;
}
vec3 computeProjectionCoords(vec4 worldPos,mat4 view,mat4 reflectionMatrix)
{
return vec3(reflectionMatrix*(view*worldPos));
}
vec3 computeSkyBoxCoords(vec3 positionW,mat4 reflectionMatrix)
{
return vec3(reflectionMatrix*vec4(positionW,1.));
}
#ifdef REFLECTION
vec3 computeReflectionCoords(vec4 worldPos,vec3 worldNormal)
{
#ifdef REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED
vec3 direction=normalize(vDirectionW);
return computeMirroredFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR_FIXED
vec3 direction=normalize(vDirectionW);
return computeFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR
return computeEquirectangularCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SPHERICAL
return computeSphericalCoords(worldPos,worldNormal,view,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_PLANAR
return computePlanarCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_CUBIC
#ifdef USE_LOCAL_REFLECTIONMAP_CUBIC
return computeCubicLocalCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix,vReflectionSize,vReflectionPosition);
#else
return computeCubicCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#endif
#ifdef REFLECTIONMAP_PROJECTION
return computeProjectionCoords(worldPos,view,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SKYBOX
return computeSkyBoxCoords(vPositionUVW,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_EXPLICIT
return vec3(0,0,0);
#endif
}
#endif
`;d.IncludesShadersStore[Te]=_e;var Ie="bumpFragmentMainFunctions",xe=`#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)
#if defined(TANGENT) && defined(NORMAL) 
varying mat3 vTBN;
#endif
#ifdef OBJECTSPACE_NORMALMAP
uniform mat4 normalMatrix;
#endif
vec3 perturbNormalBase(mat3 cotangentFrame,vec3 normal,float scale)
{
#ifdef NORMALXYSCALE
normal=normalize(normal*vec3(scale,scale,1.0));
#endif
return normalize(cotangentFrame*normal);
}
vec3 perturbNormal(mat3 cotangentFrame,vec3 textureSample,float scale)
{
return perturbNormalBase(cotangentFrame,textureSample*2.0-1.0,scale);
}
mat3 cotangent_frame(vec3 normal,vec3 p,vec2 uv,vec2 tangentSpaceParams)
{
vec3 dp1=dFdx(p);
vec3 dp2=dFdy(p);
vec2 duv1=dFdx(uv);
vec2 duv2=dFdy(uv);
vec3 dp2perp=cross(dp2,normal);
vec3 dp1perp=cross(normal,dp1);
vec3 tangent=dp2perp*duv1.x+dp1perp*duv2.x;
vec3 bitangent=dp2perp*duv1.y+dp1perp*duv2.y;
tangent*=tangentSpaceParams.x;
bitangent*=tangentSpaceParams.y;
float invmax=inversesqrt(max(dot(tangent,tangent),dot(bitangent,bitangent)));
return mat3(tangent*invmax,bitangent*invmax,normal);
}
#endif
`;d.IncludesShadersStore[Ie]=xe;var Ce="bumpFragmentFunctions",Pe=`#if defined(BUMP)
#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)
#endif
#if defined(DETAIL)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)
#endif
#if defined(BUMP) && defined(PARALLAX)
const float minSamples=4.;
const float maxSamples=15.;
const int iMaxSamples=15;
vec2 parallaxOcclusion(vec3 vViewDirCoT,vec3 vNormalCoT,vec2 texCoord,float parallaxScale) {
float parallaxLimit=length(vViewDirCoT.xy)/vViewDirCoT.z;
parallaxLimit*=parallaxScale;
vec2 vOffsetDir=normalize(vViewDirCoT.xy);
vec2 vMaxOffset=vOffsetDir*parallaxLimit;
float numSamples=maxSamples+(dot(vViewDirCoT,vNormalCoT)*(minSamples-maxSamples));
float stepSize=1.0/numSamples;
float currRayHeight=1.0;
vec2 vCurrOffset=vec2(0,0);
vec2 vLastOffset=vec2(0,0);
float lastSampledHeight=1.0;
float currSampledHeight=1.0;
for (int i=0; i<iMaxSamples; i++)
{
currSampledHeight=texture2D(bumpSampler,texCoord+vCurrOffset).w;
if (currSampledHeight>currRayHeight)
{
float delta1=currSampledHeight-currRayHeight;
float delta2=(currRayHeight+stepSize)-lastSampledHeight;
float ratio=delta1/(delta1+delta2);
vCurrOffset=(ratio)* vLastOffset+(1.0-ratio)*vCurrOffset;
break;
}
else
{
currRayHeight-=stepSize;
vLastOffset=vCurrOffset;
vCurrOffset+=stepSize*vMaxOffset;
lastSampledHeight=currSampledHeight;
}
}
return vCurrOffset;
}
vec2 parallaxOffset(vec3 viewDir,float heightScale)
{
float height=texture2D(bumpSampler,vBumpUV).w;
vec2 texCoordOffset=heightScale*viewDir.xy*height;
return -texCoordOffset;
}
#endif
`;d.IncludesShadersStore[Ce]=Pe;var De="logDepthDeclaration",Me=`#ifdef LOGARITHMICDEPTH
uniform float logarithmicDepthConstant;
varying float vFragmentDepth;
#endif
`;d.IncludesShadersStore[De]=Me;var Le="fogFragmentDeclaration",Re=`#ifdef FOG
#define FOGMODE_NONE 0.
#define FOGMODE_EXP 1.
#define FOGMODE_EXP2 2.
#define FOGMODE_LINEAR 3.
#define E 2.71828
uniform vec4 vFogInfos;
uniform vec3 vFogColor;
varying vec3 vFogDistance;
float CalcFogFactor()
{
float fogCoeff=1.0;
float fogStart=vFogInfos.y;
float fogEnd=vFogInfos.z;
float fogDensity=vFogInfos.w;
float fogDistance=length(vFogDistance);
if (FOGMODE_LINEAR==vFogInfos.x)
{
fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);
}
else if (FOGMODE_EXP==vFogInfos.x)
{
fogCoeff=1.0/pow(E,fogDistance*fogDensity);
}
else if (FOGMODE_EXP2==vFogInfos.x)
{
fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);
}
return clamp(fogCoeff,0.0,1.0);
}
#endif
`;d.IncludesShadersStore[Le]=Re;var be="oitFragment",Ne=`#ifdef ORDER_INDEPENDENT_TRANSPARENCY
float fragDepth=gl_FragCoord.z; 
#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS
uint halfFloat=packHalf2x16(vec2(fragDepth));
vec2 full=unpackHalf2x16(halfFloat);
fragDepth=full.x;
#endif
ivec2 fragCoord=ivec2(gl_FragCoord.xy);
vec2 lastDepth=texelFetch(oitDepthSampler,fragCoord,0).rg;
vec4 lastFrontColor=texelFetch(oitFrontColorSampler,fragCoord,0);
depth.rg=vec2(-MAX_DEPTH);
frontColor=lastFrontColor;
backColor=vec4(0.0);
#ifdef USE_REVERSE_DEPTHBUFFER
float furthestDepth=-lastDepth.x;
float nearestDepth=lastDepth.y;
#else
float nearestDepth=-lastDepth.x;
float furthestDepth=lastDepth.y;
#endif
float alphaMultiplier=1.0-lastFrontColor.a;
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth>nearestDepth || fragDepth<furthestDepth) {
#else
if (fragDepth<nearestDepth || fragDepth>furthestDepth) {
#endif
return;
}
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth<nearestDepth && fragDepth>furthestDepth) {
#else
if (fragDepth>nearestDepth && fragDepth<furthestDepth) {
#endif
depth.rg=vec2(-fragDepth,fragDepth);
return;
}
#endif
`;d.IncludesShadersStore[be]=Ne;var Fe="bumpFragment",ye=`vec2 uvOffset=vec2(0.0,0.0);
#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)
#ifdef NORMALXYSCALE
float normalScale=1.0;
#elif defined(BUMP)
float normalScale=vBumpInfos.y;
#else
float normalScale=1.0;
#endif
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#elif defined(BUMP)
vec2 TBNUV=gl_FrontFacing ? vBumpUV : -vBumpUV;
mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,TBNUV,vTangentSpaceParams);
#else
vec2 TBNUV=gl_FrontFacing ? vDetailUV : -vDetailUV;
mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,TBNUV,vec2(1.,1.));
#endif
#elif defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#else
vec2 TBNUV=gl_FrontFacing ? vMainUV1 : -vMainUV1;
mat3 TBN=cotangent_frame(normalW,vPositionW,TBNUV,vec2(1.,1.));
#endif
#endif
#ifdef PARALLAX
mat3 invTBN=transposeMat3(TBN);
#ifdef PARALLAXOCCLUSION
uvOffset=parallaxOcclusion(invTBN*-viewDirectionW,invTBN*normalW,vBumpUV,vBumpInfos.z);
#else
uvOffset=parallaxOffset(invTBN*viewDirectionW,vBumpInfos.z);
#endif
#endif
#ifdef DETAIL
vec4 detailColor=texture2D(detailSampler,vDetailUV+uvOffset);
vec2 detailNormalRG=detailColor.wy*2.0-1.0;
float detailNormalB=sqrt(1.-saturate(dot(detailNormalRG,detailNormalRG)));
vec3 detailNormal=vec3(detailNormalRG,detailNormalB);
#endif
#ifdef BUMP
#ifdef OBJECTSPACE_NORMALMAP
normalW=normalize(texture2D(bumpSampler,vBumpUV).xyz *2.0-1.0);
normalW=normalize(mat3(normalMatrix)*normalW);
#elif !defined(DETAIL)
normalW=perturbNormal(TBN,texture2D(bumpSampler,vBumpUV+uvOffset).xyz,vBumpInfos.y);
#else
vec3 bumpNormal=texture2D(bumpSampler,vBumpUV+uvOffset).xyz*2.0-1.0;
#if DETAIL_NORMALBLENDMETHOD==0 
detailNormal.xy*=vDetailInfos.z;
vec3 blendedNormal=normalize(vec3(bumpNormal.xy+detailNormal.xy,bumpNormal.z*detailNormal.z));
#elif DETAIL_NORMALBLENDMETHOD==1 
detailNormal.xy*=vDetailInfos.z;
bumpNormal+=vec3(0.0,0.0,1.0);
detailNormal*=vec3(-1.0,-1.0,1.0);
vec3 blendedNormal=bumpNormal*dot(bumpNormal,detailNormal)/bumpNormal.z-detailNormal;
#endif
normalW=perturbNormalBase(TBN,blendedNormal,vBumpInfos.y);
#endif
#elif defined(DETAIL)
detailNormal.xy*=vDetailInfos.z;
normalW=perturbNormalBase(TBN,detailNormal,vDetailInfos.z);
#endif
`;d.IncludesShadersStore[Fe]=ye;var Oe="depthPrePass",we=`#ifdef DEPTHPREPASS
gl_FragColor=vec4(0.,0.,0.,1.0);
return;
#endif
`;d.IncludesShadersStore[Oe]=we;var Xe="lightFragment",Ue=`#ifdef LIGHT{X}
#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})
#else
#ifdef PBR
#ifdef SPOTLIGHT{X}
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(POINTLIGHT{X})
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(HEMILIGHT{X})
preInfo=computeHemisphericPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(DIRLIGHT{X})
preInfo=computeDirectionalPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#endif
preInfo.NdotV=NdotV;
#ifdef SPOTLIGHT{X}
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo.attenuation=computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared,light{X}.vLightFalloff.y);
preInfo.attenuation*=computeDirectionalLightFalloff_GLTF(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);
preInfo.attenuation*=computeDirectionalLightFalloff_Physical(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w);
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);
preInfo.attenuation*=computeDirectionalLightFalloff_Standard(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w);
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
preInfo.attenuation*=computeDirectionalLightFalloff(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#endif
#elif defined(POINTLIGHT{X})
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo.attenuation=computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared,light{X}.vLightFalloff.y);
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
#endif
#else
preInfo.attenuation=1.0;
#endif
#ifdef HEMILIGHT{X}
preInfo.roughness=roughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(roughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
#ifdef IRIDESCENCE
preInfo.iridescenceIntensity=iridescenceIntensity;
#endif
#ifdef HEMILIGHT{X}
info.diffuse=computeHemisphericDiffuseLighting(preInfo,light{X}.vLightDiffuse.rgb,light{X}.vLightGround);
#elif defined(SS_TRANSLUCENCY)
info.diffuse=computeDiffuseAndTransmittedLighting(preInfo,light{X}.vLightDiffuse.rgb,subSurfaceOut.transmittance);
#else
info.diffuse=computeDiffuseLighting(preInfo,light{X}.vLightDiffuse.rgb);
#endif
#ifdef SPECULARTERM
#ifdef ANISOTROPIC
info.specular=computeAnisotropicSpecularLighting(preInfo,viewDirectionW,normalW,anisotropicOut.anisotropicTangent,anisotropicOut.anisotropicBitangent,anisotropicOut.anisotropy,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,AARoughnessFactors.x,light{X}.vLightDiffuse.rgb);
#else
info.specular=computeSpecularLighting(preInfo,normalW,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,AARoughnessFactors.x,light{X}.vLightDiffuse.rgb);
#endif
#endif
#ifdef SHEEN
#ifdef SHEEN_LINKWITHALBEDO
preInfo.roughness=sheenOut.sheenIntensity;
#else
#ifdef HEMILIGHT{X}
preInfo.roughness=sheenOut.sheenRoughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(sheenOut.sheenRoughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
#endif
info.sheen=computeSheenLighting(preInfo,normalW,sheenOut.sheenColor,specularEnvironmentR90,AARoughnessFactors.x,light{X}.vLightDiffuse.rgb);
#endif
#ifdef CLEARCOAT
#ifdef HEMILIGHT{X}
preInfo.roughness=clearcoatOut.clearCoatRoughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(clearcoatOut.clearCoatRoughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
info.clearCoat=computeClearCoatLighting(preInfo,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatAARoughnessFactors.x,clearcoatOut.clearCoatIntensity,light{X}.vLightDiffuse.rgb);
#ifdef CLEARCOAT_TINT
absorption=computeClearCoatLightingAbsorption(clearcoatOut.clearCoatNdotVRefract,preInfo.L,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatColor,clearcoatOut.clearCoatThickness,clearcoatOut.clearCoatIntensity);
info.diffuse*=absorption;
#ifdef SPECULARTERM
info.specular*=absorption;
#endif
#endif
info.diffuse*=info.clearCoat.w;
#ifdef SPECULARTERM
info.specular*=info.clearCoat.w;
#endif
#ifdef SHEEN
info.sheen*=info.clearCoat.w;
#endif
#endif
#else
#ifdef SPOTLIGHT{X}
info=computeSpotLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDirection,light{X}.vLightDiffuse.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightDiffuse.a,glossiness);
#elif defined(HEMILIGHT{X})
info=computeHemisphericLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDiffuse.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightGround,glossiness);
#elif defined(POINTLIGHT{X}) || defined(DIRLIGHT{X})
info=computeLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDiffuse.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightDiffuse.a,glossiness);
#endif
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
info.diffuse*=computeProjectionTextureDiffuseLighting(projectionLightSampler{X},textureProjectionMatrix{X});
#endif
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) 
{
#ifdef SHADOWCSM_RIGHTHANDED{X}
diff{X}=viewFrustumZ{X}[i]+vPositionFromCamera{X}.z;
#else
diff{X}=viewFrustumZ{X}[i]-vPositionFromCamera{X}.z;
#endif
if (diff{X}>=0.) {
index{X}=i;
break;
}
}
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
if (index{X}>=0)
#endif
{
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCF1(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCF3(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithCSMPCF5(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCSS16(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCSS32(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#else
shadow=computeShadowWithCSMPCSS64(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#endif
#else
shadow=computeShadowCSM(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=vec3(shadow)*vCascadeColorsMultiplier{X}[index{X}];
#endif
#ifndef SHADOWCSMNOBLEND{X}
float frustumLength=frustumLengths{X}[index{X}];
float diffRatio=clamp(diff{X}/frustumLength,0.,1.)*cascadeBlendFactor{X};
if (index{X}<(SHADOWCSMNUM_CASCADES{X}-1) && diffRatio<1.)
{
index{X}+=1;
float nextShadow=0.;
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCF1(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCF3(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
nextShadow=computeShadowWithCSMPCF5(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCSS16(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCSS32(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#else
nextShadow=computeShadowWithCSMPCSS64(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#endif
#else
nextShadow=computeShadowCSM(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
shadow=mix(nextShadow,shadow,diffRatio);
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=mix(vec3(nextShadow)*vCascadeColorsMultiplier{X}[index{X}],shadowDebug{X},diffRatio);
#endif
}
#endif
}
#elif defined(SHADOWCLOSEESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithCloseESMCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithCloseESM(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithESMCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithESM(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPOISSON{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithPoissonSamplingCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadowWithPoissonSampling(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCF1(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCF3(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCF5(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCSS16(vPositionFromLight{X},vDepthMetric{X},depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCSS32(vPositionFromLight{X},vDepthMetric{X},depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCSS64(vPositionFromLight{X},vDepthMetric{X},depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#else
#if defined(SHADOWCUBE{X})
shadow=computeShadowCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadow(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#endif
#ifdef SHADOWONLY
#ifndef SHADOWINUSE
#define SHADOWINUSE
#endif
globalShadow+=shadow;
shadowLightCount+=1.0;
#endif
#else
shadow=1.;
#endif
#ifndef SHADOWONLY
#ifdef CUSTOMUSERLIGHTING
diffuseBase+=computeCustomDiffuseLighting(info,diffuseBase,shadow);
#ifdef SPECULARTERM
specularBase+=computeCustomSpecularLighting(info,specularBase,shadow);
#endif
#elif defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X})
diffuseBase+=lightmapColor.rgb*shadow;
#ifdef SPECULARTERM
#ifndef LIGHTMAPNOSPECULAR{X}
specularBase+=info.specular*shadow*lightmapColor.rgb;
#endif
#endif
#ifdef CLEARCOAT
#ifndef LIGHTMAPNOSPECULAR{X}
clearCoatBase+=info.clearCoat.rgb*shadow*lightmapColor.rgb;
#endif
#endif
#ifdef SHEEN
#ifndef LIGHTMAPNOSPECULAR{X}
sheenBase+=info.sheen.rgb*shadow;
#endif
#endif
#else
#ifdef SHADOWCSMDEBUG{X}
diffuseBase+=info.diffuse*shadowDebug{X};
#else 
diffuseBase+=info.diffuse*shadow;
#endif
#ifdef SPECULARTERM
specularBase+=info.specular*shadow;
#endif
#ifdef CLEARCOAT
clearCoatBase+=info.clearCoat.rgb*shadow;
#endif
#ifdef SHEEN
sheenBase+=info.sheen.rgb*shadow;
#endif
#endif
#endif
#endif
`;d.IncludesShadersStore[Xe]=Ue;var Ve="logDepthFragment",Be=`#ifdef LOGARITHMICDEPTH
gl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;
#endif
`;d.IncludesShadersStore[Ve]=Be;var We="fogFragment",He=`#ifdef FOG
float fog=CalcFogFactor();
#ifdef PBR
fog=toLinearSpace(fog);
#endif
color.rgb=mix(vFogColor,color.rgb,fog);
#endif
`;d.IncludesShadersStore[We]=He;var ze="defaultPixelShader",Ge=`#include<__decl__defaultFragment>
#if defined(BUMP) || !defined(NORMAL)
#extension GL_OES_standard_derivatives : enable
#endif
#include<prePassDeclaration>[SCENE_MRT_COUNT]
#include<oitDeclaration>
#define CUSTOM_FRAGMENT_BEGIN
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#define RECIPROCAL_PI2 0.15915494
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR)
varying vec4 vColor;
#endif
#include<mainUVVaryingDeclaration>[1..7]
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<samplerFragmentDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_SAMPLERNAME_,diffuse)
#include<samplerFragmentDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_SAMPLERNAME_,ambient)
#include<samplerFragmentDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_SAMPLERNAME_,opacity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_SAMPLERNAME_,emissive)
#include<samplerFragmentDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_SAMPLERNAME_,lightmap)
#ifdef REFRACTION
#ifdef REFRACTIONMAP_3D
uniform samplerCube refractionCubeSampler;
#else
uniform sampler2D refraction2DSampler;
#endif
#endif
#if defined(SPECULARTERM)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_SAMPLERNAME_,specular)
#endif
#include<fresnelFunction>
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
uniform samplerCube reflectionCubeSampler;
#else
uniform sampler2D reflection2DSampler;
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#endif
#include<reflectionFunction>
#endif
#include<imageProcessingDeclaration>
#include<imageProcessingFunctions>
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<oitFragment>
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
vec4 baseColor=vec4(1.,1.,1.,1.);
vec3 diffuseColor=vDiffuseColor.rgb;
float alpha=vDiffuseColor.a;
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=normalize(-cross(dFdx(vPositionW),dFdy(vPositionW)));
#endif
#include<bumpFragment>
#ifdef TWOSIDEDLIGHTING
normalW=gl_FrontFacing ? normalW : -normalW;
#endif
#ifdef DIFFUSE
baseColor=texture2D(diffuseSampler,vDiffuseUV+uvOffset);
#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)
if (baseColor.a<alphaCutOff)
discard;
#endif
#ifdef ALPHAFROMDIFFUSE
alpha*=baseColor.a;
#endif
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
baseColor.rgb*=vDiffuseInfos.y;
#endif
#include<depthPrePass>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR)
baseColor.rgb*=vColor.rgb;
#endif
#ifdef DETAIL
baseColor.rgb=baseColor.rgb*2.0*mix(0.5,detailColor.r,vDetailInfos.y);
#endif
#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE
vec3 baseAmbientColor=vec3(1.,1.,1.);
#ifdef AMBIENT
baseAmbientColor=texture2D(ambientSampler,vAmbientUV+uvOffset).rgb*vAmbientInfos.y;
#endif
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS
#ifdef SPECULARTERM
float glossiness=vSpecularColor.a;
vec3 specularColor=vSpecularColor.rgb;
#ifdef SPECULAR
vec4 specularMapColor=texture2D(specularSampler,vSpecularUV+uvOffset);
specularColor=specularMapColor.rgb;
#ifdef GLOSSINESS
glossiness=glossiness*specularMapColor.a;
#endif
#endif
#else
float glossiness=0.;
#endif
vec3 diffuseBase=vec3(0.,0.,0.);
lightingInfo info;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
float shadow=1.;
#ifdef LIGHTMAP
vec4 lightmapColor=texture2D(lightmapSampler,vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor.rgb=fromRGBD(lightmapColor);
#endif
lightmapColor.rgb*=vLightmapInfos.y;
#endif
#include<lightFragment>[0..maxSimultaneousLights]
vec4 refractionColor=vec4(0.,0.,0.,1.);
#ifdef REFRACTION
vec3 refractionVector=normalize(refract(-viewDirectionW,normalW,vRefractionInfos.y));
#ifdef REFRACTIONMAP_3D
#ifdef USE_LOCAL_REFRACTIONMAP_CUBIC
refractionVector=parallaxCorrectNormal(vPositionW,refractionVector,vRefractionSize,vRefractionPosition);
#endif
refractionVector.y=refractionVector.y*vRefractionInfos.w;
if (dot(refractionVector,viewDirectionW)<1.0) {
refractionColor=textureCube(refractionCubeSampler,refractionVector);
}
#else
vec3 vRefractionUVW=vec3(refractionMatrix*(view*vec4(vPositionW+refractionVector*vRefractionInfos.z,1.0)));
vec2 refractionCoords=vRefractionUVW.xy/vRefractionUVW.z;
refractionCoords.y=1.0-refractionCoords.y;
refractionColor=texture2D(refraction2DSampler,refractionCoords);
#endif
#ifdef RGBDREFRACTION
refractionColor.rgb=fromRGBD(refractionColor);
#endif
#ifdef IS_REFRACTION_LINEAR
refractionColor.rgb=toGammaSpace(refractionColor.rgb);
#endif
refractionColor.rgb*=vRefractionInfos.x;
#endif
vec4 reflectionColor=vec4(0.,0.,0.,1.);
#ifdef REFLECTION
vec3 vReflectionUVW=computeReflectionCoords(vec4(vPositionW,1.0),normalW);
#ifdef REFLECTIONMAP_OPPOSITEZ
vReflectionUVW.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
#ifdef ROUGHNESS
float bias=vReflectionInfos.y;
#ifdef SPECULARTERM
#ifdef SPECULAR
#ifdef GLOSSINESS
bias*=(1.0-specularMapColor.a);
#endif
#endif
#endif
reflectionColor=textureCube(reflectionCubeSampler,vReflectionUVW,bias);
#else
reflectionColor=textureCube(reflectionCubeSampler,vReflectionUVW);
#endif
#else
vec2 coords=vReflectionUVW.xy;
#ifdef REFLECTIONMAP_PROJECTION
coords/=vReflectionUVW.z;
#endif
coords.y=1.0-coords.y;
reflectionColor=texture2D(reflection2DSampler,coords);
#endif
#ifdef RGBDREFLECTION
reflectionColor.rgb=fromRGBD(reflectionColor);
#endif
#ifdef IS_REFLECTION_LINEAR
reflectionColor.rgb=toGammaSpace(reflectionColor.rgb);
#endif
reflectionColor.rgb*=vReflectionInfos.x;
#ifdef REFLECTIONFRESNEL
float reflectionFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,reflectionRightColor.a,reflectionLeftColor.a);
#ifdef REFLECTIONFRESNELFROMSPECULAR
#ifdef SPECULARTERM
reflectionColor.rgb*=specularColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#else
reflectionColor.rgb*=reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#endif
#else
reflectionColor.rgb*=reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#endif
#endif
#endif
#ifdef REFRACTIONFRESNEL
float refractionFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,refractionRightColor.a,refractionLeftColor.a);
refractionColor.rgb*=refractionLeftColor.rgb*(1.0-refractionFresnelTerm)+refractionFresnelTerm*refractionRightColor.rgb;
#endif
#ifdef OPACITY
vec4 opacityMap=texture2D(opacitySampler,vOpacityUV+uvOffset);
#ifdef OPACITYRGB
opacityMap.rgb=opacityMap.rgb*vec3(0.3,0.59,0.11);
alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* vOpacityInfos.y;
#else
alpha*=opacityMap.a*vOpacityInfos.y;
#endif
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR)
alpha*=vColor.a;
#endif
#ifdef OPACITYFRESNEL
float opacityFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,opacityParts.z,opacityParts.w);
alpha+=opacityParts.x*(1.0-opacityFresnelTerm)+opacityFresnelTerm*opacityParts.y;
#endif
#ifdef ALPHATEST
#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS
if (alpha<alphaCutOff)
discard;
#endif
#ifndef ALPHABLEND
alpha=1.0;
#endif
#endif
vec3 emissiveColor=vEmissiveColor;
#ifdef EMISSIVE
emissiveColor+=texture2D(emissiveSampler,vEmissiveUV+uvOffset).rgb*vEmissiveInfos.y;
#endif
#ifdef EMISSIVEFRESNEL
float emissiveFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,emissiveRightColor.a,emissiveLeftColor.a);
emissiveColor*=emissiveLeftColor.rgb*(1.0-emissiveFresnelTerm)+emissiveFresnelTerm*emissiveRightColor.rgb;
#endif
#ifdef DIFFUSEFRESNEL
float diffuseFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,diffuseRightColor.a,diffuseLeftColor.a);
diffuseBase*=diffuseLeftColor.rgb*(1.0-diffuseFresnelTerm)+diffuseFresnelTerm*diffuseRightColor.rgb;
#endif
#ifdef EMISSIVEASILLUMINATION
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#else
#ifdef LINKEMISSIVEWITHDIFFUSE
vec3 finalDiffuse=clamp((diffuseBase+emissiveColor)*diffuseColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#else
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor+emissiveColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#endif
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#ifdef SPECULAROVERALPHA
alpha=clamp(alpha+dot(finalSpecular,vec3(0.3,0.59,0.11)),0.,1.);
#endif
#else
vec3 finalSpecular=vec3(0.0);
#endif
#ifdef REFLECTIONOVERALPHA
alpha=clamp(alpha+dot(reflectionColor.rgb,vec3(0.3,0.59,0.11)),0.,1.);
#endif
#ifdef EMISSIVEASILLUMINATION
vec4 color=vec4(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,0.0,1.0),alpha);
#else
vec4 color=vec4(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);
#endif
#ifdef LIGHTMAP
#ifndef LIGHTMAPEXCLUDED
#ifdef USELIGHTMAPASSHADOWMAP
color.rgb*=lightmapColor.rgb;
#else
color.rgb+=lightmapColor.rgb;
#endif
#endif
#endif
#define CUSTOM_FRAGMENT_BEFORE_FOG
color.rgb=max(color.rgb,0.);
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
color.rgb=toLinearSpace(color.rgb);
#else
#ifdef IMAGEPROCESSING
color.rgb=toLinearSpace(color.rgb);
color=applyImageProcessing(color);
#endif
#endif
color.a*=visibility;
#ifdef PREMULTIPLYALPHA
color.rgb*=color.a;
#endif
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef PREPASS
float writeGeometryInfo=color.a>0.4 ? 1.0 : 0.0;
gl_FragData[0]=color; 
#ifdef PREPASS_POSITION
gl_FragData[PREPASS_POSITION_INDEX]=vec4(vPositionW,writeGeometryInfo);
#endif
#ifdef PREPASS_VELOCITY
vec2 a=(vCurrentPosition.xy/vCurrentPosition.w)*0.5+0.5;
vec2 b=(vPreviousPosition.xy/vPreviousPosition.w)*0.5+0.5;
vec2 velocity=abs(a-b);
velocity=vec2(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;
gl_FragData[PREPASS_VELOCITY_INDEX]=vec4(velocity,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_IRRADIANCE
gl_FragData[PREPASS_IRRADIANCE_INDEX]=vec4(0.0,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_DEPTH
gl_FragData[PREPASS_DEPTH_INDEX]=vec4(vViewPos.z,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_NORMAL
gl_FragData[PREPASS_NORMAL_INDEX]=vec4((view*vec4(normalW,0.0)).rgb,writeGeometryInfo); 
#endif
#ifdef PREPASS_ALBEDO_SQRT
gl_FragData[PREPASS_ALBEDO_SQRT_INDEX]=vec4(0.0,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_REFLECTIVITY
#if defined(SPECULARTERM)
#if defined(SPECULAR)
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(specularMapColor)*writeGeometryInfo; 
#else
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(specularColor,1.0)*writeGeometryInfo;
#endif
#else
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(0.0,0.0,0.0,1.0)*writeGeometryInfo;
#endif
#endif
#endif
#if !defined(PREPASS) || defined(WEBGL2)
gl_FragColor=color;
#endif
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {
frontColor.rgb+=color.rgb*color.a*alphaMultiplier;
frontColor.a=1.0-alphaMultiplier*(1.0-color.a);
} else {
backColor+=color;
}
#endif
#define CUSTOM_FRAGMENT_MAIN_END
}
`;d.ShadersStore[ze]=Ge;var ke="defaultVertexDeclaration",Ye=`uniform mat4 viewProjection;
uniform mat4 view;
#ifdef DIFFUSE
uniform mat4 diffuseMatrix;
uniform vec2 vDiffuseInfos;
#endif
#ifdef AMBIENT
uniform mat4 ambientMatrix;
uniform vec2 vAmbientInfos;
#endif
#ifdef OPACITY
uniform mat4 opacityMatrix;
uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
uniform mat4 emissiveMatrix;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;
uniform mat4 lightmapMatrix;
#endif
#if defined(SPECULAR) && defined(SPECULARTERM)
uniform vec2 vSpecularInfos;
uniform mat4 specularMatrix;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;
uniform mat4 bumpMatrix;
#endif
#ifdef REFLECTION
uniform mat4 reflectionMatrix;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;
uniform mat4 detailMatrix;
#endif
#define ADDITIONAL_VERTEX_DECLARATION
`;d.IncludesShadersStore[ke]=Ye;var je="uvAttributeDeclaration",$e=`#ifdef UV{X}
attribute vec2 uv{X};
#endif
`;d.IncludesShadersStore[je]=$e;var Qe="prePassVertexDeclaration",Ze=`#ifdef PREPASS
#ifdef PREPASS_DEPTH
varying vec3 vViewPos;
#endif
#ifdef PREPASS_VELOCITY
uniform mat4 previousViewProjection;
varying vec4 vCurrentPosition;
varying vec4 vPreviousPosition;
#endif
#endif
`;d.IncludesShadersStore[Qe]=Ze;var qe="samplerVertexDeclaration",Ke=`#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
varying vec2 v_VARYINGNAME_UV;
#endif
`;d.IncludesShadersStore[qe]=Ke;var Je="bumpVertexDeclaration",en=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL) 
varying mat3 vTBN;
#endif
#endif
`;d.IncludesShadersStore[Je]=en;var nn="fogVertexDeclaration",tn=`#ifdef FOG
varying vec3 vFogDistance;
#endif
`;d.IncludesShadersStore[nn]=tn;var rn="lightVxFragmentDeclaration",an=`#ifdef LIGHT{X}
uniform vec4 vLightData{X};
uniform vec4 vLightDiffuse{X};
#ifdef SPECULARTERM
uniform vec4 vLightSpecular{X};
#else
vec4 vLightSpecular{X}=vec4(0.);
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#elif defined(SHADOWCUBE{X})
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
uniform mat4 lightMatrix{X};
#endif
uniform vec4 shadowsInfo{X};
uniform vec2 depthValues{X};
#endif
#ifdef SPOTLIGHT{X}
uniform vec4 vLightDirection{X};
uniform vec4 vLightFalloff{X};
#elif defined(POINTLIGHT{X})
uniform vec4 vLightFalloff{X};
#elif defined(HEMILIGHT{X})
uniform vec3 vLightGround{X};
#endif
#endif
`;d.IncludesShadersStore[rn]=an;var on="lightVxUboDeclaration",sn=`#ifdef LIGHT{X}
uniform Light{X}
{
vec4 vLightData;
vec4 vLightDiffuse;
vec4 vLightSpecular;
#ifdef SPOTLIGHT{X}
vec4 vLightDirection;
vec4 vLightFalloff;
#elif defined(POINTLIGHT{X})
vec4 vLightFalloff;
#elif defined(HEMILIGHT{X})
vec3 vLightGround;
#endif
vec4 shadowsInfo;
vec2 depthValues;
} light{X};
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#elif defined(SHADOWCUBE{X})
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
uniform mat4 lightMatrix{X};
#endif
#endif
#endif
`;d.IncludesShadersStore[on]=sn;var ln="prePassVertex",fn=`#ifdef PREPASS_DEPTH
vViewPos=(view*worldPos).rgb;
#endif
#if defined(PREPASS_VELOCITY) && defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*worldPos;
#if NUM_BONE_INFLUENCERS>0
mat4 previousInfluence;
previousInfluence=mPreviousBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
previousInfluence+=mPreviousBones[int(matricesIndices[1])]*matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
previousInfluence+=mPreviousBones[int(matricesIndices[2])]*matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
previousInfluence+=mPreviousBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif 
#if NUM_BONE_INFLUENCERS>5
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif 
#if NUM_BONE_INFLUENCERS>6
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif 
#if NUM_BONE_INFLUENCERS>7
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
vPreviousPosition=previousViewProjection*finalPreviousWorld*previousInfluence*vec4(positionUpdated,1.0);
#else
vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#endif
`;d.IncludesShadersStore[ln]=fn;var dn="uvVariableDeclaration",un=`#if !defined(UV{X}) && defined(MAINUV{X})
vec2 uv{X}=vec2(0.,0.);
#endif
#ifdef MAINUV{X}
vMainUV{X}=uv{X};
#endif
`;d.IncludesShadersStore[dn]=un;var cn="samplerVertexImplementation",hn=`#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
if (v_INFONAME_==0.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uvUpdated,1.0,0.0));
}
#ifdef UV2
else if (v_INFONAME_==1.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv2,1.0,0.0));
}
#endif
#ifdef UV3
else if (v_INFONAME_==2.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv3,1.0,0.0));
}
#endif
#ifdef UV4
else if (v_INFONAME_==3.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv4,1.0,0.0));
}
#endif
#ifdef UV5
else if (v_INFONAME_==4.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv5,1.0,0.0));
}
#endif
#ifdef UV6
else if (v_INFONAME_==5.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv6,1.0,0.0));
}
#endif
#endif
`;d.IncludesShadersStore[cn]=hn;var pn="bumpVertex",vn=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
vec3 tbnNormal=normalize(normalUpdated);
vec3 tbnTangent=normalize(tangentUpdated.xyz);
vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tangentUpdated.w;
vTBN=mat3(finalWorld)*mat3(tbnTangent,tbnBitangent,tbnNormal);
#endif
#endif
`;d.IncludesShadersStore[pn]=vn;var mn="fogVertex",En=`#ifdef FOG
vFogDistance=(view*worldPos).xyz;
#endif
`;d.IncludesShadersStore[mn]=En;var gn="shadowsVertex",Sn=`#ifdef SHADOWS
#if defined(SHADOWCSM{X})
vPositionFromCamera{X}=view*worldPos;
for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) {
vPositionFromLight{X}[i]=lightMatrix{X}[i]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric{X}[i]=(-vPositionFromLight{X}[i].z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vDepthMetric{X}[i]=(vPositionFromLight{X}[i].z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
}
#elif defined(SHADOW{X}) && !defined(SHADOWCUBE{X})
vPositionFromLight{X}=lightMatrix{X}*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric{X}=(-vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vDepthMetric{X}=(vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif
#endif
`;d.IncludesShadersStore[gn]=Sn;var An="vertexColorMixing",Tn=`#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR)
vColor=vec4(1.0);
#ifdef VERTEXCOLOR
#ifdef VERTEXALPHA
vColor*=color;
#else
vColor.rgb*=color.rgb;
#endif
#endif
#ifdef INSTANCESCOLOR
vColor*=instanceColor;
#endif
#endif
`;d.IncludesShadersStore[An]=Tn;var _n="pointCloudVertex",In=`#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
`;d.IncludesShadersStore[_n]=In;var xn="logDepthVertex",Cn=`#ifdef LOGARITHMICDEPTH
vFragmentDepth=1.0+gl_Position.w;
gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;
#endif
`;d.IncludesShadersStore[xn]=Cn;var Pn="defaultVertexShader",Dn=`#include<__decl__defaultVertex>
#define CUSTOM_VERTEX_BEGIN
attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef TANGENT
attribute vec4 tangent;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#include<uvAttributeDeclaration>[2..7]
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<helperFunctions>
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<prePassVertexDeclaration>
#include<mainUVVaryingDeclaration>[1..7]
#include<samplerVertexDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse)
#include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)
#include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)
#include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)
#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)
#include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)
#if defined(SPECULARTERM)
#include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular)
#endif
#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR)
varying vec4 vColor;
#endif
#include<bumpVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec3 positionUpdated=position;
#ifdef NORMAL
vec3 normalUpdated=normal;
#endif
#ifdef TANGENT
vec4 tangentUpdated=tangent;
#endif
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
vPositionUVW=positionUpdated;
#endif
#define CUSTOM_VERTEX_UPDATE_POSITION
#define CUSTOM_VERTEX_UPDATE_NORMAL
#include<instancesVertex>
#if defined(PREPASS) && defined(PREPASS_VELOCITY) && !defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);
vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#ifdef NORMAL
mat3 normalWorld=mat3(finalWorld);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vNormalW=normalUpdated/vec3(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));
vNormalW=normalize(normalWorld*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vNormalW=normalize(normalWorld*normalUpdated);
#endif
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {
gl_Position=viewProjection*worldPos;
} else {
gl_Position=viewProjectionR*worldPos;
}
#else
gl_Position=viewProjection*worldPos;
#endif
vPositionW=vec3(worldPos);
#include<prePassVertex>
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vDirectionW=normalize(vec3(finalWorld*vec4(positionUpdated,0.0)));
#endif
#ifndef UV1
vec2 uvUpdated=vec2(0.,0.);
#endif
#ifdef MAINUV1
vMainUV1=uvUpdated;
#endif
#include<uvVariableDeclaration>[2..7]
#include<samplerVertexImplementation>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_MATRIXNAME_,diffuse,_INFONAME_,DiffuseInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)
#if defined(SPECULARTERM)
#include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_MATRIXNAME_,specular,_INFONAME_,SpecularInfos.x)
#endif
#include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)
#include<bumpVertex>
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#include<pointCloudVertex>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;d.ShadersStore[Pn]=Dn;var Mn=function(){function a(e){this._plugins=[],this._activePlugins=[],this._activePluginsForExtraEvents=[],this._material=e,this._scene=e.getScene(),this._engine=this._scene.getEngine()}return a.prototype._addPlugin=function(e){for(var n=0;n<this._plugins.length;++n)if(this._plugins[n].name===e.name)throw'Plugin "'.concat(e.name,'" already added to the material "').concat(this._material.name,'"!');if(this._material._uniformBufferLayoutBuilt)throw'The plugin "'.concat(e.name,`" can't be added to the material "`).concat(this._material.name,'" because this material has already been used for rendering! Please add plugins to materials before any rendering with this material occurs.');var i=e.getClassName();a._MaterialPluginClassToMainDefine[i]||(a._MaterialPluginClassToMainDefine[i]="MATERIALPLUGIN_"+ ++a._MaterialPluginCounter),this._material._callbackPluginEventGeneric=this._handlePluginEvent.bind(this),this._plugins.push(e),this._plugins.sort(function(f,u){return f.priority-u.priority}),this._codeInjectionPoints={};var r={};r[a._MaterialPluginClassToMainDefine[i]]={type:"boolean",default:!0};for(var l=0,t=this._plugins;l<t.length;l++){var v=t[l];v.collectDefines(r),this._collectPointNames("vertex",v.getCustomCode("vertex")),this._collectPointNames("fragment",v.getCustomCode("fragment"))}this._defineNamesFromPlugins=r},a.prototype._activatePlugin=function(e){this._activePlugins.indexOf(e)===-1&&(this._activePlugins.push(e),this._activePlugins.sort(function(n,i){return n.priority-i.priority}),this._material._callbackPluginEventIsReadyForSubMesh=this._handlePluginEventIsReadyForSubMesh.bind(this),this._material._callbackPluginEventPrepareDefinesBeforeAttributes=this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this),this._material._callbackPluginEventPrepareDefines=this._handlePluginEventPrepareDefines.bind(this),this._material._callbackPluginEventBindForSubMesh=this._handlePluginEventBindForSubMesh.bind(this),e.registerForExtraEvents&&(this._activePluginsForExtraEvents.push(e),this._activePluginsForExtraEvents.sort(function(n,i){return n.priority-i.priority}),this._material._callbackPluginEventHasRenderTargetTextures=this._handlePluginEventHasRenderTargetTextures.bind(this),this._material._callbackPluginEventFillRenderTargetTextures=this._handlePluginEventFillRenderTargetTextures.bind(this),this._material._callbackPluginEventHardBindForSubMesh=this._handlePluginEventHardBindForSubMesh.bind(this)))},a.prototype.getPlugin=function(e){for(var n=0;n<this._plugins.length;++n)if(this._plugins[n].name===e)return this._plugins[n];return null},a.prototype._handlePluginEventIsReadyForSubMesh=function(e){for(var n=!0,i=0,r=this._activePlugins;i<r.length;i++){var l=r[i];n=n&&l.isReadyForSubMesh(e.defines,this._scene,this._engine,e.subMesh)}e.isReadyForSubMesh=n},a.prototype._handlePluginEventPrepareDefinesBeforeAttributes=function(e){for(var n=0,i=this._activePlugins;n<i.length;n++){var r=i[n];r.prepareDefinesBeforeAttributes(e.defines,this._scene,e.mesh)}},a.prototype._handlePluginEventPrepareDefines=function(e){for(var n=0,i=this._activePlugins;n<i.length;n++){var r=i[n];r.prepareDefines(e.defines,this._scene,e.mesh)}},a.prototype._handlePluginEventHardBindForSubMesh=function(e){for(var n=0,i=this._activePluginsForExtraEvents;n<i.length;n++){var r=i[n];r.hardBindForSubMesh(this._material._uniformBuffer,this._scene,this._engine,e.subMesh)}},a.prototype._handlePluginEventBindForSubMesh=function(e){for(var n=0,i=this._activePlugins;n<i.length;n++){var r=i[n];r.bindForSubMesh(this._material._uniformBuffer,this._scene,this._engine,e.subMesh)}},a.prototype._handlePluginEventHasRenderTargetTextures=function(e){for(var n=!1,i=0,r=this._activePluginsForExtraEvents;i<r.length;i++){var l=r[i];if(n=l.hasRenderTargetTextures(),n)break}e.hasRenderTargetTextures=n},a.prototype._handlePluginEventFillRenderTargetTextures=function(e){for(var n=0,i=this._activePluginsForExtraEvents;n<i.length;n++){var r=i[n];r.fillRenderTargetTextures(e.renderTargets)}},a.prototype._handlePluginEvent=function(e,n){var i,r,l;switch(e){case D.GetActiveTextures:{for(var t=n,v=0,f=this._activePlugins;v<f.length;v++){var u=f[v];u.getActiveTextures(t.activeTextures)}break}case D.GetAnimatables:{for(var t=n,s=0,c=this._activePlugins;s<c.length;s++){var u=c[s];u.getAnimatables(t.animatables)}break}case D.HasTexture:{for(var t=n,g=!1,x=0,A=this._activePlugins;x<A.length;x++){var u=A[x];if(g=u.hasTexture(t.texture),g)break}t.hasTexture=g;break}case D.Disposed:{for(var t=n,T=0,_=this._plugins;T<_.length;T++){var u=_[T];u.dispose(t.forceDisposeTextures)}break}case D.GetDefineNames:{var t=n;t.defineNames=this._defineNamesFromPlugins;break}case D.PrepareEffect:{for(var t=n,P=0,w=this._activePlugins;P<w.length;P++){var u=w[P];t.fallbackRank=u.addFallbacks(t.defines,t.fallbacks,t.fallbackRank),u.getAttributes(t.attributes,this._scene,t.mesh)}this._uniformList.length>0&&(i=t.uniforms).push.apply(i,this._uniformList),this._samplerList.length>0&&(r=t.samplers).push.apply(r,this._samplerList),this._uboList.length>0&&(l=t.uniformBuffersNames).push.apply(l,this._uboList),t.customCode=this._injectCustomCode(t.customCode);break}case D.PrepareUniformBuffer:{var t=n;this._uboDeclaration="",this._vertexDeclaration="",this._fragmentDeclaration="",this._uniformList=[],this._samplerList=[],this._uboList=[];for(var b=0,M=this._plugins;b<M.length;b++){var u=M[b],L=u.getUniforms();if(L){if(L.ubo)for(var B=0,G=L.ubo;B<G.length;B++){var N=G[B];t.ubo.addUniform(N.name,N.size),this._uboDeclaration+="".concat(N.type," ").concat(N.name,`;\r
`),this._uniformList.push(N.name)}L.vertex&&(this._vertexDeclaration+=L.vertex+`\r
`),L.fragment&&(this._fragmentDeclaration+=L.fragment+`\r
`)}u.getSamplers(this._samplerList),u.getUniformBuffersNames(this._uboList)}break}}},a.prototype._collectPointNames=function(e,n){if(!!n)for(var i in n)this._codeInjectionPoints[e]||(this._codeInjectionPoints[e]={}),this._codeInjectionPoints[e][i]=!0},a.prototype._injectCustomCode=function(e){var n=this;return function(i,r){var l;e&&(r=e(i,r)),n._uboDeclaration&&(r=r.replace("#define ADDITIONAL_UBO_DECLARATION",n._uboDeclaration)),n._vertexDeclaration&&(r=r.replace("#define ADDITIONAL_VERTEX_DECLARATION",n._vertexDeclaration)),n._fragmentDeclaration&&(r=r.replace("#define ADDITIONAL_FRAGMENT_DECLARATION",n._fragmentDeclaration));var t=(l=n._codeInjectionPoints)===null||l===void 0?void 0:l[i];if(!t)return r;for(var v in t){for(var f="",u=0,s=n._activePlugins;u<s.length;u++){var c=s[u],g=c.getCustomCode(i);g!=null&&g[v]&&(f+=g[v]+`\r
`)}if(f.length>0)if(v.charAt(0)==="!")for(var x=new RegExp(v.substring(1),"g"),A=x.exec(r);A!==null;){for(var T=f,_=0;_<A.length;++_)T=T.replace("$"+_,A[_]);r=r.replace(A[0],T),A=x.exec(r)}else{var P="#define "+v;r=r.replace(P,`\r
`+f+`\r
`+P)}}return r}},a._MaterialPluginClassToMainDefine={},a._MaterialPluginCounter=0,a}(),Ln=function(){function a(e,n,i,r,l,t){l===void 0&&(l=!0),t===void 0&&(t=!1),this.priority=500,this.registerForExtraEvents=!1,this._material=e,this.name=n,this.priority=i,e.pluginManager||(e.pluginManager=new Mn(e)),this._pluginDefineNames=r,this._pluginManager=e.pluginManager,l&&this._pluginManager._addPlugin(this),t&&this._enable(!0),this.markAllDefinesAsDirty=e._dirtyCallbacks[63]}return a.prototype._enable=function(e){e&&this._pluginManager._activatePlugin(this)},a.prototype.getClassName=function(){return"MaterialPluginBase"},a.prototype.isReadyForSubMesh=function(e,n,i,r){return!0},a.prototype.hardBindForSubMesh=function(e,n,i,r){},a.prototype.bindForSubMesh=function(e,n,i,r){},a.prototype.dispose=function(e){},a.prototype.getCustomCode=function(e){return null},a.prototype.collectDefines=function(e){if(!!this._pluginDefineNames)for(var n=0,i=Object.keys(this._pluginDefineNames);n<i.length;n++){var r=i[n];if(r[0]!=="_"){var l=typeof this._pluginDefineNames[r];e[r]={type:l==="number"?"number":l==="string"?"string":l==="boolean"?"boolean":"object",default:this._pluginDefineNames[r]}}}},a.prototype.prepareDefinesBeforeAttributes=function(e,n,i){},a.prototype.prepareDefines=function(e,n,i){},a.prototype.hasTexture=function(e){return!1},a.prototype.hasRenderTargetTextures=function(){return!1},a.prototype.fillRenderTargetTextures=function(e){},a.prototype.getActiveTextures=function(e){},a.prototype.getAnimatables=function(e){},a.prototype.addFallbacks=function(e,n,i){return i},a.prototype.getSamplers=function(e){},a.prototype.getAttributes=function(e,n,i){},a.prototype.getUniformBuffersNames=function(e){},a.prototype.getUniforms=function(){return{}},a.prototype.copyTo=function(e){y.Clone(function(){return e},this)},a.prototype.serialize=function(){return y.Serialize(this)},a.prototype.parse=function(e,n,i){var r=this;y.Parse(function(){return r},e,n,i)},o([m()],a.prototype,"name",void 0),o([m()],a.prototype,"priority",void 0),o([m()],a.prototype,"registerForExtraEvents",void 0),a}(),Rn=function(a){O(e,a);function e(){var n=a!==null&&a.apply(this,arguments)||this;return n.DETAIL=!1,n.DETAILDIRECTUV=0,n.DETAIL_NORMALBLENDMETHOD=0,n}return e}(Y),bn=function(a){O(e,a);function e(n,i){i===void 0&&(i=!0);var r=a.call(this,n,"DetailMap",140,new Rn,i)||this;return r._texture=null,r.diffuseBlendLevel=1,r.roughnessBlendLevel=1,r.bumpLevel=1,r._normalBlendMethod=V.MATERIAL_NORMALBLENDMETHOD_WHITEOUT,r._isEnabled=!1,r.isEnabled=!1,r._internalMarkAllSubMeshesAsTexturesDirty=n._dirtyCallbacks[1],r}return e.prototype._markAllSubMeshesAsTexturesDirty=function(){this._enable(this._isEnabled),this._internalMarkAllSubMeshesAsTexturesDirty()},e.prototype.isReadyForSubMesh=function(n,i,r){return this._isEnabled?!(n._areTexturesDirty&&i.texturesEnabled&&r.getCaps().standardDerivatives&&this._texture&&E.DetailTextureEnabled&&!this._texture.isReady()):!0},e.prototype.prepareDefines=function(n,i){if(this._isEnabled){n.DETAIL_NORMALBLENDMETHOD=this._normalBlendMethod;var r=i.getEngine();n._areTexturesDirty&&(r.getCaps().standardDerivatives&&this._texture&&E.DetailTextureEnabled&&this._isEnabled?(h.PrepareDefinesForMergedUV(this._texture,n,"DETAIL"),n.DETAIL_NORMALBLENDMETHOD=this._normalBlendMethod):n.DETAIL=!1)}else n.DETAIL=!1},e.prototype.bindForSubMesh=function(n,i){if(!!this._isEnabled){var r=this._material.isFrozen;(!n.useUbo||!r||!n.isSync)&&this._texture&&E.DetailTextureEnabled&&(n.updateFloat4("vDetailInfos",this._texture.coordinatesIndex,this.diffuseBlendLevel,this.bumpLevel,this.roughnessBlendLevel),h.BindTextureMatrix(this._texture,n,"detail")),i.texturesEnabled&&this._texture&&E.DetailTextureEnabled&&n.setTexture("detailSampler",this._texture)}},e.prototype.hasTexture=function(n){return this._texture===n},e.prototype.getActiveTextures=function(n){this._texture&&n.push(this._texture)},e.prototype.getAnimatables=function(n){this._texture&&this._texture.animations&&this._texture.animations.length>0&&n.push(this._texture)},e.prototype.dispose=function(n){var i;n&&((i=this._texture)===null||i===void 0||i.dispose())},e.prototype.getClassName=function(){return"DetailMapConfiguration"},e.prototype.getSamplers=function(n){n.push("detailSampler")},e.prototype.getUniforms=function(){return{ubo:[{name:"vDetailInfos",size:4,type:"vec4"},{name:"detailMatrix",size:16,type:"mat4"}]}},o([C("detailTexture"),p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"texture",void 0),o([m()],e.prototype,"diffuseBlendLevel",void 0),o([m()],e.prototype,"roughnessBlendLevel",void 0),o([m()],e.prototype,"bumpLevel",void 0),o([m(),p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"normalBlendMethod",void 0),o([m(),p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"isEnabled",void 0),e}(Ln),z={effect:null,subMesh:null},Nn=function(a){O(e,a);function e(n){var i=a.call(this,n)||this;return i.MAINUV1=!1,i.MAINUV2=!1,i.MAINUV3=!1,i.MAINUV4=!1,i.MAINUV5=!1,i.MAINUV6=!1,i.DIFFUSE=!1,i.DIFFUSEDIRECTUV=0,i.BAKED_VERTEX_ANIMATION_TEXTURE=!1,i.AMBIENT=!1,i.AMBIENTDIRECTUV=0,i.OPACITY=!1,i.OPACITYDIRECTUV=0,i.OPACITYRGB=!1,i.REFLECTION=!1,i.EMISSIVE=!1,i.EMISSIVEDIRECTUV=0,i.SPECULAR=!1,i.SPECULARDIRECTUV=0,i.BUMP=!1,i.BUMPDIRECTUV=0,i.PARALLAX=!1,i.PARALLAXOCCLUSION=!1,i.SPECULAROVERALPHA=!1,i.CLIPPLANE=!1,i.CLIPPLANE2=!1,i.CLIPPLANE3=!1,i.CLIPPLANE4=!1,i.CLIPPLANE5=!1,i.CLIPPLANE6=!1,i.ALPHATEST=!1,i.DEPTHPREPASS=!1,i.ALPHAFROMDIFFUSE=!1,i.POINTSIZE=!1,i.FOG=!1,i.SPECULARTERM=!1,i.DIFFUSEFRESNEL=!1,i.OPACITYFRESNEL=!1,i.REFLECTIONFRESNEL=!1,i.REFRACTIONFRESNEL=!1,i.EMISSIVEFRESNEL=!1,i.FRESNEL=!1,i.NORMAL=!1,i.TANGENT=!1,i.UV1=!1,i.UV2=!1,i.UV3=!1,i.UV4=!1,i.UV5=!1,i.UV6=!1,i.VERTEXCOLOR=!1,i.VERTEXALPHA=!1,i.NUM_BONE_INFLUENCERS=0,i.BonesPerMesh=0,i.BONETEXTURE=!1,i.BONES_VELOCITY_ENABLED=!1,i.INSTANCES=!1,i.THIN_INSTANCES=!1,i.INSTANCESCOLOR=!1,i.GLOSSINESS=!1,i.ROUGHNESS=!1,i.EMISSIVEASILLUMINATION=!1,i.LINKEMISSIVEWITHDIFFUSE=!1,i.REFLECTIONFRESNELFROMSPECULAR=!1,i.LIGHTMAP=!1,i.LIGHTMAPDIRECTUV=0,i.OBJECTSPACE_NORMALMAP=!1,i.USELIGHTMAPASSHADOWMAP=!1,i.REFLECTIONMAP_3D=!1,i.REFLECTIONMAP_SPHERICAL=!1,i.REFLECTIONMAP_PLANAR=!1,i.REFLECTIONMAP_CUBIC=!1,i.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,i.USE_LOCAL_REFRACTIONMAP_CUBIC=!1,i.REFLECTIONMAP_PROJECTION=!1,i.REFLECTIONMAP_SKYBOX=!1,i.REFLECTIONMAP_EXPLICIT=!1,i.REFLECTIONMAP_EQUIRECTANGULAR=!1,i.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,i.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,i.REFLECTIONMAP_OPPOSITEZ=!1,i.INVERTCUBICMAP=!1,i.LOGARITHMICDEPTH=!1,i.REFRACTION=!1,i.REFRACTIONMAP_3D=!1,i.REFLECTIONOVERALPHA=!1,i.TWOSIDEDLIGHTING=!1,i.SHADOWFLOAT=!1,i.MORPHTARGETS=!1,i.MORPHTARGETS_NORMAL=!1,i.MORPHTARGETS_TANGENT=!1,i.MORPHTARGETS_UV=!1,i.NUM_MORPH_INFLUENCERS=0,i.MORPHTARGETS_TEXTURE=!1,i.NONUNIFORMSCALING=!1,i.PREMULTIPLYALPHA=!1,i.ALPHATEST_AFTERALLALPHACOMPUTATIONS=!1,i.ALPHABLEND=!0,i.PREPASS=!1,i.PREPASS_IRRADIANCE=!1,i.PREPASS_IRRADIANCE_INDEX=-1,i.PREPASS_ALBEDO_SQRT=!1,i.PREPASS_ALBEDO_SQRT_INDEX=-1,i.PREPASS_DEPTH=!1,i.PREPASS_DEPTH_INDEX=-1,i.PREPASS_NORMAL=!1,i.PREPASS_NORMAL_INDEX=-1,i.PREPASS_POSITION=!1,i.PREPASS_POSITION_INDEX=-1,i.PREPASS_VELOCITY=!1,i.PREPASS_VELOCITY_INDEX=-1,i.PREPASS_REFLECTIVITY=!1,i.PREPASS_REFLECTIVITY_INDEX=-1,i.SCENE_MRT_COUNT=0,i.RGBDLIGHTMAP=!1,i.RGBDREFLECTION=!1,i.RGBDREFRACTION=!1,i.IMAGEPROCESSING=!1,i.VIGNETTE=!1,i.VIGNETTEBLENDMODEMULTIPLY=!1,i.VIGNETTEBLENDMODEOPAQUE=!1,i.TONEMAPPING=!1,i.TONEMAPPING_ACES=!1,i.CONTRAST=!1,i.COLORCURVES=!1,i.COLORGRADING=!1,i.COLORGRADING3D=!1,i.SAMPLER3DGREENDEPTH=!1,i.SAMPLER3DBGRMAP=!1,i.IMAGEPROCESSINGPOSTPROCESS=!1,i.SKIPFINALCOLORCLAMP=!1,i.MULTIVIEW=!1,i.ORDER_INDEPENDENT_TRANSPARENCY=!1,i.ORDER_INDEPENDENT_TRANSPARENCY_16BITS=!1,i.IS_REFLECTION_LINEAR=!1,i.IS_REFRACTION_LINEAR=!1,i.EXPOSURE=!1,i.rebuild(),i}return e.prototype.setReflectionMode=function(n){for(var i=["REFLECTIONMAP_CUBIC","REFLECTIONMAP_EXPLICIT","REFLECTIONMAP_PLANAR","REFLECTIONMAP_PROJECTION","REFLECTIONMAP_PROJECTION","REFLECTIONMAP_SKYBOX","REFLECTIONMAP_SPHERICAL","REFLECTIONMAP_EQUIRECTANGULAR","REFLECTIONMAP_EQUIRECTANGULAR_FIXED","REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED"],r=0,l=i;r<l.length;r++){var t=l[r];this[t]=t===n}},e}(Y),$=function(a){O(e,a);function e(n,i){var r=a.call(this,n,i)||this;return r._diffuseTexture=null,r._ambientTexture=null,r._opacityTexture=null,r._reflectionTexture=null,r._emissiveTexture=null,r._specularTexture=null,r._bumpTexture=null,r._lightmapTexture=null,r._refractionTexture=null,r.ambientColor=new R(0,0,0),r.diffuseColor=new R(1,1,1),r.specularColor=new R(1,1,1),r.emissiveColor=new R(0,0,0),r.specularPower=64,r._useAlphaFromDiffuseTexture=!1,r._useEmissiveAsIllumination=!1,r._linkEmissiveWithDiffuse=!1,r._useSpecularOverAlpha=!1,r._useReflectionOverAlpha=!1,r._disableLighting=!1,r._useObjectSpaceNormalMap=!1,r._useParallax=!1,r._useParallaxOcclusion=!1,r.parallaxScaleBias=.05,r._roughness=0,r.indexOfRefraction=.98,r.invertRefractionY=!0,r.alphaCutOff=.4,r._useLightmapAsShadowmap=!1,r._useReflectionFresnelFromSpecular=!1,r._useGlossinessFromSpecularMapAlpha=!1,r._maxSimultaneousLights=4,r._invertNormalMapX=!1,r._invertNormalMapY=!1,r._twoSidedLighting=!1,r._renderTargets=new Z(16),r._worldViewProjectionMatrix=k.Zero(),r._globalAmbientColor=new R(0,0,0),r._cacheHasRenderTargetTextures=!1,r.detailMap=new bn(r),r._attachImageProcessingConfiguration(null),r.prePassConfiguration=new H,r.getRenderTargetTextures=function(){return r._renderTargets.reset(),e.ReflectionTextureEnabled&&r._reflectionTexture&&r._reflectionTexture.isRenderTarget&&r._renderTargets.push(r._reflectionTexture),e.RefractionTextureEnabled&&r._refractionTexture&&r._refractionTexture.isRenderTarget&&r._renderTargets.push(r._refractionTexture),r._eventInfo.renderTargets=r._renderTargets,r._callbackPluginEventFillRenderTargetTextures(r._eventInfo),r._renderTargets},r}return Object.defineProperty(e.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(n){this._attachImageProcessingConfiguration(n),this._markAllSubMeshesAsTexturesDirty()},enumerable:!1,configurable:!0}),e.prototype._attachImageProcessingConfiguration=function(n){var i=this;n!==this._imageProcessingConfiguration&&(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),n?this._imageProcessingConfiguration=n:this._imageProcessingConfiguration=this.getScene().imageProcessingConfiguration,this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){i._markAllSubMeshesAsImageProcessingDirty()})))},Object.defineProperty(e.prototype,"isPrePassCapable",{get:function(){return!this.disableDepthWrite},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(n){this.imageProcessingConfiguration.colorCurvesEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(n){this.imageProcessingConfiguration.colorGradingEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraToneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(n){this._imageProcessingConfiguration.toneMappingEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraExposure",{get:function(){return this._imageProcessingConfiguration.exposure},set:function(n){this._imageProcessingConfiguration.exposure=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraContrast",{get:function(){return this._imageProcessingConfiguration.contrast},set:function(n){this._imageProcessingConfiguration.contrast=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorGradingTexture",{get:function(){return this._imageProcessingConfiguration.colorGradingTexture},set:function(n){this._imageProcessingConfiguration.colorGradingTexture=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorCurves",{get:function(){return this._imageProcessingConfiguration.colorCurves},set:function(n){this._imageProcessingConfiguration.colorCurves=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"canRenderToMRT",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasRenderTargetTextures",{get:function(){return e.ReflectionTextureEnabled&&this._reflectionTexture&&this._reflectionTexture.isRenderTarget||e.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget?!0:this._cacheHasRenderTargetTextures},enumerable:!1,configurable:!0}),e.prototype.getClassName=function(){return"StandardMaterial"},Object.defineProperty(e.prototype,"useLogarithmicDepth",{get:function(){return this._useLogarithmicDepth},set:function(n){this._useLogarithmicDepth=n&&this.getScene().getEngine().getCaps().fragmentDepthSupported,this._markAllSubMeshesAsMiscDirty()},enumerable:!1,configurable:!0}),e.prototype.needAlphaBlending=function(){return this._disableAlphaBlending?!1:this.alpha<1||this._opacityTexture!=null||this._shouldUseAlphaFromDiffuseTexture()||this._opacityFresnelParameters&&this._opacityFresnelParameters.isEnabled},e.prototype.needAlphaTesting=function(){return this._forceAlphaTest?!0:this._hasAlphaChannel()&&(this._transparencyMode==null||this._transparencyMode===V.MATERIAL_ALPHATEST)},e.prototype._shouldUseAlphaFromDiffuseTexture=function(){return this._diffuseTexture!=null&&this._diffuseTexture.hasAlpha&&this._useAlphaFromDiffuseTexture&&this._transparencyMode!==V.MATERIAL_OPAQUE},e.prototype._hasAlphaChannel=function(){return this._diffuseTexture!=null&&this._diffuseTexture.hasAlpha||this._opacityTexture!=null},e.prototype.getAlphaTestTexture=function(){return this._diffuseTexture},e.prototype.isReadyForSubMesh=function(n,i,r){if(r===void 0&&(r=!1),this._uniformBufferLayoutBuilt||this.buildUniformLayout(),i.effect&&this.isFrozen&&i.effect._wasPreviouslyReady&&i.effect._wasPreviouslyUsingInstances===r)return!0;i.materialDefines||(this._callbackPluginEventGeneric(D.GetDefineNames,this._eventInfo),i.materialDefines=new Nn(this._eventInfo.defineNames));var l=this.getScene(),t=i.materialDefines;if(this._isReadyForSubMesh(i))return!0;var v=l.getEngine();t._needNormals=h.PrepareDefinesForLights(l,n,t,!0,this._maxSimultaneousLights,this._disableLighting),h.PrepareDefinesForMultiview(l,t);var f=this.needAlphaBlendingForMesh(n)&&this.getScene().useOrderIndependentTransparency;if(h.PrepareDefinesForPrePass(l,t,this.canRenderToMRT&&!f),h.PrepareDefinesForOIT(l,t,f),t._areTexturesDirty){this._eventInfo.hasRenderTargetTextures=!1,this._callbackPluginEventHasRenderTargetTextures(this._eventInfo),this._cacheHasRenderTargetTextures=this._eventInfo.hasRenderTargetTextures,t._needUVs=!1;for(var u=1;u<=6;++u)t["MAINUV"+u]=!1;if(l.texturesEnabled){if(this._diffuseTexture&&e.DiffuseTextureEnabled)if(this._diffuseTexture.isReadyOrNotBlocking())h.PrepareDefinesForMergedUV(this._diffuseTexture,t,"DIFFUSE");else return!1;else t.DIFFUSE=!1;if(this._ambientTexture&&e.AmbientTextureEnabled)if(this._ambientTexture.isReadyOrNotBlocking())h.PrepareDefinesForMergedUV(this._ambientTexture,t,"AMBIENT");else return!1;else t.AMBIENT=!1;if(this._opacityTexture&&e.OpacityTextureEnabled)if(this._opacityTexture.isReadyOrNotBlocking())h.PrepareDefinesForMergedUV(this._opacityTexture,t,"OPACITY"),t.OPACITYRGB=this._opacityTexture.getAlphaFromRGB;else return!1;else t.OPACITY=!1;if(this._reflectionTexture&&e.ReflectionTextureEnabled)if(this._reflectionTexture.isReadyOrNotBlocking()){switch(t._needNormals=!0,t.REFLECTION=!0,t.ROUGHNESS=this._roughness>0,t.REFLECTIONOVERALPHA=this._useReflectionOverAlpha,t.INVERTCUBICMAP=this._reflectionTexture.coordinatesMode===I.INVCUBIC_MODE,t.REFLECTIONMAP_3D=this._reflectionTexture.isCube,t.REFLECTIONMAP_OPPOSITEZ=t.REFLECTIONMAP_3D&&this.getScene().useRightHandedSystem?!this._reflectionTexture.invertZ:this._reflectionTexture.invertZ,t.RGBDREFLECTION=this._reflectionTexture.isRGBD,this._reflectionTexture.coordinatesMode){case I.EXPLICIT_MODE:t.setReflectionMode("REFLECTIONMAP_EXPLICIT");break;case I.PLANAR_MODE:t.setReflectionMode("REFLECTIONMAP_PLANAR");break;case I.PROJECTION_MODE:t.setReflectionMode("REFLECTIONMAP_PROJECTION");break;case I.SKYBOX_MODE:t.setReflectionMode("REFLECTIONMAP_SKYBOX");break;case I.SPHERICAL_MODE:t.setReflectionMode("REFLECTIONMAP_SPHERICAL");break;case I.EQUIRECTANGULAR_MODE:t.setReflectionMode("REFLECTIONMAP_EQUIRECTANGULAR");break;case I.FIXED_EQUIRECTANGULAR_MODE:t.setReflectionMode("REFLECTIONMAP_EQUIRECTANGULAR_FIXED");break;case I.FIXED_EQUIRECTANGULAR_MIRRORED_MODE:t.setReflectionMode("REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED");break;case I.CUBIC_MODE:case I.INVCUBIC_MODE:default:t.setReflectionMode("REFLECTIONMAP_CUBIC");break}t.USE_LOCAL_REFLECTIONMAP_CUBIC=!!this._reflectionTexture.boundingBoxSize}else return!1;else t.REFLECTION=!1,t.REFLECTIONMAP_OPPOSITEZ=!1;if(this._emissiveTexture&&e.EmissiveTextureEnabled)if(this._emissiveTexture.isReadyOrNotBlocking())h.PrepareDefinesForMergedUV(this._emissiveTexture,t,"EMISSIVE");else return!1;else t.EMISSIVE=!1;if(this._lightmapTexture&&e.LightmapTextureEnabled)if(this._lightmapTexture.isReadyOrNotBlocking())h.PrepareDefinesForMergedUV(this._lightmapTexture,t,"LIGHTMAP"),t.USELIGHTMAPASSHADOWMAP=this._useLightmapAsShadowmap,t.RGBDLIGHTMAP=this._lightmapTexture.isRGBD;else return!1;else t.LIGHTMAP=!1;if(this._specularTexture&&e.SpecularTextureEnabled)if(this._specularTexture.isReadyOrNotBlocking())h.PrepareDefinesForMergedUV(this._specularTexture,t,"SPECULAR"),t.GLOSSINESS=this._useGlossinessFromSpecularMapAlpha;else return!1;else t.SPECULAR=!1;if(l.getEngine().getCaps().standardDerivatives&&this._bumpTexture&&e.BumpTextureEnabled){if(this._bumpTexture.isReady())h.PrepareDefinesForMergedUV(this._bumpTexture,t,"BUMP"),t.PARALLAX=this._useParallax,t.PARALLAXOCCLUSION=this._useParallaxOcclusion;else return!1;t.OBJECTSPACE_NORMALMAP=this._useObjectSpaceNormalMap}else t.BUMP=!1,t.PARALLAX=!1,t.PARALLAXOCCLUSION=!1;if(this._refractionTexture&&e.RefractionTextureEnabled)if(this._refractionTexture.isReadyOrNotBlocking())t._needUVs=!0,t.REFRACTION=!0,t.REFRACTIONMAP_3D=this._refractionTexture.isCube,t.RGBDREFRACTION=this._refractionTexture.isRGBD,t.USE_LOCAL_REFRACTIONMAP_CUBIC=!!this._refractionTexture.boundingBoxSize;else return!1;else t.REFRACTION=!1;t.TWOSIDEDLIGHTING=!this._backFaceCulling&&this._twoSidedLighting}else t.DIFFUSE=!1,t.AMBIENT=!1,t.OPACITY=!1,t.REFLECTION=!1,t.EMISSIVE=!1,t.LIGHTMAP=!1,t.BUMP=!1,t.REFRACTION=!1;t.ALPHAFROMDIFFUSE=this._shouldUseAlphaFromDiffuseTexture(),t.EMISSIVEASILLUMINATION=this._useEmissiveAsIllumination,t.LINKEMISSIVEWITHDIFFUSE=this._linkEmissiveWithDiffuse,t.SPECULAROVERALPHA=this._useSpecularOverAlpha,t.PREMULTIPLYALPHA=this.alphaMode===7||this.alphaMode===8,t.ALPHATEST_AFTERALLALPHACOMPUTATIONS=this.transparencyMode!==null,t.ALPHABLEND=this.transparencyMode===null||this.needAlphaBlendingForMesh(n)}if(this._eventInfo.isReadyForSubMesh=!0,this._eventInfo.defines=t,this._callbackPluginEventIsReadyForSubMesh(this._eventInfo),!this._eventInfo.isReadyForSubMesh)return!1;if(t._areImageProcessingDirty&&this._imageProcessingConfiguration){if(!this._imageProcessingConfiguration.isReady())return!1;this._imageProcessingConfiguration.prepareDefines(t),t.IS_REFLECTION_LINEAR=this.reflectionTexture!=null&&!this.reflectionTexture.gammaSpace,t.IS_REFRACTION_LINEAR=this.refractionTexture!=null&&!this.refractionTexture.gammaSpace}if(t._areFresnelDirty&&(e.FresnelEnabled?(this._diffuseFresnelParameters||this._opacityFresnelParameters||this._emissiveFresnelParameters||this._refractionFresnelParameters||this._reflectionFresnelParameters)&&(t.DIFFUSEFRESNEL=this._diffuseFresnelParameters&&this._diffuseFresnelParameters.isEnabled,t.OPACITYFRESNEL=this._opacityFresnelParameters&&this._opacityFresnelParameters.isEnabled,t.REFLECTIONFRESNEL=this._reflectionFresnelParameters&&this._reflectionFresnelParameters.isEnabled,t.REFLECTIONFRESNELFROMSPECULAR=this._useReflectionFresnelFromSpecular,t.REFRACTIONFRESNEL=this._refractionFresnelParameters&&this._refractionFresnelParameters.isEnabled,t.EMISSIVEFRESNEL=this._emissiveFresnelParameters&&this._emissiveFresnelParameters.isEnabled,t._needNormals=!0,t.FRESNEL=!0):t.FRESNEL=!1),h.PrepareDefinesForMisc(n,l,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(n)||this._forceAlphaTest,t),h.PrepareDefinesForFrameBoundValues(l,v,t,r,null,i.getRenderingMesh().hasThinInstances),this._eventInfo.defines=t,this._eventInfo.mesh=n,this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo),h.PrepareDefinesForAttributes(n,t,!0,!0,!0),this._callbackPluginEventPrepareDefines(this._eventInfo),t.isDirty){var s=t._areLightsDisposed;t.markAsProcessed();var c=new q;t.REFLECTION&&c.addFallback(0,"REFLECTION"),t.SPECULAR&&c.addFallback(0,"SPECULAR"),t.BUMP&&c.addFallback(0,"BUMP"),t.PARALLAX&&c.addFallback(1,"PARALLAX"),t.PARALLAXOCCLUSION&&c.addFallback(0,"PARALLAXOCCLUSION"),t.SPECULAROVERALPHA&&c.addFallback(0,"SPECULAROVERALPHA"),t.FOG&&c.addFallback(1,"FOG"),t.POINTSIZE&&c.addFallback(0,"POINTSIZE"),t.LOGARITHMICDEPTH&&c.addFallback(0,"LOGARITHMICDEPTH"),h.HandleFallbacksForShadows(t,c,this._maxSimultaneousLights),t.SPECULARTERM&&c.addFallback(0,"SPECULARTERM"),t.DIFFUSEFRESNEL&&c.addFallback(1,"DIFFUSEFRESNEL"),t.OPACITYFRESNEL&&c.addFallback(2,"OPACITYFRESNEL"),t.REFLECTIONFRESNEL&&c.addFallback(3,"REFLECTIONFRESNEL"),t.EMISSIVEFRESNEL&&c.addFallback(4,"EMISSIVEFRESNEL"),t.FRESNEL&&c.addFallback(4,"FRESNEL"),t.MULTIVIEW&&c.addFallback(0,"MULTIVIEW");var g=[X.PositionKind];t.NORMAL&&g.push(X.NormalKind),t.TANGENT&&g.push(X.TangentKind);for(var u=1;u<=6;++u)t["UV"+u]&&g.push("uv".concat(u===1?"":u));t.VERTEXCOLOR&&g.push(X.ColorKind),h.PrepareAttributesForBones(g,n,t,c),h.PrepareAttributesForInstances(g,t),h.PrepareAttributesForMorphTargets(g,n,t),h.PrepareAttributesForBakedVertexAnimation(g,n,t);var x="default",A=["world","view","viewProjection","vEyePosition","vLightsType","vAmbientColor","vDiffuseColor","vSpecularColor","vEmissiveColor","visibility","vFogInfos","vFogColor","pointSize","vDiffuseInfos","vAmbientInfos","vOpacityInfos","vReflectionInfos","vEmissiveInfos","vSpecularInfos","vBumpInfos","vLightmapInfos","vRefractionInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","diffuseMatrix","ambientMatrix","opacityMatrix","reflectionMatrix","emissiveMatrix","specularMatrix","bumpMatrix","normalMatrix","lightmapMatrix","refractionMatrix","diffuseLeftColor","diffuseRightColor","opacityParts","reflectionLeftColor","reflectionRightColor","emissiveLeftColor","emissiveRightColor","refractionLeftColor","refractionRightColor","vReflectionPosition","vReflectionSize","vRefractionPosition","vRefractionSize","logarithmicDepthConstant","vTangentSpaceParams","alphaCutOff","boneTextureWidth","morphTargetTextureInfo","morphTargetTextureIndices"],T=["diffuseSampler","ambientSampler","opacitySampler","reflectionCubeSampler","reflection2DSampler","emissiveSampler","specularSampler","bumpSampler","lightmapSampler","refractionCubeSampler","refraction2DSampler","boneSampler","morphTargets","oitDepthSampler","oitFrontColorSampler"],_=["Material","Scene","Mesh"];this._eventInfo.fallbacks=c,this._eventInfo.fallbackRank=0,this._eventInfo.defines=t,this._eventInfo.uniforms=A,this._eventInfo.attributes=g,this._eventInfo.samplers=T,this._eventInfo.uniformBuffersNames=_,this._eventInfo.customCode=void 0,this._eventInfo.mesh=n,this._callbackPluginEventGeneric(D.PrepareEffect,this._eventInfo),H.AddUniforms(A),H.AddSamplers(T),W&&(W.PrepareUniforms(A,t),W.PrepareSamplers(T,t)),h.PrepareUniformsAndSamplersList({uniformsNames:A,uniformBuffersNames:_,samplers:T,defines:t,maxSimultaneousLights:this._maxSimultaneousLights});var P={};this.customShaderNameResolve&&(x=this.customShaderNameResolve(x,A,_,T,t,g,P));var w=t.toString(),b=i.effect,M=l.getEngine().createEffect(x,{attributes:g,uniformsNames:A,uniformBuffersNames:_,samplers:T,defines:w,fallbacks:c,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights,maxSimultaneousMorphTargets:t.NUM_MORPH_INFLUENCERS},processFinalCode:P.processFinalCode,processCodeAfterIncludes:this._eventInfo.customCode,multiTarget:t.PREPASS},v);if(M)if(this._onEffectCreatedObservable&&(z.effect=M,z.subMesh=i,this._onEffectCreatedObservable.notifyObservers(z)),this.allowShaderHotSwapping&&b&&!M.isReady()){if(M=b,t.markAsUnprocessed(),s)return t._areLightsDisposed=!0,!1}else l.resetCachedMaterial(),i.setEffect(M,t,this._materialContext)}return!i.effect||!i.effect.isReady()?!1:(t._renderId=l.getRenderId(),i.effect._wasPreviouslyReady=!0,i.effect._wasPreviouslyUsingInstances=r,!0)},e.prototype.buildUniformLayout=function(){var n=this._uniformBuffer;n.addUniform("diffuseLeftColor",4),n.addUniform("diffuseRightColor",4),n.addUniform("opacityParts",4),n.addUniform("reflectionLeftColor",4),n.addUniform("reflectionRightColor",4),n.addUniform("refractionLeftColor",4),n.addUniform("refractionRightColor",4),n.addUniform("emissiveLeftColor",4),n.addUniform("emissiveRightColor",4),n.addUniform("vDiffuseInfos",2),n.addUniform("vAmbientInfos",2),n.addUniform("vOpacityInfos",2),n.addUniform("vReflectionInfos",2),n.addUniform("vReflectionPosition",3),n.addUniform("vReflectionSize",3),n.addUniform("vEmissiveInfos",2),n.addUniform("vLightmapInfos",2),n.addUniform("vSpecularInfos",2),n.addUniform("vBumpInfos",3),n.addUniform("diffuseMatrix",16),n.addUniform("ambientMatrix",16),n.addUniform("opacityMatrix",16),n.addUniform("reflectionMatrix",16),n.addUniform("emissiveMatrix",16),n.addUniform("lightmapMatrix",16),n.addUniform("specularMatrix",16),n.addUniform("bumpMatrix",16),n.addUniform("vTangentSpaceParams",2),n.addUniform("pointSize",1),n.addUniform("alphaCutOff",1),n.addUniform("refractionMatrix",16),n.addUniform("vRefractionInfos",4),n.addUniform("vRefractionPosition",3),n.addUniform("vRefractionSize",3),n.addUniform("vSpecularColor",4),n.addUniform("vEmissiveColor",3),n.addUniform("vDiffuseColor",4),n.addUniform("vAmbientColor",3),a.prototype.buildUniformLayout.call(this)},e.prototype.bindForSubMesh=function(n,i,r){var l,t=this.getScene(),v=r.materialDefines;if(!!v){var f=r.effect;if(!!f){this._activeEffect=f,i.getMeshUniformBuffer().bindToEffect(f,"Mesh"),i.transferToEffect(n),this._uniformBuffer.bindToEffect(f,"Material"),this.prePassConfiguration.bindForSubMesh(this._activeEffect,t,i,n,this.isFrozen),this._eventInfo.subMesh=r,this._callbackPluginEventHardBindForSubMesh(this._eventInfo),v.OBJECTSPACE_NORMALMAP&&(n.toNormalMatrix(this._normalMatrix),this.bindOnlyNormalMatrix(this._normalMatrix));var u=this._mustRebind(t,f,i.visibility);h.BindBonesParameters(i,f);var s=this._uniformBuffer;if(u){if(this.bindViewProjection(f),!s.useUbo||!this.isFrozen||!s.isSync){if(e.FresnelEnabled&&v.FRESNEL&&(this.diffuseFresnelParameters&&this.diffuseFresnelParameters.isEnabled&&(s.updateColor4("diffuseLeftColor",this.diffuseFresnelParameters.leftColor,this.diffuseFresnelParameters.power),s.updateColor4("diffuseRightColor",this.diffuseFresnelParameters.rightColor,this.diffuseFresnelParameters.bias)),this.opacityFresnelParameters&&this.opacityFresnelParameters.isEnabled&&s.updateColor4("opacityParts",new R(this.opacityFresnelParameters.leftColor.toLuminance(),this.opacityFresnelParameters.rightColor.toLuminance(),this.opacityFresnelParameters.bias),this.opacityFresnelParameters.power),this.reflectionFresnelParameters&&this.reflectionFresnelParameters.isEnabled&&(s.updateColor4("reflectionLeftColor",this.reflectionFresnelParameters.leftColor,this.reflectionFresnelParameters.power),s.updateColor4("reflectionRightColor",this.reflectionFresnelParameters.rightColor,this.reflectionFresnelParameters.bias)),this.refractionFresnelParameters&&this.refractionFresnelParameters.isEnabled&&(s.updateColor4("refractionLeftColor",this.refractionFresnelParameters.leftColor,this.refractionFresnelParameters.power),s.updateColor4("refractionRightColor",this.refractionFresnelParameters.rightColor,this.refractionFresnelParameters.bias)),this.emissiveFresnelParameters&&this.emissiveFresnelParameters.isEnabled&&(s.updateColor4("emissiveLeftColor",this.emissiveFresnelParameters.leftColor,this.emissiveFresnelParameters.power),s.updateColor4("emissiveRightColor",this.emissiveFresnelParameters.rightColor,this.emissiveFresnelParameters.bias))),t.texturesEnabled){if(this._diffuseTexture&&e.DiffuseTextureEnabled&&(s.updateFloat2("vDiffuseInfos",this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),h.BindTextureMatrix(this._diffuseTexture,s,"diffuse")),this._ambientTexture&&e.AmbientTextureEnabled&&(s.updateFloat2("vAmbientInfos",this._ambientTexture.coordinatesIndex,this._ambientTexture.level),h.BindTextureMatrix(this._ambientTexture,s,"ambient")),this._opacityTexture&&e.OpacityTextureEnabled&&(s.updateFloat2("vOpacityInfos",this._opacityTexture.coordinatesIndex,this._opacityTexture.level),h.BindTextureMatrix(this._opacityTexture,s,"opacity")),this._hasAlphaChannel()&&s.updateFloat("alphaCutOff",this.alphaCutOff),this._reflectionTexture&&e.ReflectionTextureEnabled&&(s.updateFloat2("vReflectionInfos",this._reflectionTexture.level,this.roughness),s.updateMatrix("reflectionMatrix",this._reflectionTexture.getReflectionTextureMatrix()),this._reflectionTexture.boundingBoxSize)){var c=this._reflectionTexture;s.updateVector3("vReflectionPosition",c.boundingBoxPosition),s.updateVector3("vReflectionSize",c.boundingBoxSize)}if(this._emissiveTexture&&e.EmissiveTextureEnabled&&(s.updateFloat2("vEmissiveInfos",this._emissiveTexture.coordinatesIndex,this._emissiveTexture.level),h.BindTextureMatrix(this._emissiveTexture,s,"emissive")),this._lightmapTexture&&e.LightmapTextureEnabled&&(s.updateFloat2("vLightmapInfos",this._lightmapTexture.coordinatesIndex,this._lightmapTexture.level),h.BindTextureMatrix(this._lightmapTexture,s,"lightmap")),this._specularTexture&&e.SpecularTextureEnabled&&(s.updateFloat2("vSpecularInfos",this._specularTexture.coordinatesIndex,this._specularTexture.level),h.BindTextureMatrix(this._specularTexture,s,"specular")),this._bumpTexture&&t.getEngine().getCaps().standardDerivatives&&e.BumpTextureEnabled&&(s.updateFloat3("vBumpInfos",this._bumpTexture.coordinatesIndex,1/this._bumpTexture.level,this.parallaxScaleBias),h.BindTextureMatrix(this._bumpTexture,s,"bump"),t._mirroredCameraPosition?s.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?1:-1,this._invertNormalMapY?1:-1):s.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?-1:1,this._invertNormalMapY?-1:1)),this._refractionTexture&&e.RefractionTextureEnabled){var g=1;if(this._refractionTexture.isCube||(s.updateMatrix("refractionMatrix",this._refractionTexture.getReflectionTextureMatrix()),this._refractionTexture.depth&&(g=this._refractionTexture.depth)),s.updateFloat4("vRefractionInfos",this._refractionTexture.level,this.indexOfRefraction,g,this.invertRefractionY?-1:1),this._refractionTexture.boundingBoxSize){var c=this._refractionTexture;s.updateVector3("vRefractionPosition",c.boundingBoxPosition),s.updateVector3("vRefractionSize",c.boundingBoxSize)}}}this.pointsCloud&&s.updateFloat("pointSize",this.pointSize),v.SPECULARTERM&&s.updateColor4("vSpecularColor",this.specularColor,this.specularPower),s.updateColor3("vEmissiveColor",e.EmissiveTextureEnabled?this.emissiveColor:R.BlackReadOnly),s.updateColor4("vDiffuseColor",this.diffuseColor,this.alpha),t.ambientColor.multiplyToRef(this.ambientColor,this._globalAmbientColor),s.updateColor3("vAmbientColor",this._globalAmbientColor)}t.texturesEnabled&&(this._diffuseTexture&&e.DiffuseTextureEnabled&&f.setTexture("diffuseSampler",this._diffuseTexture),this._ambientTexture&&e.AmbientTextureEnabled&&f.setTexture("ambientSampler",this._ambientTexture),this._opacityTexture&&e.OpacityTextureEnabled&&f.setTexture("opacitySampler",this._opacityTexture),this._reflectionTexture&&e.ReflectionTextureEnabled&&(this._reflectionTexture.isCube?f.setTexture("reflectionCubeSampler",this._reflectionTexture):f.setTexture("reflection2DSampler",this._reflectionTexture)),this._emissiveTexture&&e.EmissiveTextureEnabled&&f.setTexture("emissiveSampler",this._emissiveTexture),this._lightmapTexture&&e.LightmapTextureEnabled&&f.setTexture("lightmapSampler",this._lightmapTexture),this._specularTexture&&e.SpecularTextureEnabled&&f.setTexture("specularSampler",this._specularTexture),this._bumpTexture&&t.getEngine().getCaps().standardDerivatives&&e.BumpTextureEnabled&&f.setTexture("bumpSampler",this._bumpTexture),this._refractionTexture&&e.RefractionTextureEnabled&&(this._refractionTexture.isCube?f.setTexture("refractionCubeSampler",this._refractionTexture):f.setTexture("refraction2DSampler",this._refractionTexture))),this.getScene().useOrderIndependentTransparency&&this.needAlphaBlendingForMesh(i)&&this.getScene().depthPeelingRenderer.bind(f),this._eventInfo.subMesh=r,this._callbackPluginEventBindForSubMesh(this._eventInfo),h.BindClipPlane(f,t),this.bindEyePosition(f)}else t.getEngine()._features.needToAlwaysBindUniformBuffers&&(this._needToBindSceneUbo=!0);(u||!this.isFrozen)&&(t.lightsEnabled&&!this._disableLighting&&h.BindLights(t,i,f,v,this._maxSimultaneousLights),(t.fogEnabled&&i.applyFog&&t.fogMode!==j.FOGMODE_NONE||this._reflectionTexture||this._refractionTexture||i.receiveShadows||v.PREPASS)&&this.bindView(f),h.BindFogParameters(t,i,f),v.NUM_MORPH_INFLUENCERS&&h.BindMorphTargetParameters(i,f),v.BAKED_VERTEX_ANIMATION_TEXTURE&&((l=i.bakedVertexAnimationManager)===null||l===void 0||l.bind(f,v.INSTANCES)),this.useLogarithmicDepth&&h.BindLogDepth(v,f,t),this._imageProcessingConfiguration&&!this._imageProcessingConfiguration.applyByPostProcess&&this._imageProcessingConfiguration.bind(this._activeEffect)),this._afterBind(i,this._activeEffect),s.update()}}},e.prototype.getAnimatables=function(){var n=a.prototype.getAnimatables.call(this);return this._diffuseTexture&&this._diffuseTexture.animations&&this._diffuseTexture.animations.length>0&&n.push(this._diffuseTexture),this._ambientTexture&&this._ambientTexture.animations&&this._ambientTexture.animations.length>0&&n.push(this._ambientTexture),this._opacityTexture&&this._opacityTexture.animations&&this._opacityTexture.animations.length>0&&n.push(this._opacityTexture),this._reflectionTexture&&this._reflectionTexture.animations&&this._reflectionTexture.animations.length>0&&n.push(this._reflectionTexture),this._emissiveTexture&&this._emissiveTexture.animations&&this._emissiveTexture.animations.length>0&&n.push(this._emissiveTexture),this._specularTexture&&this._specularTexture.animations&&this._specularTexture.animations.length>0&&n.push(this._specularTexture),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&n.push(this._bumpTexture),this._lightmapTexture&&this._lightmapTexture.animations&&this._lightmapTexture.animations.length>0&&n.push(this._lightmapTexture),this._refractionTexture&&this._refractionTexture.animations&&this._refractionTexture.animations.length>0&&n.push(this._refractionTexture),n},e.prototype.getActiveTextures=function(){var n=a.prototype.getActiveTextures.call(this);return this._diffuseTexture&&n.push(this._diffuseTexture),this._ambientTexture&&n.push(this._ambientTexture),this._opacityTexture&&n.push(this._opacityTexture),this._reflectionTexture&&n.push(this._reflectionTexture),this._emissiveTexture&&n.push(this._emissiveTexture),this._specularTexture&&n.push(this._specularTexture),this._bumpTexture&&n.push(this._bumpTexture),this._lightmapTexture&&n.push(this._lightmapTexture),this._refractionTexture&&n.push(this._refractionTexture),n},e.prototype.hasTexture=function(n){return!!(a.prototype.hasTexture.call(this,n)||this._diffuseTexture===n||this._ambientTexture===n||this._opacityTexture===n||this._reflectionTexture===n||this._emissiveTexture===n||this._specularTexture===n||this._bumpTexture===n||this._lightmapTexture===n||this._refractionTexture===n)},e.prototype.dispose=function(n,i){var r,l,t,v,f,u,s,c,g;i&&((r=this._diffuseTexture)===null||r===void 0||r.dispose(),(l=this._ambientTexture)===null||l===void 0||l.dispose(),(t=this._opacityTexture)===null||t===void 0||t.dispose(),(v=this._reflectionTexture)===null||v===void 0||v.dispose(),(f=this._emissiveTexture)===null||f===void 0||f.dispose(),(u=this._specularTexture)===null||u===void 0||u.dispose(),(s=this._bumpTexture)===null||s===void 0||s.dispose(),(c=this._lightmapTexture)===null||c===void 0||c.dispose(),(g=this._refractionTexture)===null||g===void 0||g.dispose()),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),a.prototype.dispose.call(this,n,i)},e.prototype.clone=function(n){var i=this,r=y.Clone(function(){return new e(n,i.getScene())},this);return r.name=n,r.id=n,this.stencil.copyTo(r.stencil),r},e.Parse=function(n,i,r){var l=y.Parse(function(){return new e(n.name,i)},n,i,r);return n.stencil&&l.stencil.parse(n.stencil,i,r),l},Object.defineProperty(e,"DiffuseTextureEnabled",{get:function(){return E.DiffuseTextureEnabled},set:function(n){E.DiffuseTextureEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"DetailTextureEnabled",{get:function(){return E.DetailTextureEnabled},set:function(n){E.DetailTextureEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"AmbientTextureEnabled",{get:function(){return E.AmbientTextureEnabled},set:function(n){E.AmbientTextureEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"OpacityTextureEnabled",{get:function(){return E.OpacityTextureEnabled},set:function(n){E.OpacityTextureEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"ReflectionTextureEnabled",{get:function(){return E.ReflectionTextureEnabled},set:function(n){E.ReflectionTextureEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"EmissiveTextureEnabled",{get:function(){return E.EmissiveTextureEnabled},set:function(n){E.EmissiveTextureEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"SpecularTextureEnabled",{get:function(){return E.SpecularTextureEnabled},set:function(n){E.SpecularTextureEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"BumpTextureEnabled",{get:function(){return E.BumpTextureEnabled},set:function(n){E.BumpTextureEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"LightmapTextureEnabled",{get:function(){return E.LightmapTextureEnabled},set:function(n){E.LightmapTextureEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"RefractionTextureEnabled",{get:function(){return E.RefractionTextureEnabled},set:function(n){E.RefractionTextureEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"ColorGradingTextureEnabled",{get:function(){return E.ColorGradingTextureEnabled},set:function(n){E.ColorGradingTextureEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"FresnelEnabled",{get:function(){return E.FresnelEnabled},set:function(n){E.FresnelEnabled=n},enumerable:!1,configurable:!0}),o([C("diffuseTexture")],e.prototype,"_diffuseTexture",void 0),o([p("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"diffuseTexture",void 0),o([C("ambientTexture")],e.prototype,"_ambientTexture",void 0),o([p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"ambientTexture",void 0),o([C("opacityTexture")],e.prototype,"_opacityTexture",void 0),o([p("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"opacityTexture",void 0),o([C("reflectionTexture")],e.prototype,"_reflectionTexture",void 0),o([p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"reflectionTexture",void 0),o([C("emissiveTexture")],e.prototype,"_emissiveTexture",void 0),o([p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"emissiveTexture",void 0),o([C("specularTexture")],e.prototype,"_specularTexture",void 0),o([p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"specularTexture",void 0),o([C("bumpTexture")],e.prototype,"_bumpTexture",void 0),o([p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"bumpTexture",void 0),o([C("lightmapTexture")],e.prototype,"_lightmapTexture",void 0),o([p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"lightmapTexture",void 0),o([C("refractionTexture")],e.prototype,"_refractionTexture",void 0),o([p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"refractionTexture",void 0),o([U("ambient")],e.prototype,"ambientColor",void 0),o([U("diffuse")],e.prototype,"diffuseColor",void 0),o([U("specular")],e.prototype,"specularColor",void 0),o([U("emissive")],e.prototype,"emissiveColor",void 0),o([m()],e.prototype,"specularPower",void 0),o([m("useAlphaFromDiffuseTexture")],e.prototype,"_useAlphaFromDiffuseTexture",void 0),o([p("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"useAlphaFromDiffuseTexture",void 0),o([m("useEmissiveAsIllumination")],e.prototype,"_useEmissiveAsIllumination",void 0),o([p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useEmissiveAsIllumination",void 0),o([m("linkEmissiveWithDiffuse")],e.prototype,"_linkEmissiveWithDiffuse",void 0),o([p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"linkEmissiveWithDiffuse",void 0),o([m("useSpecularOverAlpha")],e.prototype,"_useSpecularOverAlpha",void 0),o([p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useSpecularOverAlpha",void 0),o([m("useReflectionOverAlpha")],e.prototype,"_useReflectionOverAlpha",void 0),o([p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useReflectionOverAlpha",void 0),o([m("disableLighting")],e.prototype,"_disableLighting",void 0),o([p("_markAllSubMeshesAsLightsDirty")],e.prototype,"disableLighting",void 0),o([m("useObjectSpaceNormalMap")],e.prototype,"_useObjectSpaceNormalMap",void 0),o([p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useObjectSpaceNormalMap",void 0),o([m("useParallax")],e.prototype,"_useParallax",void 0),o([p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useParallax",void 0),o([m("useParallaxOcclusion")],e.prototype,"_useParallaxOcclusion",void 0),o([p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useParallaxOcclusion",void 0),o([m()],e.prototype,"parallaxScaleBias",void 0),o([m("roughness")],e.prototype,"_roughness",void 0),o([p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"roughness",void 0),o([m()],e.prototype,"indexOfRefraction",void 0),o([m()],e.prototype,"invertRefractionY",void 0),o([m()],e.prototype,"alphaCutOff",void 0),o([m("useLightmapAsShadowmap")],e.prototype,"_useLightmapAsShadowmap",void 0),o([p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useLightmapAsShadowmap",void 0),o([F("diffuseFresnelParameters")],e.prototype,"_diffuseFresnelParameters",void 0),o([p("_markAllSubMeshesAsFresnelDirty")],e.prototype,"diffuseFresnelParameters",void 0),o([F("opacityFresnelParameters")],e.prototype,"_opacityFresnelParameters",void 0),o([p("_markAllSubMeshesAsFresnelAndMiscDirty")],e.prototype,"opacityFresnelParameters",void 0),o([F("reflectionFresnelParameters")],e.prototype,"_reflectionFresnelParameters",void 0),o([p("_markAllSubMeshesAsFresnelDirty")],e.prototype,"reflectionFresnelParameters",void 0),o([F("refractionFresnelParameters")],e.prototype,"_refractionFresnelParameters",void 0),o([p("_markAllSubMeshesAsFresnelDirty")],e.prototype,"refractionFresnelParameters",void 0),o([F("emissiveFresnelParameters")],e.prototype,"_emissiveFresnelParameters",void 0),o([p("_markAllSubMeshesAsFresnelDirty")],e.prototype,"emissiveFresnelParameters",void 0),o([m("useReflectionFresnelFromSpecular")],e.prototype,"_useReflectionFresnelFromSpecular",void 0),o([p("_markAllSubMeshesAsFresnelDirty")],e.prototype,"useReflectionFresnelFromSpecular",void 0),o([m("useGlossinessFromSpecularMapAlpha")],e.prototype,"_useGlossinessFromSpecularMapAlpha",void 0),o([p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useGlossinessFromSpecularMapAlpha",void 0),o([m("maxSimultaneousLights")],e.prototype,"_maxSimultaneousLights",void 0),o([p("_markAllSubMeshesAsLightsDirty")],e.prototype,"maxSimultaneousLights",void 0),o([m("invertNormalMapX")],e.prototype,"_invertNormalMapX",void 0),o([p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"invertNormalMapX",void 0),o([m("invertNormalMapY")],e.prototype,"_invertNormalMapY",void 0),o([p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"invertNormalMapY",void 0),o([m("twoSidedLighting")],e.prototype,"_twoSidedLighting",void 0),o([p("_markAllSubMeshesAsTexturesDirty")],e.prototype,"twoSidedLighting",void 0),o([m()],e.prototype,"useLogarithmicDepth",null),e}(K);Q("BABYLON.StandardMaterial",$);j.DefaultMaterialFactory=function(a){return new $("default material",a)};export{$ as S};
