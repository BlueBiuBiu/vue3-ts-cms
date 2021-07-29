import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { registerGlobal } from './global'
import './service/axios-demo'
import './service/request/config' //不同环境的变量赋值

const app = createApp(App)

// registerElementUi(app)
app.use(registerGlobal)
app.use(store)
app.use(router)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)
