import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';


const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
})


const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
      path={path}
      exact={exact}
      render={props =>
        !loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );

  const Protected = ({component: Component, path, loggedIn, exact}) => (
    <Route
        path={path}
        render={props =>
          loggedIn ? <Component {...props} /> : <Redirect to="/login" />
        }
    />
)
 
  
  export const AuthRoute = withRouter(
    connect(
      mapStateToProps,
      null
    )(Auth)
  );

  export const ProtectedRoute = withRouter(
    connect(
      mapStateToProps,
      null
    )(Protected)
  );