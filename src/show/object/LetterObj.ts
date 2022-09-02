import {StickObject} from "../util/Interaction/StickHelper";
import * as BABYLON from "@babylonjs/core";


class LetterObj implements StickObject {
    scene?: BABYLON.Scene;
    mesh: BABYLON.Mesh;
    subPhysicMeshes: BABYLON.Mesh[] = [];
    springStickPosition?: BABYLON.Vector3;
    staticStickPosition?: BABYLON.Vector3;

    constructor(letter: Letter, scene?: BABYLON.Scene) {
        this.scene = scene
        this.mesh = new BABYLON.Mesh('letterObj-' + letter)

        const letterBlockScale = {
            depth: 3,
            width: 1,
            height: 1.5,
        }

        const positionArr: BABYLON.Vector3[] = []
        const letterStringRows = getLetterString(letter).trim().split('\n').reverse()
        const heightNum = letterStringRows.length
        let widthNum = 0
        for (let rIndex = 0; rIndex < letterStringRows.length; rIndex++) {
            widthNum = Math.max(widthNum, letterStringRows[rIndex].length)
            for (let cIndex = 0; cIndex < letterStringRows[rIndex].length; cIndex++) {
                if (letterStringRows[rIndex][cIndex] === '#') {
                    positionArr.push(new BABYLON.Vector3(0, rIndex, cIndex))
                }
            }
        }
        const material = createMaterial(scene)
        positionArr.forEach((position) => {
            const physicMesh = BABYLON.MeshBuilder.CreateBox('', {
                width: letterBlockScale.depth,// 厚度
                height: letterBlockScale.height, // 纵向粗细
                depth: letterBlockScale.width, // 横向粗细
            })
            physicMesh.receiveShadows = true
            physicMesh.material = material
            position.z -= widthNum / 2
            position.y -= heightNum / 2
            position.x *= letterBlockScale.depth
            position.y *= letterBlockScale.height
            position.z *= letterBlockScale.width
            physicMesh.position = position
            this.mesh.addChild(physicMesh)
            this.subPhysicMeshes.push(physicMesh)
        })
    }

    usePhysicsImpostor() {
        if (this.mesh.physicsImpostor) {
            return
        }
        this.subPhysicMeshes.forEach(e => e.physicsImpostor = new BABYLON.PhysicsImpostor(e, BABYLON.PhysicsImpostor.BoxImpostor))
        this.mesh.physicsImpostor = new BABYLON.PhysicsImpostor(this.mesh, BABYLON.PhysicsImpostor.NoImpostor, {mass: 1, friction: 1, restitution: 0}, this.scene)
    }
}

const createMaterial = (scene?: BABYLON.Scene) => {
    const material = new BABYLON.StandardMaterial('', scene)
    material.diffuseColor = new BABYLON.Color3(0.9, 0.3, 0.6);
    material.ambientColor = new BABYLON.Color3(0.9, 0.3, 0.6);
    // material.emissiveColor = new BABYLON.Color3(0.9, 0.3, 0.6);
    // material.specularColor = BABYLON.Color3.Black();
    return material
}

type Letter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
const getLetterString = (letter: Letter) => {
    switch (letter.toString()) {
        case'A':
            return `
...###...
..##.##..
.##...##.
##.....##
#########
##.....##
##.....##
`
        case 'B':
            return `
########.
##.....##
##.....##
########.
##.....##
##.....##
########.
`
        case 'C':
            return `
.######.
##....##
##......
##......
##......
##....##
.######.
`
        case 'D':
            return `
########.
##.....##
##.....##
##.....##
##.....##
##.....##
########.
`
        case 'E':
            return `
########
##......
##......
######..
##......
##......
########
`
        case 'F':
            return `
########
##......
##......
######..
##......
##......
##......
`
        case 'G':
            return `
.######..
##....##.
##.......
##...####
##....##.
##....##.
.######..
`
        case 'H':
            return `
##.....##
##.....##
##.....##
#########
##.....##
##.....##
##.....##
`
        case 'I':
            return `
####
.##.
.##.
.##.
.##.
.##.
####
`
        case 'J':
            return `
......##
......##
......##
......##
##....##
##....##
.######.
`
        case 'K':
            return `
##....##
##...##.
##..##..
#####...
##..##..
##...##.
##....##
`
        case 'L':
            return `
##......
##......
##......
##......
##......
##......
########
`
        case 'M':
            return `
##.....##
###...###
####.####
##.###.##
##.....##
##.....##
##.....##
`
        case 'N':
            return `
##....##
###...##
####..##
##.##.##
##..####
##...###
##....##
`
        case 'O':
            return `
.#######.
##.....##
##.....##
##.....##
##.....##
##.....##
.#######.
`
        case 'P':
            return `
########.
##.....##
##.....##
########.
##.......
##.......
##.......
`
        case 'Q':
            return `
.#######.
##.....##
##.....##
##.....##
##..##.##
##....##.
.#####.##
`
        case 'R':
            return `
########.
##.....##
##.....##
########.
##...##..
##....##.
##.....##
`
        case 'S':
            return `
.######.
##....##
##......
.######.
......##
##....##
.######.
`
        case 'T':
            return `
########
...##...
...##...
...##...
...##...
...##...
...##...
`
        case 'U':
            return `
##.....##
##.....##
##.....##
##.....##
##.....##
##.....##
.#######.
`
        case 'V':
            return `
##.....##
##.....##
##.....##
##.....##
.##...##.
..##.##..
...###...
`
        case 'W':
            return `
##......##
##..##..##
##..##..##
##..##..##
##..##..##
##..##..##
.###..###.
`
        case 'X':
            return `
##.....##
.##...##.
..##.##..
...###...
..##.##..
.##...##.
##.....##
`
        case 'Y':
            return `
##....##
.##..##.
..####..
...##...
...##...
...##...
...##...
`
        case 'Z':
            return `
########
.....##.
....##..
...##...
..##....
.##.....
########
`
        case '0':
            return `
..#####..
.##...##.
##...#.##
##..#..##
##.#...##
.##...##.
..#####..
            `
        case '1':
            return `
..##..
####..
..##..
..##..
..##..
..##..
######
            `
        case '2':
            return `
.#######.
##.....##
.......##
.#######.
##.......
##.......
#########
            `
        case '3':
            return `
.#######.
##.....##
.......##
.#######.
.......##
##.....##
.#######.
            `
        case '4':
            return `
##.......
##....##.
##....##.
##....##.
#########
......##.
......##.
            `
        case '5':
            return `
########
##......
##......
#######.
......##
##....##
.######.
            `
        case '6':
            return `
.#######.
##.....##
##.......
########.
##.....##
##.....##
.#######.
            `
        case '7':
            return `
########
##....##
....##..
...##...
..##....
..##....
..##....
            `
        case '8':
            return `
.#######.
##.....##
##.....##
.#######.
##.....##
##.....##
.#######.
            `
        case '9':
            return `
.#######.
##.....##
##.....##
.########
.......##
##.....##
.#######.
            `
        default:
            return ''
    }
}


export default LetterObj