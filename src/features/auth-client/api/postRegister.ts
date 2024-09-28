// import { api_auth } from '../../../lib/api-auth'
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
// export const postRegister = async (body: PostRegisterRequest) => {
//   const URL = `/register`
//   const response = await api_auth.post(URL, body)
//   return response.data
// }
import { addClient } from '../../../db/client'
import { delay } from '../../../utils/constance'
export const postRegister = async (body: PostRegisterRequest) => {
  await delay(200)
  if (body.passwordOrOtp != '1234') {
    return {
      success: false,
      statusCode: 'OTP0001',
      message: 'OTP is incorrect'
    }
  }
  const response = addClient(body)
  return {
    success: true,
    statusCode: '200',
    data: response
  }
}
