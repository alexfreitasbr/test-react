import { WheelProviderType} from "components/model"
import { createContext, useState } from "react"

interface WhellProps {
    children: React.ReactNode
}

const WhellContext = createContext({} as any)
export default WhellContext

const userInitialValue: WheelProviderType = {
    lapQtd: 0,
    slices: [],
    wheelSpeed: 0,
    touches: 0,
    lastLapAngle: 0,
    spin: false,
    speed:0,
    ToothAngle: 0,
}

export function WhellProvider({ children }: WhellProps) {

    const [control, setControl] = useState<WheelProviderType>(userInitialValue)

    return (
        <WhellContext.Provider value={{ control, setControl }}>
            {children}
        </WhellContext.Provider>
    )
}