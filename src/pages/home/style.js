import styled from 'styled-components'

export const Home = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    align-items: center;
    overflow: scroll;
    
    box-sizing: border-box;
    padding-top:72px;

    width:100%;
    height: 100vh;

    @media screen and (max-width: 768px) {
        padding-top:75px;
    }

    main{
        flex:1;
    }

`

export const Main = styled.main`
    display: flex;
    flex:1;
    flex-direction:column;
`
