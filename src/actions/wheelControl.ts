import { SliceType } from "components/model";

export class WheelSpin {

    slices: SliceType[] = [];
    speed: number = 0;
    lastAngleLap: number = 0;
    changePart: (speed: number) => void ;
    wheelRef: React.RefObject<any> | undefined;
    lapQtd: number = 0;
    fullTurns: number = 0;
    totalAngle = 0
    countParts = 0
    touches= 0
    countTouches= 0

    constructor( lastAngleLap: number, changePart: (speed: number) => void, wheelRef: React.RefObject<any>) {

        this.lastAngleLap = lastAngleLap
        this.changePart = changePart
        this.wheelRef = wheelRef
    }

    startSpin(slices: SliceType[], speed: number, lapQtd: number,touches:number) {
        this.slices = slices.reverse()
        this.speed = speed
        this.lapQtd = lapQtd
        this.changePart(this.speed)
        this.controlSpin()
        this.touches = touches
        this.countTouches = 80 - touches
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
                    this.speed =  (1 - Math.sqrt(1 - Math.pow(this.countTouches /100, 2.5)))*100
                    this.countTouches ++
                    console.log(this.speed, this.countTouches)
                    this.changePart(this.speed)
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
            this.wheelRef.current.style.transform = `rotate(${angle}deg)`;
        }
    }
}