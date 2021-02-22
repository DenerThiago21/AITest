import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Evolution from './pages/Evolution';
import Home from './pages/Home';
import Login from './pages/Login';
import NewAtlete from './pages/NewAtlete';
import GeneralEvolution from  './pages/GeneralEvolution';
import Atletes from './pages/Atletes';
/**Taf */
import Taf from './pages/taf';
import WellsTaf from './pages/taf/WellsTaf';
import HexagonoTaf from './pages/taf/HexagonoTaf';
import AbsTaf from './pages/taf/AbsTaf';
import CegonhaTaf from './pages/taf/CegonhaTaf';
import FsktTaf from './pages/taf/FsktTaf';
import HorizontalTaf from './pages/taf/HorizontalTaf';
import LegerTaf from './pages/taf/LegerTaf';
import RullerTaf from './pages/taf/RullerTaf';




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
                <Route path='/hexagono-taf' exact component={HexagonoTaf} />
                <Route path='/abs-taf' exact component={AbsTaf} />
                <Route path='/cegonha-taf' exact component={CegonhaTaf} />
                <Route path='/fskt-taf' exact component={FsktTaf} />
                <Route path='/horizontal-taf' exact component={HorizontalTaf} />
                <Route path='/leger-taf' exact component={LegerTaf} />
                <Route path='/ruller-taf' exact component={RullerTaf} />

            </Switch>
        </BrowserRouter>
    );
}