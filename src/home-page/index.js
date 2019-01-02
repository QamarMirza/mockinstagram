import React from 'react';
import { LoginForm } from './login-form';
import Logo from '../assets/QLogo.jpg'
import { getProfile, SET_TOKEN } from './actions';
import { connect } from 'react-redux';

import './styles.css';

export const HomePageComponent = ({ getProfile, setToken }: any) => {

  const submit = (payload) => {
    setToken(payload);
    getProfile();
  }

  return (
    <div className="Auth-Container">
      <img
        src={Logo}
        alt=""
        height="200"
        width="200"
      />
      <div>
        You will need to Authenticate before using this app.
    </div>
      <LoginForm submitAction={submit} />
    </div>
  );
}


const mapDispatchToProps = {
  getProfile: getProfile.request,
  setToken: SET_TOKEN,
};

export const HomePage = connect(null, mapDispatchToProps)(HomePageComponent);