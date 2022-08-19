// COMPONENTS

import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';

// PAGES

import Dashboard from "@pages/Dashboard";

import List from "@pages/List";

import SignIn from "@pages/SignIn";

// STORES

import { IRoute } from '@store/types/types';

import { ListParams } from '@store/enums/enum';

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
    submenu: null,
    displayed: true
  },
  {
    title: 'Listagem',
    othersideTitle: null,
    icon: null,
    othersideIcon: null,
    auth: true,
    path: '/list/:movementType',
    othersidePath: null,
    element: <List />,
    submenu: [
      {
        title: 'Entradas',
        icon: <MdArrowUpward />,
        auth: true,
        path: `/list/${ListParams.entryBalance}`,
        element: null,
        displayed: true
      },
      {
        title: 'Saídas',
        icon: <MdArrowDownward />,
        auth: true,
        path: `/list/${ListParams.exitBalance}`,
        element: null,
        displayed: true
      }
    ],
    displayed: null
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
    submenu: null,
    displayed: true
  }
];
