import React from 'react';
import moment from 'moment';
import ordersStore from '../store/orders.store';

function OrderDetail() {
  const { orderDetail } = ordersStore((state) => state);

  const testId = 'customer_order_details__element-order-details-label-delivery-status';
  return (
    <div>
      <p
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        {`PEDIDO: ${orderDetail.id};`}

      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {`P. Vend: ${orderDetail.seller?.name}`}

      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {`${moment(orderDetail.saleDate).format('DD/MM/YYYY')}`}
      </p>
      <p
        data-testid={ testId }
      >
        {`${orderDetail.status}`}
      </p>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled={ orderDetail.status !== 'Entregue' }
      >
        Marcar como entregue
      </button>
    </div>
  );
}

export default OrderDetail;
