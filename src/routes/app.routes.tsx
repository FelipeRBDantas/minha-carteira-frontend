import React from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from "../pages/Dashboard";

import Layout from "../components/Layout";

import List from "../pages/List";

const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
            <Route 
                path="/dashboard" 
                element={ <Dashboard /> } 
            />

            <Route 
                path="/list/:type" 
                element={ <List /> } 
            />
        </Routes>
    </Layout>
);

export default AppRoutes;
