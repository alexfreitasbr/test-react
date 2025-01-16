import  { useEffect, useRef } from 'react'
import { WheelDefinition } from '../data';
import { PieceType } from 'components/model';

type WheelProps = {
    wheelDiameter:number
}
export default function Canvas({wheelDiameter}: WheelProps) {

    const canvasRef = useRef<HTMLCanvasElement>(null)

    const data:PieceType[] = [...WheelDefinition.pieces].reverse()


    const canvasSize = wheelDiameter;
    const middle = {
        x: canvasSize / 2,
        y: canvasSize / 2,
        radius: canvasSize / 2,
    };

    const total = data.reduce((acc, slice) => acc + slice.value, 0);
    const part = 360 / total;


    const slices = data.map((slice) => {
        const angle = ((slice.value * part)/ 360) * (2 * Math.PI);
        return {
            angle: angle,
            bgColor: slice.bgColor,
            textColor: slice.textColor,
            label: slice.label,
        }
    })


    useEffect(() => {
        const draw = (ctx: CanvasRenderingContext2D) => {

            ctx.canvas.width = canvasSize;
            ctx.canvas.height = canvasSize;
            //background
            // ctx.beginPath();
            // ctx.arc(middle.x, middle.y, middle.radius, 0, 2 * Math.PI);
            // ctx.closePath();
            // ctx.stroke();
            // ctx.fillStyle = "black";
            // ctx.fill();
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
                    previousRadian + slice.angle,
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
                ctx.font = "36px Arial";
                ctx.rotate(previousRadian + slice.angle/2 + slice.angle *.09);
                ctx.fillText(slice.label, (middle.radius - 20) - ctx.measureText(slice.label).width, 0);
                ctx.restore();

                previousRadian += slice.angle;
            }


            previousRadian = 0;

            for (const slice of slices) {
                const lastX = middle.x + (middle.radius -8) *Math.cos(previousRadian + slice.angle);
                const lastY  = middle.y + (middle.radius -8) *Math.sin(previousRadian + slice.angle);
                ctx.beginPath();
                
                ctx.arc(lastX, lastY, 8, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.lineWidth = 2;
                ctx.strokeStyle = "black";
                ctx.stroke();

                previousRadian += slice.angle;
            }
        }
        
        const canvas = canvasRef.current
        if (canvas) {
            const context = canvas.getContext('2d')
            if (context) {
                draw(context)
            }
        }
    }, [middle.radius, middle.x, middle.y, slices, canvasSize])
// }, [angulo, data, fontRotate, fontSize, middle.radius, middle.x, middle.y])

    return <canvas ref={canvasRef}/>
}