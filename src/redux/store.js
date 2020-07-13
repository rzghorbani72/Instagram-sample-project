import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import combineReducer from './reducer';
import rootSaga from './saga';
const _initialState = {};
const sagaMiddleware = createSagaMiddleware();

export const initStore = (initialState = _initialState) => {

    const middlewares = [sagaMiddleware];
    const enhancers = [applyMiddleware(...middlewares)];

    let store = createStore(combineReducer(), initialState, ...enhancers);
    store.runSagaTask = () => {
        store.sagaTask = sagaMiddleware.run(rootSaga);
    };

    store.runSagaTask();
    return store;
};
