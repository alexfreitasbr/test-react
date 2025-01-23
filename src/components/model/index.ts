export type PieceType = {
    label: string,
    textColor: string,
    bgColor: string,
    value: number,
    fontSize: number
  }

  export type WheelType = {
    pieces:PieceType[]
    lastLapAngle:number
  };

  export type WheelProviderType ={
    lapQtd:number
    slices:PieceType[]
    wheelSpeed:number
    touches:number
    lastLapAngle:number
    spin:boolean
    speed:number
  }

  export type SliceType = {
    angle: number,
    deg: number,
    bgColor: string,
    textColor: string,
    label: string,
    fontSize: number
  }
