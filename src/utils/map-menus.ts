import type { RouteRecordRaw } from "vue-router"
import { IBreadcrumb } from "@/base-ui/breadcrumb/types"

let firstMenu: any = null
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
        if (route) {
          routes.push(route)
        }
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRotue(menu.children)
      }
    }
  }

  _recurseGetRotue(userMenus)

  return routes
}

export function PathToBreadcrumbMenus(userMenus: any[], currentPath: string) {
  const breadcrumbMenus: IBreadcrumb[] = []
  pathMapMenu(userMenus, currentPath, breadcrumbMenus)
  // console.log(breadcrumbMenus)
  return breadcrumbMenus
}

export function pathMapMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbMenus?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbMenus?.push({ name: menu.name, path: menu.url })
        breadcrumbMenus?.push({ name: findMenu.name, path: findMenu.url })
        return findMenu
      }
    } else if (menu.type === 2) {
      if (menu.url === currentPath) {
        return menu
      }
    }
  }
}

export function menuPathPermissions(userMenus: any[]) {
  const permissions: string[] = []
  function recurseGetPermission(menus: any[]) {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }

  recurseGetPermission(userMenus)
  return permissions
}

export function menuMapLeafKeys(menuList: any[]) {
  const leftKeys: number[] = []

  const recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        recurseGetLeaf(menu.children)
      } else {
        leftKeys.push(menu.id)
      }
    }
  }
  recurseGetLeaf(menuList)

  return leftKeys
}

export { firstMenu }
