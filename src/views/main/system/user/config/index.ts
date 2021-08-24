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
    { prop: "name", label: "名字", minWidth: 100, align: "center", slotName: "name" },
    { prop: "realname", label: "真实姓名", minWidth: 100, align: "center", slotName: "realname" },
    { prop: "cellphone", label: "电话号码", minWidth: 100, align: "center", slotName: "cellphone" },
    { prop: "enable", label: "状态", minWidth: 60, align: "center", slotName: "enable" },
    { prop: "createAt", label: "创建时间", minWidth: 150, align: "center", slotName: "createAt" },
    { prop: "updateAt", label: "更新时间", minWidth: 150, align: "center", slotName: "updateAt" },
    { label: "操作", minWidth: 120, align: "center", slotName: "operate" }
  ],
  showIndex: true,
  showSelection: true
}

export const formModalConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "用户名"
    },
    {
      field: "realname",
      type: "input",
      label: "真实姓名"
    },
    {
      field: "password",
      type: "input",
      label: "密码",
      isHidden: true
    },
    {
      field: "cellphone",
      type: "input",
      label: "电话号码"
    },
    {
      field: "departmentId",
      type: "select",
      options: [],
      label: "部门"
    },
    {
      field: "roleId",
      type: "select",
      options: [],
      label: "角色"
    }
  ],
  labelWidth: "50px",
  itemLabelWidth: "70px",
  colLayout: {
    span: 24
  },
  itemStyle: {
    padding: "0"
  }
}
