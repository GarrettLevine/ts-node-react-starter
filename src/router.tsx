import * as React from 'react';
import { Route, Switch, BrowserRouter as Router, Link, match } from 'react-router-dom';
import * as History from 'history';

import App from './App';

const history = History.createBrowserHistory();
const router = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={App} />
                <Route path='/*' component={() => <h1>WOOPS</h1>} />
            </Switch>
        </Router>
    );
};

export default router;
