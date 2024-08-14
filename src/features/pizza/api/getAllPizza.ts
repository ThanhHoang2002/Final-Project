// import { api_client } from './../../../lib/api-client'
// export const getAllPizza = async () => {
//   const URL = '/pizzaType/all'
//   const response = await api_client.get(URL)
//   return response.data.result
// }
import { pizzaType } from '../../../db/pizzaType'
import { delay } from '../../../utils/constance'
export const getAllPizza = async () => {
  await delay(100)
  return pizzaType.result
}
