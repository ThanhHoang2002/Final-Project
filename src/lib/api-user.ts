import Axios, { InternalAxiosRequestConfig } from 'axios'
function clientRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = 'application/json'
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  }

  config.withCredentials = false
  return config
}

export const api_user = Axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL
})

api_user.interceptors.request.use(clientRequestInterceptor)
api_user.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const message = error.response?.data?.message || error.message
    console.error(message)
    if (error.response?.status === 401) {
      const searchParams = new URLSearchParams()
      const redirectTo = searchParams.get('redirectTo')
      window.location.href = `user-login?redirectTo=${redirectTo}`
    }

    return Promise.reject(error)
  }
)
