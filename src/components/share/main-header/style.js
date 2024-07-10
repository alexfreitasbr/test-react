import styled from 'styled-components'

export const Header = styled.header`
        display:flex;
        flex-direction:column;
`

export const H1 = styled.h1`
        font-family: "Montserrat", sans-serif;
        font-size:13px;
        line-height: 2;
        letter-spacing:3px;
        color:white;
        font-weight:400;
        text-transform: uppercase;
        text-align:center;

        @media screen and (min-width: 768px) {
                font-size:16px;
        }
`

export const Logo = styled.div`
        width:209px;
        height: 117px;

        background-image: url(/images/logo.png); 
        background-size: cover; 
        background-size: contain;
        background-repeat: no-repeat;

        @media screen and (min-width: 768px) {
                width:321px;
                height: 180px;
        }
`
