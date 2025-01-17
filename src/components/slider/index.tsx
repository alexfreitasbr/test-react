
import { Container} from './style'
import { useRef} from "react";
type SliderContainerProps = {
    width?: number
    sliderDiameter?: number
    start: (laps:number) => void
}

export function Slider({width=400, sliderDiameter=30, start}:SliderContainerProps){
    
    const backGroundGradient = "linear-gradient(-55deg, rgba(143,176,223,1) 0%, rgba(182,202,228,1) 82%, rgba(199,210,227,1) 100%)"
    const launchRef = useRef<HTMLDivElement>(null);



    function drop(ev: React.DragEvent<HTMLDivElement>) {

        let xPosition = ev.clientX > width ? width - sliderDiameter : ev.clientX
        
        moveSlider(xPosition)
        start((xPosition + sliderDiameter) / (width) * 10)
        const looping = setInterval(() => {
            xPosition -= (xPosition / 10);
            moveSlider(xPosition)
            if (xPosition < 1) {
                clearInterval(looping);
            }
        }, 1)
    }

    function move(ev: React.DragEvent<HTMLDivElement>) {
        let xPosition = ev.clientX
        if (xPosition < startDragPos) xPosition = startDragPos
        if (xPosition > startDragPos + width - sliderDiameter ) xPosition =  startDragPos + width - sliderDiameter 
        moveSlider(xPosition - startDragPos)
    }
    let startDragPos = 0;

    function drag(ev: React.DragEvent<HTMLDivElement>) {
        startDragPos = ev.clientX
    }


    function moveSlider(xPosition: number) {
        if (launchRef.current) {
            launchRef.current.style.left = `${xPosition}px`;
        }
    }

    return <Container width={width} backGroundGradient={backGroundGradient}>
                <div className='draggable' ref={launchRef}></div>
                <div className='draggableDummy' draggable="true" onDragEnd={drop} onDragStart={drag} onDrag={move}></div>
            </Container>
}