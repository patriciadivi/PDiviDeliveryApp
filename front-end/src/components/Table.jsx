import React from 'react';
import PropType from 'prop-types';
import productsStore from '../store/products.store';

function Table({ page }) {
  const { cart, removeFromCart } = productsStore((state) => state);
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          {page === 'checkout' && <th>Remover Item</th>}
        </tr>
      </thead>
      <tbody>
        {cart?.map((c, index) => (
          <tr key={ c.name }>
            <td
              data-testid={
                page === 'checkout'
                  ? `customer_checkout__element-order-table-item-number-${index}`
                  : `customer_order_details__element-order-table-item-number-${index}`
              }
            >
              { index + 1 }
            </td>
            <td
              data-testid={
                page === 'checkout'
                  ? `customer_checkout__element-order-table-name-${index}`
                  : `customer_order_details__element-order-table-name-${index}`
              }
            >
              { c.name }
            </td>
            <td
              data-testid={
                page === 'checkout'
                  ? `customer_checkout__element-order-table-quantity-${index}`
                  : `customer_order_details__element-order-table-quantity-${index}`
              }
            >
              { page === 'checkout' ? c.quantity : c.SalesProducts.quantity }
            </td>
            <td
              data-testid={
                page === 'checkout'
                  ? `customer_checkout__element-order-table-unit-price-${index}`
                  : `customer_order_details__element-order-table-unit-price-${index}`
              }
            >
              { c.price.replace(/\./g, ',') }
            </td>
            <td
              data-testid={
                page === 'checkout'
                  ? `customer_checkout__element-order-table-sub-total-${index}`
                  : `customer_order_details__element-order-table-sub-total-${index}`
              }
            >
              { page === 'checkout'
                ? Number(c.price * c.quantity).toFixed(2)
                  .replace(/\./g, ',')
                : Number(c.price * c.SalesProducts.quantity).toFixed(2)
                  .replace(/\./g, ',')}
            </td>
            {
              page === 'checkout' && (
                <td>
                  <button
                    type="button"
                    value={ c.name }
                    data-testid={
                      `customer_checkout__element-order-table-remove-${index}`
                    }
                    onClick={ () => removeFromCart(c.id) }
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
  );
}

Table.propTypes = {
  page: PropType.string.isRequired,
};

export default Table;
