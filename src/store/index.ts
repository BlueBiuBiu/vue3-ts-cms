import { createStore, useStore as useVuexStore } from "vuex"
import { Store } from "vuex"
import login from "./login/login"
import system from "./main/system/system"

import { getPageListData } from "@/service/main/system/system"
import { IRootState, IStoreType } from "./type"

const store = createStore<IRootState>({
  state() {
    return {
      name: "sky",
      age: 16,
      entireDepartment: [],
      entireRole: [],
      entireMenus: []
    }
  },
  getters: {},
  mutations: {
    changeDepartment(state, payload) {
      state.entireDepartment = payload
    },
    changeRole(state, payload) {
      state.entireRole = payload
    },
    changeMenu(state, payload) {
      state.entireMenus = payload
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      const departmentResult = await getPageListData("/department/list", {
        offset: 0,
        size: 1000
      })
      const roleResult = await getPageListData("/role/list", {
        offset: 0,
        size: 1000
      })

      const menuResult = await getPageListData("/menu/list", {})
      commit("changeDepartment", departmentResult.data.list)
      commit("changeRole", roleResult.data.list)
      commit("changeMenu", menuResult.data.list)
    }
  },
  modules: {
    login,
    system
  }
})

export function setupStore() {
  store.dispatch("login/loadLocalLogin")
  store.dispatch("getInitialDataAction")
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
