import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import * as History from 'history';

import App from './App';

const history = History.createBrowserHistory();

class RouterContainer extends React.Component {
    render(): JSX.Element {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={App} history={history}/>
                    <Route path='/*' component={(): JSX.Element => <h1>WOOPS</h1>} />
                </Switch>
            </Router>
        );
    }
}

export default RouterContainer;
