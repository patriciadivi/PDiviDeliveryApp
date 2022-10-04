/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getUserLocalStorage } from '../helpers/localStorage';
import ProductCard from '../components/ProductCard';
import productsStore from '../store/products.store';

function CustomerProducts() {
  const navigate = useNavigate();
  const { token } = getUserLocalStorage();
  const {
    cart,
    products,
    fetchProducts,
  } = productsStore((state) => state);

  useEffect(() => {
    fetchProducts(token);
  }, []);

  const totalPrice = cart
    .reduce((prev, curr) => prev + (parseFloat(curr.price) * curr.quantity), 0)
    .toFixed(2).replace(/\./g, ',');

  return (
    <div>
      <NavBar page="customer" />
      { products.length > 0
          && products.map((product) => (
            <div key={ product.id }>
              <ProductCard product={ product } />
            </div>
          ))}
      <button
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ () => navigate('/customer/checkout') }
        disabled={ totalPrice === '0,00' }
      >
        <p
          data-testid="customer_products__checkout-bottom-value"
        >
          {`${totalPrice}`}
        </p>
      </button>
    </div>
  );
}

export default CustomerProducts;
