import React from "react";

import { BrowserRouter } from "react-router-dom";

// ROUTES

import AppRoutes from "@/routes/app.routes";

const Routes: React.FC = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default Routes;
