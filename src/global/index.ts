import type { App } from "vue"
import { registerElementUi } from "./register-element"

export function registerGlobal(app: App) {
  // registerElementUi(app)
  app.use(registerElementUi)
}
