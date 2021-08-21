import { useStore } from "vuex"

export function usePermisstions(pageName: string, operate: string) {
  const store = useStore()
  const permisstions = store.state.login.permisstions
  const vertifyPermission = `system:${pageName}:${operate}`

  return !!permisstions.find((item: any) => item === vertifyPermission)
}
