import { api_client } from './../../../lib/api-client'
export const getAllPizza = async () => {
  const URL = '/pizzaType/all'
  const response = await api_client.get(URL)
  return response.data.result
}
