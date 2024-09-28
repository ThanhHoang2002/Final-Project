// import { api_auth } from '../../../lib/api-auth'

// export const sendOTP = async (email: string) => {
//   const URL = `/request-register`
//   const response = await api_auth.post(URL, { email })
//   return response.data
// }
import emailjs from '@emailjs/browser'
export const sendOTP = async (email: string) => {
  const templateParams = {
    reply_to: email
  }
  emailjs.init('82Of-JfKyooPzwnFH')
  const response = emailjs.send('service_8zxymkp', 'template_repy3xc', templateParams).then(
    () => {
      return {
        success: true,
        message: email
      }
    },
    (error) => {
      return {
        success: false,
        message: error
      }
    }
  )
  return response
}
