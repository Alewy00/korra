import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from "./components/root";
import {login, signup, logout} from "./actions/session_actions"

document.addEventListener("DOMContentLoaded", () => {
let store;
if (window.currentUser) {
  const preloadedState = {
    entities: {
      users: { [window.currentUser]: window.currentUser }
    },
    session: { currentUser: window.currentUser}
  };
  store = configureStore(preloadedState);
  delete window.currentUser;
} else {
  store = configureStore();
}

  ReactDOM.render(<Root store={store} />, root);
});