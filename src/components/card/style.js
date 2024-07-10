import styled from 'styled-components'


export const CardContainer= styled.div`
    display: flex;
    flex-direction:column;
    gap:9px;
    width: 355px;
    min-height: 462px;
    box-sizing: border-box;
    padding:35px 12px 16px 12px;
    margin-top:18px;
    background-color: white;
    border-radius: 10px;
    font-family: "Montserrat", sans-serif;

    @media screen and (min-width: 768px) {
        width: 592px;
        min-height: 381px;
        padding:24px 24px;
    }
`

export const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width:100%;
    margin-bottom: 20px;
    padding:0 12px 0 14px;
    box-sizing: border-box;

    @media screen and (min-width: 768px) {
        padding:0;
    }
    
`

export const Profile = styled.div`
    display: flex;
    flex: 1;
    justify-content:left;
    gap:9px;

`
export const Image = styled.img`
    width: 74px;
    height: 74px;

    margin-left:6px;
`

export const ProfileTitle = styled.div`
    display: flex;
    gap:3px;
    flex-direction:column;
    box-sizing: border-box;

    p{
        font-weight:300;
        margin:7px 0 0 3px ;

        text-align:left;
        font-size:14px;
    }
        
    h2{
        font-weight:800;
        margin:0;
        text-align:left;
        font-size:18px;
        text-transform: uppercase;
    }
`


export const FakeName = styled.input`
        width:80%;
        border:none;
        outline: none;
        font-weight:800;
        margin:0;
        text-align:left;
        font-size:18px;
        text-transform: uppercase;
`

export const ProfileInfo = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    gap:14px;
    padding-left:88px;

    span{
        display: flex;
        gap:5px;
        justify-content:center;
        align-items: center;

        h3{
            font-weight:700;
            margin:0;
            font-size:15px;
        }

        p{
            font-weight:200;
            margin:0;
            font-size:14px;
        }
    }

    @media screen and (min-width: 768px) {
        padding-left:0;
    }
`

export const ProfileItem = styled.div`
    display: flex;
    align-items: start;
    gap:5px;

    span{
        display: flex;
        align-items: start;
        p{
            text-transform: capitalize;
        }
    }

`

export const DetailsContainer = styled.div`
    background-color:#F1F1F1;
    width:100%;
    border-radius:8px;
    box-sizing: border-box;
    padding:10px 16px;
    
    div{
        display: flex;
        gap:5px;
        border-bottom: 1px solid #909090;
        padding-bottom:10px;

        align-items: center;

        h4{
            margin:0;
            font-size:14px;
            font-weight:700;
            text-align:left;
        }
    }
    
    p{
        font-size:14px;
        font-weight:400;
        text-align:left;
    }
`

export const GoBackBtn = styled.span`
    display:flex;
    align-items: center;
    align-self: end;
    width: fit-content;
    gap:4px;

    margin:30px 0;

    color:white;
    font-family: "Montserrat", sans-serif;
    font-size:14px;
    line-height: 1.2;
    font-weight:500;

    transition: color .4s;

    &:hover{
        color: yellow;
        cursor: pointer;
    }

    @media screen and (min-width: 768px) {
        margin:100px 0 80px 0;
    }
`