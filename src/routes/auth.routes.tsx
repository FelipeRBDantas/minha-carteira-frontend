import React from "react";

import { Routes, Route } from 'react-router-dom';

// ROUTES

import { mappingRoutes } from "@/routes/mapping.routes";

const AppRoutes: React.FC = () => (
  <Routes>
    { mappingRoutes
      .filter( route => !route.auth)
      .map((route, index) => (
        <Route 
          key={ index }
          path={ route.path } 
          element={ route.element } 
        />
    )) }
  </Routes>
);

export default AppRoutes;
