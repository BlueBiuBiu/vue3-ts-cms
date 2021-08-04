import { createStore } from "vuex"
import login from "./login/login"

import { IRootState } from "./type"

const store = createStore<IRootState>({
  state() {
    return {
      name: "sky",
      age: 16
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export default store
