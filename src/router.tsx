import * as React from 'react';
import * as ReactRouter from 'react-router-dom';
import * as History from 'history';

import App from './App';
import { Login } from './Login/Login';

const history: History.History = History.createBrowserHistory();


class RouterContainer extends React.Component {
    render(): JSX.Element {
        return (
            <ReactRouter.BrowserRouter>
                <ReactRouter.Switch>
                    <ReactRouter.Route path='/' exact component={App} history={history}/>
                    <ReactRouter.Route path='/login' exact component={Login} history={history}/>
                    <ReactRouter.Route path='/*' component={(): JSX.Element => <h1>WOOPS</h1>} />
                </ReactRouter.Switch>
            </ReactRouter.BrowserRouter>
        );
    }
}

export default RouterContainer;
