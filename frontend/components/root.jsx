import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { App } from "./App";
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import {Route, Link} from 'react-router-dom';
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      {/* <Route path="/signup" component={SignupFormContainer}/> */}
      <ProtectedRoute path="/" component={App} />
    </HashRouter>
  </Provider>
);

export default Root;