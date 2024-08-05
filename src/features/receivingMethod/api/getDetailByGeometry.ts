import { api_goong, API_KEY } from '../../../lib/api-goong'
export const getDetailByGeometry = async (value: string) => {
  const URL = `/Geocode?latlng=${value}&api_key=${API_KEY}`
  const response = await api_goong.get(URL)
  return response.data.results[0].formatted_address
}
