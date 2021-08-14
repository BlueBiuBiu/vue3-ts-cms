import { IForm } from "@/base-ui/form/types"
import { ITableItem } from "@/base-ui/table/types"

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: "id",
      type: "input",
      label: "id",
      placeholder: "请输入id"
    },
    {
      field: "name",
      type: "input",
      label: "用户名"
    },
    {
      field: "password",
      type: "password",
      label: "密码"
    },
    {
      field: "sport",
      type: "select",
      label: "选择",
      options: [
        {
          label: "足球",
          value: "football"
        },
        {
          label: "篮球",
          value: "basketball"
        }
      ]
    },
    {
      field: "createTime",
      type: "datePicker",
      label: "日期"
    }
  ],
  labelWidth: "50px",
  itemLabelWidth: "60px",
  // colLayout: {
  //   span: 8
  // },
  itemStyle: {
    padding: "0 30px"
  }
}

export const tablePropConfig: ITableItem = {
  ITableProps: [
    { prop: "name", label: "角色名", minWidth: 100, align: "center", slotName: "name" },
    { prop: "intro", label: "权限介绍", minWidth: 100, align: "center", slotName: "intro" },
    { prop: "createAt", label: "创建时间", minWidth: 150, align: "center", slotName: "createAt" },
    { prop: "updateAt", label: "更新时间", minWidth: 150, align: "center", slotName: "updateAt" },
    { label: "操作", minWidth: 120, align: "center", slotName: "operate" }
  ],
  showIndex: true,
  showSelection: true
}
