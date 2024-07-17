import { api_goong, API_KEY } from '../../../lib/api-goong'
export const autoComplete = async (value: string) => {
  const URL = `/Place/AutoComplete?api_key=${API_KEY}&input=${value}&limit=5`
  const response = await api_goong.get(URL)
  return response.data.predictions
}
