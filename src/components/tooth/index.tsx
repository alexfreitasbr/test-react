import { useContext, useEffect, useRef } from 'react';
import { ToothImg } from "components/assets";
import { ThootContainer } from "./style";
import { layout } from "components/wheelSetUp";
import { ToothControl } from 'actions/toothControl';
import WhellContext from 'context/wheel';

export function Tooth(){
    const toothRef = useRef<HTMLDivElement>(null);
    const toothControl = new ToothControl(toothRef);
    const whell = useContext(WhellContext)

    toothControl.rotate(-23)
    
    useEffect(() => {
        if(!whell.control.wheelSpeed) return
        toothControl.spin(whell.control.wheelSpeed)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [whell.control.wheelSpeed])

    return  <ThootContainer width={layout.width}>
                <div ref={toothRef}>
                    <ToothImg/>
                </div>
            </ThootContainer>
}
