import create from 'zustand';
import { devtools } from 'zustand/middleware';
import makeRequest from '../helpers/axios.integration';

const ordersStore = create(devtools(
  (set) => ({
    orderDetail: {},
    orders: [],

    fetchOrderDetail: async (orderId, token) => {
      const response = await makeRequest(`sales/${orderId}`, 'get', {}, token);
      set({ orderDetail: response }, false, 'fetchOrderDetail');
    },

    fetchUserOrders: async (userId, token) => {
      const response = await makeRequest('customer/orders', 'post', { userId }, token);
      set({ orders: response }, false, 'fetchUserOrders');
    },

  }),
));

export default ordersStore;
