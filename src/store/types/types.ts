export interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[],
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
    value: string | number;
    labelEmpty?: string;
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
