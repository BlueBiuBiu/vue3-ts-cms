import type { App } from "vue"
import { registerElementUi } from "./register-element"
import { registerFilters } from "./register-filters"

export function registerGlobal(app: App) {
  // registerElementUi(app)
  app.use(registerElementUi)
  app.use(registerFilters)
}
