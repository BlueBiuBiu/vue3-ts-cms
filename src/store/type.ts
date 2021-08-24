import type { ILoginState } from "./login/type"
import type { IUserInfo } from "./main/system/types"
export interface IRootState {
  name: string
  age: number
  entireDepartment: string[]
  entireRole: string[]
}

export interface IModule {
  login: ILoginState
  system: IUserInfo
}

export type IStoreType = IRootState & IModule
