import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${ props => props.theme.colors.tertiary };
  color: ${ props => props.theme.colors.white };
  margin: 10px 0;
  padding: 30px 20px;
  border-radius: 7px;

  > h2 {
    margin-bottom: 20px;
    padding-left: 16px;
  }
`;

export const ChartContainer = styled.div`
  flex: 1;
  height: 260px;
`;
