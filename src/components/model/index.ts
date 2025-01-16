export type PieceType = {
    label: string,
    textColor: string,
    bgColor: string,
    value: number,
  }

  export type WheelType = {
    pieces:PieceType[]
    lastLapAngle:number
  };