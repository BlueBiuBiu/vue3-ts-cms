import SKYRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"
import LocalCache from "@/utils/cache"

const skyRequest = new SKYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor(config) {
      // console.log(config)
      const token = LocalCache.getCache("token")

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})

export { skyRequest }
