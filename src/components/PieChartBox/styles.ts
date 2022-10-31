import styled, { keyframes } from "styled-components";

interface ILegendProps {
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

export const Container = styled.div`
  display: flex;
  width: 48%;
  height: 260px;
  margin: 10px 0;
  border-radius: 7px;
  background-color: ${ props=> props.theme.colors.tertiary };
  color: ${ props=> props.theme.colors.white };

  animation: ${ animate } .5s;
  
  @media(max-width: 770px) {
    display: flex;
    width: 100%;
  }
  
  @media(max-width: 420px) {
    height: 220px;
  }
`;

export const SideLeft = styled.aside`
  padding: 30px 0px;
  margin-left: 20px;

  > h2 {
    margin-bottom: 20px;
  }
`;

export const LegendContainer = styled.ul`
  height: 175px;
  padding-right: 15px;
  list-style: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${ props => props.theme.colors.secondary };
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${ props => props.theme.colors.tertiary };
  }
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  
  > div {
    background-color: ${ props => props.color };
    width: 58px;
    height: 38px;
    border-radius: 5px;
    font-size: 16px;
    text-align: center;
    line-height: 40px;

    &::after {
      content: '%';
    }
  }

  > span {
    margin-left: 5px;
  }
`;

export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
`;
