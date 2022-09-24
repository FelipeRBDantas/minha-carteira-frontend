import React from "react";

import { useSelector } from "react-redux";

import { BrowserRouter } from "react-router-dom";

// ROUTES

import AppRoutes from "@routes/app.routes";

import AuthRoutes from "@routes/auth.routes";

// STORES

import { ApplicationState } from "@store/types";

const Routes: React.FC = () => {
  const { postLogin } = useSelector((state: ApplicationState) => state.api.login);

  return (
    <BrowserRouter>
      { postLogin && postLogin.isLogged ? 
        <AppRoutes /> :
        <AuthRoutes />
      }
    </BrowserRouter>
  );
}

export default Routes;
