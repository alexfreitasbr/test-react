import { Filter } from 'components/filter'
import { Card } from 'components/card'
import { ProfileProvider } from 'context/profileContext'

import { Background } from 'share-styles/background'
import { Home, Main } from './style'
import { MainFooter } from 'components/share/main-footer'
import { MainHeader } from 'components/share/main-header'
export function HomePage() {
    return (
        <Background>
            <Home >
                <MainHeader />
                <Main>
                    <ProfileProvider>
                        <Filter />
                        <Card />
                    </ProfileProvider>
                </Main>
                <MainFooter />
            </Home>
        </Background>
    )
}