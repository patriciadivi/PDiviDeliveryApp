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
    ), false, 'handleChange'),

    clearPassword: () => set(() => (
      { password: '' }
    ), false, 'clearPassword'),

    clearAllState: () => set(() => (
      {
        name: '',
        email: '',
        password: '',
        role: '',
        token: '',
      }), false, 'clearAllState'),

    setTokenLogin: (valueName, valueRole, valueToken) => set(() => (
      {
        name: valueName,
        role: valueRole,
        token: valueToken,
      }), false, 'setTokenLogin'),

    setTokenRegister: (valueRole, valueToken) => set(() => (
      {
        role: valueRole,
        token: valueToken,
      }), false, 'setTokenRegister'),

  }),
));

export default userStore;
