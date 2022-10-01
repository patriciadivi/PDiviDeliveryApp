import create from 'zustand';
import { devtools } from 'zustand/middleware';
// import produce from 'immer';
import makeRequest from '../helpers/axios.integration';

const checkoutStore = create(devtools(
  (set) => ({
    sellers: [],
    orderId: '',

    fetchSellers: async (token) => {
      const response = await makeRequest('checkout', 'post', { role: 'seller' }, token);
      set({ sellers: await response }, false, 'fetchSellers');
    },

    setOrderId: (id) => {
      set({ orderId: id });
    },
  }),
));

export default checkoutStore;
