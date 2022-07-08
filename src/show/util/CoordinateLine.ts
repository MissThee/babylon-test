// import * as BABYLON from '@babylonjs/core';

import type {Scene} from "@babylonjs/core/scene";
import type {Mesh} from "@babylonjs/core/Meshes/mesh";
import {Vector3} from "@babylonjs/core/Maths/math.vector";
import {Color4} from "@babylonjs/core/Maths/math.color";
import {CreateLines} from '@babylonjs/core/Meshes/Builders/linesBuilder'

const BABYLON = {Color4, Vector3, CreateLines}

export const baseLineDataArr = [
    {start: [0, 0, 0], end: [10, 0, 0], color: [255, 0, 0, 1]},
    {start: [0, 0, 0], end: [0, 10, 0], color: [0, 255, 0, 1]},
    {start: [0, 0, 0], end: [0, 0, 10], color: [0, 0, 255, 1]},
]

export default class CoordinateLine {
    scene: Scene;
    lines: Mesh[] = [];

    constructor(scene: Scene) {
        this.scene = scene
        baseLineDataArr.forEach(lineData => {
            this.lines.push(BABYLON.CreateLines('coordinateLine',
                {
                    points: [new BABYLON.Vector3(...lineData.start), new BABYLON.Vector3(...lineData.end)],
                    colors: [new BABYLON.Color4(...lineData.color), new BABYLON.Color4(...lineData.color)]
                })
            )
        })
    }
}
