export class ToothControl {
    tooth: React.RefObject<any> | undefined;
    angle: number = 0;
   
    constructor(toothRef: React.RefObject<any>) {
        if (toothRef) {
            this.tooth = toothRef
        }
    }

    rotate(angle: number) {
        console.log(angle)
        if (this.tooth?.current) {
            this.tooth.current.style.transform = `rotate(${angle}deg)`;
        }
    }

}