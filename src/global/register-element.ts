import type { App } from "vue"
import {
  ElAside,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElRadio,
  ElSubmenu,
  ElTabPane,
  ElTabs
} from "element-plus"
import "element-plus/lib/theme-chalk/base.css"
// import 'element-plus/lib/theme-chalk/el-button.css'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu
]

export function registerElementUi(app: App) {
  components.forEach((item) => {
    app.component(item.name, item)
  })
}
