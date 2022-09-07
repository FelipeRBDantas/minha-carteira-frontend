import styled from "styled-components";

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  display: flex;
  width: 48%;
  min-height: 260px;
  margin: 10px 0;
  background-color: ${ props => props.theme.colors.tertiary };
  color: ${ props => props.theme.colors.white };
  border-radius: 7px;
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    padding-left: 16px;
    margin-bottom: 10px;
  }
`;

export const SideRight = styled.main`
  display: flex;
  justify-content: center;
  flex: 1;
  min-height: 150px;
  padding-top: 35px;
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
  padding-left: 16px;
  
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
