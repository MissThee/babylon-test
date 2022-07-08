// import * as BABYLON from '@babylonjs/core';

import type {Scene} from "@babylonjs/core/scene";
import {StandardMaterial} from "@babylonjs/core/Materials/standardMaterial";
import {PointerEventTypes} from '@babylonjs/core/Events/pointerEvents'

import {Sound} from '@babylonjs/core/Audio/sound'
import '@babylonjs/core/Audio/audioSceneComponent'
const BABYLON = {StandardMaterial, Sound, PointerEventTypes}

let instance: ClickSound;

export default class ClickSound {
    scene: Scene | undefined
    soundBounceArr: Sound[] = []
    soundBounceFilePathArr = ["sound/bounce1.mp3", "sound/bounce2.mp3", "sound/bounce3.mp3"]

    constructor(scene: Scene) {
        if (instance) {
            return instance
        }
        this.scene = scene

        scene.onPointerObservable.add((pointerInfo) => {
            switch (pointerInfo.type) {
                case BABYLON.PointerEventTypes.POINTERDOWN:
                    if (this.soundBounceArr.length === 0) {
                        this.soundBounceFilePathArr.forEach(filePath => {
                            this.soundBounceArr.push(new BABYLON.Sound(filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.')), filePath, null, null, {}))
                        })
                    }
                    this.soundBounceArr[0].play()
            }
        })
        instance = this
    }
}