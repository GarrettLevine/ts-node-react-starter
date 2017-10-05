import * as types from './types';

interface InitialState {
    data: string;
}

const initialState: InitialState = {
    data: '',
};

function helloReducer(s: InitialState = initialState, a: Action): InitialState {
    switch (a.type) {
        default: {
            return s;
          }
    }
}

export default helloReducer;
