import Axios, { InternalAxiosRequestConfig } from 'axios'
import { BaseURLGoongAPI } from '../utils/constance'
function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = 'application/json'
  }

  config.withCredentials = false
  return config
}

export const api_goong = Axios.create({
  baseURL: BaseURLGoongAPI
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
