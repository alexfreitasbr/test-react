import styled from 'styled-components'

export const FilterContainer = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 300px;
    height: 501px;
    margin-top:22px;

    @media screen and (min-width: 820px) {
        width: 800px;
        height: 400px;
    }
`


export const SearshOpts = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    box-sizing: border-box;
    padding:0 27px;

    width: 300px;
    height: 313px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius:  0  0 10px 10px;

    @media screen and (min-width: 820px) {
        width: 400px;
        height: 400px;
        border-radius:  0  10px 10px 0;
    }
`

export const Decoration = styled.div`
    position: absolute;
    top: 42px;
    left: 48px;
    width: 323px;
    height: 229px;
    background-image: url(/images/nav.png); 
    background-position: center; 
    background-size: cover; 

    @media screen and (min-width: 820px) {
        top: 210px;
        left: -134px;
        width: 462px;
        height: 328px;
    }
`

export const DecorationLeft = styled.div`
    position: absolute;
    top: 42px;
    left: -70px;
    width: 323px;
    height: 229px;
    background-image: url(/images/nav.png); 
    background-position: center; 
    background-size: cover; 

    @media screen and (min-width: 820px) {
        top: 210px;
        left: -134px;
        width: 462px;
        height: 328px;
    }
`
export const Header = styled.header`
    color:white;
    max-width:280px;
    font-family: "Montserrat", sans-serif;
    font-size:18px;
    line-height: 1.2;
    color:white;
    font-weight:400;
    text-align:center;

    @media screen and (min-width: 820px) {
       font-size:20px;
    }
`
export const Main = styled.main`
    width:100%;
    margin-top:18px;
`
export const Footer = styled.footer`
    width:100%; 
`

export const Form = styled.form`
    color:white;
    width:100%;
    box-sizing: border-box;

    font-family: "Montserrat", sans-serif;
    font-size:18px;
    line-height: 1.2;
    color:white;
    font-weight:400;
    @media screen and (min-width: 820px) {
       font-size:20px;
    }
`
export const Input = styled.input`
    width:100%;
    height:40px;
    border-radius: 5px ;
    box-sizing: border-box;
    background-color: white;
    border: none;

    &:focus-visible{
        outline: none;
    }

    font-family: "Lato", sans-serif;
    text-align: center;
    font-size: 14px;
    font-weight:400;
    color: w#7D7D7D;
`

export const Button = styled.button`
    display:flex;
    justify-content:center;
    align-items: center;
    gap:5px;

    width:100%;
    height:40px;
    border-radius: 5px ;
    box-sizing: border-box;

    background-color: #DE1212;
    border: none;

    margin-top:7px;

    font-family: "Lato", sans-serif;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    font-weight:700;
    color: white;
    transition: background-color .4s;

    &:hover{
        background-color: #9d0f0f;
        cursor: pointer;
    }

    &:disabled{
        opacity: 0.3;
    }
`

export const FilterOpts = styled.span`
    display:flex;
    justify-content:center;
    width:100%;
    align-items: center;
    gap:18px;
    margin-top:19px;
    div{
        display:flex;
        gap:2px;
    }
`

export const Opts = styled.button.attrs((props) => ({ color: props.color }))`    display:flex;
    justify-content:center;
    align-items: center;
    gap:4px;
    border: none;
    background-color: Transparent;
    cursor:pointer;

    color:${(props) => props.color};
    font-family: "Lato", sans-serif;
    font-size:14px;
    line-height: 1.2;
    font-weight:400;

    transition: color .4s;

    &:hover{
        color: yellow;
    }

    disabled {
        opacity: 0.3;
    }
`

export const Label = styled.span`
    display:flex;
    align-items: center;
    gap:5px;
    
    font-family: "Lato", sans-serif;
    font-size:14px;
    line-height: 1.2;
    color:white;
    font-weight:900;
`