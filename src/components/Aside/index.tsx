import React, { useCallback } from "react";

// ASSETS

import logoImg from '@assets/logo.svg';

// STYLES

import { Container, Header, LogoImg, Title, MenuContainer, MenuItemLink } from './styles';

// ROUTES

import { mappingRoutes } from "@routes/mapping.routes";

// STORES

import { IRoute } from "@store/types/types";

// COMPONENTS

import { v4 as uuidv4 } from 'uuid';

const Aside: React.FC = () => {
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
          return <MenuItemLink 
                    key={ uuidv4() } 
                    href={ route.othersidePath }
                  >
                    { route.othersideIcon }
                    { route.othersideTitle }
                </MenuItemLink>;
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
  }, []);

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
