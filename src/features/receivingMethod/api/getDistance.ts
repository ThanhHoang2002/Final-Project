import { api_goong, API_KEY } from '../../../lib/api-goong'
export const getDistance = async (origin: string, destination: string) => {
  const URL = `/Direction?origin=${origin}&destination=${destination}&vehicle=car&api_key=${API_KEY}`
  const response = await api_goong.get(URL)
  return response.data.routes[0].legs[0].distance.value
}
