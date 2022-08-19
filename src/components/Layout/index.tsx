import React from "react";

// STYLES

import { Grid } from './styles';

// COMPONENTS COMMON

import MainHeader from "@components/MainHeader";

import Aside from "@components/Aside";

import Content from "@components/Content";

interface Props {
  children: React.ReactNode;
}  

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content>
          { children }
      </Content>
    </Grid>
  );
}

export default Layout;
