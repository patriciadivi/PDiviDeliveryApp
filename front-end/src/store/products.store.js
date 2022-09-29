import create from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';
import makeRequest from '../helpers/axios.integration';

const menosUm = -1;

const productsStore = create(devtools(
  (set, get) => ({
    products: [],
    cart: [],

    fetchProducts: async (token) => {
      const response = await makeRequest('customer/products', 'get', {}, token);
      set({ products: await response }, false, 'fetchProdcuts');
    },
    removeFromCart: (id) => set(produce((draft) => {
      const newCart = get().cart.filter((item) => item.id !== id);
      draft.cart = newCart;
    }), false, 'removeFromCart'),
    addToCart: (id) => {
      const cartItemIndex = get().cart.findIndex((item) => item.id === id);
      const product = get().products.find((item) => item.id === id);
      if (cartItemIndex < 0) {
        return set(produce((draft) => {
          draft.cart.push({ ...product, quantity: 1 });
        }), false, 'addToCart');
      }
      return set(produce((draft) => {
        draft.cart[cartItemIndex].quantity += 1;
      }), false, 'addTocart');
    },
    subFromCart: (id) => {
      const cartItemIndex = get().cart.findIndex((item) => item.id === id);
      const cartItem = get().cart.find((item) => item.id === id);
      if (cartItemIndex > menosUm && cartItem.quantity > 1) {
        return set(produce((draft) => {
          draft.cart[cartItemIndex].quantity -= 1;
        }), false, 'subFromCart');
      }
      if (cartItemIndex > menosUm) {
        return get().removeFromCart(id);
      }
    },
    editQuantity: (id, value) => {
      const cartItemIndex = get().cart.findIndex((item) => item.id === id);
      const product = get().products.find((item) => item.id === id);
      if (cartItemIndex < 0) {
        return set(produce((draft) => {
          draft.cart.push({ ...product, quantity: value });
        }), false, 'editQuantity');
      }
      return set(produce((draft) => {
        draft.cart[cartItemIndex].quantity = value;
      }), false, 'editQuantity');
    },
    totalPrice: () => get().cart
      .reduce((prev, curr) => prev + (parseFloat(curr.price) * curr.quantity), 0)
      .toFixed(2),
  }),
));

export default productsStore;
