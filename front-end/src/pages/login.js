import React, { useState } from 'react';
// import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/login.store';
import makeRequest from '../helpers/axios.integration';

const validator = require('email-validator');

function Login() {
  const { handleChange,
    email, password, valueButton,
    setTokenLogin, cleanState } = useStore((state) => state);
  const seis = 6;
  const [dataString, setDataString] = useState(false);
  const navigate = useNavigate();
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

  // useEffect(() => {
  //   // inc(count).then((res) => console.log(res));
  //   console.log(count);
  // }, [inc]);
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('<<llll');
    try {
      const makeRequestRes = await makeRequest('login', 'post', { email, password });
      setTokenLogin(makeRequestRes[1].token);
      navigate('/customer/products');
      cleanState();
    } catch (err) {
      console.log(err, '<<<<');
      setDataString(true);
    }
  };

  return (
    <section className="user-login-area">
      <form>
        <h1>Área do usuário</h1>
        {/* <h1>{ count }</h1> */}
        { valueButton?.map((e) => <p key={ e }>{e}</p>) }
        {/* <h1>{ dataString }</h1> */}
        <label htmlFor="email-input">
          <input
            data-testid="common_login__input-email"
            className="login__login_input"
            type="text"
            name="email"
            onChange={ handleChange }
            placeholder="email"
          />
        </label>
        <label htmlFor="password-input">
          <input
            data-testid="common_login__input-password"
            type="password"
            name="password"
            onChange={ handleChange }
            placeholder="Senha"
          />
        </label>
        {
          (dataString)
            ? (
              <div data-testid="common_login__element-invalid-email">
                <p>
                  404 - Not found
                </p>
              </div>
            )
            : null
        }
        <button
          data-testid="common_login__button-login"
          type="submit"
          onClick={ handleLogin }
          disabled={ !(validator.validate(email) && password.length >= seis) }
        >
          Login
        </button>
        <button
          data-testid="common_login__button-register"
          type="submit"
          onClick={ () => navigate('/register') }
        >
          Ainda não tenho conta
        </button>
      </form>
    </section>
  );
}

export default Login;
