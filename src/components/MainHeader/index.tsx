import React, { useMemo, useState } from "react";

import { useSelector } from "react-redux";

// STORES

import { ApplicationState } from "@store/types";

import { addTheme } from "@store/modules/app/themes/action";

// STYLES

import { Container, Profile, Welcome, UserName } from './styles';

import light from "@styles/themes/light";

import dark from "@styles/themes/dark";

// COMPONENTS COMMON

import Toggle from '@components/Toggle';

// UTILS

import { emojis } from "@utils/stringUtil";

const MainHeader: React.FC = () => {
  const { theme } = useSelector((state: ApplicationState) => state.app.themes);

  const [ darkTheme, setDarkTheme ] = useState(() => theme.title === 'dark' ? true : false);

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);

    if (!darkTheme) {
      addTheme({ theme: { ...dark } });
    } else {
      addTheme({ theme: { ...light } });
    }
  }

  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);

    return emojis[indice];
  }, []);

  return (
    <Container>
      <Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={ darkTheme }
        onChange={ handleChangeTheme }
      />

      <Profile>
          <Welcome>Olá, { emoji }</Welcome>
          <UserName>Felipe Dantas</UserName>
      </Profile>
    </Container>
  );
}

export default MainHeader;
