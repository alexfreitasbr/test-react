import Canvas from "../canvas";
import { useContext, useEffect, useMemo, useRef } from 'react';
import { Container } from './style'
import WhellContext from "context";
import { Construction } from "actions/Construction";


type WheelProps = {
    wheelDiameter: number
}

export function Wheel({ wheelDiameter}: WheelProps) {
    const whell = useContext(WhellContext)
    const wheelRef = useRef<HTMLDivElement>(null);

    const xxxx = new Construction();

    useEffect(() => {
        if(whell.move.lapQtd === 0)return
        console.log(whell.move.lapQtd)
    }, [whell.move.lapQtd])
    
    
    const MemoizedCanvas = useMemo(
        () => (
            <Canvas wheelDiameter={wheelDiameter} />
        ),
        [wheelDiameter],
    );

    return <Container ref={wheelRef} width={wheelDiameter} >
                {MemoizedCanvas}
            </Container>
}


