// import { api_client } from '../../../lib/api-client'
// export const getComboByCategory = async (category: string) => {
//   const URL = `/combo/category?category=${category}`
//   const response = await api_client.get(URL)
//   return response.data.result
// }
import { buyOneGetThree, combo, mybox, percent } from '../../../db/combo'
import { delay } from '../../../utils/constance'
export const getComboByCategory = async (category: string) => {
  await delay(200)
  switch (category.toLocaleLowerCase()) {
    case '50percentoff':
      return percent.result
    case 'buy1get3':
      return buyOneGetThree.result
    case 'combo':
      return combo.result
    case 'mybox_2023':
      return mybox.result
    default:
      return []
  }
}
