import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from '../home-page';
import { App } from '../App';
import { connect } from 'react-redux'
import { PrivateRouteComponent } from './utils';
import { Profile } from '../profile';



const mapStateToProps = (state) => {
  return {
    isAuth: state.user.isAuth,
  };
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

