import React, {Suspense} from 'react';
import IRouter from "../interfaces/routes";
import {Route, Routes} from "react-router-dom";
import Loading from "../pages/Loading";

interface IAppRouter {
    routes: IRouter[]
}

const AppRouter: React.FC<IAppRouter> = (props) => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                {props.routes.map(route => (
                    <Route key={route.id} path={route.link} element={route.component}/>
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;