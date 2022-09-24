import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create(devtools((set) => ({
  email: '',
  password: '',
  display: 'none',
  token: '',

  handleChange: ({ target: { name, value } }) => set(() => (
    { [name]: value }
  )),

  cleanState: () => {
    set(() => ({
      email: '',
      password: '',
      display: 'none',
    }));
  },

  setTokenLogin: (value) => {
    set(() => ({
      token: value,
    }));
  },

})));

export default useStore;
