import { skyRequest } from "../../index"
import { IDataType } from "@/service/type"

export function getPageListData(url: string, queryInfo: any) {
  return skyRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}

export function createData(url: string, newData: any) {
  return skyRequest.post<IDataType>({
    url,
    data: newData
  })
}

export function editData(url: string, editData: any) {
  return skyRequest.patch<IDataType>({
    url,
    data: editData
  })
}

export function delData(url: string) {
  return skyRequest.delete<IDataType>({
    url
  })
}
