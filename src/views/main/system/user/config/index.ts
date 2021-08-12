import { IForm } from "@/base-ui/form/types"
import { ITableProps } from "@/base-ui/table/types"

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

export const tablePropConfig: ITableProps[] = [
  { prop: "name", label: "名字", minWidth: 100, align: "center", slotName: "name" },
  { prop: "realname", label: "真实姓名", minWidth: 100, align: "center", slotName: "realname" },
  { prop: "cellphone", label: "电话号码", minWidth: 100, align: "center", slotName: "cellphone" },
  { prop: "enable", label: "状态", minWidth: 60, align: "center", slotName: "enable" },
  { prop: "createAt", label: "创建时间", minWidth: 150, align: "center", slotName: "createAt" },
  { prop: "updateAt", label: "更新时间", minWidth: 150, align: "center", slotName: "updateAt" }
]
