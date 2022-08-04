export interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[],
}

export interface IRoute {
    title: string;
    auth: boolean;
    path: string;
    element: JSX.Element;
}
