import React from 'react';
import reducer from '../reducers/index';
import {createStore, applyMiddleware, compose} from 'redux';
import DevTools from '../pages/DevTools/DevTools';
import promiseMiddleware from './promiseMiddleware';

const middlewares = process.env.NODE_ENV === 'development' ?
    [applyMiddleware(promiseMiddleware), DevTools.instrument()] :
    [applyMiddleware(promiseMiddleware)];

var initialize = (initialState = {}) => {
    const store = createStore(reducer, initialState, compose(...middlewares));

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }
    return store;
};

export default initialize;
