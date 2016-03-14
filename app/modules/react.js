'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Beer from './beer_table/app';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Table from './beer_table/table/table';
import Row from './beer_table/table/row';

const app = document.getElementById('app');

window.location.hash = '/now/ontap';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Beer}>
            <Route path="/been/:id" component={Table} handler={['been']}></Route>
            <Route path="/now/:id" component={Table} handler={['now']}></Route>
            <Route path="/soon/:id" component={Table} handler={['soon']}></Route>
        </Route>
    </Router>
, app);
