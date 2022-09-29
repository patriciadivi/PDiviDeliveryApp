import create from 'zustand';
import { devtools } from 'zustand/middleware';

const userStore = create(devtools(
  (set) => ({
    name: '',
    email: '',
    password: '',
    role: '',
    token: '',

    handleChange: ({ target: { name, value } }) => set(() => (
      { [name]: value }
    )),

    clearPassword: () => {
      set(() => ({
        password: '',
      }));
    },

    clearAllState: () => {
      set(() => ({
        name: '',
        email: '',
        password: '',
        role: '',
        token: '',
      }));
    },

    setTokenLogin: (valueName, valueRole, valueToken) => {
      set(() => ({
        name: valueName,
        role: valueRole,
        token: valueToken,
      }));
    },

    setTokenRegister: (valueRole, valueToken) => {
      set(() => ({
        role: valueRole,
        token: valueToken,
      }));
    },

  }),
));

export default userStore;
