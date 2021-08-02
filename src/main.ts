import { createApp } from "vue"
import App from "./App.vue"
import store from "./store"
import router from "./router"
import { registerGlobal } from "./global"
import "normalize.css"
import "./assets/css/index.less"

const app = createApp(App)

// registerElementUi(app)
app.use(registerGlobal)
app.use(store)
app.use(router)
app.mount("#app")
