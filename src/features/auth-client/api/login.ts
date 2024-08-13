import { api_auth } from '../../../lib/api-auth'
export interface LoginRequest {
  email: string
  password: string
}
export const login = async (body: LoginRequest) => {
  const URL = `/login`
  const response = await api_auth.post(URL, body)
  return response.data
}
