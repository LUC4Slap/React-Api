import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Corpo from './components/Corpo';
import Consoles from './components/Consoles'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Corpo />} />
            <Route exact path="/consoles" component={() => <Consoles />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;