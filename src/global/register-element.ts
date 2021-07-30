import type { App } from "vue"
import { ElButton, ElAside } from "element-plus"
import "element-plus/lib/theme-chalk/base.css"
// import 'element-plus/lib/theme-chalk/el-button.css'

const components = [ElButton, ElAside]

export function registerElementUi(app: App) {
  components.forEach((item) => {
    app.component(item.name, item)
  })
}
