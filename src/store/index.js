import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const FOOD_DATA_RESULTES = 'FOOD_DATA_RESULTES'

export default new Vuex.Store({
  state: {
    food_data_results: null,
  },
  getters: {
    get_food_data_results: (state) => () => state.food_data_results,
  },
  mutations: {
    [FOOD_DATA_RESULTES](state, value) {
      state.food_data_results = value
    },
  },
  actions: {
    set_food_data_results({ commit }, value) {
      commit(FOOD_DATA_RESULTES, value)
    },
  },
})
