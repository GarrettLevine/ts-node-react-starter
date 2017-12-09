import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';

import { Provider } from 'react-redux';
import {
    applyMiddleware,
    createStore,
    compose,
  } from 'redux';
import thunk from 'redux-thunk';

import Router from './router';
import rootReducer from './root-reducer';

const store = createStore(rootReducer, {}, compose(
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
