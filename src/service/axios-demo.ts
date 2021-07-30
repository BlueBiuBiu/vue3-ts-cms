import axios from "axios"

// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res)
// })

// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'sky',
//       age: 16
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'blue',
//       age: 17
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

//Promise中类型的使用
new Promise<string>((resolve) => {
  resolve("123")
}).then((res) => {
  console.log(res)
})

//axios的配置选项
axios.defaults.baseURL = "http://httpbin.org"
axios.defaults.timeout = 10000

// axios
//   .get('/get', {
//     params: {
//       name: 'sky',
//       age: 16
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// axios
//   .post('/post', {
//     data: {
//       name: 'blue',
//       age: 17
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

//多个请求，一起返回
// axios
//   .all([
//     axios.get('/get', {
//       params: {
//         name: 'sky',
//         age: 16
//       }
//     }),
//     axios.post('/post', {
//       data: {
//         name: 'blue',
//         age: 17
//       }
//     })
//   ])
//   .then((res) => {
//     console.log(res) // 返回了一个数组，长度为2
//   })

axios.interceptors.request.use(
  (config) => {
    console.log(config)
    return config
  },
  (err) => {
    console.log(err)
  }
)

axios.interceptors.response.use(
  (data) => {
    console.log(data)
    return data
  },
  (err) => {
    console.log(err)
  }
)
