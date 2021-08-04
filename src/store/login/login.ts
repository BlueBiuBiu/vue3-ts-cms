import type { Module } from "vuex"

import { accountLoginRequest } from "@/service/login/login"
import { ILoginState } from "./type"
import { IRootState } from "../type"
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      id: "",
      token: ""
    }
  },
  getters: {},
  mutations: {},
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      const loginResult = await accountLoginRequest(payload)
      console.log(loginResult)
    }
  },
  modules: {}
}

export default loginModule
