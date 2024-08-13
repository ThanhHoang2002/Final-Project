import { api_auth } from '../../../lib/api-auth'

export const sendOTP = async (email: string) => {
  const URL = `/request-register`
  const response = await api_auth.post(URL, { email })
  return response.data
}
