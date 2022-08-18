import React from "react";

// STYLES

import { Grid } from './styles';

// COMPONENTS COMMON

import MainHeader from "../MainHeader";

import Aside from "../Aside";

import Content from "../Content";

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
