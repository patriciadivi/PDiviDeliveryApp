import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import { getUserLocalStorage, removeUserLocalStorage } from '../helpers/localStorage';
import userStore from '../store/user.store';

function NavBar({ page }) {
  const { clearAllState } = userStore((state) => state);
  const { name } = getUserLocalStorage();

  const handleLogout = () => {
    clearAllState();
    removeUserLocalStorage();
  };

  return (
    <div>
      <nav>
        { page === 'customer' && (
          <Link
            data-testid="customer_products__element-navbar-link-products"
            to="/customer/products"
          >
            PRODUTOS
          </Link>
        )}
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to={ page !== 'admin' ? `/${page}/orders` : '/admin/manage' }
        >
          {page === 'customer' && 'MEUS PEDIDOS'}
          {page === 'seller' && 'PEDIDOS'}
          {page === 'admin' && 'GERENCIAR USUÁRIOS'}
        </Link>
        <span
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {`${name.toUpperCase()}`}
        </span>
        <Link
          to="/"
          onClick={ handleLogout }
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </Link>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  page: PropType.string.isRequired,
};

export default NavBar;
