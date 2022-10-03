import create from 'zustand';
import { devtools } from 'zustand/middleware';

const userStore = create(devtools(
  (set) => ({
    id: '',
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
        id: '',
        name: '',
        email: '',
        password: '',
        role: '',
        token: '',
      }), false, 'clearAllState'),

    setTokenLogin: (valueId, valueName, valueRole, valueToken) => set(() => (
      {
        id: valueId,
        name: valueName,
        role: valueRole,
        token: valueToken,
      }), false, 'setTokenLogin'),

    setTokenRegister: (valueId, valueRole, valueToken) => set(() => (
      {
        id: valueId,
        role: valueRole,
        token: valueToken,
      }), false, 'setTokenRegister'),

  }),
));

export default userStore;
