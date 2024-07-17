import Axios, { InternalAxiosRequestConfig } from 'axios'

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = 'application/json'
  }

  config.withCredentials = true
  return config
}

export const api_goong = Axios.create({
  baseURL: import.meta.env.VITE_GOONG_MAPS_BASE_URL
})

api_goong.interceptors.request.use(authRequestInterceptor)
api_goong.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const message = error.response?.data?.message || error.message
    console.error(message)
    return Promise.reject(error)
  }
)
export const API_KEY = import.meta.env.VITE_GOONG_MAPS_API_KEY
