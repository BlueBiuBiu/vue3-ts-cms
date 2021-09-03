import type { ILoginState } from "./login/type"
import type { IUserInfo } from "./main/system/types"
import type { IDashboardState } from "./main/analysis/types"
export interface IRootState {
  name: string
  age: number
  entireDepartment: string[]
  entireRole: string[]
}

export interface IModule {
  login: ILoginState
  system: IUserInfo
  dashboardModule: IDashboardState
}

export type IStoreType = IRootState & IModule
