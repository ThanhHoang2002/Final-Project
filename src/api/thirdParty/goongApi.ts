const BASE_URL = import.meta.env.VITE_GOONG_MAPS_BASE_URL
const API_KEY = import.meta.env.VITE_GOONG_MAPS_API_KEY
export const test = async () => {
  console.log('BASE_URL', BASE_URL)
  console.log('API_KEY', API_KEY)
}
export const autoComplete = async (input: string) => {
  const response = await fetch(`${BASE_URL}/autocomplete?input=${input}&key=${API_KEY}`)
  const data = await response.json()
  return data
}
