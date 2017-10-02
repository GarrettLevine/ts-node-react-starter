import * as React from "react";

export interface HelloProps {
    header: string;
    subHeader: string;
};

export const Hello = (props: HelloProps) =>
    <div><h1>{props.header}</h1><h2>{props.subHeader}</h2></div>;
