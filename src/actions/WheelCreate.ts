import { WheelDefinition } from 'components/data';
import { PieceType, SliceType } from 'components/model';

export class WheelCreate {
    data: PieceType[] = []
    total: number = 0
    part: number = 0
    slices: SliceType[] = []

    sum: number = 0

    constructor() {
        this.data = [...WheelDefinition.pieces].reverse()
        this.total = this.data.reduce((acc, slice) => acc + slice.value, 0);
        this.part = 360 / this.total;
    }

    getSlice(){

        this.slices = this.data.map((slice) => {
            const angle = Math.floor(slice.value * this.part) ;
            this.sum += angle;
            return {
                angle: angle,
                bgColor: slice.bgColor,
                textColor: slice.textColor,
                label: slice.label,
                fontSize: slice.fontSize,
                deg:0
            }
        })

        let rest= 360 - this.sum;

        for (let i = 0; i < rest; i++) {
            this.slices[i] = {...this.slices[i] , angle :this.slices[i].angle + 1};
        }
    
        this.slices = this.slices.map((slice) => {
            const deg = (slice.angle * (1/360)) * (2 * Math.PI);
            
            return {
                ...slice,
                deg
            }
        })
        return this.slices
    }
}