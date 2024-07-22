import { api_goong, API_KEY } from '../../../lib/api-goong'
export const getDistanceMatrix = async (origin: string, destinations: string[]) => {
  const URL = `/DistanceMatrix?origins=${origin}&destinations=${destinations.reduce(
    (result, current, index): string => {
      if (index != destinations.length - 1) {
        return result.concat(current + '|')
      } else {
        return result.concat(current)
      }
    },
    ''
  )}&vehicle=car&api_key=${API_KEY}`
  const response = await api_goong.get(URL)
  return response.data.rows[0].elements
}
