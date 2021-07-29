let BASE_URL = ''

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000/development'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://123.207.32.32:8000/production'
} else {
  BASE_URL = 'http://123.207.32.32:8000/test'
}

console.log(BASE_URL)
