/* eslint-disable max-len */
import React from 'react';
import moment from 'moment';
import PropType from 'prop-types';
// import { useNavigate } from 'react-router-dom';
import {
  Confetti, Calendar, UserSwitch,
} from '@phosphor-icons/react';

import ordersStore from '../store/orders.store';
import makeRequest from '../helpers/axios.integration';
import { getUserLocalStorage } from '../helpers/localStorage';
import SOrderDetail from '../styles/components/SOrderDetail';
// import CheckAnimation from './lottieComponents/CheckDelivery';
import SwitchAnimation from './SwitchAnimation';

function OrderDetail({ page }) {
  const { orderDetail } = ordersStore((state) => state);
  const { token } = getUserLocalStorage();
  // const currentPathname = window.location.pathname;
  // const navigate = useNavigate();

  const handleClick = async (newStatus) => {
    await makeRequest(`sales/${orderDetail.id}`, 'put', { status: newStatus }, token);
    // navigate(0);
  };

  // const testId = `${page}_order_details__element-order-details-label-delivery-status`;
  return (
    <SOrderDetail>
      <div className={ `${page}OrderDetail` }>
        <SwitchAnimation status={ orderDetail.status } component="OrderDetail" />
        <div className="OrderDetailSpan">
          <span>
            <Confetti
              className="OrderDetailSpan"
              color="#350b4b"
              size={ 32 }
              weight="duotone"
            />
            <p
              data-testid={ `${page}_order_details__element-order-details-label-order-id` }
            >
              {`PEDIDO N°: 00${orderDetail.id}`}
            </p>
          </span>

          {page === 'customer' && (
            <span>
              <UserSwitch size={ 32 } color="#350b4b" weight="duotone" />
              <p
                data-testid={ `${page}_order_details__element-order-details-label-seller-name` }
              >
                {`P. Vend: ${orderDetail.seller?.name}`}
              </p>
            </span>
          )}

          <span>
            <Calendar size={ 32 } color="#350b4b" margin="0.8rem 0" weight="duotone" />
            <p
              data-testid={
                `${page}_order_details__element-order-details-label-order-date`
              }
            >
              {`${moment(orderDetail.saleDate).format('DD/MM/YYYY')}`}
            </p>
          </span>

          {/* exemplo */}
          {/* <span>
            {
              orderDetail.status === 'Entregue' ? (
                <>
                  <HourglassSimpleHigh color="#350b4b" size={ 32 } weight="duotone" />
                  <p>apareci</p>
                </>
              ) : (null)
            }

            <p
              data-testid={ testId }
            >
              {`${orderDetail.status}`}
            </p>
          </span> */}

        </div>
        {page === 'seller' && (
          <div className="seller">
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

        {page === 'customer' && (

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
    </SOrderDetail>
  );
}

OrderDetail.propTypes = {
  page: PropType.string.isRequired,
};

export default OrderDetail;
