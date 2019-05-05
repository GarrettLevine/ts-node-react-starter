import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

import Router from './router';
import rootReducer from './root-reducer';

const store: Redux.Store<{}> = Redux.createStore(rootReducer, {}, Redux.compose(
    Redux.applyMiddleware(),
    // used to allow redux devtools to interact with the store
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <Router />
    </ReactRedux.Provider>,
    document.getElementById('app'),
);
