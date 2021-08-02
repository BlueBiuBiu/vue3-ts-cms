import type { App } from "vue"
import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink
} from "element-plus"
import "element-plus/lib/theme-chalk/base.css"
// import 'element-plus/lib/theme-chalk/el-button.css'

const components = [ElButton, ElTabs, ElTabPane, ElForm, ElFormItem, ElInput, ElCheckbox, ElLink]

export function registerElementUi(app: App) {
  components.forEach((item) => {
    app.component(item.name, item)
  })
}
