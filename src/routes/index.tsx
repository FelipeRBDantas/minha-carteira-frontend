import React from "react";

import { BrowserRouter } from "react-router-dom";

// ROUTES

import AppRoutes from "./app.routes";

const Routes: React.FC = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default Routes;
