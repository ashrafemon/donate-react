import React, {Suspense, useEffect} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import routes from './routes'
import LoadingPage from "./components/shared/SuspenseLoading";
import {useDispatch} from "react-redux";
import {fetchMe} from "./store/actions/auth/actions";

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const TOKEN = localStorage.getItem('token')

        if (TOKEN) {
            dispatch(fetchMe())
        }
    }, [dispatch])

    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingPage/>}>
                <Switch>
                    {routes.map((item, index) => (
                        <Route
                            key={index}
                            exact={item.exact}
                            path={item.path}
                            component={item.component}
                            name={item.name}
                        />
                    ))}
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
