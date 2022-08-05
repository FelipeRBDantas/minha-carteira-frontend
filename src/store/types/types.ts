export interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[],
}

export interface IRoute {
    title: string;
    othersideTitle: string | null;
    icon: JSX.Element | null;
    othersideIcon: JSX.Element | null;
    auth: boolean;
    path: string;
    othersidePath: string | null;
    element: JSX.Element;
    submenu: IRouteSubmenu[] | null;
    displayed: boolean | null;
}

export interface IRouteSubmenu {
    title: string;
    icon: JSX.Element | null;
    auth: boolean;
    path: string | null;
    element: JSX.Element | null;
    displayed: boolean | null;
}
