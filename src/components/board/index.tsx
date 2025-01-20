import { Tooth } from "components/assets";
import { Slider } from "components/slider";
import { Wheel } from "components/wheel";
// import { WheelControl } from "components/wheelControl";
import { layout } from "components/wheelSetUp";
import { useRef, useState } from "react";

export function Board() {
    const [disabled, setDisabled] = useState(false)
    // const gradient = layout.gradient

    const toothRef = useRef<HTMLDivElement>(null);
    const wheelRef = useRef<HTMLDivElement>(null);


    function handleStart(laps: number) {
        console.log(laps)
        // startLaps(laps)
        // rotateTooth(-15)
    }

    return <>
        <div ref={toothRef} className="ref" >
            <div className="tooth"> <Tooth /></div>
        </div>
        <div ref={wheelRef} >
            <Wheel wheelDiameter={layout.width} />
        </div>
        <Slider start={handleStart} disabled={disabled} setDisabled={setDisabled} />
    </>


    // <WheelControl />
}