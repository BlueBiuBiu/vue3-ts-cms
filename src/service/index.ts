import SKYRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"
console.log(BASE_URL)

const skyRequest = new SKYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor(config) {
      // console.log(config)
      return config
    }
  }
})

export { skyRequest }
