import styled from 'styled-components'

type ContainerProps = {
  width?: number;
};

export const Container = styled.div<ContainerProps>`
  position: relative;
  margin-top:40px;
  width: ${(props) => props.width + "px" || "400px"};
  background: rgba(0,0,0,.2);
  border-radius: 15px;
  height: 30px;
  .draggable,
  .draggableDummy{
    width: 30px;
    height: 30px;
    background: rgba(255,255,255,1);
    border-radius: 50%;
    -webkit-box-shadow: 7px 8px 34px -8px rgba(0,0,0,0.63);
    -moz-box-shadow: 7px 8px 34px -8px rgba(0,0,0,0.63);
    box-shadow: 7px 8px 34px -8px rgba(0,0,0,0.63);
  }

   .draggable{
      position: absolute;
      left:0;
    }


  .draggableDummy{
    position: relative;
    opacity: 0;
  }
  `;