import { combineReducers } from 'redux';

import HelloReducer from './hello/hello-reducer';

const rootReducer = combineReducers({
    helloReducer: HelloReducer,
});

export default rootReducer;
