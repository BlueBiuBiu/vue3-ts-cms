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
    url: "/home/multidata",
    method: "GET",
    interceptors: {
      requestInterceptors(config) {
        // config.headers = "test headers"
        return config
      }
    }
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
