
type Colors = {
    gradient: {
        angle: number;
        start: string;
        middle: string;
        end: string;
    }   
}

export const colors: Colors={
    gradient:{
        angle:-55,
        start: "rgba(143,176,223,1)",
        middle: "rgba(182,202,228,1)",
        end: "rgba(199,210,227,1)"
    }
}


type Layout = {
    width: number;
    sliderDiameter: number;
    gradient : string;
}


export const layout:Layout ={
    width: 400,
    sliderDiameter: 30,
    gradient :  `linear-gradient(colors.gradient.angle}deg, $colors.gradient.start} 0%, $colors.gradient.middle} 82%, $colors.gradient.end} 100%)`
}