import styled from 'styled-components'

export const Footer = styled.footer`
    position: fixed;
    bottom:0;
    display: flex;
    justify-content:center;
    align-items: center;
    width:100%;
                
    box-sizing: border-box;
    color:black;
    background:white;
    min-height:66px;

    @media screen and (min-width: 768px) {
        min-height:86px;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    gap:64px;
    width:100%;
    max-width:1200px;
`

export const Info = styled.p`
    display:none;   
    font-family: "Lato", sans-serif;
    font-weight:400;
    font-size:14px;
    line-height:1.2;

    @media screen and (min-width: 768px) {
        display:block;
    }
`
export const Pipe = styled.div`
    display:none;
    height:44px;
    width:1px;
    border-left:1px solid black;

    @media screen and (min-width: 768px) {
        display:block;
    }
`