/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import EmailValidator from 'email-validator';
import NavBar from '../components/NavBar';
import makeRequest from '../helpers/axios.integration';
import { getUserLocalStorage } from '../helpers/localStorage';
import adminStore from '../store/admin.store';

function AdminManage() {
  const { token } = getUserLocalStorage();
  const [display, setDisplay] = useState(false);

  const {
    name,
    email,
    password,
    role,
    users,
    fetchAllUsers,
    handleChange,
    clearAllState,
  } = adminStore((store) => store);

  const tresMil = 3000;
  const seis = 6;
  const doze = 12;

  const handleClick = async () => {
    try {
      const newUser = await makeRequest('admin', 'post', {
        name, email, password, role }, token);
      console.log(newUser);
      clearAllState();
    } catch (error) {
      console.log(error);
      setDisplay(true);
      setTimeout(() => { setDisplay(false); }, tresMil);
    }
  };

  const handleDelete = async (params) => {
    const deletedUser = await makeRequest('admin', 'delete', {
      name: params.name, email: params.email }, token);
    console.log(deletedUser);
  };

  const roles = {
    administrator: 'Administrador',
    seller: 'P. Vendedora',
    customer: 'Cliente',
  };

  useEffect(() => {
    fetchAllUsers(token);
  }, [users]);

  return (
    <div>
      <NavBar page="admin" />
      <h2>Cadastrar novo usuário</h2>
      { display && (
        <p
          data-testid="admin_manage__element-invalid-register"
        >
          Registro já existente!
        </p>
      )}
      <div>
        <label htmlFor="name">
          Nome
          <input
            data-testid="admin_manage__input-name"
            name="name"
            type="text"
            value={ name }
            placeholder="Nome e sobrenome"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            data-testid="admin_manage__input-email"
            name="email"
            type="text"
            value={ email }
            placeholder="seu-email@site.com.br"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            data-testid="admin_manage__input-password"
            name="password"
            type="password"
            value={ password }
            placeholder="********"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="role">
          Tipo
          <select
            data-testid="admin_manage__select-role"
            name="role"
            onChange={ handleChange }
            value={ role }
          >
            <option value="customer">Usuário</option>
            <option value="seller">Vendedor</option>
            <option value="administrator">Administrador</option>
          </select>
        </label>
        <button
          data-testid="admin_manage__button-register"
          type="button"
          disabled={
            !(EmailValidator.validate(email)
            && password.length >= seis
            && name.length >= doze)
          }
          onClick={ () => handleClick() }
        >
          CADASTRAR
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          { users?.map((u, index) => (
            <tr key={ u.id }>
              <td
                data-testid={ `admin_manage__element-user-table-item-number-${index}` }
              >
                {u.id}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-name-${index}` }
              >
                {u.name}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-email-${index}` }
              >
                {u.email}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-role-${index}` }
              >
                {roles[u.role]}
              </td>
              <td>
                <button
                  data-testid={ `admin_manage__element-user-table-remove-${index}` }
                  type="button"
                  onClick={ () => handleDelete({ name: u.name, email: u.email }) }
                >
                  Excluir
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminManage;
