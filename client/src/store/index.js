import Vue from "vue";
import Vuex from "vuex";
import cart from "./modules/cart/cart";
import menu from "./modules/menu/menu";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    menu
  }
});
