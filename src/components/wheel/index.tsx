import Canvas from "../canvas";
import { useContext, useEffect, useMemo, useRef } from 'react';
import { Container } from './style'
import WhellContext from "context/wheel";
import { WheelCreate } from "actions/WheelCreate";
import { layout } from "components/wheelSetUp";


export function Wheel() {
    const whell = useContext(WhellContext)
    const wheelRef = useRef<HTMLDivElement>(null);

    const wheelCreate = new WheelCreate();
    const slices = wheelCreate.getSlice();


    useEffect(() => {
        if (whell.control.slices.length === 0) whell.setControl({ ...whell.control, slices: slices })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slices])


    useEffect(() => {
        if (whell.control.lapQtd === 0) return
        console.log(whell.control.lapQtd)
    }, [whell.control.lapQtd])


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


