import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Calendar, Coins, SealCheck, Siren } from '@phosphor-icons/react';
import { getUserLocalStorage } from '../helpers/localStorage';
import ordersStore from '../store/orders.store';
import NavBar from '../components/NavBar';
import SCustomerOrders from '../styles/pages/SCustomerOrders';
import NotFound from '../components/NotFound';

function CustomerOrders() {
  const { orders, fetchUserOrders } = ordersStore((state) => state);
  const { id, token } = getUserLocalStorage();

  useEffect(() => {
    fetchUserOrders(id, token);
  }, []);

  return (
    <>
      <div>
        <NavBar page="customer" />
      </div>
      <SCustomerOrders>
        <section>
          { orders.length > 0 ? (
            orders.map((o) => (
              <div key={ o.id }>
                <Link
                  to={ `/customer/orders/${o.id}` }
                  key={ o.id }
                >
                  <div>
                    <span>
                      <SealCheck size={ 32 } color="#350b4b" weight="duotone" />
                      <p
                        data-testid={ `customer_orders__element-order-id-${o.id}` }
                      >
                        {`Pedido 0${o.id}`}
                      </p>
                    </span>

                    <span>
                      <Siren size={ 32 } color="#350b4b" weight="duotone" />
                      <p
                        data-testid={ `customer_orders__element-delivery-status-${o.id}` }
                      >
                        { o.status }
                      </p>
                    </span>

                    <span>
                      <Calendar size={ 32 } color="#350b4b" weight="duotone" />
                      <p
                        data-testid={ `customer_orders__element-order-date-${o.id}` }
                      >
                        {moment(o.saleDate).format('DD/MM/YYYY')}
                      </p>
                    </span>

                    <span>
                      <Coins size={ 32 } color="#350b4b" weight="duotone" />
                      <p
                        data-testid={ `customer_orders__element-card-price-${o.id}` }
                      >
                        {`R$ ${o.totalPrice.replace(/\./g, ',')}`}
                      </p>
                    </span>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <NotFound />
          )}
        </section>
      </SCustomerOrders>
    </>
  );
}

export default CustomerOrders;
