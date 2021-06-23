import React from 'react'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { Confirmacion } from '../view/Confirmacion';
import { Datos } from '../view/Datos';
import { Suscripcion } from '../view/Suscripcion';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>

                    <Route
                        exact
                        path="/"
                        component={Suscripcion}
                    />
                    <Route
                        exact
                        path="/suscripcion"
                        component={Suscripcion}
                    />
                    <Route
                        exact
                        path="/datos"
                        component={Datos}
                    />

                    <Route
                        path="/confirmacion"
                        render={Confirmacion}
                    />

                    <Redirect to="/" />

                </Switch>
            </div>
        </Router>
    )
}
