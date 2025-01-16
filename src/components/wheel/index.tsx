import Canvas from "../canvas";
import { useMemo } from 'react';
import { Container} from './style'


type WheelProps = {
    wheelDiameter:number
}

export function Wheel({wheelDiameter}:WheelProps) {

    const MemoizedCanvas = useMemo(
        () => (
            <Canvas wheelDiameter={wheelDiameter}/>
        ),
        [wheelDiameter],
    );

    return <Container width={wheelDiameter} >
        {MemoizedCanvas}
    </Container>
}


