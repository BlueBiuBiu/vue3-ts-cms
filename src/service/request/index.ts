import axios from "axios"
import type { AxiosInstance } from "axios"
import { SKYInterceptors, SKYRequestConfig } from "./types"
import { ElLoading } from "element-plus"
import { ILoadingInstance } from "element-plus/lib/el-loading/src/loading.type"

class SKYRequest {
  instance: AxiosInstance
  interceptors?: SKYInterceptors
  showLoading?: boolean
  loading?: ILoadingInstance

  constructor(config: SKYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? true

    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )

    // 2.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "请求数据中..."
          })
        }
        console.log("所有的实例都有的拦截器: 请求成功拦截")
        return config
      },
      (err) => {
        console.log("所有的实例都有的拦截器: 请求成功拦截")
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        setTimeout(() => {
          this.loading?.close()
        }, 1000)
        console.log("所有的实例都有的拦截器: 响应成功拦截")
        return res.data
      },
      (err) => {
        this.loading?.close()
        console.log("所有的实例都有的拦截器: 响应失败拦截")
        return err
      }
    )
  }

  request<T>(config: SKYRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.showLoading = config.showLoading ?? true

      if (this.showLoading) {
        this.loading = ElLoading.service({
          lock: true,
          text: "请求数据中..."
        })
      }
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          resolve(res)
        })
        .catch((err) => {
          this.loading?.close()
          reject(err)
        })
    })
  }
}

export default SKYRequest
