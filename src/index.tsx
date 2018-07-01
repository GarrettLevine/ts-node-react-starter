import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Redux from 'redux';
import { Provider } from 'react-redux';
import {
    applyMiddleware,
    createStore,
    compose,
  } from 'redux';

import Router from './router';
import rootReducer from './root-reducer';

const store = createStore(rootReducer, {}, compose(
    applyMiddleware(),
    // used to allow redux devtools to intereact with the store
    window.devToolsExtension ? window.devToolsExtension() : (f: any)  => f,
));

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('app'),
);
