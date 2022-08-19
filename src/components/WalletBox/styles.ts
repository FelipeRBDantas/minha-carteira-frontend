import styled from "styled-components";

interface IContainerProps {
  color: string;
}

export const Container = styled.div<IContainerProps>`
  position: relative;
  width: 32%;
  height: 150px;
  margin: 10px 0;
  border-radius: 7px;
  padding: 10px 20px;
  overflow: hidden;
  background-color: ${ props => props.color };
  color: ${ props => props.theme.colors.white };

  > img {
    position: absolute;
    height: 110%;
    top: -10px;
    right: -30px;
    opacity: .3;
  }

  > span {
    font-size: 18px;
    font-weight: 500;
  }

  > small {
    position: absolute;
    bottom: 10px;
    font-size: 12px;
  }
`;
