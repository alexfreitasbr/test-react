import { FormEvent, useState } from 'react'
import { useContext } from 'react'

import ProfileContext from 'context/profileContext'
import { Image } from 'components/share/image'
import { ReturnMessages } from 'util/returnMessages'
import { IconChevronDown, IconChevronLeft } from '@tabler/icons-react'
import { FilterIcon } from '../../assets/icons/filterIcon'
import { FilterContainer, SearshOpts, Decoration, DecorationLeft, Header, Main, Footer } from './style'

import { Form, Input, Button, FilterOpts, Opts, Label } from './style'

export function Filter() {

    const [input, setInput] = useState('')

    const profileContext = useContext(ProfileContext)

    function submitHandler(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
         profileContext.setSearchInput(input)
    }


    const placeholder =  profileContext.searchType === 'planets' ? ReturnMessages.placeHolderPlanet : ReturnMessages.placeHolderPeople

        if (!profileContext.searchStatus.loaded || profileContext.searchStatus.error || profileContext.searchStatus.empty || profileContext.searchStatus.loading) {

        return <FilterContainer>

            <Image loading={profileContext.searchStatus.loading} error={profileContext.searchStatus.error} empty={profileContext.searchStatus.empty} />
            <SearshOpts>
                <div>

                    <Header>
                        Descubra todas as informações sobre os Planetas da Saga Star Wars
                    </Header>
                    <Main>
                        <Form onSubmit={submitHandler}>
                            <p>
                                <Input type="text" id="search" value={input} placeholder={placeholder} onChange={(e) => setInput(e.target.value)} list="suggestions" />
                            </p>
                            < Button disabled={!input && true} type="submit">Pesquisar</ Button>
                        </Form>
                    </Main>
                    <Footer>
                        <FilterOpts>
                            <Label><FilterIcon width={18} />Filtros:</Label>
                            <div>
                                <Opts color={profileContext.searchType === 'planets' ? "yellow" : "white"}   disabled={profileContext.searchInput}  onClick={() => profileContext.setSearchType("planets")}> {profileContext.searchType === 'planets' ? <IconChevronDown size={15} /> : <IconChevronLeft size={15} />} Planetas </Opts>
                                <Opts color={profileContext.searchType === 'people'  ? "yellow" : "white"}   disabled={profileContext.searchInput}  onClick={() => profileContext.setSearchType("people")}>  {profileContext.searchType === 'people'  ? <IconChevronDown size={15} /> : <IconChevronLeft size={15} />} Personagens  </Opts>
                            </div>
                        </FilterOpts>
                    </Footer>
                </div>
            </SearshOpts>
            {profileContext.loading || profileContext.error || profileContext.log ? <DecorationLeft /> : <Decoration />}
        </FilterContainer>
    }
    return null
}