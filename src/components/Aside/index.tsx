import React, { useCallback, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

// ASSETS

import logoImg from '@assets/logo.svg';

// STYLES

import { 
  Container, 
  Header, 
  LogoImg, 
  Title, 
  MenuContainer, 
  MenuItemLink, 
  MenuItemButton, 
  ToggleMenu, 
  ThemeToggleFooter 
} from './styles';


import light from "@styles/themes/light";

import dark from "@styles/themes/dark";

// ROUTES

import { mappingRoutes } from "@routes/mapping.routes";

// STORES

import { IRoute } from "@store/types";

import { logout } from "@store/modules/api/login/postLogin/action";

import { ApplicationState } from "@store/types";

import { addTheme } from "@store/modules/app/themes/action";

import { ITheme } from "@store/modules/app/themes/types";

// COMPONENTS

import { v4 as uuidv4 } from 'uuid';

import { MdClose, MdMenu } from 'react-icons/md';

// COMPONENTS

import Toggle from "@components/Toggle";

const Aside: React.FC = () => {
  const dispatch = useDispatch();

  const navigateTo = useNavigate();

  const [toggleMenuIsOpen, setToggleMenuIsOpen] = useState(false);

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

  const handleToggleMenu = useCallback(() => {
    setToggleMenuIsOpen(!toggleMenuIsOpen);
  }, [ toggleMenuIsOpen ]);

  const signOut = useCallback((path: string) => {
    dispatch(logout());

    return navigateTo(path);
  }, [ dispatch, navigateTo ]);

  const handleMenuItemLink = useCallback((route: IRoute) => {
    if (route.displayed !== false) {
      if (route.submenu) {
        return route.submenu.map( (item)  => {     
          return <MenuItemLink 
                    key={ uuidv4() } 
                    href={ item.path ? item.path : '' }
                  >
                    { item.icon }
                    { item.title }
                  </MenuItemLink>;
        });
      } else {
        if (route.othersidePath) {
          return <MenuItemButton 
                    key={ uuidv4() } 
                    onClick={ () => signOut(route.othersidePath || '') }
                  >
                    { route.othersideIcon }
                    { route.othersideTitle }
                </MenuItemButton>;
        }

        return <MenuItemLink 
                  key={ uuidv4() } 
                  href={ route.path }
                >
                  { route.icon }
                  { route.title }
              </MenuItemLink>;
      }
    }
  }, [ signOut ]);

  return (
    <Container menuIsOpen={ toggleMenuIsOpen }>
      <Header>
        <ToggleMenu onClick={ handleToggleMenu }>
          { toggleMenuIsOpen ? <MdClose /> : <MdMenu /> }
        </ToggleMenu>

        <LogoImg src={ logoImg } alt={ "Logo Minha Carteira" } />

        <Title>Minha Carteira</Title>
      </Header>
      
      <MenuContainer>
        { mappingRoutes.map( (route) => handleMenuItemLink( route ) ) }
      </MenuContainer>

      <ThemeToggleFooter menuIsOpen={ toggleMenuIsOpen }>
        <Toggle
          labelLeft="Light"
          labelRight="Dark"
          checked={ isTheme.title === 'dark' }
          onChange={ handleChangeTheme }
        />
      </ThemeToggleFooter>
    </Container>
  );
}

export default Aside;
