import Axios, { InternalAxiosRequestConfig } from 'axios'

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = 'application/json'
  }

  config.withCredentials = false
  return config
}

export const api_client = Axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL
})

api_client.interceptors.request.use(authRequestInterceptor)
api_client.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const message = error.response?.data?.message || error.message
    console.error(message)

    if (error.response?.status === 401) {
      // const searchParams = new URLSearchParams()
      // const redirectTo = searchParams.get('redirectTo')
      // window.location.href = `/auth/login?redirectTo=${redirectTo}`
    }

    return Promise.reject(error)
  }
)
