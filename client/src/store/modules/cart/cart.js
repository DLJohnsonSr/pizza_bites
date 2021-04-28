import {
  isItemInCart,
  ifQuantityZeroRemove,
  findItemById,
  removeItemById,
  generateRandomId,
} from "./cartService";

import Dinero from "dinero.js";
// Dinero.globalLocale = "en-US";
Dinero.globalFormat = "0.00";

const state = () => ({
  isCartOpen: false,
  cart: [],
});

const getters = {
  getItemTotal: (state) => (id) => {
    const item = findItemById(state, id);
    return Dinero({ amount: item.price * 100 })
      .multiply(item.quantity)
      .toFormat();
  },
  getNumberOfItems: (state) => {
    return state.cart.reduce((sum, item) => sum + +item.quantity, 0);
  },
  getCartSubtotal: (state, getters) => {
    return state.cart.reduce((sum, item) => {
      return Dinero({ amount: sum * 100 })
        .add(Dinero({ amount: getters.getItemTotal(item.id) * 100 }))
        .toFormat();
    }, 0);
  },
};

const mutations = {
  openCart(state) {
    state.cart.isCartOpen = true;
  },
  toggleCart(state) {
    state.isCartOpen = !state.isCartOpen;
  },
  pushItemToCart(state, item) {
    item.id = generateRandomId(state);
    state.cart.push(item);
  },
  incrementItemQuantity(state, payload) {
    const item = findItemById(state, payload.id);
    item.quantity++;
  },
  decrementItemQuantity(state, payload) {
    const item = findItemById(state, payload.id);

    item.quantity--;
    ifQuantityZeroRemove(state, item);
  },
  editItemQuantity(state, payload) {
    const item = findItemById(state, payload.id);
    item.quantity = payload.quantity;
    ifQuantityZeroRemove(state, item);
  },
  updateItemInCart(state, payload) {
    const item = findItemById(state, payload.id);
    for (const key in payload) {
      if (key !== "id" && Object.hasOwnProperty.call(item, key)) {
        item[key] = payload[key];
      }
    }
  },
  removeCartItem(state, payload) {
    removeItemById(state, payload.id);
  },
  emptyCart(state) {
    state.cart = [];
  },
};

const actions = {
  addItemToCart({ state, commit }, item) {
    const result = isItemInCart(state, item);
    if (result.boolean) {
      item.id = result.id;
      commit("updateItemInCart", item);
    } else {
      commit("pushItemToCart", item);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
