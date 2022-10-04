import React from 'react';
import UserForm from '../components/UserForm';
import RegisterSComponent from '../styles/register.style';

function Register() {
  return (
    <RegisterSComponent>
      <UserForm page="register" />
    </RegisterSComponent>
  );
}

export default Register;
