import { IRoute } from '../store/types/types';

import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';

import Dashboard from "../pages/Dashboard";

import List from "../pages/List";

import SignIn from "../pages/SignIn";

export const mappingRoutes: Array<IRoute> = [
    {
        title: 'Dashboard',
        othersideTitle: null,
        icon: <MdDashboard />,
        othersideIcon: null,
        auth: true,
        path: '/dashboard',
        othersidePath: null,
        element: <Dashboard />,
        submenu: null
    },
    {
        title: 'Listagem',
        othersideTitle: null,
        icon: null,
        othersideIcon: null,
        auth: true,
        path: '/list/:type',
        othersidePath: null,
        element: <List />,
        submenu: [
            {
                title: 'Entradas',
                othersideTitle: null,
                icon: <MdArrowUpward />,
                othersideIcon: null,
                auth: true,
                path: null,
                othersidePath: null,
                element: null,
            },
            {
                title: 'Saídas',
                othersideTitle: null,
                icon: <MdArrowDownward />,
                othersideIcon: null,
                auth: true,
                path: null,
                othersidePath: null,
                element: null,
            }
        ]
    },
    {
        title: 'Login',
        othersideTitle: 'Sair',
        icon: null,
        othersideIcon: <MdExitToApp />,
        auth: true,
        path: '/login',
        othersidePath: '/login',
        element: <SignIn />,
        submenu: null
    }
];
