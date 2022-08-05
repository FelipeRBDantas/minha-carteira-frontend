import React, { useCallback } from "react";

import logoImg from '../../assets/logo.svg';

import { Container, Header, LogoImg, Title, MenuContainer, MenuItemLink } from './styles';

import { mappingRoutes } from "../../routes/mapping.routes";

import { IRoute } from "../../store/types/types";

import { v4 as uuidv4 } from 'uuid';

const Aside: React.FC = () => {
    const handleMenuItemLink = useCallback((route: IRoute, othersideConditions: boolean[]) => {
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
                if (othersideConditions.length > 0) {
                    return othersideConditions.map( (othersideCondition)  => {
                        if (othersideCondition) {
                            return <MenuItemLink 
                                        key={ uuidv4() } 
                                        href={ route.othersidePath ? route.othersidePath : '' }
                                    >
                                { route.othersideIcon }
                                { route.othersideTitle }
                            </MenuItemLink>;
                        } else {
                            return <MenuItemLink 
                                key={ uuidv4() } 
                                href={ route.path }
                            >
                                { route.icon }
                                { route.title }
                            </MenuItemLink>;
                        }
                    });
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

    const othersideConditions = useCallback((route: IRoute) => {
        const conditions: boolean[] = [ 
            route.othersideTitle === 'Sair' 
        ];

        return conditions;
    }, []);

    return (
        <Container>
            <Header>
                <LogoImg src={ logoImg } alt={ "Logo Minha Carteira" } />
                <Title>Minha Carteira</Title>
            </Header>
            
            <MenuContainer>
                { mappingRoutes.map( (route) => handleMenuItemLink(
                    route, 
                    othersideConditions(route)
                ) ) }
            </MenuContainer>
        </Container>
    );
}

export default Aside;
