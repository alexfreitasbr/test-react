
import { useRef, useState } from "react";
import { Wheel } from 'components/wheel'
import { Container } from './style'
import { Logo } from 'components/logo'
import { Slider } from 'components/slider'
import { WheelDefinition } from "../data";
import { PieceType } from "components/model";
type WheelContainerProps = {
    width?: number
}

export function WheelControl({ width = 520 }: WheelContainerProps) {


    const wheelRef = useRef<HTMLDivElement>(null);
    const toothRef = useRef<HTMLDivElement>(null);

    const backGroundGradient = "linear-gradient(-55deg, rgba(143,176,223,1) 0%, rgba(182,202,228,1) 82%, rgba(199,210,227,1) 100%)"





    const data: PieceType[] = WheelDefinition.pieces
    const total = data.reduce((acc, piece) => acc + piece.value, 0);
    let speed = 5


    let WheelAngle = 0;

    let piecesSum = 0

    const pieces = data.map((piece) => {
        const angle = (360 / total) * piece.value;
        piecesSum += angle
        return piecesSum;
    })

    function setSpeed() {
        speed += 20 / totalTouch
    }

    let totalTouch = 0

    let totalLaps = 0
    let totalLeped = 0

    function startLaps(laps: number) {

        totalLaps = laps
        totalTouch = Math.floor(totalLaps) * pieces.length
        for (let i = 0; i <= pieces.length; i++) {

            if (WheelDefinition.lastLapAngle > pieces[i]) {
                totalTouch++
            } else {
                break
            }
        }

        spin()
    }

    let last = false
    function spin() {
        if (totalLaps > totalLeped) {
            totalLeped++
            rotate360()
            return
        }
        if (!last) {
            last = true
            rotate360()
        }
        
    }

    let countPieces = 0

    function rotate360() {
        if (countPieces >= pieces.length) {
            WheelAngle = 0
            rotate(WheelAngle)
            countPieces = 0
            spin()
            return
        }
        rotatePiece(pieces[countPieces])
    }

    function rotatePiece(pieceAngle: number) {
        countPieces++
        const looping = setInterval(() => {
            WheelAngle += 1
            if(WheelAngle >= WheelDefinition.lastLapAngle && last){ 
                clearInterval(looping);
                return
            }
            if (WheelAngle >= pieceAngle) {
                rotate360()
                setSpeed()
                clearInterval(looping);
                return
            }
            rotate(WheelAngle)

            const anglerest = pieceAngle - WheelAngle

            if (Math.floor(anglerest) === 4) {
                startTooth()
            }
        }, speed)
    }


    function rotate(angle: number) {
        if (wheelRef.current) {
            wheelRef.current.style.transform = `rotate(${angle}deg)`;
        }
    }
    function startTooth() {
        let thoothAngle = -61
        let angle = -15

        const looping = setInterval(() => {
            thoothAngle += angle

            if (angle < 0) {
                if (thoothAngle < -60) {
                    angle = 0
                    setTimeout(() => { angle = 20 }, speed * 3)
                }
            } else {
                if (thoothAngle > 0) {
                    rotateTooth(0)
                    clearInterval(looping);
                    return
                }
            }

            rotateTooth(thoothAngle)

        }, speed)
    }

    function rotateTooth(angle: number) {
        if (toothRef.current) {
            toothRef.current.style.transform = `rotate(${angle}deg)`;
        }
    }








    function handleStart(laps: number) {
        console.log(laps)
        startLaps(laps)
        // startTooth()
    }


    return <>
        <Container width={width} backGroundGradient={backGroundGradient}>
            <div className="base">
                <div className="frame"></div>
            </div>
            <div ref={wheelRef} >
                <Wheel wheelDiameter={400} />
            </div>
            
            <Logo backGroundGradient={backGroundGradient}><img src="/yetzpay.png" alt="Logo" /></Logo>

        </Container>
        <Slider start={handleStart}/>
    </>


}