import { api_client } from '../../../lib/api-client'
export const getFoodByCategory = async (category: string) => {
  const URL = `/food/category?category=${category}`
  const response = await api_client.get(URL)
  return response.data.result
}
