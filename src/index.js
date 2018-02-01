// @flow

import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";

import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";

// import reducers from './reducers' // Or wherever you keep your reducers

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    // ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

const root = document.getElementById("root");

if (root === undefined || root === null) {
  throw new Error("There is no root");
}

ReactDOM.render(
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" render={() => <div>Home</div>} />
      </div>
    </ConnectedRouter>
  </Provider>,
  root
);

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();

// ReactDOM.render(<App />, root);
