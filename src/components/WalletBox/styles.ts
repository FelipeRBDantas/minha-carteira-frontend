import styled, { keyframes } from "styled-components";

interface IContainerProps {
  color: string;
}

const animate = keyframes`
  0% {
    transform: translateX(100px);
    opacity: 0;
  }

  50% {
    opacity: .3;
  }

  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

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

  animation: ${ animate } .5s;

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

  @media(max-width: 770px) {
    > span {
      font-size: 14px;
    }

    > h1 {
      word-wrap: break-word;
      font-size: 22px;
      
      > strong {
        display: inline-block;
        width: 100%;
        font-size: 16px;
      }
    }
  }

  @media(max-width: 420px) {
    width: 100%;

    > h1 {
      display: flex;

      strong {
        position: initial;
        width: auto;
        font-size: 22px;
      }

      strong:after {
        display: inline-block;
        content: '';
        width: 1px;
      }
    }
  }
`;
