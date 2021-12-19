import React from "react";

export default interface IRouter {
    id: number | string;
    link: string;
    name: string;
    component: React.ReactElement;
}