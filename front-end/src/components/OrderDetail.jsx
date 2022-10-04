import React from 'react';
import moment from 'moment';
import PropType from 'prop-types';
// import { useNavigate } from 'react-router-dom';
import ordersStore from '../store/orders.store';
import makeRequest from '../helpers/axios.integration';
import { getUserLocalStorage } from '../helpers/localStorage';

function OrderDetail({ page }) {
  const { orderDetail } = ordersStore((state) => state);
  const { token } = getUserLocalStorage();
  // const navigate = useNavigate();

  const handleClick = async (newStatus) => {
    await makeRequest(`sales/${orderDetail.id}`, 'put', { status: newStatus }, token);
    // navigate(0);
  };

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
            onClick={ () => handleClick('Preparando') }
          >
            PREPARAR PEDIDO
          </button>
          <button
            type="button"
            data-testid="seller_order_details__button-dispatch-check"
            disabled={ orderDetail.status !== 'Preparando' }
            onClick={ () => handleClick('Em Trânsito') }
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
          onClick={ () => handleClick('Entregue') }
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
