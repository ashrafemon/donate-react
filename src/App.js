import React, {Suspense} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import routes from './routes'
import LoadingPage from "./components/shared/SuspenseLoading";

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingPage/>}>
                <Switch>
                    {routes.map((item, index) => (
                        <Route key={index} exact={item.exact} path={item.path} component={item.component}/>
                    ))}
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
