import { Slider } from "components/slider";
import { Tooth } from "components/tooth";
import { Wheel } from "components/wheel";
import { WhellProvider } from "context/wheel";
import { Container } from "./style";

export function Board() {
    return <WhellProvider>
                <Container>
                    <Tooth />
                    <Wheel />
                    <Slider />
                </Container>
            </WhellProvider>
}