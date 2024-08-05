import { api_client } from '../../../lib/api-client'
import { Order } from '../../../types'
export const postOrder = async (order: Order) => {
  const URL = `/order/add`
  const response = await api_client.post(URL, order)
  return response.data.result
}
