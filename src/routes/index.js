import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { HomePage } from '../home-page';
import { App } from '../App';
import { connect } from 'react-redux'

const Profile = () => (
  <div>
    Profile Page :)
  </div>
);

const mapStateToProps = (state) => {
  return {
    isAuth: state.user.isAuth,
  };
}

const PrivateRouteComponent = ({ Component, isAuth, redirect, ...other }) => {
  console.log(isAuth);
  return (
    <Route {...other} render={(props) => (
      isAuth === true
        ? <Component {...props} />
        : <Redirect to={redirect} />
    )} />)
}


export const PrivateRoute = connect(mapStateToProps, null)(PrivateRouteComponent);


export const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={HomePage} />
      <PrivateRoute exact path="/profile" Component={Profile} redirect={'/'} />
      <PrivateRoute exact path="/app" Component={App} redirect={'/'} />

    </Switch>
  );
};

