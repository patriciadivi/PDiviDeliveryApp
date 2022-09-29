import React from 'react';
import { Link } from 'react-router-dom';
import { removeUserLocalStorage } from '../helpers/localStorage';
import userStore from '../store/user.store';

function NavBar() {
  const { name, clearAllState } = userStore((state) => state);

  const handleLogout = () => {
    clearAllState();
    removeUserLocalStorage();
  };

  return (
    <div>
      <nav>
        <Link
          data-testid="customer_products__element-navbar-link-products"
          to="/customer/products"
        >
          Produtos
        </Link>
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to="/customer/orders"
        >
          Meus Pedidos
        </Link>
        <p
          data-testid="customer_products__element-navbar-user-full-name"
        >
          Olá,
          {' '}
          { name }
        </p>
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

export default NavBar;
