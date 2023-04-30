/* eslint-disable react/jsx-curly-spacing */
import PropType from 'prop-types';
import productsStore from '../store/products.store';
import STable from '../styles/components/STable';

function Table({ page }) {
  const { cart, removeFromCart } = productsStore((state) => state);

  return (
    <STable>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Item Imagem</th>
          {page === 'checkout' && <th>Remover Item</th>}
        </tr>
      </thead>
      <tbody>
        {cart?.map((c, index) => (
          <tr key={c.name}>
            <td
              data-testid={
                page === 'checkout'
                  ? `customer_checkout__element-order-table-item-number-${index}`
                  : `customer_order_details__element-order-table-item-number-${index}`
              }
            >
              {index + 1}
            </td>
            <td
              data-testid={
                page === 'checkout'
                  ? `customer_checkout__element-order-table-name-${index}`
                  : `customer_order_details__element-order-table-name-${index}`
              }
              className="tdNome"
            >
              {c.name}
            </td>
            <td
              data-testid={
                page === 'checkout'
                  ? `customer_checkout__element-order-table-quantity-${index}`
                  : `customer_order_details__element-order-table-quantity-${index}`
              }
            >
              {page === 'checkout' ? c.quantity : c.SalesProducts.quantity}
            </td>
            <td
              data-testid={
                page === 'checkout'
                  ? `customer_checkout__element-order-table-unit-price-${index}`
                  : `customer_order_details__element-order-table-unit-price-${index}`
              }
            >

              {/* <span>R$ </span> */}
              {c.price.replace(/\./g, ',')}
            </td>
            <td
              data-testid={
                page === 'checkout'
                  ? `customer_checkout__element-order-table-sub-total-${index}`
                  : `customer_order_details__element-order-table-sub-total-${index}`
              }
            >
              {/* <span>R$ </span> */}
              {page === 'checkout'
                ? Number(c.price * c.quantity)
                  .toFixed(2)
                  .replace(/\./g, ',')
                : Number(c.price * c.SalesProducts.quantity)
                  .toFixed(2)
                  .replace(/\./g, ',')}
            </td>

            <td>
              {
                page === 'checkout' ? <img
                  src={c.urlImage}
                  alt={c.name}
                /> : <img
                  src={c.SalesProducts.urlImage}
                  alt={c.SalesProducts.name}
                />
              }
            </td>

            {page === 'checkout' && (
              <td>
                <button
                  type="button"
                  value={c.name}
                  data-testid={`customer_checkout__element-order-table-remove-${index}`}
                  onClick={() => removeFromCart(c.id)}
                >
                  Remover
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </STable>
  );
}

Table.propTypes = {
  page: PropType.string.isRequired,
};

export default Table;
