import React from "react";

// COMPONENTS

import { ThemeProvider } from "styled-components";

// STYLES

import GlobalStyles from "@styles/GlobalStyles";

// ROUTES

import Routes from "@/routes";

// STORES

import { useSelector } from "react-redux";
import { ApplicationState } from "./store/types";

const App: React.FC = () => {
  const { theme } = useSelector((state: ApplicationState) => state.app.themes);

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
