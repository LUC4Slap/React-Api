import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Corpo from './components/Corpo';
import Consoles from './components/Consoles';
import Jogos from  './components/Jogos';
import Noticias from  './components/Noticias';
import Login from  './components/admin/Login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Corpo />} />
            <Route exact path="/consoles" component={() => <Consoles />} />
            <Route exact path="/jogos" component={() => <Jogos />} />
            <Route exact path="/noticias" component={() => <Noticias />} />
            <Route exact path="/login" component={() => <Login />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;