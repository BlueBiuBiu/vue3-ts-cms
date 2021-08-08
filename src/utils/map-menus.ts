import type { RouteRecordRaw } from "vue-router"

export function mapMenus(userMenus: any[]) {
  const routes: RouteRecordRaw[] = []
  const allRoutes: RouteRecordRaw[] = []

  const routesFiles = require.context("../router/main", true, /\.ts/)
  routesFiles.keys().forEach((item) => {
    const route = require("../router/main" + item.split(".")[1])
    // console.log(route.default)
    allRoutes.push(route.default)
  })

  const _recurseGetRotue = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((item) => item.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recurseGetRotue(menu.children)
      }
    }
  }

  _recurseGetRotue(userMenus)

  return routes
}
