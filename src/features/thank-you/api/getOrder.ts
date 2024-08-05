import { api_client } from './../../../lib/api-client'
export const getOrder = async (order_id: string) => {
  const URL = `order/get/${order_id}`
  const response = await api_client.get(URL)
  return response.data.result
}
