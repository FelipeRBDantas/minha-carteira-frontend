import React, { useCallback } from "react";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

// ASSETS

import logoImg from '@assets/logo.svg';

// STYLES

import { Container, Header, LogoImg, Title, MenuContainer, MenuItemLink, MenuItemButton } from './styles';

// ROUTES

import { mappingRoutes } from "@routes/mapping.routes";

// STORES

import { IRoute } from "@store/types";

import { logout } from "@store/modules/api/login/postLogin/action";

// COMPONENTS

import { v4 as uuidv4 } from 'uuid';

const Aside: React.FC = () => {
  const dispatch = useDispatch();

  const navigateTo = useNavigate();

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
    <Container>
      <Header>
        <LogoImg src={ logoImg } alt={ "Logo Minha Carteira" } />
        <Title>Minha Carteira</Title>
      </Header>
      
      <MenuContainer>
        { mappingRoutes.map( (route) => handleMenuItemLink( route ) ) }
      </MenuContainer>
    </Container>
  );
}

export default Aside;
