import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Evolution from './pages/Evolution';
import Home from './pages/Home';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/home' exact component={Home} />
                <Route path='/evolution' component={Evolution} />
            </Switch>
        </BrowserRouter>
    );
}