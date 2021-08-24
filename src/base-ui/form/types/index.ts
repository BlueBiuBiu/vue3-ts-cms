export type IFormType = "input" | "select" | "datePicker" | "password"

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  placeholder?: string
  //针对select
  options?: any[]
  otherOptions?: any
  isHidden?: boolean
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  itemLabelWidth?: string
  colLayout?: any
  itemStyle?: any
}
