import Canvas from "../canvas";
import { useContext, useEffect, useMemo, useRef } from 'react';
import { Container } from './style'
import WhellContext from "context/wheel";
import { WheelCreate } from "actions/WheelCreate";
import { layout } from "components/wheelSetUp";


export function Wheel() {
    const whellContext = useContext(WhellContext)
    const wheelRef = useRef<HTMLDivElement>(null);

    const wheelCreate = new WheelCreate();
    const slices = wheelCreate.getSlice();


    useEffect(() => {
        if (whellContext.move.slices.length === 0) whellContext.setMove({ ...whellContext.move, slices: slices })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slices])


    useEffect(() => {
        if (whellContext.move.lapQtd === 0) return
        console.log(whellContext.move.lapQtd)
    }, [whellContext.move.lapQtd])


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


