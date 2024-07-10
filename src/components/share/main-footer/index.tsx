
import { Logo } from 'assets/Logo'
import { Footer, Container, Info,Pipe } from './style'
export function MainFooter() {
    return <Footer>
        <Container>                        
            <Info>STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos reservados</Info>
            <Pipe/>
            <Logo size={84} color="black"/>
        </Container>
    </Footer>
}