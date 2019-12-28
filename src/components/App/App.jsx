import React from "react";
import {Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {ConnectedRouter} from "connected-react-router";
import routes from "../../config/routes";
import store, {history} from "../../store/store";


/* This wrapper applies all subroutes to the wrappedComponent to allow for nested routes */
const WithSubRoutes = ({ subRoutes, children }) => {
    return (
        <>
            <Switch> {
                subRoutes && subRoutes.map((route, i) => (
                    <Route key={i}
                        path={
                            route.path
                        }
                        render={
                            props => <route.component {...props} />} />
                ))
            }
                {children} </Switch>
        </>
    );
};


const App = props => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch> {
                    routes.map((route, i) => {
                        return (
                            <Route key={i}
                                path={
                                    route.path
                                }
                                exact={
                                    route.exact
                            }>
                                <WithSubRoutes subRoutes={
                                    route.routes
                                }>
                                    <route.component {...props}/>
                                </WithSubRoutes>
                            </Route>
                        );
                    })
                } </Switch>
            </ConnectedRouter>
        </Provider>

    );
};

export default App;
