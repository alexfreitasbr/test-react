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
    slices:SliceType[]
    toothSpeed:number
    wheelSpeed:number
    slowingDown:number
  }

  export type SliceType = {
    angle: number,
    bgColor: string,
    textColor: string,
    label: string,
    fontSize: number
  }
