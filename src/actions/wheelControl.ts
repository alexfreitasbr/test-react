import { SliceType } from "components/model";

export class WheelSpin {

    slices: SliceType[] = [];
    speed: number = 0;
    lastAngleLap: number = 0;
    spinThooth: () => void = () => { };
    wheelRef: React.RefObject<any> | undefined;
    lapQtd: number = 0;
    fullTurns: number = 0;
    totalAngle = 0
    countParts = 0

    constructor(slices: SliceType[], speed: number, lapQtd: number, lastAngleLap: number, spinThooth: () => void, wheelRef: React.RefObject<any>) {
        this.slices = slices
        this.speed = speed
        this.lapQtd = lapQtd
        this.lastAngleLap = lastAngleLap
        this.spinThooth = spinThooth
        this.wheelRef = wheelRef
    }

    startSpin() {
        this.spinThooth()
        this.controlSpin()
    }

    controlSpin() {
        if (this.lapQtd > this.fullTurns) {
            this.fullTurns++
            this.countParts = 0
            this.controlRotate360()
            return
        }
    }

    controlRotate360() {
        if (this.countParts < this.slices.length) {
            this.rotatePart()
        }else{
            this.controlSpin()
        }
    }

    rotatePart() {
        let angle = 0
        const looping = setInterval(() => {
            angle++
            if (angle <= this.slices[this.countParts].angle) {
                this.totalAngle++
                this.rotate(this.totalAngle)
                if (angle + 3 === this.slices[this.countParts].angle) {
                    this.spinThooth()
                }
            } else {
                this.countParts++
                this.controlRotate360()
                clearInterval(looping)
            }
        }, this.speed)
    }

    rotate(angle: number) {
        if (this.wheelRef && this.wheelRef.current) {
            // this.wheelRef.current.style.transform = `rotate(${angle}deg)`;
        }
    }
} 