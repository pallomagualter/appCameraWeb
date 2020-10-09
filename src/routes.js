import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New';


function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Feed} />
                <Route path='/new' component={New} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

// <Route path='/' component={} />