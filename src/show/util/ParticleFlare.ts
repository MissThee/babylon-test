import * as BABYLON from '@babylonjs/core';
import * as AssetsImage from '../../../src/assets/image'

class ParticleFlare {
    scene: BABYLON.Scene
    particleSystem: BABYLON.GPUParticleSystem | BABYLON.ParticleSystem
    static instance: ParticleFlare

    static getInstance(scene: BABYLON.Scene) {
        if (!this.instance) {
            this.instance = new this(scene)
        }
        return this.instance
    }

    constructor(scene: BABYLON.Scene) {
        this.scene = scene
        if (BABYLON.GPUParticleSystem.IsSupported) { // 判断是否支持 GPU 粒子
            this.particleSystem = new BABYLON.GPUParticleSystem("particles", {capacity: 20000}, scene);
        } else {
            this.particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
        }
        this.particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
        this.particleSystem.particleTexture = new BABYLON.Texture(AssetsImage.star);
        // this.particleSystem.renderingGroupId = 0 //可一直显示在最上面

        this.particleSystem.createPointEmitter(
            new BABYLON.Vector3(),
            new BABYLON.Vector3(),
        );
        // 起始发射位置
        // this.particleSystem.emitter = new BABYLON.Vector3(0, 5, 0);
        // 粒子出现位置(仅boxEmitter有效，粒子从一个盒状位置生成)
        // this.particleSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0); // Starting all from
        // this.particleSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0); // To...
        //
        // // 粒子颜色
        this.particleSystem.color1 = new BABYLON.Color4(1, 0, 0, 1);
        this.particleSystem.color2 = new BABYLON.Color4(1.5, 1.5, 1.5, 1);
        this.particleSystem.colorDead = new BABYLON.Color4(1.5, 1.5, 1.5, 0.2);
        //
        // // 粒子大小
        this.particleSystem.minSize = 0.8;
        this.particleSystem.maxSize = 1.2;
        //
        // // 粒子持续时间
        this.particleSystem.minLifeTime = 0.3;
        this.particleSystem.maxLifeTime = 0.6;
        //
        // // 粒子频率
        this.particleSystem.emitRate = 400;
        // 粒子持续时间
        this.particleSystem.targetStopDuration = 0.025
        // 粒子总个数
        // this.particleSystem.manualEmitCount=6
        // // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
        // this.particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        this.particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;
        //
        // // 重力
        // this.particleSystem.gravity = new BABYLON.Vector3(0, -9, 0);
        // // 角速度
        // this.particleSystem.minAngularSpeed = 0;
        // this.particleSystem.maxAngularSpeed = Math.PI*2 ;
        //
        // // 速度
        this.particleSystem.minEmitPower = 15;
        this.particleSystem.maxEmitPower = 15;
        this.particleSystem.updateSpeed = 0.01;
        this.particleSystem.addVelocityGradient(0, 2)
        this.particleSystem.addVelocityGradient(0.5, 0.5)
        this.particleSystem.addVelocityGradient(1, 0)
        //
        // // 粒子运动噪音
        // const noiseTexture = new BABYLON.NoiseProceduralTexture("perlin", 256, scene);
        // noiseTexture.animationSpeedFactor = 5;
        // noiseTexture.persistence = 2;
        // noiseTexture.brightness = 0.5;
        // noiseTexture.octaves = 2;
        //
        // this.particleSystem.noiseTexture = noiseTexture;
        // this.particleSystem.noiseStrength = new BABYLON.Vector3(100, 100, 100);

        // 螺旋路线，以给定方向一直偏移
        // this.particleSystem.translationPivot = new BABYLON.Vector2(2, 2);
        // // this.particleSystem.start();
        // window.addEventListener('click', () => {
        //     this.particleSystem.start();
        // })
    }

    start(vector3: BABYLON.Vector3) {
        if (this.scene.activeCamera) {
           const quaternionTmp = this.scene.activeCamera.absoluteRotation
            // 发射角度范围（四棱锥相对的两个棱）
            this.particleSystem.direction1 = new BABYLON.Vector3(-1,-1,-1).applyRotationQuaternionInPlace(quaternionTmp).normalize()
            this.particleSystem.direction2 = new BABYLON.Vector3(1,1,-1).applyRotationQuaternionInPlace(quaternionTmp).normalize()
        }
        this.particleSystem.emitter = vector3.clone()
        this.particleSystem.start()
    }
}

export default ParticleFlare
