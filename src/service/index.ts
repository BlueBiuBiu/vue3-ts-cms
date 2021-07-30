import SKYRequest from "./request"
import { TIME_OUT, BASE_URL } from "./request/config"

const skyRequest = new SKYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors(config) {
      console.log("单独实例对应的过滤器")
      return config
    }
  }
})

export { skyRequest }
