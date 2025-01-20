
import { Container} from './style'
import { useRef} from "react";
import { layout } from "components/wheelSetUp";
import { Launcher } from 'actions/Launcher';

type SliderContainerProps = {
    start: (laps:number) => void
    disabled: boolean
    setDisabled: (disabled: boolean) => void
}

    export function Slider({start, disabled, setDisabled}:SliderContainerProps){
    const launchRef = useRef<HTMLDivElement>(null);
    const sliderBarRef = useRef<HTMLDivElement>(null);

    const launcher = new Launcher(launchRef)

    function drop(ev: React.DragEvent<HTMLDivElement>) {
        launcher.drop()
    }

    function move(ev: React.DragEvent<HTMLDivElement>) {
        launcher.move(ev.clientX)

    }

    function drag(ev: React.DragEvent<HTMLDivElement>) {
        launcher.drag(ev.clientX)
    }

    return <Container ref={sliderBarRef} width={layout.width} backGroundGradient={layout.gradient}>
                <div className='draggable' ref={launchRef}></div>
               { !disabled && <div className='draggableDummy' draggable="true" onDragEnd={drop} onDragStart={drag} onDrag={move}></div>}
            </Container>
}