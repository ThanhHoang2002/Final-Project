// import { api_client } from './../../../lib/api-client'
// export const getRecomendation = async () => {
//   const URL = '/pizzaType/all'
//   const response = await api_client.get(URL)
//   return response.data.result.slice(0, 8)
// }
import { pizzaType } from '../../../db/pizzaType'
export const getRecomendation = async () => {
  return pizzaType.result.slice(0, 8)
}
