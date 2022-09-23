// import React, { useEffect } from 'react';
import React from 'react';
// import makeRequest from '../helpers/axios.integration';
// import { Navigate } from 'react-router-dom';

function Login() {
  // useEffect(() => {
  //   makeRequest(
  //     'login',
  //     'post',
  //     {
  //       email: 'adm@deliveryapp.com',
  //       password: '--adm2@21!!--' },
  //   ).then((res) => console.log(res));
  // }, []);

  // if (isLogged) return <Navigate to="/matches" />;

  return (
    <section className="user-login-area">
      <form>
        <h1>Área do usuário</h1>
        <label htmlFor="email-input">
          <input
            data-testid="common_login__input-email"
            className="login__login_input"
            type="text"
            // value={ email }
            // onChange={ ({ target: { value } }) => setEmail(value) }
            placeholder="Login"
          />
        </label>
        <label htmlFor="password-input">
          <input
            data-testid="common_login__input-password"
            type="password"
            // value={ password }
            // onChange={ ({ target: { value } }) => setPassword(value) }
            placeholder="Senha"
          />
        </label>
        {/* {
            (!failedTryLogin)
              ? (
                <p data-testid="login__input_invalid_login_alert">
                  {
                    `O endereço de e-mail ou a senha não estão corretos.
                    Por favor, tente novamente.`
                  }
                </p>
              )
              : null
          } */}
        <button
          data-testid="common_login__button-login"
          type="submit"
        >
          Entrar
        </button>
        <button
          data-testid="common_login__button-register"
          type="submit"
        >
          Ainda não tem conta
        </button>
      </form>
    </section>
  );
}

export default Login;
