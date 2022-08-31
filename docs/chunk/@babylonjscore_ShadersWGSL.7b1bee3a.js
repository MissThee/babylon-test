import{S as e}from"./@babylonjscore_Engines.a7c830c0.js";var n="bonesDeclaration",i=`#if NUM_BONE_INFLUENCERS>0
attribute matricesIndices : vec4<f32>;
attribute matricesWeights : vec4<f32>;
#if NUM_BONE_INFLUENCERS>4
attribute matricesIndicesExtra : vec4<f32>;
attribute matricesWeightsExtra : vec4<f32>;
#endif
#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#ifdef BONETEXTURE
var boneSampler : texture_2d<f32>;
uniform boneTextureWidth : f32;
#else
uniform mBones : array<mat4x4,BonesPerMesh>;
#ifdef BONES_VELOCITY_ENABLED
uniform mPreviousBones : array<mat4x4,BonesPerMesh>;
#endif
#endif
#ifdef BONETEXTURE
fn readMatrixFromRawSampler(smp : texture_2d<f32>,index : f32)->mat4x4<f32>
{
let offset=i32(index) *4; 
let m0=textureLoad(smp,vec2<i32>(offset+0,0),0);
let m1=textureLoad(smp,vec2<i32>(offset+1,0),0);
let m2=textureLoad(smp,vec2<i32>(offset+2,0),0);
let m3=textureLoad(smp,vec2<i32>(offset+3,0),0);
return mat4x4<f32>(m0,m1,m2,m3);
}
#endif
#endif
#endif
`;e.IncludesShadersStoreWGSL[n]=i;var r="bonesVertex",a=`#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#if NUM_BONE_INFLUENCERS>0
var influence : mat4x4<f32>;
#ifdef BONETEXTURE
influence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndices[1])*matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndices[2])*matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndices[3])*matricesWeights[3];
#endif 
#if NUM_BONE_INFLUENCERS>4
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[0])*matricesWeightsExtra[0];
#endif 
#if NUM_BONE_INFLUENCERS>5
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[1])*matricesWeightsExtra[1];
#endif 
#if NUM_BONE_INFLUENCERS>6
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[2])*matricesWeightsExtra[2];
#endif 
#if NUM_BONE_INFLUENCERS>7
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[3])*matricesWeightsExtra[3];
#endif 
#else 
influence=uniforms.mBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence=influence+uniforms.mBones[int(matricesIndices[1])]*matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
influence=influence+uniforms.mBones[int(matricesIndices[2])]*matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
influence=influence+uniforms.mBones[int(matricesIndices[3])]*matricesWeights[3];
#endif 
#if NUM_BONE_INFLUENCERS>4
influence=influence+uniforms.mBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif 
#if NUM_BONE_INFLUENCERS>5
influence=influence+uniforms.mBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif 
#if NUM_BONE_INFLUENCERS>6
influence=influence+uniforms.mBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif 
#if NUM_BONE_INFLUENCERS>7
influence=influence+uniforms.mBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif 
#endif
finalWorld=finalWorld*influence;
#endif
#endif
`;e.IncludesShadersStoreWGSL[r]=a;var t="bakedVertexAnimationDeclaration",f=`#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
uniform bakedVertexAnimationTime: f32;
uniform bakedVertexAnimationTextureSizeInverted: vec2<f32>;
uniform bakedVertexAnimationSettings: vec4<f32>;
var bakedVertexAnimationTexture : texture_2d<f32>;
#ifdef INSTANCES
attribute bakedVertexAnimationSettingsInstanced : vec4<f32>;
#endif
fn readMatrixFromRawSamplerVAT(smp : texture_2d<f32>,index : f32,frame : f32)->mat4x4<f32>
{
let offset=i32(index)*4;
let frameUV=i32(frame);
let m0=textureLoad(smp,vec2<i32>(offset+0,frameUV),0);
let m1=textureLoad(smp,vec2<i32>(offset+1,frameUV),0);
let m2=textureLoad(smp,vec2<i32>(offset+2,frameUV),0);
let m3=textureLoad(smp,vec2<i32>(offset+3,frameUV),0);
return mat4x4<f32>(m0,m1,m2,m3);
}
#endif
`;e.IncludesShadersStoreWGSL[t]=f;var d="bakedVertexAnimation",s=`#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
{
#ifdef INSTANCES
let VATStartFrame: f32=bakedVertexAnimationSettingsInstanced.x;
let VATEndFrame: f32=bakedVertexAnimationSettingsInstanced.y;
let VATOffsetFrame: f32=bakedVertexAnimationSettingsInstanced.z;
let VATSpeed: f32=bakedVertexAnimationSettingsInstanced.w;
#else
let VATStartFrame: f32=uniforms.bakedVertexAnimationSettings.x;
let VATEndFrame: f32=uniforms.bakedVertexAnimationSettings.y;
let VATOffsetFrame: f32=uniforms.bakedVertexAnimationSettings.z;
let VATSpeed: f32=uniforms.bakedVertexAnimationSettings.w;
#endif
let totalFrames: f32=VATEndFrame-VATStartFrame+1.0;
let time: f32=uniforms.bakedVertexAnimationTime*VATSpeed/totalFrames;
let frameCorrection: f32=select(1.0,0.0,time<1.0);
let numOfFrames: f32=totalFrames-frameCorrection;
var VATFrameNum: f32=fract(time)*numOfFrames;
VATFrameNum=(VATFrameNum+VATOffsetFrame) % numOfFrames;
VATFrameNum=floor(VATFrameNum);
VATFrameNum=VATFrameNum+VATStartFrame+frameCorrection;
var VATInfluence : mat4x4<f32>;
VATInfluence=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[0],VATFrameNum)*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[1],VATFrameNum)*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[2],VATFrameNum)*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[3],VATFrameNum)*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[0],VATFrameNum)*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[1],VATFrameNum)*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[2],VATFrameNum)*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[3],VATFrameNum)*matricesWeightsExtra[3];
#endif
finalWorld=finalWorld*VATInfluence;
}
#endif
`;e.IncludesShadersStoreWGSL[d]=s;var o="clipPlaneFragment",l=`#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)
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
`;e.IncludesShadersStoreWGSL[o]=l;var c="clipPlaneFragmentDeclaration",m=`#ifdef CLIPPLANE
varying fClipDistance: f32;
#endif
#ifdef CLIPPLANE2
varying fClipDistance2: f32;
#endif
#ifdef CLIPPLANE3
varying fClipDistance3: f32;
#endif
#ifdef CLIPPLANE4
varying fClipDistance4: f32;
#endif
#ifdef CLIPPLANE5
varying fClipDistance5: f32;
#endif
#ifdef CLIPPLANE6
varying fClipDistance6: f32;
#endif
`;e.IncludesShadersStoreWGSL[c]=m;var p="clipPlaneVertex",u=`#ifdef CLIPPLANE
fClipDistance=dot(worldPos,uniforms.vClipPlane);
#endif
#ifdef CLIPPLANE2
fClipDistance2=dot(worldPos,uniforms.vClipPlane2);
#endif
#ifdef CLIPPLANE3
fClipDistance3=dot(worldPos,uniforms.vClipPlane3);
#endif
#ifdef CLIPPLANE4
fClipDistance4=dot(worldPos,uniforms.vClipPlane4);
#endif
#ifdef CLIPPLANE5
fClipDistance5=dot(worldPos,uniforms.vClipPlane5);
#endif
#ifdef CLIPPLANE6
fClipDistance6=dot(worldPos,uniforms.vClipPlane6);
#endif
`;e.IncludesShadersStoreWGSL[p]=u;var E="clipPlaneVertexDeclaration",x=`#ifdef CLIPPLANE
uniform vClipPlane: vec4<f32>;
varying fClipDistance: f32;
#endif
#ifdef CLIPPLANE2
uniform vClipPlane2: vec4<f32>;
varying fClipDistance2: f32;
#endif
#ifdef CLIPPLANE3
uniform vClipPlane3: vec4<f32>;
varying fClipDistance3: f32;
#endif
#ifdef CLIPPLANE4
uniform vClipPlane4: vec4<f32>;
varying fClipDistance4: f32;
#endif
#ifdef CLIPPLANE5
uniform vClipPlane5: vec4<f32>;
varying fClipDistance5: f32;
#endif
#ifdef CLIPPLANE6
uniform vClipPlane6: vec4<f32>;
varying fClipDistance6: f32;
#endif
`;e.IncludesShadersStoreWGSL[E]=x;var I="instancesDeclaration",T=`#ifdef INSTANCES
attribute world0 : vec4<f32>;
attribute world1 : vec4<f32>;
attribute world2 : vec4<f32>;
attribute world3 : vec4<f32>;
#ifdef INSTANCESCOLOR
attribute instanceColor : vec4<f32>;
#endif
#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)
uniform world : mat4x4<f32>;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY)
attribute previousWorld0 : vec4<f32>;
attribute previousWorld1 : vec4<f32>;
attribute previousWorld2 : vec4<f32>;
attribute previousWorld3 : vec4<f32>;
#ifdef THIN_INSTANCES
uniform previousWorld : mat4x4<f32>;
#endif
#endif
#else
#if !defined(WORLD_UBO)
uniform world : mat4x4<f32>;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY)
uniform previousWorld : mat4x4<f32>;
#endif
#endif
`;e.IncludesShadersStoreWGSL[I]=T;var v="instancesVertex",S=`#ifdef INSTANCES
var finalWorld=mat4x4<f32>(world0,world1,world2,world3);
#if defined(PREPASS_VELOCITY) || defined(VELOCITY)
var finalPreviousWorld=mat4x4<f32>(previousWorld0,previousWorld1,previousWorld2,previousWorld3);
#endif
#ifdef THIN_INSTANCES
#if !defined(WORLD_UBO)
finalWorld=uniforms.world*finalWorld;
#else
finalWorld=mesh.world*finalWorld;
#endif
#if defined(PREPASS_VELOCITY) || defined(VELOCITY)
finalPreviousWorld=previousWorld*finalPreviousWorld;
#endif
#endif
#else
#if !defined(WORLD_UBO)
var finalWorld=uniforms.world;
#else
var finalWorld=mesh.world;
#endif
#if defined(PREPASS_VELOCITY) || defined(VELOCITY)
var finalPreviousWorld=previousWorld;
#endif
#endif
`;e.IncludesShadersStoreWGSL[v]=S;var R="meshUboDeclaration",g=`struct Mesh {
world : mat4x4<f32>,
visibility : f32,
};
var<uniform> mesh : Mesh;
#define WORLD_UBO
`;e.IncludesShadersStoreWGSL[R]=g;var N="morphTargetsVertex",A=`#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE 
vertexID=f32(gl_VertexID)*uniforms.morphTargetTextureInfo.x;
positionUpdated=positionUpdated+(readVector3FromRawSampler({X},vertexID)-position)*uniforms.morphTargetInfluences[{X}];
vertexID=vertexID+1.0;
#ifdef MORPHTARGETS_NORMAL
normalUpdated=normalUpdated+(readVector3FromRawSampler({X},vertexID) -normal)*uniforms.morphTargetInfluences[{X}];
vertexID=vertexID+1.0;
#endif
#ifdef MORPHTARGETS_UV
uvUpdated=uvUpdated+(readVector3FromRawSampler({X},vertexID).xy-uv)*uniforms.morphTargetInfluences[{X}];
vertexID=vertexID+1.0;
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated.xyz=tangentUpdated.xyz+(readVector3FromRawSampler({X},vertexID) -tangent.xyz)*uniforms.morphTargetInfluences[{X}];
#endif
#else
positionUpdated=positionUpdated+(position{X}-position)*uniforms.morphTargetInfluences[{X}];
#ifdef MORPHTARGETS_NORMAL
normalUpdated+=(normal{X}-normal)*uniforms.morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated.xyz=tangentUpdated.xyz+(tangent{X}-tangent.xyz)*uniforms.morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_UV
uvUpdated=uvUpdated+(uv_{X}-uv)*uniforms.morphTargetInfluences[{X}];
#endif
#endif
#endif
`;e.IncludesShadersStoreWGSL[N]=A;var L="morphTargetsVertexDeclaration",P=`#ifdef MORPHTARGETS
#ifndef MORPHTARGETS_TEXTURE
attribute position{X} : vec3<f32>;
#ifdef MORPHTARGETS_NORMAL
attribute normal{X} : vec3<f32>;
#endif
#ifdef MORPHTARGETS_TANGENT
attribute tangent{X} : vec3<f32>;
#endif
#ifdef MORPHTARGETS_UV
attribute uv_{X} : vec2<f32>;
#endif
#endif
#endif
`;e.IncludesShadersStoreWGSL[L]=P;var O="morphTargetsVertexGlobal",C=`#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE
var vertexID : f32;
#endif
#endif
`;e.IncludesShadersStoreWGSL[O]=C;var D="morphTargetsVertexGlobalDeclaration",V=`#ifdef MORPHTARGETS
uniform morphTargetInfluences : array<f32,NUM_MORPH_INFLUENCERS>;
#ifdef MORPHTARGETS_TEXTURE 
uniform morphTargetTextureIndices : array<f32,NUM_MORPH_INFLUENCERS>;
uniform morphTargetTextureInfo : vec3<f32>;
var morphTargets : texture_2d_array<f32>;
var morphTargetsSampler : sampler;
fn readVector3FromRawSampler(targetIndex : i32,vertexIndex : f32)->vec3<f32>
{ 
let y=floor(vertexIndex/uniforms.morphTargetTextureInfo.y);
let x=vertexIndex-y*uniforms.morphTargetTextureInfo.y;
let textureUV=vec2<f32>((x+0.5)/uniforms.morphTargetTextureInfo.y,(y+0.5)/uniforms.morphTargetTextureInfo.z);
return textureSampleLevel(morphTargets,morphTargetsSampler,textureUV,i32(uniforms.morphTargetTextureIndices[targetIndex]),0.0).xyz;
}
#endif
#endif
`;e.IncludesShadersStoreWGSL[D]=V;var h="sceneUboDeclaration",M=`struct Scene {
viewProjection : mat4x4<f32>,
#ifdef MULTIVIEW
viewProjectionR : mat4x4<f32>,
#endif 
view : mat4x4<f32>,
projection : mat4x4<f32>,
vEyePosition : vec4<f32>,
};
var<uniform> scene : Scene;
`;e.IncludesShadersStoreWGSL[h]=M;var _="gpuUpdateParticlesComputeShader",U=`struct Particle {
position : vec3<f32>,
age : f32,
size : vec3<f32>,
life : f32,
seed : vec4<f32>,
direction : vec3<f32>,
dummy0: f32,
#ifdef CUSTOMEMITTER
initialPosition : vec3<f32>,
dummy1: f32,
#endif
#ifndef COLORGRADIENTS
color : vec4<f32>,
#endif
#ifndef BILLBOARD
initialDirection : vec3<f32>,
dummy2: f32,
#endif
#ifdef NOISE
noiseCoordinates1 : vec3<f32>,
dummy3: f32,
noiseCoordinates2 : vec3<f32>,
dummy4: f32,
#endif
#ifdef ANGULARSPEEDGRADIENTS
angle : f32,
#else
angle : vec2<f32>,
#endif
#ifdef ANIMATESHEET
cellIndex : f32,
#ifdef ANIMATESHEETRANDOMSTART
cellStartOffset : f32,
#endif
#endif
};
struct Particles {
particles : array<Particle>,
};
struct SimParams {
currentCount : f32,
timeDelta : f32,
stopFactor : f32,
randomTextureSize: i32,
lifeTime : vec2<f32>,
emitPower : vec2<f32>,
#ifndef COLORGRADIENTS
color1 : vec4<f32>,
color2 : vec4<f32>,
#endif
sizeRange : vec2<f32>,
scaleRange : vec4<f32>,
angleRange : vec4<f32>,
gravity : vec3<f32>,
#ifdef LIMITVELOCITYGRADIENTS
limitVelocityDamping : f32,
#endif
#ifdef ANIMATESHEET
cellInfos : vec4<f32>,
#endif
#ifdef NOISE
noiseStrength : vec3<f32>,
#endif
#ifndef LOCAL
emitterWM : mat4x4<f32>,
#endif
#ifdef BOXEMITTER
direction1 : vec3<f32>,
direction2 : vec3<f32>,
minEmitBox : vec3<f32>,
maxEmitBox : vec3<f32>,
#endif
#ifdef CONEEMITTER
radius : vec2<f32>,
coneAngle : f32,
height : vec2<f32>,
directionRandomizer : f32,
#endif
#ifdef CYLINDEREMITTER
radius : f32,
height : f32,
radiusRange : f32,
#ifdef DIRECTEDCYLINDEREMITTER
direction1 : vec3<f32>,
direction2 : vec3<f32>,
#else
directionRandomizer : f32,
#endif
#endif
#ifdef HEMISPHERICEMITTER
radius : f32,
radiusRange : f32,
directionRandomizer : f32,
#endif
#ifdef POINTEMITTER
direction1 : vec3<f32>,
direction2 : vec3<f32>,
#endif
#ifdef SPHEREEMITTER
radius : f32,
radiusRange : f32,
#ifdef DIRECTEDSPHEREEMITTER
direction1 : vec3<f32>,
direction2 : vec3<f32>,
#else
directionRandomizer : f32,
#endif
#endif
};
@binding(0) @group(0) var<uniform> params : SimParams;
@binding(1) @group(0) var<storage,read> particlesIn : Particles;
@binding(2) @group(0) var<storage,read_write> particlesOut : Particles;
@binding(3) @group(0) var randomTexture : texture_2d<f32>;
@binding(4) @group(0) var randomTexture2 : texture_2d<f32>;
#ifdef SIZEGRADIENTS
@binding(0) @group(1) var sizeGradientSampler : sampler;
@binding(1) @group(1) var sizeGradientTexture : texture_2d<f32>;
#endif 
#ifdef ANGULARSPEEDGRADIENTS
@binding(2) @group(1) var angularSpeedGradientSampler : sampler;
@binding(3) @group(1) var angularSpeedGradientTexture : texture_2d<f32>;
#endif 
#ifdef VELOCITYGRADIENTS
@binding(4) @group(1) var velocityGradientSampler : sampler;
@binding(5) @group(1) var velocityGradientTexture : texture_2d<f32>;
#endif
#ifdef LIMITVELOCITYGRADIENTS
@binding(6) @group(1) var limitVelocityGradientSampler : sampler;
@binding(7) @group(1) var limitVelocityGradientTexture : texture_2d<f32>;
#endif
#ifdef DRAGGRADIENTS
@binding(8) @group(1) var dragGradientSampler : sampler;
@binding(9) @group(1) var dragGradientTexture : texture_2d<f32>;
#endif
#ifdef NOISE
@binding(10) @group(1) var noiseSampler : sampler;
@binding(11) @group(1) var noiseTexture : texture_2d<f32>;
#endif
fn getRandomVec3(offset : f32,vertexID : f32)->vec3<f32> {
return textureLoad(randomTexture2,vec2<i32>(i32(vertexID*offset/params.currentCount*f32(params.randomTextureSize)) % params.randomTextureSize,0),0).rgb;
}
fn getRandomVec4(offset : f32,vertexID : f32)->vec4<f32> {
return textureLoad(randomTexture,vec2<i32>(i32(vertexID*offset/params.currentCount*f32(params.randomTextureSize)) % params.randomTextureSize,0),0);
}
@stage(compute) @workgroup_size(64)
fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
let index : u32=GlobalInvocationID.x;
let vertexID : f32=f32(index);
if (index>=u32(params.currentCount)) {
return;
}
let PI : f32=3.14159;
let timeDelta : f32=params.timeDelta;
let newAge : f32=particlesIn.particles[index].age+timeDelta;
let life : f32=particlesIn.particles[index].life;
let seed : vec4<f32>=particlesIn.particles[index].seed;
let direction : vec3<f32>=particlesIn.particles[index].direction;
if (newAge>=life && params.stopFactor != 0.) {
var newPosition : vec3<f32>;
var newDirection : vec3<f32>;
let randoms : vec4<f32>=getRandomVec4(seed.x,vertexID);
let outLife : f32=params.lifeTime.x+(params.lifeTime.y-params.lifeTime.x)*randoms.r;
particlesOut.particles[index].life=outLife;
particlesOut.particles[index].age=newAge-life;
particlesOut.particles[index].seed=seed;
var sizex : f32;
#ifdef SIZEGRADIENTS 
sizex=textureSampleLevel(sizeGradientTexture,sizeGradientSampler,vec2<f32>(0.,0.),0.).r;
#else
sizex=params.sizeRange.x+(params.sizeRange.y-params.sizeRange.x)*randoms.g;
#endif
particlesOut.particles[index].size=vec3<f32>(
sizex,
params.scaleRange.x+(params.scaleRange.y-params.scaleRange.x)*randoms.b,
params.scaleRange.z+(params.scaleRange.w-params.scaleRange.z)*randoms.a);
#ifndef COLORGRADIENTS
particlesOut.particles[index].color=params.color1+(params.color2-params.color1)*randoms.b;
#endif
#ifndef ANGULARSPEEDGRADIENTS 
particlesOut.particles[index].angle=vec2<f32>(
params.angleRange.z+(params.angleRange.w-params.angleRange.z)*randoms.r,
params.angleRange.x+(params.angleRange.y-params.angleRange.x)*randoms.a);
#else
particlesOut.particles[index].angle=params.angleRange.z+(params.angleRange.w-params.angleRange.z)*randoms.r;
#endif 
#if defined(POINTEMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);
let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);
newPosition=vec3<f32>(0.,0.,0.);
newDirection=params.direction1+(params.direction2-params.direction1)*randoms3;
#elif defined(BOXEMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);
let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);
newPosition=params.minEmitBox+(params.maxEmitBox-params.minEmitBox)*randoms2;
newDirection=params.direction1+(params.direction2-params.direction1)*randoms3; 
#elif defined(HEMISPHERICEMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);
let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);
let phi : f32=2.0*PI*randoms2.x;
let theta : f32=acos(-1.0+2.0*randoms2.y);
let randX : f32=cos(phi)*sin(theta);
let randY : f32=cos(theta);
let randZ : f32=sin(phi)*sin(theta);
newPosition=(params.radius-(params.radius*params.radiusRange*randoms2.z))*vec3<f32>(randX,abs(randY),randZ);
newDirection=normalize(newPosition+params.directionRandomizer*randoms3);
#elif defined(SPHEREEMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);
let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);
let phi : f32=2.0*PI*randoms2.x;
let theta : f32=acos(-1.0+2.0*randoms2.y);
let randX : f32=cos(phi)*sin(theta);
let randY : f32=cos(theta);
let randZ : f32=sin(phi)*sin(theta);
newPosition=(params.radius-(params.radius*params.radiusRange*randoms2.z))*vec3<f32>(randX,randY,randZ);
#ifdef DIRECTEDSPHEREEMITTER
newDirection=normalize(params.direction1+(params.direction2-params.direction1)*randoms3);
#else
newDirection=normalize(newPosition+params.directionRandomizer*randoms3);
#endif
#elif defined(CYLINDEREMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);
let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);
let yPos : f32=(-0.5+randoms2.x)*params.height;
var angle : f32=randoms2.y*PI*2.;
let inverseRadiusRangeSquared : f32=(1.-params.radiusRange)*(1.-params.radiusRange);
let positionRadius : f32=params.radius*sqrt(inverseRadiusRangeSquared+randoms2.z*(1.-inverseRadiusRangeSquared));
let xPos : f32=positionRadius*cos(angle);
let zPos : f32=positionRadius*sin(angle);
newPosition=vec3<f32>(xPos,yPos,zPos);
#ifdef DIRECTEDCYLINDEREMITTER
newDirection=params.direction1+(params.direction2-params.direction1)*randoms3;
#else
angle=angle+(-0.5+randoms3.x)*PI*params.directionRandomizer;
newDirection=vec3<f32>(cos(angle),(-0.5+randoms3.y)*params.directionRandomizer,sin(angle));
newDirection=normalize(newDirection);
#endif
#elif defined(CONEEMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);
let s : f32=2.0*PI*randoms2.x;
#ifdef CONEEMITTERSPAWNPOINT
let h : f32=0.0001;
#else
var h : f32=randoms2.y*params.height.y;
h=1.-h*h; 
#endif
var lRadius : f32=params.radius.x-params.radius.x*randoms2.z*params.radius.y;
lRadius=lRadius*h;
let randX : f32=lRadius*sin(s);
let randZ : f32=lRadius*cos(s);
let randY : f32=h *params.height.x;
newPosition=vec3<f32>(randX,randY,randZ); 
if (abs(cos(params.coneAngle))==1.0) {
newDirection=vec3<f32>(0.,1.0,0.);
} else {
let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);
newDirection=normalize(newPosition+params.directionRandomizer*randoms3); 
}
#elif defined(CUSTOMEMITTER)
newPosition=particlesIn.particles[index].initialPosition;
particlesOut.particles[index].initialPosition=newPosition;
#else 
newPosition=vec3<f32>(0.,0.,0.);
newDirection=2.0*(getRandomVec3(seed.w,vertexID)-vec3<f32>(0.5,0.5,0.5));
#endif
let power : f32=params.emitPower.x+(params.emitPower.y-params.emitPower.x)*randoms.a;
#ifdef LOCAL
particlesOut.particles[index].position=newPosition;
#else
particlesOut.particles[index].position=(params.emitterWM*vec4<f32>(newPosition,1.)).xyz;
#endif
#ifdef CUSTOMEMITTER
particlesOut.particles[index].direction=direction;
#ifndef BILLBOARD 
particlesOut.particles[index].initialDirection=direction;
#endif
#else
#ifdef LOCAL
let initial : vec3<f32>=newDirection;
#else 
let initial : vec3<f32>=(params.emitterWM*vec4<f32>(newDirection,0.)).xyz;
#endif
particlesOut.particles[index].direction=initial*power;
#ifndef BILLBOARD 
particlesOut.particles[index].initialDirection=initial;
#endif
#endif
#ifdef ANIMATESHEET 
particlesOut.particles[index].cellIndex=params.cellInfos.x;
#ifdef ANIMATESHEETRANDOMSTART
particlesOut.particles[index].cellStartOffset=randoms.a*outLife;
#endif 
#endif
#ifdef NOISE
particlesOut.particles[index].noiseCoordinates1=particlesIn.particles[index].noiseCoordinates1;
particlesOut.particles[index].noiseCoordinates2=particlesIn.particles[index].noiseCoordinates2;
#endif
} else {
var directionScale : f32=timeDelta;
particlesOut.particles[index].age=newAge;
let ageGradient : f32=newAge/life;
#ifdef VELOCITYGRADIENTS
directionScale=directionScale*textureSampleLevel(velocityGradientTexture,velocityGradientSampler,vec2<f32>(ageGradient,0.),0.).r;
#endif
#ifdef DRAGGRADIENTS
directionScale=directionScale*(1.0-textureSampleLevel(dragGradientTexture,dragGradientSampler,vec2<f32>(ageGradient,0.),0.).r);
#endif
let position : vec3<f32>=particlesIn.particles[index].position;
#if defined(CUSTOMEMITTER)
particlesOut.particles[index].position=position+(direction-position)*ageGradient; 
particlesOut.particles[index].initialPosition=particlesIn.particles[index].initialPosition;
#else
particlesOut.particles[index].position=position+direction*directionScale;
#endif
particlesOut.particles[index].life=life;
particlesOut.particles[index].seed=seed;
#ifndef COLORGRADIENTS 
particlesOut.particles[index].color=particlesIn.particles[index].color;
#endif
#ifdef SIZEGRADIENTS
particlesOut.particles[index].size=vec3<f32>(
textureSampleLevel(sizeGradientTexture,sizeGradientSampler,vec2<f32>(ageGradient,0.),0.).r,
particlesIn.particles[index].size.yz);
#else
particlesOut.particles[index].size=particlesIn.particles[index].size;
#endif 
#ifndef BILLBOARD 
particlesOut.particles[index].initialDirection=particlesIn.particles[index].initialDirection;
#endif
#ifdef CUSTOMEMITTER
particlesOut.particles[index].direction=direction;
#else
var updatedDirection : vec3<f32>=direction+params.gravity*timeDelta;
#ifdef LIMITVELOCITYGRADIENTS
let limitVelocity : f32=textureSampleLevel(limitVelocityGradientTexture,limitVelocityGradientSampler,vec2<f32>(ageGradient,0.),0.).r;
let currentVelocity : f32=length(updatedDirection);
if (currentVelocity>limitVelocity) {
updatedDirection=updatedDirection*params.limitVelocityDamping;
}
#endif
particlesOut.particles[index].direction=updatedDirection;
#ifdef NOISE
let noiseCoordinates1 : vec3<f32>=particlesIn.particles[index].noiseCoordinates1;
let noiseCoordinates2 : vec3<f32>=particlesIn.particles[index].noiseCoordinates2;
let fetchedR : f32=textureSampleLevel(noiseTexture,noiseSampler,vec2<f32>(noiseCoordinates1.x,noiseCoordinates1.y)*vec2<f32>(0.5,0.5)+vec2<f32>(0.5,0.5),0.).r;
let fetchedG : f32=textureSampleLevel(noiseTexture,noiseSampler,vec2<f32>(noiseCoordinates1.z,noiseCoordinates2.x)*vec2<f32>(0.5,0.5)+vec2<f32>(0.5,0.5),0.).r;
let fetchedB : f32=textureSampleLevel(noiseTexture,noiseSampler,vec2<f32>(noiseCoordinates2.y,noiseCoordinates2.z)*vec2<f32>(0.5,0.5)+vec2<f32>(0.5,0.5),0.).r;
let force : vec3<f32>=vec3<f32>(-1.+2.*fetchedR,-1.+2.*fetchedG,-1.+2.*fetchedB)*params.noiseStrength;
particlesOut.particles[index].direction=particlesOut.particles[index].direction+force*timeDelta;
particlesOut.particles[index].noiseCoordinates1=noiseCoordinates1;
particlesOut.particles[index].noiseCoordinates2=noiseCoordinates2;
#endif 
#endif 
#ifdef ANGULARSPEEDGRADIENTS
let angularSpeed : f32=textureSampleLevel(angularSpeedGradientTexture,angularSpeedGradientSampler,vec2<f32>(ageGradient,0.),0.).r;
particlesOut.particles[index].angle=particlesIn.particles[index].angle+angularSpeed*timeDelta;
#else
let angle : vec2<f32>=particlesIn.particles[index].angle;
particlesOut.particles[index].angle=vec2<f32>(angle.x+angle.y*timeDelta,angle.y);
#endif
#ifdef ANIMATESHEET 
var offsetAge : f32=particlesOut.particles[index].age;
let dist : f32=params.cellInfos.y-params.cellInfos.x;
#ifdef ANIMATESHEETRANDOMSTART
let cellStartOffset : f32=particlesIn.particles[index].cellStartOffset;
particlesOut.particles[index].cellStartOffset=cellStartOffset;
offsetAge=offsetAge+cellStartOffset;
#else
let cellStartOffset : f32=0.;
#endif 
var ratio : f32;
if (params.cellInfos.w==1.0) {
ratio=clamp(((cellStartOffset+params.cellInfos.z*offsetAge) % life)/life,0.,1.0);
}
else {
ratio=clamp((cellStartOffset+params.cellInfos.z*offsetAge)/life,0.,1.0);
}
particlesOut.particles[index].cellIndex=f32(i32(params.cellInfos.x+ratio*dist));
#endif
}
}
`;e.ShadersStoreWGSL[_]=U;
