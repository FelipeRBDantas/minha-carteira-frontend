import React, { useMemo, useState } from "react";

import { useSelector } from "react-redux";

// STORES

import { ApplicationState } from "@store/types";

import { addTheme } from "@store/modules/app/themes/action";

import { ITheme } from "@/store/modules/app/themes/types";

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

  const [ isTheme, setIsTheme ] = useState<ITheme>(() => {
    const themeSaved = localStorage.getItem('@minha-carteira:theme');

    if (themeSaved) {
      return JSON.parse(themeSaved);
    } else if (theme) {
      return theme;
    } else {
      return dark;
    }
  });

  const handleChangeTheme = () => {
    if (isTheme.title === 'light') {
      setIsTheme(dark);

      addTheme({ theme: { ...dark } });

      localStorage.setItem('@minha-carteira:theme', JSON.stringify(dark));
    } else {
      setIsTheme(light);

      addTheme({ theme: { ...light } });

      localStorage.setItem('@minha-carteira:theme', JSON.stringify(light));
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
        checked={ isTheme.title === 'dark' }
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
