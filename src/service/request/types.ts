import type { AxiosRequestConfig, AxiosResponse } from "axios"

interface SKYInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}
interface SKYRequestConfig extends AxiosRequestConfig {
  interceptors?: SKYInterceptors
  showLoading?: boolean
}

export { SKYInterceptors, SKYRequestConfig }

