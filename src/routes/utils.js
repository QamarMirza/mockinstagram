import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRouteComponent = ({ Component, isAuth, redirect, ...other }: any) => {
  console.log(isAuth);
  return (
    <Route {...other} render={(props) => (
      isAuth === true
        ? <Component {...props} />
        : <Redirect to={redirect} />
    )} />)
}