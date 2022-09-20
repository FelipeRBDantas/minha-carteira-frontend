import React from "react";

import { BrowserRouter } from "react-router-dom";

// ROUTES

// import AppRoutes from "@/routes/app.routes";

import AuthRoutes from "@/routes/auth.routes";

const Routes: React.FC = () => (
  <BrowserRouter>
    <AuthRoutes />
  </BrowserRouter>
);

export default Routes;
