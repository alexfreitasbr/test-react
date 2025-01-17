import styled from 'styled-components'

type ContainerProps = {
  width?: number;
};

export const Container = styled.div<ContainerProps>`
    width: ${(props) => props.width + "px" || "400px"};
    height: ${(props) => props.width + "px" || "400px"};
    border-radius: 50%;
    rotate:270deg;
  `;