import React, { useMemo } from "react";

// STYLES

import { Container, Profile, Welcome, UserName } from './styles';

// COMPONENTS COMMON

import Toggle from '@components/Toggle';

// UTILS

import { emojis } from "@utils/stringUtil";

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);

    return emojis[indice];
  }, []);

  return (
    <Container>
      <Toggle />

      <Profile>
          <Welcome>Olá, { emoji }</Welcome>
          <UserName>Felipe Dantas</UserName>
      </Profile>
    </Container>
  );
}

export default MainHeader;
