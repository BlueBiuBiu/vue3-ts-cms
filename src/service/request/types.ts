import type { AxiosRequestConfig, AxiosResponse } from "axios"

interface SKYInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  responseInterceptors?: (res: any) => any
  responseInterceptorsCatch?: (error: any) => any
}

interface SKYRequestConfig extends AxiosRequestConfig {
  interceptors?: SKYInterceptors
  showLoading?: boolean
}

export { SKYInterceptors, SKYRequestConfig }
