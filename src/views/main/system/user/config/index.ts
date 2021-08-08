import { IForm } from "@/base-ui/form/types"

export const searchFormConfig: IForm = {
  formItems: [
    {
      type: "input",
      label: "用户名"
    },
    {
      type: "password",
      label: "密码"
    },
    {
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
