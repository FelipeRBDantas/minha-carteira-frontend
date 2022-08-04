import React from "react";

import { Routes, Route } from 'react-router-dom';

import Dashboard from "../pages/Dashboard";

import Layout from "../components/Layout";

import List from "../pages/List";

import { IRoute } from '../store/types/types';

const routes: Array<IRoute> = [
    {
        title: 'Dashboard',
        auth: true,
        path: '/dashboard',
        element: <Dashboard />
    },
    {
        title: 'Listagem',
        auth: true,
        path: '/list/:type',
        element: <List />
    }
];

const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
            { routes.map((route, index) => (
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
