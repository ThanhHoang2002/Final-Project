// import { api_auth } from '../../../lib/api-auth'

// export const sendOTP = async (email: string) => {
//   const URL = `/request-register`
//   const response = await api_auth.post(URL, { email })
//   return response.data
// }
import emailjs from '@emailjs/browser'
export const sendOTP = async (email: string) => {
  return {
    success: true,
    message: email
  }
}
export const testOTP = async (email: string) => {
  const templateParams = {
    email: email,
    otp: '1234'
  }
  emailjs.send('service_thk7nmp', 'YOUR_TEMPLATE_ID', templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text)
    },
    (error) => {
      console.log('FAILED...', error)
    }
  )
}
