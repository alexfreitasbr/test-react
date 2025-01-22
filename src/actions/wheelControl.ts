import { SliceType } from "components/model";

export class WheelSpin {

    slices:SliceType[] = [];
    speed:number = 0;
    lastAngleLap:number = 0;
    spinThooth: () => void = () => {};
    wheelRef:  React.RefObject<any> | undefined;
    
    constructor(speed: number, slices: SliceType[],  lastAngleLap: number, spinThooth:()=>void,wheelRef: React.RefObject<any>) {
        this.slices = slices
        this.speed = speed
        this.lastAngleLap = lastAngleLap
        this.spinThooth = spinThooth
        this.wheelRef = wheelRef
    }

    spin() {
        this.spinThooth()
    }
} 