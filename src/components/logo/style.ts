import styled from 'styled-components'

type ContainerProps = {
  backGroundGradient?: string;
};

export const Container = styled.div<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    background: ${(props) => props.backGroundGradient || "white"};
    -webkit-box-shadow: 7px 8px 34px -8px rgba(0,0,0,0.63);
    -moz-box-shadow: 7px 8px 34px -8px rgba(0,0,0,0.63);
    box-shadow: 7px 8px 34px -8px rgba(0,0,0,0.63);
    border: 3px solid;
    border-top-color: rgba(255, 255, 255,.4);
    border-right-color: rgba(0, 0, 0, .4);
    border-bottom-color: rgba(0, 0, 0, .4);
    border-left-color: rgba(255, 255, 255,.4);

    img{
      width:120px;
    }
  `;