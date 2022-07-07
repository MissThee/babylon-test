import * as BABYLON from '@babylonjs/core';

let instance: ClickSound;

export default class ClickSound {
    scene: BABYLON.Scene | undefined
    soundBounceArr: BABYLON.Sound[] = []
    soundBounceFilePathArr = ["/sound/bounce1.mp3", "/sound/bounce2.mp3", "/sound/bounce3.mp3"]


    constructor(scene: BABYLON.Scene) {
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