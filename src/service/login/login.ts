import { skyRequest } from "../index"

import { IAccount, ILoginResult, IDataType } from "@/service/login/type"

export function accountLoginRequest(account: IAccount) {
  return skyRequest.post<IDataType<ILoginResult>>({
    url: "/login",
    data: account
  })
}
