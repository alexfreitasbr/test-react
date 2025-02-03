import { SliceType } from "components/model";

export class WheelSpin {

    slices: SliceType[] = [];
    speed: number = 0;
    lastAngleLap: number = 0;
    changeSpeed: (speed: number) => void ;
    rotateTooth: (angle: number | null) => void;
    wheelRef: React.RefObject<any> | undefined;
    lapQtd: number = 0;
    fullTurns: number = 0;
    totalAngle = 0
    countParts = 0
    touches= 0
    countTouches= 0


    


    constructor( lastAngleLap: number, changeSpeed: (speed: number) => void, rotateTooth: (angle: number | null) => void, wheelRef: React.RefObject<any>) {

        this.lastAngleLap = lastAngleLap
        this.changeSpeed = changeSpeed
        this.wheelRef = wheelRef
        this.rotateTooth = rotateTooth
    }

    startSpin(slices: SliceType[], speed: number, lapQtd: number,touches:number) {
        this.slices = slices.reverse()
        this.speed = speed
        this.lapQtd = lapQtd
        this.changeSpeed(this.speed)
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
                const rest = this.slices[this.countParts].angle - angle
                if (rest <= 5 ) {
                    this.rotateTooth(-25 + (5 * rest))
                }
                if (angle <= 4) {
                    this.rotateTooth(angle*10 - 40)
                }
            } else {
                this.countTouches ++
                this.speed =  (1 - Math.sqrt(1 - Math.pow(this.countTouches /100, 2.5)))*100
                this.changeSpeed(this.speed)
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