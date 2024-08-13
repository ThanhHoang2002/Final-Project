import * as yup from 'yup'
import {
  hasLowerCaseRegex,
  hasNotSpaceRegex,
  hasNumberRegex,
  hasSpecialCharacterRegex,
  hasUpperCaseRegex,
  phoneNumberRegex
} from './regex'
export const validationPaymentSchema = yup.object({
  note: yup.string(),
  fullName: yup.string().required('Full name is required'),
  phoneNumber: yup.string().matches(phoneNumberRegex, 'Phone number is invalid').required('Phone number is required')
})
const validatePassword = (value: string) => {
  const errors = []
  if (value.length < 8) {
    errors.push('Mật khẩu phải có ít nhất 8 ký tự')
  }
  if (!hasNumberRegex.test(value)) {
    errors.push('Các số 0-9. Ví dụ: 2, 6, 7')
  }
  if (!hasLowerCaseRegex.test(value)) {
    errors.push('Các chữ cái thường (nhỏ) a-z. Ví dụ: a, e, r')
  }
  if (!hasUpperCaseRegex.test(value)) {
    errors.push('Chữ cái viết hoa (in hoa) A-Z. Ví dụ: A, E, R')
  }
  if (!hasSpecialCharacterRegex.test(value)) {
    errors.push('Các ký tự đặc biệt như !@#$')
  }
  if (!hasNotSpaceRegex.test(value)) {
    errors.push('Không chứa dấu cách')
  }
  return errors
}
export const validationRegisterSchema = yup.object({
  name: yup.string().trim().required('Yêu cầu nhập Tên'),
  birthday: yup.date().required('Yêu cầu nhập ngày sinh'),
  gender: yup.string().required('Yêu cầu chọn giới tính'),
  phone: yup.string().matches(phoneNumberRegex, 'Số điện thoại không hợp lệ').required('Yêu cầu số điện thoại'),
  email: yup.string().email('Email không hợp lệ').required('Yêu cầu Email'),
  password: yup
    .string()
    // .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
    // .matches(hasNumberRegex, 'Các số 0-9. Ví dụ: 2, 6, 7')
    // .matches(hasLowerCaseRegex, 'Các chữ cái thường (nhỏ) a-z. Ví dụ: a, e, r')
    // .matches(hasUpperCaseRegex, 'Chữ cái viết hoa (in hoa) A-Z. Ví dụ: A, E, R')
    // .matches(hasSpecialCharacterRegex, 'Các ký tự đặc biệt như !@#$')
    // .matches(hasNotSpaceRegex, 'Không chứa dấu cách')
    .test('password-test', 'Mật khẩu không hợp lệ', function (value) {
      const errors = validatePassword(value || '')
      if (errors.length === 0) {
        return true
      }
      return this.createError({ message: errors.join('%') })
    })
    .required('Yêu cầu mật khẩu'),
  rePassword: yup
    .string()
    .equals([yup.ref('password')], 'Mật khẩu không khớp')
    .required('Yêu cầu nhập lại mật khẩu')
})
export const validationLoginSchema = yup.object({
  email: yup.string().email('Email không hợp lệ').required('Yêu cầu Email'),
  password: yup.string().required('Yêu cầu mật khẩu')
})
