import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from '@phosphor-icons/react';
import NavBar from '../components/NavBar';
import { getUserLocalStorage } from '../helpers/localStorage';
import ProductCard from '../components/ProductCard';
import productsStore from '../store/products.store';
import SCustomerProducts from '../styles/pages/SCustomerProducts';

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
    <SCustomerProducts>

      <NavBar page="customer" />

      <main>
        <div>

          {products.length > 0
            && products.map((product) => (
              <div key={ product.id }>
                <ProductCard product={ product } />
              </div>
            ))}

        </div>
        <div className="totalPriceButton">
          <button
            data-testid="customer_products__button-cart"
            type="button"
            onClick={ () => navigate('/customer/checkout') }
            disabled={ totalPrice === '0,00' }
          >
            <ShoppingCart size={ 32 } color="#350b4b" weight="duotone" />
            <strong>
              R$
            </strong>
            <p
              data-testid="customer_products__checkout-bottom-value"
            >

              {` ${totalPrice} `}

            </p>
          </button>
        </div>
      </main>

    </SCustomerProducts>
  );
}

export default CustomerProducts;
