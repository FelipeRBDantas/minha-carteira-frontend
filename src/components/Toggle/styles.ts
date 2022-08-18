import styled from "styled-components";

// COMPONENTS

import Switch, { ReactSwitchProps } from 'react-switch';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleLabel = styled.span`
  color: ${ props => props.theme.colors.white };
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({ 
    onColor: theme.colors.info,
    offColor: theme.colors.warning,
    width: 52,
    height: 22
   })
  )<ReactSwitchProps>`
  margin: 0 7px;
`;
