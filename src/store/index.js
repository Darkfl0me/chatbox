import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../Reducers';
import * as Actions from '../Actions';
import logger from 'redux-logger';

const middleWare = [];
middleWare.push(thunk);
middleWare.push(logger);

export default function configureStore(initialState) {
    const store = createStore(
        reducers,
        initialState,
        composeWithDevTools(
            applyMiddleware(...middleWare)
        )
    );
    store.dispatch(Actions.verifyAuth());
    return store;
}
/*
const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
);

export default store;
*/