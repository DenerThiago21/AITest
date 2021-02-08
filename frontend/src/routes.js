import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Evolution from './pages/Evolution';
import Home from './pages/Home';
import Login from './pages/Login';
import NewAtlete from './pages/NewAtlete';
import GeneralEvolution from  './pages/GeneralEvolution';
import Atletes from './pages/Atletes';
import Taf from './pages/taf';
import WellsTaf from './pages/taf/WellsTaf';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/home' exact component={Home} />
                <Route path='/evolution' exact component={Evolution} />
                <Route path='/general-evolution' exact component={GeneralEvolution} />
                <Route path='/atletes' exact component={Atletes} />
                <Route path='/atletes/new-atlete' exact component={NewAtlete} />
                <Route path='/taf' exact component={Taf} />
                <Route path='/wells-taf' exact component={WellsTaf} />

            </Switch>
        </BrowserRouter>
    );
}