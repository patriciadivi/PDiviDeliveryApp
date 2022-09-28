import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropType from 'prop-types';
import useStore from '../store/user.store';
import makeRequest from '../helpers/axios.integration';

const validator = require('email-validator');

function UserForm({ page }) {
  const {
    handleChange,
    email,
    password,
    name,
    cleanState,
    setTokenLogin,
    setTokenRegister } = useStore(
    (state) => state,
  );
  const seis = 6;
  const doze = 12;
  const [dataString, setDataString] = useState(false);
  const [dataCreateString, setDataCreateString] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const makeRequestRes = await makeRequest('login', 'post', {
        email,
        password,
      });
      // console.log(makeRequestRes[0].name);
      setTokenLogin(makeRequestRes[0].name, makeRequestRes[1].token);
      navigate('/customer/products');
      cleanState();
    } catch (err) {
      setDataString(true);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const makeRequestRes = await makeRequest('register', 'post', {
        name,
        email,
        password,
      });
      console.log(makeRequestRes, '<<<<<<<aqui');
      setTokenRegister(makeRequestRes.token);
      setDataCreateString(true);
      navigate('/customer/products');
      cleanState();
    } catch (err) {
      setDataString(true);
    }
  };

  return (
    <section className="userLoginArea">
      <form>
        <h1>{ page === 'login' ? 'Área do usuário' : 'Cadastre-se' }</h1>
        {page === 'register' && (
          <label htmlFor="name">
            <input
              data-testid="common_register__input-name"
              type="text"
              name="name"
              onChange={ handleChange }
              placeholder="Nome Completo"
            />
          </label>
        )}
        <label htmlFor="email">
          <input
            data-testid={ `common_${page}__input-email` }
            type="text"
            name="email"
            onChange={ handleChange }
            placeholder="Email"
          />
        </label>
        <label htmlFor="password-input">
          <input
            data-testid={ `common_${page}__input-password` }
            type="password"
            name="password"
            onChange={ handleChange }
            placeholder="Senha"
          />
        </label>
        {dataString ? (
          <div
            data-testid={
              page === 'login'
                ? 'common_login__element-invalid-email'
                : 'common_register__element-invalid_register'
            }
          >
            <p>{page === 'login' ? 'Usuário não encontrado' : 'Dados inválidos'}</p>
          </div>
        ) : null}

        {
          dataCreateString ? (
            'Cadastrado com sucesso'
          ) : null
        }
        <button
          data-testid={ `common_${page}__button-${page}` }
          type="submit"
          onClick={ page === 'login' ? handleLogin : handleRegister }
          disabled={
            page === 'login'
              ? !(validator.validate(email) && password.length >= seis)
              : !(validator.validate(email)
                && password.length >= seis
                && name.length >= doze)
          }
        >
          { page === 'login' ? 'Login' : 'Cadastrar' }
        </button>
        { page === 'login' ? (
          <button
            data-testid="common_login__button-register"
            type="submit"
            onClick={ () => navigate('/register') }
          >
            Ainda não tenho conta
          </button>
        ) : null}
      </form>
    </section>
  );
}

UserForm.propTypes = {
  page: PropType.string.isRequired,
};

export default UserForm;
