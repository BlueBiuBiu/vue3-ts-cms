import { Module } from "vuex"

import { getPageListData, createData, editData, delData } from "@/service/main/system/system"
import { IUserInfo } from "./types"
import { IRootState } from "../../type"

const systemModule: Module<IUserInfo, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersListCount: 0,
      roleList: [],
      roleListCount: 0,
      goodsList: [],
      goodsListCount: 0
    }
  },
  getters: {
    pageList(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}ListCount`]
      }
    }
  },
  mutations: {
    changeUsersList(state, payload: any) {
      state.usersList = payload
    },
    changeUsersListCount(state, payload: any) {
      state.usersListCount = payload
    },
    changeRoleList(state, payload: any) {
      state.roleList = payload
    },
    changeRoleListCount(state, payload: any) {
      state.roleListCount = payload
    },
    changeGoodsList(state, payload: any) {
      state.goodsList = payload
    },
    changeGoodsListCount(state, payload: any) {
      state.goodsListCount = payload
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
    },
    async createDataAction({ dispatch }, payload: any) {
      //创建数据
      const { pageName, newData } = payload
      const url = `/${pageName}`
      createData(url, newData)

      //请求新数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editDataAction({ dispatch }, payload: any) {
      const { pageName, id, newData } = payload
      const url = `/${pageName}/${id}`
      editData(url, newData)

      //请求新数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async delDataAction({ dispatch }, payload: any) {
      const { pageName, id } = payload
      const url = `/${pageName}/${id}`
      delData(url)

      //请求新数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  },
  modules: {}
}

export default systemModule
