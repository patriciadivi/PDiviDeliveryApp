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
            Produtos
          </Link>
        )}
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to={ `/${page}/orders` }
        >
          {page === 'customer' && 'Meus Pedidos'}
          {page === 'seller' && 'Pedidos'}
        </Link>
        <span
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {`Olá, ${name}`}
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
