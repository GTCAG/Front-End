import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StripeProvider } from "react-stripe-elements";

//Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { userReducer } from "./store/reducers/userReducer";

const store = createStore(userReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
      <App />
    </StripeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
