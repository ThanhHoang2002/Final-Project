// import { api_client } from './../../../lib/api-client'
// export const getAllStore = async () => {
//   const URL = '/store/all'
//   const response = await api_client.get(URL)
//   return response.data.result
// }
import { store } from '../../../db/store'
import { delay } from '../../../utils/constance'
export const getAllStore = async () => {
  await delay(2000)
  return store.result
}
