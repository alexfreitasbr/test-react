import styled from 'styled-components'



export const ImageBox = styled.div`
    position: relative;
    overflow: hidden;
    width: 300px;
    height: 188px;
    border-radius: 10px 10px 0 0;
    background-image: url(/images/planet.png); 
    background-position: center; 
    background-size: cover; 


    @media screen and (min-width: 820px) {
        width: 400px;
        height: 400px;
        border-radius: 10px 0 0 10px;
    }
`
export const Loading = styled.div`
    position: absolute;
    right:-30px;
    bottom:0;
    width: 200px;
    height: 154px;
    background-image: url(/images/loading.gif); 
    background-position: center; 
    background-size: cover; 

    @media screen and (min-width: 820px) {
        width: 293px;
        height: 226px;
        right:0;
        bottom:0;
    }
`

export const Msn = styled.div`
    position: relative;
    width: 100%;
    height: 100%;   


    h3{
        display: block;
        position: absolute;
        top:5px;
        left:15px;
        width:45%;
        background-color:rgba(255, 255, 255, 0.7);;
        border-radius: 12px;
        padding:8px;
        text-align:center;
        font-size: 12px;

        @media screen and (min-width: 820px) {
            top:15px;
            left:15px;
            width:50%;
            padding:18px;
            border-radius: 20px;
            font-size: 20px;
        }
    }
`

export const NotFound = styled.div`
    position: absolute;
    right:-15px;
    bottom:0;
    width: 197px;
    height: 188px;
    background-image: url(/images/notfound.png); 
    background-position: center; 
    background-size: cover; 

    @media screen and (min-width: 820px) {
        width: 310px;
        height: 296px;
        right:0;
        bottom:0;
    }
`

export const Error = styled.div`
    position: absolute;
    right:-30px;
    bottom:-40px;
    width: 200px;
    height: 225px;
    background-image: url(/images/yoda.png); 
    background-position: center; 
    background-size: cover; 

    @media screen and (min-width: 820px) {
        width: 275px;
        height: 310px;
        right:0;
        bottom:0;
    }
`