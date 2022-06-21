import * as BABYLON from "babylonjs";

export default (canvasEl: HTMLCanvasElement) => {
    const soundBounceFilePathArr = ["/sound/bounce1.mp3", "/sound/bounce2.mp3", "/sound/bounce3.mp3"]
    const soundBounceArr: BABYLON.Sound[] = []
    soundBounceFilePathArr.forEach(filePath => {
        soundBounceArr.push(new BABYLON.Sound(filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.')), filePath, null, null, {}))
    })
    canvasEl.addEventListener('click', () => {
        // soundBounceArr[Math.round(Math.random() * 2)].play()
        soundBounceArr[0].play()
    })
}