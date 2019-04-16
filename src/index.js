import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reduxPromise from "redux-promise";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import "semantic-ui-css/semantic.min.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(reduxPromise, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
