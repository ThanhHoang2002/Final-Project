import { api_client } from '../../../lib/api-client'
import { LoginRequest } from './login'

export const userLogin = async (body: LoginRequest) => {
  const URL = `/auth/authenticate`
  const response = await api_client.post(URL, body)
  return response.data
}
