import { api_client } from '../../../lib/api-client'
export const getComboByCategory = async (category: string) => {
  const URL = `/combo/category?category=${category}`
  const response = await api_client.get(URL)
  return response.data.result
}
