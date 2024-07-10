import { useContext, useEffect, useState } from 'react'

import  Details  from 'components/details'

import { toLocalFormat } from 'util/convertNumbers'

import ProfileContext from 'context/profileContext'
import { CardContainer, Profile, Header, Image, ProfileInfo, ProfileTitle, ProfileItem, DetailsContainer, GoBackBtn, FakeName  } from './style'
import { ResidentsIcon } from 'assets/icons/residentsIcon'
import { FilmIcon } from 'assets/icons/FilmIcon'
import { ClimateIcon } from 'assets/icons/ClimateIcon'
import { TerrainIcon } from 'assets/icons/terrainIcon'
import { PopulationIcon } from 'assets/icons/populationIcon'
import { IconChevronLeft, } from '@tabler/icons-react'
import { getplanetImage } from 'constants/planetlist'
import { getProfile } from 'action/getProfile'
import { GetDataType, PeopleType, PlanetType, ProfileDataType } from 'model/Profile'
import { getPlantName } from 'action/getPlanetName'


export function Card() {

    const [homeworld, setHomeworld] = useState<string >("")
    const [fakeName, setFakeName] = useState("")
    const [profileDescriptions, setProfileDescriptions] = useState<PlanetType | null>(null)

    const profileContext = useContext(ProfileContext)

    const profile = getProfile(profileContext.searchInput, profileContext.searchType)
    const homeworldProfile = getPlantName(homeworld)

    useEffect(() => {
        const profileInfo = profile as GetDataType

        if(!profileInfo) return

        if (profileContext.searchType === "planets") {
            profileContext.setSearchStatus({
                loaded: profileInfo.data ? true : false,
                empty: profile.empty,
                error: profile.error,
                loading: profile.loading
            })

            if(profile.empty || profile.error){ 
                profileContext.setSearchInput(null)
                return
            }
            
            if(!profileInfo.data ) return

            const planetProfiledata = profileInfo.data as ProfileDataType
            const planetProfile = planetProfiledata.results[0] as PlanetType
    
            setProfileDescriptions(planetProfile )
            setFakeName(planetProfile.name)
        }

        if (profileContext.searchType === "people") {
            profileContext.setSearchStatus({
                loaded: false,
                empty: profile.empty,
                error: profile.error,
                loading: profile.loading
            })


            if(profile.empty || profile.error){ 
                profileContext.setSearchInput(null)
                return
            }

            if(!profileInfo.data ) return

            const planetProfiledata = profileInfo.data as ProfileDataType
            const peopleProfile = planetProfiledata.results[0] as PeopleType
            setHomeworld(peopleProfile.homeworld)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profile]);


    useEffect(() => {
        if (homeworld === "") return

        const profileHomeworldInfo = homeworldProfile as GetDataType

        profileContext.setSearchStatus({
            loaded:profileHomeworldInfo.data ? true : false,
            empty: profile.empty,
            error: profile.error,
            loading: profile.loading
        })

        if(profile.empty || profile.error){ 
            profileContext.setSearchInput(null)
            return
        }

        if(!profileHomeworldInfo.data ) return
        
        const homeworldProfiledata = profileHomeworldInfo.data as PlanetType
        setProfileDescriptions(homeworldProfiledata)
        setFakeName(homeworldProfiledata.name)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [homeworldProfile]);

    function goback() {
        profileContext.setSearchStatus({
            loaded: false,
            empty: false,
            error: false,
            loading: false
        })
        profileContext.setSearchInput(null)
        setProfileDescriptions(null)
        setHomeworld("")
    }


    if (profileDescriptions && !profileContext.searchStatus.error && !profileContext.searchStatus.empty && !profileContext.searchStatus.loading && profileContext.searchStatus.loaded) {
        
        const { name, climate, terrain, population, residents, films } = profileDescriptions

        return <>
            <CardContainer>
                <Header>
                    <Profile>
                        <Image src={getplanetImage(name)} alt={name} />
                        <ProfileTitle>
                            <p>Planeta</p>
                            <FakeName onChange={(e)=>setFakeName(e.target.value)} value={fakeName}/>
                        </ProfileTitle>
                    </Profile>
                    <ProfileInfo>
                        <ProfileItem><ClimateIcon width={19} /><span><h3>Clima:</h3><p>{climate}</p></span></ProfileItem>
                        <ProfileItem><TerrainIcon width={18} /><span><h3>Terreno:</h3> <p>{terrain}</p></span></ProfileItem>
                        <ProfileItem><PopulationIcon width={22} /><span><h3>População:</h3> <p>{toLocalFormat(population)}</p></span></ProfileItem>
                    </ProfileInfo>
                </Header>
                <DetailsContainer>
                    <div><ResidentsIcon width={16} /><h4>Residentes ({residents?.length}):</h4></div>
                    <Details urlList={residents} />
                </DetailsContainer>
                <DetailsContainer>
                    <div><FilmIcon width={16} /><h4>Filmes ({films?.length}):</h4></div>
                    <Details urlList={films} />
                </DetailsContainer>
            </CardContainer>
            <GoBackBtn onClick={goback}>
                <IconChevronLeft size={22} />Voltar
            </GoBackBtn>
        </>
        }
    
    return null
}