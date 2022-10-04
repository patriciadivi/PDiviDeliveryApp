import React from 'react';
import moment from 'moment';
import PropType from 'prop-types';
import ordersStore from '../store/orders.store';

function OrderDetail({ page }) {
  const { orderDetail } = ordersStore((state) => state);

  const testId = `${page}_order_details__element-order-details-label-delivery-status`;
  return (
    <div>
      <p
        data-testid={ `${page}_order_details__element-order-details-label-order-id` }
      >
        {`PEDIDO: ${orderDetail.id};`}

      </p>
      { page === 'customer' && (
        <p
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          {`P. Vend: ${orderDetail.seller?.name}`}

        </p>
      )}
      <p
        data-testid={ `${page}_order_details__element-order-details-label-order-date` }
      >
        {`${moment(orderDetail.saleDate).format('DD/MM/YYYY')}`}
      </p>
      <p
        data-testid={ testId }
      >
        {`${orderDetail.status}`}
      </p>
      { page === 'seller' && (
        <div>
          <button
            type="button"
            data-testid="seller_order_details__button-preparing-check"
            disabled={ orderDetail.status !== 'Pendente' }
            // onClick={}
          >
            PREPARAR PEDIDO
          </button>
          <button
            type="button"
            data-testid="seller_order_details__button-dispatch-check"
            disabled={ orderDetail.status !== 'Preparando' }
            // onClick={}
          >
            SAIU PARA ENTREGA
          </button>
        </div>
      )}
      { page === 'customer' && (
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          disabled={ orderDetail.status !== 'Em Trânsito' }
          // onClick={}
        >
          Marcar como entregue
        </button>
      )}
    </div>
  );
}

OrderDetail.propTypes = {
  page: PropType.string.isRequired,
};

export default OrderDetail;
