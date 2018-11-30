// application's entry

import React, {Component} from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import {Router, Route, IndexRoute, browserHistory, Link} from "react-router";
import DevTools from "./pages/DevTools/DevTools";
import getRoutes from "./router/router.js";
import initStore from "./config/store";

const devTools = process.env.NODE_ENV === 'development' ? <DevTools /> : null;
const store = initStore();
render((
    <Provider store={store}>
        <div id="index-page-box">
            <Router history={browserHistory} routes={getRoutes(store)}/>
            {/*{devTools}*/}
        </div>
    </Provider>
), document.getElementById('app'));
