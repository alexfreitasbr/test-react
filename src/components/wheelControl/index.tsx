
import { Wheel } from 'components/wheel'
import { Container} from './style'
import { Logo } from 'components/logo'

type WheelContainerProps = {
    width?: number
}

export function WheelControl({width=520}:WheelContainerProps){
    
    const backGroundGradient = "linear-gradient(-55deg, rgba(143,176,223,1) 0%, rgba(182,202,228,1) 82%, rgba(199,210,227,1) 100%)"
    
    return <Container width={width} backGroundGradient={backGroundGradient}>
                <div className="base">
                    <div className="frame"></div>
                </div>
                <Wheel wheelDiameter={400}/>
                <Logo backGroundGradient={backGroundGradient}><img src="/yetzpay.png" alt="Logo" /></Logo>
            </Container>
}