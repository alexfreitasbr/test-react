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
    toothSpeed: 0,
    wheelSpeed: 0,
    slowingDown: 0
}

export function WhellProvider({ children }: WhellProps) {

    const [control, setControl] = useState<WheelProviderType>(userInitialValue)

    return (
        <WhellContext.Provider value={{ control, setControl }}>
            {children}
        </WhellContext.Provider>
    )
}