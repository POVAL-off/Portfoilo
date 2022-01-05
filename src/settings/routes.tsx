import React from "react";
import IRouter from "../interfaces/routes";

const HomeLazy = React.lazy(() => import("../pages/Home"));
const SkillsLazy = React.lazy(() => import("../pages/Skills"));
const ProjectsLazy = React.lazy(() => import("../pages/Projects"));

const routes: IRouter[] = [
    {id: 1, link: '/', name: 'Главная', component: <HomeLazy />},
    {id: 2, link: '/skills', name: 'Умения', component: <SkillsLazy />},
    {id: 2, link: '/projects', name: 'Проекты', component: <ProjectsLazy />}
]

export default  routes;