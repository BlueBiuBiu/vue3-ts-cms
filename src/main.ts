import { createApp } from "vue"
import App from "./App.vue"
import store from "./store"
import router from "./router"
import { registerGlobal } from "./global"
// import './service/axios-demo'
import "./service/request/config" //不同环境的变量赋值
import { skyRequest } from "./service"

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

skyRequest
  .request<DataType>({
    url: "home/multidata",
    method: "GET",
    showLoading: false,
    interceptors: {
      requestInterceptor(config) {
        console.log("request 单1")
        return config
      },
      responseInterceptor(res) {
        console.log("response 单4", res)
        return res
      }
    }
  })
  .then((res) => {
    console.log(res)
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })

skyRequest
  .get<DataType>({
    url: "home/multidata"
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })

const app = createApp(App)

// registerElementUi(app)
app.use(registerGlobal)
app.use(store)
app.use(router)
app.mount("#app")

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)
