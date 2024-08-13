import { api_auth } from '../../../lib/api-auth'
export interface PostRegisterRequest {
  name: string
  gender: string
  password: string
  birthday: Date
  phone: string
  rePassword: string
  email: string
  passwordOrOtp: string
}
export const postRegister = async (body: PostRegisterRequest) => {
  const URL = `/register`
  const response = await api_auth.post(URL, body)
  return response.data
}
