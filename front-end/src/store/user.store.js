import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create(devtools(
  (set) => ({
    name: '',
    email: '',
    password: '',
    role: '',
    token: '',

    handleChange: ({ target: { name, value } }) => set(() => (
      { [name]: value }
    )),

    cleanState: () => {
      set(() => ({
        password: '',
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

// useStore.persist.setOptions({
//   name: 'user',
// });

export default useStore;
