import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create(devtools((set) => ({
  name: '',
  email: '',
  password: '',
  token: '',

  handleChange: ({ target: { name, value } }) => set(() => (
    { [name]: value }
  )),

  cleanState: () => {
    set(() => ({
      email: '',
      password: '',
    }));
  },

  setTokenLogin: (valueName, valueToken) => {
    set(() => ({
      name: valueName,
      token: valueToken,
    }));
  },

})));

export default useStore;
