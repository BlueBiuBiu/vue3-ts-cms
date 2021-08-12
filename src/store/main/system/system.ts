import { Module } from "vuex"

import { getPageListData } from "@/service/main/system/system"
import { IUserInfo } from "./types"
import { IRootState } from "../../type"

const systemModule: Module<IUserInfo, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userListCount: 0
    }
  },
  getters: {},
  mutations: {
    changeUserList(state, payload: any) {
      state.userList = payload
    },
    changeUserListCount(state, payload: any) {
      state.userListCount = payload
    }
  },
  actions: {
    async getUserListAction({ commit }, payload: any) {
      const pageResult = await getPageListData(payload.pageUrl, payload.queryInfo)
      console.log(pageResult)
      const { list, totalCount } = pageResult.data
      commit("changeUserList", list)
      commit("changeUserListCount", totalCount)
    }
  },
  modules: {}
}

export default systemModule
