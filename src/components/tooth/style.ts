import styled from 'styled-components'

type ContainerProps = {
  width?: number;
  backGroundGradient?: string;
};

export const ThootContainer= styled.div<ContainerProps>`
    display:flex;
    justify-content:center;
    width:${(props) => props.width + "px" || "400px"};
    z-index:10;
    margin-bottom: -20px;

    div{
      transform-origin: 17px 17px;
    }
`;
