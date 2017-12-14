import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from '../reducer/index.js';

let middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
    // middlewares.push(createLogger());
}


const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
);


export default store;