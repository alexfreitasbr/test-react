import { SliceType } from "components/model";
import { layout } from "components/wheelSetUp";

export const Launcher = class {
    launcher: React.RefObject<any> | undefined;
    startDragPos: number = 0
    currentPosition: number = 0

    constructor(launcherRef: React.RefObject<any>) {
        if (launcherRef) {
            this.launcher = launcherRef
        }
    }

    move(xPos: number) {
        if (xPos === 0) return
        this.currentPosition = xPos - this.startDragPos
        if (xPos < this.startDragPos) this.currentPosition = 0
        if (xPos > this.startDragPos + layout.width - layout.sliderDiameter) this.currentPosition = layout.width - layout.sliderDiameter
        this.moveSlider()
    }

    drag(xPos: number) {
        this.startDragPos = xPos
    }

    drop() {
        return Math.floor((this.currentPosition) / (layout.width / 10) + 1)
    }

    reset() {
        const looping = setInterval(() => {
            this.currentPosition -= (this.currentPosition / 10);
            this.moveSlider()
            if (this.currentPosition < 1) {
                this.currentPosition = 0
                this.moveSlider()
                clearInterval(looping);
            }
        }, 1)
    }

    slowingDown(slices:SliceType[], lapQtd:number,lastLapAngle:number):number {
        let touch = slices.length * lapQtd
        let totalAngle  = 0
        for (let i = 0; i < slices.length; i++) {
            totalAngle += slices[i].angle
            if (totalAngle  < lastLapAngle) {
                touch ++
            }else{
                break
            }
        }
        return 1000/touch
    }

    moveSlider() {
        if (this.launcher?.current) {
            this.launcher.current.style.left = `${this.currentPosition}px`;
        }
    }
}