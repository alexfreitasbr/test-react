import { layout } from "components/wheelSetUp";

export const Launcher = class {
    launcher: React.RefObject<any> | undefined;
    startDragPos: number = 0
    currentPosition: number = 0
    disabled: boolean = false

    constructor(launcherRef: React.RefObject<any>) {
        if (launcherRef) {
            this.launcher = launcherRef
        }
    }

    move(xPos: number) {
        if (xPos === 0 || this.disabled) return
        this.currentPosition = xPos - this.startDragPos

        if (xPos < this.startDragPos) this.currentPosition = 0

        if (xPos > this.startDragPos + layout.width - layout.sliderDiameter) this.currentPosition = layout.width - layout.sliderDiameter

        this.moveSlider()

    }
    public drag(xPos: number) {
        this.startDragPos = xPos
    }

    public drop() {

        if (this.disabled) return
        this.disabled = true

        // start((xPosition + layout.sliderDiameter) / (layout.width) * 10)
        const looping = setInterval(() => {
            this.currentPosition -= (this.currentPosition / 10);
            this.moveSlider()
            if (this.currentPosition < 1) {
                this.currentPosition = 0
                clearInterval(looping);
            }
        }, 1)
    }

    public moveSlider() {
        if (this.launcher?.current) {
            this.launcher.current.style.left = `${this.currentPosition}px`;
        }
    }
}