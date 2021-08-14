import type { App } from "vue"
import { dateFormat } from "@/utils/date-format"

export function registerFilters(app: App) {
  app.config.globalProperties.$filters = {
    format(dateTime: string) {
      return dateFormat(dateTime)
    }
  }
}
