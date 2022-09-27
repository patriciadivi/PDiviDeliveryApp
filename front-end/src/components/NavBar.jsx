import React from 'react';
// import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import useStore from '../store/user.store';

function NavBar() {
  const { name } = useStore((state) => state);

  // useEffect(() => {
  //   const descryToken = decryptTokenfunc(token);
  //   console.log(descryToken);
  // });

  return (
    <div>
      <nav>
        <Link
          to="/customer/products"
        >
          <span
            data-testid="customer_products__element-navbar-link-products"
          >
            Produtos

          </span>

        </Link>

        <Link
          to="/login"
        >
          <span
            data-testid="customer_products__element-navbar-link-orders"
          >
            Meus Pedidos

          </span>

        </Link>
        <Link
          to="/"
        >
          <span
            data-testid="customer_products__element-navbar-user-full-name"
          >
            Olá,
            {' '}
            { name }
          </span>
        </Link>
        <Link
          to="/login"
        >
          <span
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair

          </span>

        </Link>
      </nav>
      <h1>NavBar</h1>
    </div>
  );
}

export default NavBar;
