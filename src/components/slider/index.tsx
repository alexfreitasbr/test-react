
import { Container } from './style'
import { useRef, useState } from "react";
import { layout } from "components/wheelSetUp";
import { Launcher } from 'actions/Launcher';
import { useContext } from "react"
import WhellContext from 'context/wheel';

export function Slider() {
    const [disabled, setDisabled] = useState(false)
    const whell = useContext(WhellContext)

    const launchRef = useRef<HTMLDivElement>(null);
    const sliderBarRef = useRef<HTMLDivElement>(null);

    const launcher = new Launcher(launchRef)

    function drop(ev: React.DragEvent<HTMLDivElement>) {
        const laps = launcher.drop()
        whell.setControl({ ...whell.control, lapQtd: laps })
        launcher.reset()
        setDisabled(true)
    }

    function move(ev: React.DragEvent<HTMLDivElement>) {
        launcher.move(ev.clientX)
    }

    function drag(ev: React.DragEvent<HTMLDivElement>) {
        launcher.drag(ev.clientX)
    }

    return <Container ref={sliderBarRef} width={layout.width}>
        <div className='draggable' ref={launchRef}></div>
        {!disabled && <div className='draggableDummy' draggable="true" onDragEnd={drop} onDragStart={drag} onDrag={move}></div>}
    </Container>
}