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
    moveThoot:boolean 
  }