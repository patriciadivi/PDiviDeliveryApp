/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import NavBar from '../components/NavBar';
import { getUserLocalStorage } from '../helpers/localStorage';
import ordersStore from '../store/orders.store';

function SellerOrders() {
  const { orders, fetchSellerOrders } = ordersStore((state) => state);
  const { id, token } = getUserLocalStorage();

  useEffect(() => {
    fetchSellerOrders(id, token);
  }, []);

  return (
    <div>
      <NavBar page="seller" />
      { orders.length > 0 ? (
        orders.map((o) => (
          <Link to={ `/seller/orders/${o.id}` } key={ o.id }>
            <div>
              <p>Pedido</p>
              <p
                data-testid={ `seller_orders__element-order-id-${o.id}` }
              >
                {o.id}
              </p>
            </div>
            <p
              data-testid={ `seller_orders__element-delivery-status-${o.id}` }
            >
              {o.status}
            </p>
            <div>
              <p
                data-testid={ `seller_orders__element-order-date-${o.id}` }
              >
                {moment(o.saleDate).format('DD/MM/YYYY')}
              </p>
              <p
                data-testid={ `seller_orders__element-card-price-${o.id}` }
              >
                {`R$ ${o.totalPrice.replace(/\./g, ',')}`}
              </p>
            </div>
            <p
              data-testid={ `seller_orders__element-card-address-${o.id}` }
            >
              {`${o.deliveryAddress}, ${o.deliveryNumber}`}
            </p>
          </Link>
        ))
      ) : (
        <p>Você não possui nenhum pedido</p>
      )}
    </div>
  );
}

export default SellerOrders;
