export function WheelControl() {


    return <p>ssss</p>

}



// import { useRef } from "react";
// import { Wheel } from 'components/wheel'
// import { Container, ThootContainer } from './style'
// import { Logo } from 'components/logo'
// import { Slider } from 'components/slider'
// import { WheelDefinition } from "../data";
// import { PieceType } from "components/model";
// type WheelContainerProps = {
//     width?: number
// }

// export function WheelControl({ width = 520 }: WheelContainerProps) {

//     const wheelRef = useRef<HTMLDivElement>(null);
//     const toothRef = useRef<HTMLDivElement>(null);

//     const backGroundGradient = "linear-gradient(-55deg, rgba(143,176,223,1) 0%, rgba(182,202,228,1) 82%, rgba(199,210,227,1) 100%)"

//     const data: PieceType[] = WheelDefinition.pieces
//     const total = data.reduce((acc, piece) => acc + piece.value, 0);
//     let speed = 5
//     let WheelAngle = 0;
//     let piecesSum = 0
    

//     const pieces = data.map((piece) => {
//         const angle = (360 / total) * piece.value;
//         piecesSum += angle
//         return piecesSum;
//     })

//     function setSpeed() {
//         speed += 20 / totalTouch
//     }

//     let totalTouch = 0

//     let totalLaps = 0
//     let totalLeped = 0

//     function startLaps(laps: number) {

//         totalLaps = laps/3
//         totalTouch = Math.floor(totalLaps) * pieces.length
//         for (let i = 0; i <= pieces.length; i++) {

//             if (WheelDefinition.lastLapAngle > pieces[i]) {
//                 totalTouch++
//             } else {
//                 break
//             }
//         }

//         spin()
//     }

//     let last = false
//     function spin() {
//         if (totalLaps > totalLeped) {
//             totalLeped++
//             rotate360()
//             return
//         }
//         if (!last) {
//             last = true
//             rotate360()
//         }
//     }

//     let countPieces = 0

//     function rotate360() {
//         if (countPieces >= pieces.length) {
//             WheelAngle = 0
//             rotate(WheelAngle)
//             countPieces = 0
//             spin()
//             return
//         }
//         rotatePiece(pieces[countPieces])
//     }

//     function rotatePiece(pieceAngle: number) {
//         countPieces++
//         const looping = setInterval(() => {
//             WheelAngle += 1
//             if (WheelAngle >= WheelDefinition.lastLapAngle && last) {
//                 clearInterval(looping);
//                 return
//             }
//             if (WheelAngle >= pieceAngle) {
//                 rotate360()
//                 setSpeed()
//                 clearInterval(looping);
//                 return
//             }
//             rotate(WheelAngle)

//             const anglerest = pieceAngle - WheelAngle

//             if (Math.floor(anglerest) === 4) {
//                 startTooth()
//             }
//         }, speed)
//     }


//     function rotate(angle: number) {
//         if (wheelRef.current) {
//             wheelRef.current.style.transform = `rotate(${angle}deg)`;
//         }
//     }

    
//     function startTooth() {
//         let thoothAngle = -29
//         let angle = -5
//         rotateTooth(thoothAngle)
//         const looping = setInterval(() => {
//             thoothAngle += angle

//             if (angle < 0) {
//                 if (thoothAngle < -40) {
//                     angle = 5
//                     setTimeout(() => { angle = 5 }, speed * 3)
//                 }
//             } else {
//                 if (thoothAngle > 29) {
//                     rotateTooth(29)
//                     clearInterval(looping);
//                     return
//                 }
//             }

//             rotateTooth(thoothAngle)

//         }, speed)
//     }

//     function rotateTooth(angle: number) {
//         if (toothRef.current) {
//             toothRef.current.style.transform = `rotate(${angle}deg)`;
//         }
//     }

//     function handleStart(laps: number) {
//         console.log(laps)
//         startLaps(laps)
//         rotateTooth(-15)
//     }
    

//     return <>
//         <ThootContainer className="absolute top-[-30px] flex justify-center w-full z-10 ">
//             <div ref={toothRef} className="ref" >
//                 <div className="tooth"> <img src="/thoot.png" alt="" /></div>
//             </div>
//         </ThootContainer>
//         <Container width={width} backGroundGradient={backGroundGradient}>
//             <div className="base">
//                 <div className="frame"></div>
//             </div>
//             <div ref={wheelRef} >
//                 <Wheel wheelDiameter={400} />
//             </div>

//             <Logo backGroundGradient={backGroundGradient}><img src="/yetzpay.png" alt="Logo" /></Logo>

//         </Container>
//         <Slider start={handleStart} />
//     </>


// }