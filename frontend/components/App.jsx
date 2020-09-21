import GreetingContainer from "./greeting/greeting_container";
import React from "react";
import {Route, Link} from 'react-router-dom';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { AuthRoute } from '../util/route_util';

export const App = () => (
  <div className="login-model">
    <header>
      {/* <Link to="/" className="home">
        Home
      </Link> */}
      <LoginFormContainer />
    </header>
    <Switch>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);