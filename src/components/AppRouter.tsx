import React from 'react';
import IRouter from "../interfaces/routes";
import {Route, Routes} from "react-router-dom";

interface IAppRouter {
    routes: IRouter[]
}

const AppRouter: React.FC<IAppRouter> = (props) => {
    return (
        <Routes>
            {props.routes.map(route => (
                <Route key={route.id} path={route.link} element={route.component} />
            ))}
        </Routes>
    );
};

export default AppRouter;