
import { Container} from './style'

type WheelProps = {
    children?: React.ReactNode;
    backGroundGradient?: string;
}

export function Logo({children, backGroundGradient}:WheelProps){

    return <Container backGroundGradient={backGroundGradient}>
                {children}
            </Container>
}