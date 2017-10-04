import * as React from 'react';
import { Route, BrowserRouter as Router, Link, match } from 'react-router-dom';
import * as History from 'history';

import App from './App';

const history = History.createBrowserHistory();
const router = () => {
    return (
        <Router>
            <div>
                <Route path='/' component={App} />
            </div>
        </Router>
    );
};

export default router;
