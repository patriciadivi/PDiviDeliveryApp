/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
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
    totalPrice,
    fetchProducts,
  } = productsStore((state) => state);

  useEffect(() => {
    fetchProducts(token);
  }, []);

  const total = totalPrice().replace(/\./, ',');

  return (
    <div>
      <NavBar />
      { products.length > 0
          && products.map((product) => (
            <div key={ uuidv4() }>
              <ProductCard product={ product } />
            </div>
          ))}
      <button
        data-testid="customer_products__checkout-button-cart"
        type="button"
        onClick={ () => navigate('/costumer/checkout') }
        disabled={ !cart.length > 0 }
      >
        <p data-testid="customer_products__checkout-bottom-value">{total}</p>
      </button>
    </div>
  );
}

export default CustomerProducts;
