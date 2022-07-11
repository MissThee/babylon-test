// import * as BABYLON from '@babylonjs/core';

import type {Scene} from "@babylonjs/core/scene";
import {StandardMaterial} from "@babylonjs/core/Materials/standardMaterial";
import {PointerEventTypes} from '@babylonjs/core/Events/pointerEvents'
import * as AssetsSound from '../../../src/assets/sound'
import {Sound} from '@babylonjs/core/Audio/sound'
const BABYLON = {StandardMaterial, Sound, PointerEventTypes}

let instance: ClickSound;

export default class ClickSound {
    scene: Scene | undefined
    soundBounceArr: Sound[] = []
    soundBounceFilePathArr = [
        AssetsSound.bounce1,
        AssetsSound.bounce2,
        AssetsSound.bounce3
    ]

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