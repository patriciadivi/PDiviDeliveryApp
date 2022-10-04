/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import productsStore from '../store/products.store';
import checkoutStore from '../store/checkout.store';
import { getUserLocalStorage } from '../helpers/localStorage';
import makeRequest from '../helpers/axios.integration';
import Table from './Table';

function Checkout() {
  const { id, token } = getUserLocalStorage();
  const { cart } = productsStore((state) => state);
  const { sellers, fetchSellers } = checkoutStore((state) => state);
  const [sellerId, setSellerId] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const tresMil = 3000;

  const totalPrice = cart
    .reduce((prev, curr) => prev + (parseFloat(curr.price) * curr.quantity), 0)
    .toFixed(2);

  const handleCheckout = async () => {
    const order = await makeRequest('checkout/order', 'post', {
      userId: id,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      cart }, token);
    setDisplay(true);
    setTimeout(() => {
      navigate(`/customer/orders/${order.id}`);
    }, tresMil);
  };

  useEffect(async () => {
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
      <Table page="checkout" />
      <h2
        data-testid="customer_checkout__element-order-total-price"
      >
        {`Total: ${totalPrice.replace(/\./g, ',')}`}
      </h2>
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
    </div>
  );
}

export default Checkout;
