import { IForm } from "@/base-ui/form/types"
import { ITableItem } from "@/base-ui/table/types"

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "用户名"
    },
    {
      field: "cellphone",
      type: "input",
      label: "电话号码"
    },
    {
      field: "createAt",
      type: "datePicker",
      label: "日期"
    }
  ],
  labelWidth: "50px",
  itemLabelWidth: "70px",
  // colLayout: {
  //   span: 8
  // },
  itemStyle: {
    padding: "0 30px"
  }
}

export const tablePropConfig: ITableItem = {
  ITableProps: [
    { prop: "name", label: "商品名称", minWidth: 80, align: "center" },
    { prop: "oldPrice", label: "原价格", minWidth: 80, align: "center", slotName: "oldPrice" },
    { prop: "newPrice", label: "现价格", minWidth: 80, align: "center" },
    { prop: "imgUrl", label: "商品图片", minWidth: 100, align: "center", slotName: "image" },
    { prop: "status", label: "状态", minWidth: 100, align: "center", slotName: "status" },
    { prop: "createAt", label: "创建时间", minWidth: 150, align: "center", slotName: "createAt" },
    { prop: "updateAt", label: "更新时间", minWidth: 150, align: "center", slotName: "updateAt" },
    { label: "操作", minWidth: 120, align: "center", slotName: "operate" }
  ]
}
