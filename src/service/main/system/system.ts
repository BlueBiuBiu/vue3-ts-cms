import { skyRequest } from "../../index"
import { IDataType } from "@/service/type"

export function getPageListData(url: string, queryInfo: any) {
  return skyRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}
