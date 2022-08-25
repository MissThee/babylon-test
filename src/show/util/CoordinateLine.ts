import * as BABYLON from '@babylonjs/core';

export const baseLineDataArr = [
    {start: [0, 0, 0], end: [10, 0, 0], color: [255, 0, 0, 1]},
    {start: [0, 0, 0], end: [0, 10, 0], color: [0, 255, 0, 1]},
    {start: [0, 0, 0], end: [0, 0, 10], color: [0, 0, 255, 1]},
]

export default class CoordinateLine {
    scene: BABYLON.Scene;
    lines: BABYLON.Mesh[] = [];

    constructor(scene: BABYLON.Scene) {
        this.scene = scene
        baseLineDataArr.forEach(lineData => {
            this.lines.push(BABYLON.CreateLines('coordinateLine',
                    {
                        points: [new BABYLON.Vector3(...lineData.start), new BABYLON.Vector3(...lineData.end)],
                        colors: [new BABYLON.Color4(...lineData.color), new BABYLON.Color4(...lineData.color)]
                    },
                    scene
                )
            )
        })
    }
}
