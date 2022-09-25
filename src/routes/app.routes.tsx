import React from "react";

import { Routes, Route } from 'react-router-dom';

// COMPONENTS COMMON

import Layout from "@components/Layout";

// ROUTES

import { mappingRoutes } from "@/routes/mapping.routes";

const AppRoutes: React.FC = () => (
  <Layout>
    <Routes>
      { mappingRoutes
        .filter( route => route.auth)
        .map((route, index) => (
          <Route 
            key={ index }
            path={ route.path } 
            element={ route.element } 
          />
        )) }
    </Routes>
  </Layout>
);

export default AppRoutes;
