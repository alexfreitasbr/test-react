import styled from 'styled-components'

type ContainerProps = {
  width?: number;
  backGroundGradient?: string;
};

export const Container = styled.div<ContainerProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .base{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${(props) => props.width ? (props.width - 80) + "px" : "440px"};;
        height: ${(props) => props.width ? (props.width - 80) + "px" : "440px"};
        border-radius: 50%;
        border: 2px solid;
        border-top-color: rgba(255, 255, 255,.2);
        border-right-color: rgba(0, 0, 0, .2);
        border-bottom-color: rgba(0, 0, 0, .2);
        border-left-color: rgba(255, 255, 255,.2);
        background: ${(props) => props.backGroundGradient};
        rotate: 180deg;
        filter: blur(1px);
    
        .frame{
          width: ${(props) => props.width ? (props.width - 110) + "px" : "410px"};;
          height: ${(props) => props.width ? (props.width - 110) + "px" : "410px"};
          border-radius: 50%;
          border: 3px solid;
          border-top-color: rgba(255, 255, 255,.2);
          border-right-color: rgba(0, 0, 0, .2);
          border-bottom-color: rgba(0, 0, 0, .2);
          border-left-color: rgba(255, 255, 255,.2);
          background: ${(props) => props.backGroundGradient};
          background: ${(props) => props.backGroundGradient};
          rotate: 185deg;
          filter: blur(3px);
        }
      }

  `;


