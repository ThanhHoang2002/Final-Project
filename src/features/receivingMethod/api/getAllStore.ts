import { api_client } from './../../../lib/api-client'
export const getAllStore = async () => {
  const URL = '/store/all'
  const response = await api_client.get(URL)
  return response.data.result
}
