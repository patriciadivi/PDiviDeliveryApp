import React from 'react';
import UserForm from '../components/UserForm';
import LoginSComponent from '../styles/login.style';

function Login() {
  return (
    <LoginSComponent>
      <UserForm page="login" />
    </LoginSComponent>
  );
}

export default Login;
