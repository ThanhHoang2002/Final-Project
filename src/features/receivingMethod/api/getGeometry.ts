import { api_goong, API_KEY } from '../../../lib/api-goong'
export const getGeometry = async (place_id: string) => {
  const URL = `/Place/Detail?place_id=${place_id}&api_key=${API_KEY}`
  const response = await api_goong.get(URL)
  const lat = String(response.data.result.geometry.location.lat)
  const lng = String(response.data.result.geometry.location.lng)
  const formattedLocation = lat + ',' + lng
  return formattedLocation
}
