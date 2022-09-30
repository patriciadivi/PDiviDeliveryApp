import create from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';
import makeRequest from '../helpers/axios.integration';

const productsStore = create(devtools(
  (set, get) => ({
    products: [],
    cart: [],

    fetchProducts: async (token) => {
      const response = await makeRequest('customer/products', 'get', {}, token);
      set({ products: await response }, false, 'fetchProducts');
    },

    removeFromCart: (id) => set(produce((draft) => {
      const newCart = get().cart.filter((item) => item.id !== id);
      draft.cart = newCart;
    }), false, 'remove'),

    updateCart: (id, item) => {
      const cartItemIndex = get().cart.findIndex((p) => p.id === id);
      if (item.quantity === 0) {
        return get().removeFromCart(id);
      }
      return set(produce((state) => {
        state.cart[cartItemIndex] = item;
      }), false, 'update');
    },

    insertOnCart: (item) => set(produce((state) => {
      state.cart.push(item);
    }), false, 'insert'),

  }),
));

export default productsStore;

// addToCart: (id) => {
//   const cartItemIndex = get().cart.findIndex((item) => item.id === id);
//   const product = get().products.find((item) => item.id === id);
//   if (cartItemIndex < 0) {
//     return set(produce((draft) => {
//       draft.cart.push({ ...product, quantity: 1 });
//     }), false, 'addToCart');
//   }
//   return set(produce((draft) => {
//     draft.cart[cartItemIndex].quantity += 1;
//   }), false, 'addTocart');
// },
// subFromCart: (id) => {
//   const cartItemIndex = get().cart.findIndex((item) => item.id === id);
//   const cartItem = get().cart.find((item) => item.id === id);
//   if (cartItemIndex > menosUm && cartItem.quantity > 1) {
//     return set(produce((draft) => {
//       draft.cart[cartItemIndex].quantity -= 1;
//     }), false, 'subFromCart');
//   }
//   if (cartItemIndex > menosUm) {
//     return get().removeFromCart(id);
//   }
// },
// editQuantity: (id, value) => {
//   const cartItemIndex = get().cart.findIndex((item) => item.id === id);
//   const product = get().products.find((item) => item.id === id);
//   if (cartItemIndex < 0) {
//     return set(produce((state) => {
//       state.cart.push({ ...product, quantity: value });
//     }), false, 'editQuantity');
//   }
//   return set(produce((state) => {
//     state.cart[cartItemIndex].quantity = value;
//   }), false, 'editQuantity');
// },
