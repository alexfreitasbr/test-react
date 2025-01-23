import Canvas from "../canvas";
import { useContext, useEffect, useMemo, useRef } from 'react';
import { Container } from './style'
import WhellContext from "context/wheel";
import { WheelCreate } from "actions/WheelCreate";
import { layout } from "components/wheelSetUp";
import { WheelDefinition } from 'components/data';
import { WheelSpin } from "actions/wheelControl";

export function Wheel() {
    const whell = useContext(WhellContext)
    const wheelRef = useRef<HTMLDivElement>(null);

    const wheelCreate = new WheelCreate();
    const slices = wheelCreate.getSlice();

    useEffect(() => {
        if (whell.control.slices.length === 0) whell.setControl({ ...whell.control, slices: slices })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slices])

    const wheelControl = new WheelSpin(whell.control.slices, whell.control.speed, whell.control.lapQtd, WheelDefinition.lastLapAngle, handleWheel, wheelRef)

    useEffect(() => {
        if (!whell.control.spin) return
        const wheelControl = new WheelSpin(whell.control.slices, whell.control.speed, whell.control.lapQtd, WheelDefinition.lastLapAngle, handleWheel, wheelRef)
        wheelControl.startSpin()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [whell.control.spin])

    function handleWheel() {
        wheelControl.speed = whell.control.speed *= 1.5 
        whell.setControl({ ...whell.control, speed: whell.control.speed *= 1.5 })
    }

    const MemoizedCanvas = useMemo(
        () => (
            <Canvas/>
        ),
        [],
    );

    return <Container ref={wheelRef} width={layout.width} >
        {MemoizedCanvas}
    </Container>
}


