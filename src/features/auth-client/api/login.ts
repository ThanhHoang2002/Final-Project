// import { api_auth } from '../../../lib/api-auth'
export interface LoginRequest {
  email: string
  password: string
}
// export const login = async (body: LoginRequest) => {
//   const URL = `/login`
//   const response = await api_auth.post(URL, body)
//   return response.data
// }
import { loginClient } from '../../../db/client'
import { delay } from '../../../utils/constance'
export const login = async (body: LoginRequest) => {
  await delay(200)
  const response = loginClient(body)
  if (response) {
    return {
      success: true,
      statusCode: '200',
      data: { userInfo: response }
    }
  } else {
    return {
      success: false,
      statusCode: '404',
      data: { userInfo: null }
    }
  }
}
