import styled, { keyframes } from "styled-components";

interface ILegendProps {
  color: string;
}

const animate = keyframes`
  0% {
    transform: translateX(-100px);
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

export const Container = styled.div`
  width: 100%;
  background-color: ${ props => props.theme.colors.tertiary };
  color: ${ props => props.theme.colors.white };
  margin: 10px 0;
  padding: 30px 20px;
  border-radius: 7px;

  animation: ${ animate } .5s;
`;

export const ChartContainer = styled.div`
  height: 260px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > h2 {
    margin-bottom: 20px;
    padding-left: 16px;
  }

  @media(max-width: 1200px) {
    flex-direction: column;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
  padding-right: 16px;
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  margin-left: 17px;
  
  > div {
    background-color: ${ props => props.color };
    width: 60px;
    height: 40px;
    border-radius: 5px;
    font-size: 18px;
    text-align: center;
    line-height: 40px;

    &::after {
      content: 'R$';
    }

    @media(max-width: 1280px) {
      > div {
        width: 30px;
        height: 30px;
      }
    }
  }

  > span {
    margin-left: 5px;
  }
`;
