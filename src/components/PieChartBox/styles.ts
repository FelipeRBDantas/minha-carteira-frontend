import styled from "styled-components";

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  display: flex;
  width: 48%;
  height: 260px;
  margin: 10px 0;
  border-radius: 7px;
  background-color: ${ props=> props.theme.colors.tertiary };
  color: ${ props=> props.theme.colors.white };
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
    width: 60px;
    height: 40px;
    border-radius: 5px;
    font-size: 18px;
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
