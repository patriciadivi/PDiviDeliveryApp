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
      name: '',
      email: '',
      password: '',
    }));
  },

  setTokenLogin: (value) => {
    set(() => ({
      token: value,
    }));
  },

})));

export default useStore;
