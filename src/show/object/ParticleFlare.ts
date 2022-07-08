// import * as BABYLON from '@babylonjs/core';
import type {Scene} from "@babylonjs/core/scene";
import {Vector3} from "@babylonjs/core/Maths/math.vector";
import {Color4 } from "@babylonjs/core/Maths/math.color";
import {Texture} from '@babylonjs/core/Materials/Textures/texture'
import {ParticleSystem} from '@babylonjs/core/Particles/particleSystem'

const BABYLON = {Vector3, Texture, ParticleSystem, Color4}

class ParticleFlare {
    particleSystem: ParticleSystem

    constructor(scene: Scene) {
        this.particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
        this.particleSystem.particleTexture = new BABYLON.Texture("image/star.png");
        this.particleSystem.createPointEmitter(new BABYLON.Vector3(5, -5, 5), new BABYLON.Vector3(5, 5, -5));
        // 起始发射位置
        // this.particleSystem.emitter = new BABYLON.Vector3(0, 5, 0);
        // 粒子出现位置
        // this.particleSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0); // Starting all from
        // this.particleSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0); // To...
        //
        // // 粒子颜色
        this.particleSystem.color1 = new BABYLON.Color4(1, 1, 1, 1);
        this.particleSystem.color2 = new BABYLON.Color4(1.5, 1.5, 1.5, 1);
        this.particleSystem.colorDead = new BABYLON.Color4(1.5, 1.5, 1.5, 0.2);
        //
        // // 粒子大小
        this.particleSystem.minSize = 1;
        this.particleSystem.maxSize = 1.5;
        //
        // // 粒子持续时间
        this.particleSystem.minLifeTime = 0.3;
        this.particleSystem.maxLifeTime = 0.6;
        //
        // // 粒子频率
        this.particleSystem.emitRate = 200;
        // 粒子持续时间
        this.particleSystem.targetStopDuration = 0.02
        // 粒子总个数
        // this.particleSystem.manualEmitCount=6
        // // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
        // this.particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        this.particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;
        //
        // // 重力
        // this.particleSystem.gravity = new BABYLON.Vector3(0, -9, 0);
        //
        // // 发射后角度
        // this.particleSystem.direction1 = new BABYLON.Vector3(1, 0, 0);
        // this.particleSystem.direction2 = new BABYLON.Vector3(-1, 0, 0);
        //
        // // 角速度
        // this.particleSystem.minAngularSpeed = 0;
        // this.particleSystem.maxAngularSpeed = Math.PI*2 ;
        //
        // // 速度
        this.particleSystem.minEmitPower = 2;
        this.particleSystem.maxEmitPower = 2;
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
        // // this.particleSystem.noiseTexture = noiseTexture;
        // this.particleSystem.noiseStrength = new BABYLON.Vector3(100, 100, 100);


        // // this.particleSystem.start();
        // window.addEventListener('click', () => {
        //     this.particleSystem.start();
        // })
    }

}

export default ParticleFlare