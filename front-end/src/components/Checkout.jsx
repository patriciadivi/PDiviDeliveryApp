/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import { useNavigate } from 'react-router-dom';
import productsStore from '../store/products.store';
import checkoutStore from '../store/checkout.store';
import { getUserLocalStorage } from '../helpers/localStorage';
import makeRequest from '../helpers/axios.integration';

// const moment = require('moment-timezone');

function Checkout({ page }) {
  const { cart, removeFromCart } = productsStore((state) => state);
  const { sellers, fetchSellers, setOrderId } = checkoutStore((state) => state);
  const { id, token } = getUserLocalStorage();
  const [sellerId, setSellerId] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const tresMil = 3000;

  const totalPrice = cart
    .reduce((prev, curr) => prev + (parseFloat(curr.price) * curr.quantity), 0)
    .toFixed(2);

  // const ddmmyyyy = moment.utc().format('DD/MM/YYYY');

  const handleCheckout = async () => {
    const order = await makeRequest('checkout/order', 'post', {
      userId: id, sellerId, totalPrice, deliveryAddress, deliveryNumber }, token);
    console.log(order);
    setOrderId(order.id);
    setDisplay(true);
    setTimeout(() => {
      navigate(`customer/orders/${order.id}`);
    }, tresMil);
  };

  useEffect(() => {
    fetchSellers(token);
  }, []);

  return (
    <div>
      {
        display && (
          <div>
            <h1>Compra realizada com sucesso!</h1>
          </div>
        )
      }
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
          {cart?.map(({ id: cartId, name, price, quantity }, index) => (
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
                      onClick={ () => removeFromCart(cartId) }
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
        {`Total: ${totalPrice.replace(/\./g, ',')}`}
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
              onChange={ ({ target: { value } }) => setSellerId(Number(value)) }
            >
              <option value="seller">Escolha seu vendedor</option>
              {
                sellers.map((seller) => (
                  <option key={ seller.id } value={ seller.id }>{seller.name}</option>
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
              onChange={ ({ target: { value } }) => setDeliveryAddress(value) }
            />
          </label>
          <label htmlFor="number">
            Número
            <input
              type="text"
              data-testid="customer_checkout__input-address-number"
              placeholder="Digite seu número"
              onChange={ ({ target: { value } }) => setDeliveryNumber(value) }
            />
          </label>
          <button
            type="button"
            data-testid="customer_checkout__button-submit-order"
            onClick={ () => handleCheckout() }
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

// const today = new Date();

// function formatDate(date, format) {
//     const map = {
//         mm: date.getMonth() + 1,
//         dd: date.getDate(),
//         aa: date.getFullYear().toString().slice(-2),
//         aaaa: date.getFullYear()
//     }

//     return format.replace(/mm|dd|aa|aaaa/gi, matched => map[matched])
// }

// formatDate(today, 'mm/dd/aaaa');
