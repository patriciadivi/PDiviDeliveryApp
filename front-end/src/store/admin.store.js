import create from 'zustand';
import { devtools } from 'zustand/middleware';
import makeRequest from '../helpers/axios.integration';

const adminStore = create(devtools(
  (set) => ({
    name: '',
    email: '',
    password: '',
    role: 'customer',
    users: [],

    fetchAllUsers: async (token) => {
      const response = await makeRequest('admin', 'get', {}, token);
      set({ users: await response }, false, 'fetchAllUsers');
    },

    handleChange: ({ target: { name, value } }) => set(() => (
      { [name]: value }
    ), false, 'handleChange'),

    clearAllState: () => set(() => (
      {
        name: '',
        email: '',
        password: '',
        role: 'customer',
      }), false, 'clearAllState'),
  }),
));

export default adminStore;
