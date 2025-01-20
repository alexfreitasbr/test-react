import { Tooth } from "components/assets";
import { Slider } from "components/slider";
import { Wheel } from "components/wheel";
import { layout } from "components/wheelSetUp";
import { WhellProvider } from "context";

export function Board() {
    return <WhellProvider>
        <div className="ref" >
            <div className="tooth"> <Tooth /></div>
        </div>
        <div >
            <Wheel wheelDiameter={layout.width} />
        </div>
        <Slider/>
    </WhellProvider>
}