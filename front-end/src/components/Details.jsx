import React from 'react';

import PropType from 'prop-types';
import { Coins } from '@phosphor-icons/react';
import ordersStore from '../store/orders.store';

function Details({ page }) {
  const { orderDetail } = ordersStore((state) => state);
  const { totalPrice, products } = orderDetail;

  return (
    <section className={ `${page}Details` }>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((p, index) => (
            <tr key={ p.name }>
              <td
                data-testid={
                  `${page}_order_details__element-order-table-item-number-${index}`
                }
              >
                { page }
                {index + 1}
              </td>
              <td
                data-testid={
                  `${page}_order_details__element-order-table-name-${index}`
                }
              >

                { p.name }
              </td>
              <td
                data-testid={
                  `${page}_order_details__element-order-table-quantity-${index}`
                }
              >
                {p.SalesProducts.quantity}
              </td>
              <td
                data-testid={
                  `${page}_order_details__element-order-table-unit-price-${index}`
                }
              >
                {p.price.replace(/\./g, ',')}
              </td>
              <td
                data-testid={
                  `${page}_order_details__element-order-table-sub-total-${index}`
                }
              >
                {Number(p.price * p.SalesProducts.quantity).toFixed(2)
                  .replace(/\./g, ',')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <span>
        <Coins
          color="#350b4b"
          size={ 40 }
          weight="duotone"
        />
        <h2
          data-testid={ `${page}_order_details__element-order-total-price` }
        >
          <strong>
            R$
          </strong>
          {`${totalPrice?.replace(/\./g, ',')}`}
        </h2>
      </span>
    </section>
  );
}

Details.propTypes = {
  page: PropType.string.isRequired,
};

export default Details;
