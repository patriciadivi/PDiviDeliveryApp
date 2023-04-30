import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/Details';
import NavBar from '../components/NavBar';
import OrderDetail from '../components/OrderDetail';
import { getUserLocalStorage } from '../helpers/localStorage';
import ordersStore from '../store/orders.store';

import SDetails from '../styles/components/SDetails';
import SSellerOrderDetail from '../styles/pages/SSellerOrderDetail';

function SellerOrderDetail() {
  const { orderId } = useParams();
  const { token } = getUserLocalStorage();
  const { orderDetail, fetchOrderDetail } = ordersStore((state) => state);

  useEffect(() => {
    fetchOrderDetail(orderId, token);
  }, [orderDetail]);

  return (
    <>
      <NavBar page="seller" />

      <SSellerOrderDetail>
        <div>
          <h2>Detalhes do Pedido</h2>
          <OrderDetail page="seller" />
          <SDetails>
            <Details page="seller" />
          </SDetails>
        </div>
      </SSellerOrderDetail>
    </>
  );
}

export default SellerOrderDetail;
