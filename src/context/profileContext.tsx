import { createContext, useState } from "react"
import { SearchOtions, SearchInput, SearcheStatus } from 'model/Serch'
import { searchInitialInput, searchInitialOtions,searchInitialStatus } from "../constants/search"

interface profileProps {
    children: any
}

const ProfileContext = createContext({} as any)
export default ProfileContext

export function ProfileProvider({ children }: profileProps) {
    
    const [searchType, setSearchType] = useState<SearchOtions>(searchInitialOtions)
    const [searchInput, setSearchInput] = useState<SearchInput>(searchInitialInput)
    const [searchStatus, setSearchStatus] = useState<SearcheStatus>(searchInitialStatus)

    return (
        <ProfileContext.Provider value={{ searchType, setSearchType, searchInput, setSearchInput, searchStatus, setSearchStatus }}>
            {children}
        </ProfileContext.Provider>
    )
}