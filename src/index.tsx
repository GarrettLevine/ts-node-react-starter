import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    applyMiddleware,
    createStore,
    compose,
  } from 'redux';
import thunk from 'redux-thunk';

import Router from './router';

const store = createStore(
compose(
    applyMiddleware(thunk),
    // global interface set in interfaces file
    window.devToolsExtension ? window.devToolsExtension() : (f: any)  => f,
));

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('app'),
);
