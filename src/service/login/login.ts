import { skyRequest } from "../index"

import { IAccount, ILoginResult, IDataType } from "@/service/login/type"

enum LoginApi {
  AccountLogin = "login",
  LoginUserInfo = "/users/", // 用法: /users/1
  USerMenus = "/role/" // 用法: role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return skyRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return skyRequest.get<IDataType>({
    url: LoginApi.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return skyRequest.get<IDataType>({
    url: LoginApi.USerMenus + id + "/menu",
    showLoading: false
  })
}
