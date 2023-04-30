/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Calendar, Coins, HouseLine } from '@phosphor-icons/react';

import NavBar from '../components/NavBar';
import { getUserLocalStorage } from '../helpers/localStorage';
import ordersStore from '../store/orders.store';
import SSellerOrders from '../styles/pages/SSellerOrders';
import NotFound from '../components/NotFound';

function SellerOrders() {
  const { orders, fetchSellerOrders } = ordersStore((state) => state);
  const { id, token } = getUserLocalStorage();

  useEffect(() => {
    fetchSellerOrders(id, token);
  }, []);

  return (
    <>
      <div>
        <NavBar page="seller" />
      </div>
      <SSellerOrders>
        <section className="sectionOrder">
          { orders.length > 0 ? (
            orders.map((o) => (

              <Link
                to={ `/seller/orders/${o.id}` }
                key={ o.id }
                className="linkOrder"
              >
                <div>
                  <p data-testid={ `seller_orders__element-order-id-${o.id}` }>
                    {`Número da ordem: 0${o.id}`}
                  </p>

                  <p
                    data-testid={ `seller_orders__element-delivery-status-${o.id}` }
                    className="orderStatus"
                  >
                    {o.status}
                  </p>

                  <span>
                    <Calendar color="#350b4b" weight="duotone" size={ 32 } />
                    <p
                      data-testid={
                        `seller_orders__element-order-date-${o.id}`
                      }
                    >
                      {
                        `${moment(o.saleDate).format('DD/MM/YYYY')}`
                      }
                    </p>

                  </span>

                  <span>
                    <Coins color="#350b4b" weight="duotone" size={ 32 } />
                    <p data-testid={ `seller_orders__element-card-price-${o.id}` }>
                      {` R$ ${o.totalPrice.replace(/\./g, ',')}`}
                    </p>

                  </span>
                  <span>
                    <HouseLine color="#350b4b" weight="duotone" size={ 32 } />
                    <p data-testid={ `seller_orders__element-card-address-${o.id}` }>
                      {` ${o.deliveryAddress}, ${o.deliveryNumber}`}
                    </p>
                  </span>

                </div>
              </Link>

            ))
          ) : (
            <NotFound />
          )}
        </section>
      </SSellerOrders>
    </>
  );
}

export default SellerOrders;
