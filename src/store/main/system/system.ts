import { Module } from "vuex"

import { getPageListData } from "@/service/main/system/system"
import { IUserInfo } from "./types"
import { IRootState } from "../../type"

const systemModule: Module<IUserInfo, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userListCount: 0,
      roleList: [],
      roleListCount: 0
    }
  },
  getters: {},
  mutations: {
    changeUsersList(state, payload: any) {
      state.userList = payload
    },
    changeUsersListCount(state, payload: any) {
      state.userListCount = payload
    },
    changeRoleList(state, payload: any) {
      state.roleList = payload
    },
    changeRoleListCount(state, payload: any) {
      state.roleListCount = payload
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageUrl = `/${payload.pageName}/list`
      const pageName = payload.pageName.slice(0, 1).toUpperCase() + payload.pageName.slice(1)
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      console.log(pageResult)
      const { list, totalCount } = pageResult.data
      commit(`change${pageName}List`, list)
      commit(`change${pageName}ListCount`, totalCount)
    }
  },
  modules: {}
}

export default systemModule
