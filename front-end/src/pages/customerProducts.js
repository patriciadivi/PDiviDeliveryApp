/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import NavBar from '../components/NavBar';
import { getUserLocalStorage } from '../helpers/localStorage';
import ProductCard from '../components/ProductCard';
import productsStore from '../store/products.store';

function CustomerProducts() {
  const { token } = getUserLocalStorage();
  const {
    products,
    totalPrice,
    fetchProducts,
  } = productsStore((state) => state);

  useEffect(() => {
    fetchProducts(token);
  }, []);

  const total = totalPrice();

  return (
    <div>
      <NavBar />
      { products.length > 0
          && products.map((product) => (
            <div key={ uuidv4() }>
              <ProductCard product={ product } />
            </div>
          ))}
      <Link
        data-testid="customer_products__checkout-bottom-value"
        to="/customer/checkout"
      >
        {total.replace(/\./, ',')}
      </Link>
    </div>
  );
}

export default CustomerProducts;
