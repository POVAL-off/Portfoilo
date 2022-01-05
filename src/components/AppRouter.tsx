import React, {Suspense} from 'react';
import IRouter from "../interfaces/routes";
import {Route, Routes} from "react-router-dom";

interface IAppRouter {
    routes: IRouter[]
}

const AppRouter: React.FC<IAppRouter> = (props) => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                {props.routes.map(route => (
                    <Route key={route.id} path={route.link} element={route.component}/>
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;