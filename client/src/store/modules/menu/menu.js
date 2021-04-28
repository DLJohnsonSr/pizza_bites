import { menu } from "../../../../testAPI";

const state = {
  menu
};

const mutations = {
  populateMenu(state, payload) {
    state.menu = [...payload];
  }
};

const actions = {
  getMenu({ commit }, payload) {
    // get menu from api
    // commit api menu to local menu
    commit("populateMenu", thisMenu);
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
