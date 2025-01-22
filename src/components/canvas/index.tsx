import  { useContext, useEffect, useRef } from 'react'
import WhellContext from 'context/wheel';
import { layout } from "components/wheelSetUp";


export default function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const whell = useContext(WhellContext)

    useEffect(() => {
        if (whell.control.slices.lendth === 0) return

        const canvasSize = layout.width
        const middle = {
            x: canvasSize / 2,
            y: canvasSize / 2,
            radius: canvasSize / 2,
        };
    
        const slices = whell.control.slices;
        const draw = (ctx: CanvasRenderingContext2D) => {

            ctx.canvas.width = canvasSize;
            ctx.canvas.height = canvasSize;
            //background
            ctx.beginPath();
            ctx.arc(middle.x, middle.y, middle.radius, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle = "#888";
            ctx.fill();
            // //end of background

            let previousRadian = 0;
            for (const slice of slices) {
                ctx.beginPath();
                ctx.fillStyle = slice.bgColor;
                ctx.moveTo(middle.x, middle.y);
                //middle.radius - 2 is to add border between the background and the pie chart
                ctx.arc(
                    middle.x,
                    middle.y,
                    middle.radius - 2,
                    previousRadian,
                    previousRadian + slice.deg,
                    false
                );
                ctx.lineWidth = 2;
                // ctx.stroke();
                ctx.closePath();
                ctx.fill();
                // ctx.stroke();
                ctx.save();

                ctx.translate(middle.x, middle.y);
                ctx.fillStyle = slice.textColor;
                ctx.font = `bold ${slice.fontSize}px Arial`;
                ctx.rotate(previousRadian + slice.deg/2 + slice.deg *.09);
                ctx.fillText(slice.label, (middle.radius - 20) - ctx.measureText(slice.label).width, 0);
                ctx.restore();

                previousRadian += slice.deg;
            }

            previousRadian = 0;

            for (const slice of slices) {
                const lastX = middle.x + (middle.radius -5) *Math.cos(previousRadian + slice.deg);
                const lastY  = middle.y + (middle.radius -5) *Math.sin(previousRadian + slice.deg);
                ctx.beginPath();
                
                ctx.arc(lastX, lastY, 6, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fillStyle = "black";
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.strokeStyle = "#bbb";
                ctx.stroke();

                previousRadian += slice.deg;
            }
        }
        
        const canvas = canvasRef.current
        if (canvas) {
            const context = canvas.getContext('2d')
            if (context) {
                draw(context)
            }
        }
    }, [whell.control.slices])

    return <canvas ref={canvasRef}/>
}