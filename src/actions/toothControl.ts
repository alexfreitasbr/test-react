import { layout } from "components/wheelSetUp";

export class ToothControl {
    tooth: React.RefObject<any> | undefined;
    angle: number = 0;
    constructor(toothRef: React.RefObject<any>) {
        if (toothRef) {
            this.tooth = toothRef
        }
    }

    spin(speed: number) {
        this.angle = 0
        let amount = -1
        const looping = setInterval(() => {
            this.angle += amount
            this.rotate(this.angle)

            if (this.angle < -25) {
                setTimeout(() => { amount = 2 }, 150)
            } else {
                if (this.angle >= 0) {
                    this.angle = 0
                    this.rotate(this.angle)
                    clearInterval(looping);
                }
            }
        }, 1)
    }

    rotate(angle: number) {
        if (this.tooth?.current) {
            this.tooth.current.style.transform = `rotate(${angle}deg)`;
            this.angle = angle
        }
    }

}