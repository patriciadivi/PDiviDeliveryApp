/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/Details';
import NavBar from '../components/NavBar';
import OrderDetail from '../components/OrderDetail';
import { getUserLocalStorage } from '../helpers/localStorage';
import ordersStore from '../store/orders.store';
import SCustomerOrderDetail from '../styles/pages/SCustomerOrderDetail';
import SDetails from '../styles/components/SDetails';

function CustomerOrderDetail() {
  const { orderId } = useParams();
  const { token } = getUserLocalStorage();
  const { orderDetail, fetchOrderDetail } = ordersStore((state) => state);

  useEffect(() => {
    fetchOrderDetail(orderId, token);
  }, [orderDetail]);

  return (
    <>
      <NavBar page="customer" />
      <SCustomerOrderDetail>
        <div>
          <h2>Detalhes do Pedido</h2>
          <OrderDetail page="customer" />
          <SDetails>
            <Details page="customer" />
          </SDetails>
        </div>
      </SCustomerOrderDetail>
    </>
  );
}

export default CustomerOrderDetail;
