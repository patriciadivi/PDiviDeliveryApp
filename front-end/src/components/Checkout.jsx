/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropType from 'prop-types';
import productsStore from '../store/products.store';
import checkoutStore from '../store/checkout.store';
import { getUserLocalStorage } from '../helpers/localStorage';

function Checkout({ page }) {
  const { cart, removeFromCart } = productsStore((state) => state);
  const { sellers, fetchSellers } = checkoutStore((state) => state);
  const { token } = getUserLocalStorage();

  const totalPrice = cart
    .reduce((prev, curr) => prev + (parseFloat(curr.price) * curr.quantity), 0)
    .toFixed(2).replace(/\./g, ',');

  useEffect(() => {
    fetchSellers(token);
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map(({ id, name, price, quantity }, index) => (
            <tr key={ name }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                { index + 1 }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-name-${index}`
                }
              >
                { name }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-quantity-${index}`
                }
              >
                { quantity }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                { price.replace(/\./g, ',') }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                { Number(price * quantity).toFixed(2).replace(/\./g, ',')}
              </td>
              {
                page === 'checkout' && (
                  <td>
                    <button
                      type="button"
                      value={ name }
                      data-testid={
                        `customer_checkout__element-order-table-remove-${index}`
                      }
                      onClick={ () => removeFromCart(id) }
                    >
                      Remover
                    </button>
                  </td>
                )
              }
            </tr>
          ))}
        </tbody>
      </table>
      <h2 data-testid="customer_checkout__element-order-total-price">
        {`Total: ${totalPrice}`}
      </h2>
      { page === 'checkout' && (
        <div>
          <h3>Detalhes e Endereço para Entrega</h3>
          <label htmlFor="seller">
            P. Vendedora Responsável
            <select
              data-testid="customer_checkout__select-seller"
              name="seller"
              id="seller"
            >
              <option value="seller">Escolha seu vendedor</option>
              {
                sellers.map((seller) => (
                  <option key={ seller.id } value={ seller.name }>{seller.name}</option>
                ))
              }
            </select>
          </label>
          <label htmlFor="address">
            Endereço
            <input
              type="text"
              data-testid="customer_checkout__input-address"
              placeholder="Digite seu endereço"
            />
          </label>
          <label htmlFor="number">
            Número
            <input
              type="text"
              data-testid="customer_checkout__input-address-number"
              placeholder="Digite seu número"
            />
          </label>
          <button
            type="button"
            data-testid="customer_checkout__button-submit-order"
          >
            Finalizar pedido
          </button>
        </div>
      )}
    </div>
  );
}

Checkout.propTypes = {
  page: PropType.string.isRequired,
};

export default Checkout;
