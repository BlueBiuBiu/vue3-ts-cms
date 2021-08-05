import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig } from "axios"
import { ElLoading } from "element-plus"
import { ILoadingInstance } from "element-plus/lib/el-loading/src/loading.type"
import { SKYRequestConfig, SKYInterceptors } from "./types"

class SKYRequest {
  instance: AxiosInstance
  interceptors?: SKYInterceptors
  loading?: ILoadingInstance
  showLoading?: boolean

  constructor(config: SKYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? true

    //创建实例传入的过滤器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    //创建实例传入的过滤器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    //所有实例都经过的过滤器
    this.instance.interceptors.request.use(
      (config) => {
        console.log("request 总2")

        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "加载中..."
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )

    //所有实例都经过的过滤器
    this.instance.interceptors.response.use(
      (res) => {
        console.log("response 总3", res)
        this.loading?.close()
        return res.data
      },
      (err) => {
        this.loading?.close()
        return err
      }
    )
  }

  request<T>(config: SKYRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.showLoading === false) {
        this.showLoading = false
      }

      //单独请求传入的过滤器
      this.instance.interceptors.request.use(
        config.interceptors?.requestInterceptor,
        config.interceptors?.requestInterceptorCatch
      )

      //单独请求传入的过滤器
      this.instance.interceptors.response.use(
        config.interceptors?.responseInterceptor,
        config.interceptors?.responseInterceptorCatch
      )

      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: SKYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "GET" })
  }

  post<T>(config: SKYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "POST" })
  }

  delete<T>(config: SKYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" })
  }

  patch<T>(config: SKYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" })
  }
}

export default SKYRequest
