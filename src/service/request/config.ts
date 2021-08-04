let BASE_URL = ""
const TIME_OUT = 10000

if (process.env.NODE_ENV === "development") {
  BASE_URL = "/api"
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "http://123.207.32.32:8000/production"
} else {
  BASE_URL = "http://123.207.32.32:8000/test"
}

// console.log(BASE_URL, TIME_OUT)
export { BASE_URL, TIME_OUT }
