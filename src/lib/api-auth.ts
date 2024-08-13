import Axios, { InternalAxiosRequestConfig } from 'axios'
function clientRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = 'application/json'
  }

  config.withCredentials = false
  return config
}

export const api_auth = Axios.create({
  baseURL: import.meta.env.VITE_AUTH_BASE_URL
})

api_auth.interceptors.request.use(clientRequestInterceptor)
api_auth.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // const message = error.response?.data?.message || error.message
    // console.error(message)

    if (error.response?.status === 401) {
      // const searchParams = new URLSearchParams()
      // const redirectTo = searchParams.get('redirectTo')
      // window.location.href = `/auth/login?redirectTo=${redirectTo}`
    }

    return Promise.reject(error)
  }
)
