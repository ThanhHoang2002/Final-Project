// import { api_client } from '../../../lib/api-client'
// export const getFoodByCategory = async (category: string) => {
//   const URL = `/food/category?category=${category}`
//   const response = await api_client.get(URL)
//   return response.data.result
// }
import { chicken_lover, drink, starter } from '../../../db/food'
import { delay } from '../../../utils/constance'
export const getFoodByCategory = async (category: string) => {
  await delay(200)
  switch (category.toLocaleLowerCase()) {
    case 'drink':
      return drink.result
    case 'starter':
      return starter.result
    case 'chicken_lover':
      return chicken_lover.result
    default:
      return []
  }
}
