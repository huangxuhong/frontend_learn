import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputVal: "hello",
  },
  mutations: {
    change(state, payload) {
      state.inputVal = payload;
    },
  },
  actions: {
  },
  modules: {
  }
})
