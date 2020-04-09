import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import _ from 'lodash';
import AdminLayout from './admin';
import adminRoutes from './routes/adminRoutes';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme';
const Template = () => {
   
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>

                    {_.map(adminRoutes, (route, key) => {
                        const { component, path, exact, layout } = route;
                        return (
                            <Route
                                key={key}
                                render={(route) => <AdminLayout component={component} path={path} route={route} layout={layout} />}
                                path={path}
                                exact={exact}
                            />
                        )
                    })}
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );

}


export default Template;
