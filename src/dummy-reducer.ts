import * as redux from 'redux';

const initialState: any = {};

function dummyReducer(state: Object = initialState, action: redux.Action) {
  switch (action.type) {
    default:
    return state;
  }
}

export default dummyReducer;
