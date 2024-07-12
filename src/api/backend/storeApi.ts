import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL + '/store'
export const getAllStore = async () => {
  const URL = BASE_URL + '/all'
  const response = await axios.get(URL)
  return response.data.result
}
