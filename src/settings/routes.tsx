import React from "react";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import IRouter from "../interfaces/routes";

const routes: IRouter[] = [
    {id: 1, link: '/', name: 'Home', component: <Home />},
    {id: 2, link: '/skills', name: 'Skills', component: <Skills />}
]

export default  routes;