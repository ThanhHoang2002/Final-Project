import { useFormik } from 'formik'
import { validationRegisterSchema } from '../../../utils/validator'
import bg from '../../../assets/images/background/background.8c532c6143e1b30fc4a3.jpg'
import headerImage from '../../../assets/images/background/bg-member-tablet.jpg'
import headerImageTablet from '../../../assets/images/background/bg-member.jpg'
import Button from '../../../components/ui/Button'
import { usePasswordState } from '../../../hooks/usePasswordState'
import showPassword from '../../../assets/images/icons/show-password.png'
import Information from '../../../assets/svg/information'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import { openModal } from '../../../store/slices/ModalSlice'
import OTPForm from '../../../components/ui/OTPInput'
import { sendOTP } from '../api/sendOtp'
import Noti from '../../../components/ui/Noti'
import { postRegister } from '../api/postRegister'
import ComponentLoading from '../../../components/ui/Loading/ComponentLoading'
const Register = () => {
  const dispatch = useAppDispatch()
  const registerForm = useFormik({
    initialValues: {
      name: '',
      birthday: '',
      gender: 'M',
      phone: '',
      email: '',
      password: '',
      rePassword: ''
    },
    validationSchema: validationRegisterSchema,
    onSubmit: async (values, action) => {
      const register = async (
        e: React.FormEvent<HTMLFormElement>,
        otp: string,
        setError: React.Dispatch<React.SetStateAction<string>>,
        setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>
      ) => {
        e.preventDefault()
        const data = { ...values, birthday: new Date(values.birthday), passwordOrOtp: otp }
        setIsLoaded(false)
        const response = await postRegister(data)
        setIsLoaded(true)
        if (response.success) {
          action.resetForm()
          dispatch(openModal(<Noti text='Đăng ký thành công' />))
        } else {
          if (response.statusCode === 'OTP0001') {
            setError('Mã OTP không chính xác')
          } else {
            dispatch(openModal(<Noti text='Đăng ký thất bại' />))
          }
        }
      }
      dispatch(openModal(<ComponentLoading />))
      const response = await sendOTP(values.email)
      if (response.success) {
        dispatch(openModal(<OTPForm handleSubmit={register} email={values.email} />))
      } else {
        if (response.message === 'Account has been exits') {
          dispatch(openModal(<Noti text='Email đã tồn tại' />))
        } else {
          dispatch(openModal(<Noti text='Gửi OTP thất bại vui lòng thử lại' />))
        }
      }
    }
  })
  const { passwordState, HiddenPassword, ShowPassword } = usePasswordState()
  const passwordError = registerForm.errors.password?.split('%')
  return (
    <div
      className={`w-full h-fullscreen-minus-64 flex tablet:justify-center tablet:items-center `}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className='flex flex-col tablet:max-w-[960px] bg-white w-full'>
        <img src={headerImage} className='tablet:hidden' />
        <img src={headerImageTablet} className=' hidden tablet:block' />
        <div className='p-[18px] tablet:px-[45px] tablet:pt-0 tablet:pb-5'>
          <div className='pt-[10px] pb-1 text-center'>
            <div className='text-lg font-bold text-[#A80000]'>🍕🍕 TÍCH ĐIỂM ĐỔI PIZZA NÀO!</div>
            <div className='text-[10px] tablet:text-sm'>
              THAM GIA HUT REWARDS
              <br />
              VÀ BẮT ĐẦU HÀNH TRÌNH TÍCH ĐIỂM CỦA BẠN!
            </div>
          </div>
          <form onSubmit={registerForm.handleSubmit}>
            <div className='flex flex-col tablet:flex-row w-full'>
              <div className='tablet:mr-3 w-full'>
                <div className='mt-[10px]'>
                  <label htmlFor='name' className='text-sm font-bold'>
                    Tên*
                  </label>
                  <input
                    className={`peer w-full h-[40px] border rounded-[4px] border-[rgba(70, 90, 126, 0.4)] px-[14px] py-[10.5px] 
                      focus:outline-none focus:border-[#07bc0c] focus:border-2
            ${registerForm.errors.name && 'border-[#f44336] focus:border-[#f44336]'}`}
                    type='text'
                    name='name'
                    onChange={registerForm.handleChange}
                    value={registerForm.values.name}
                    required
                  />
                  {registerForm.errors.name && (
                    <p className='mt-2 ml-4 text-[#f44336] text-xs'>{registerForm.errors.name}</p>
                  )}
                </div>
                <div className='mt-[10px] flex '>
                  <div className='w-full p-[6px] pl-0'>
                    <label htmlFor='name' className='text-sm font-bold'>
                      Ngày sinh*
                    </label>
                    <input
                      className={`peer w-full h-[40px] border rounded-[4px] border-[rgba(70, 90, 126, 0.4)] px-[14px] py-[10.5px] 
                      focus:outline-none focus:border-[#07bc0c] focus:border-2
            ${registerForm.errors.birthday && 'border-[#f44336] focus:border-[#f44336]'}`}
                      type='date'
                      name='birthday'
                      onChange={registerForm.handleChange}
                      value={registerForm.values.birthday}
                      max={new Date().toISOString().split('T')[0]}
                      required
                    />
                    {registerForm.errors.birthday && (
                      <p className='mt-2 ml-4 text-[#f44336] text-xs'>{registerForm.errors.birthday}</p>
                    )}
                  </div>
                  <div className='w-full p-[6px] pr-0'>
                    <label htmlFor='name' className='text-sm font-bold'>
                      Giới tính*
                    </label>
                    <select
                      className={`peer w-full h-[40px] border rounded-[4px] border-[rgba(70, 90, 126, 0.4)] px-[14px] 
                      focus:outline-none focus:border-[#07bc0c] focus:border-2 
                      ${registerForm.errors.gender && 'border-[#f44336] focus:border-[#f44336]'}`}
                      name='gender'
                      onChange={registerForm.handleChange}
                      value={registerForm.values.gender}
                    >
                      <option value='M'>Nam</option>
                      <option value='W'>Nữ</option>
                      <option value='D'>Khác</option>
                    </select>
                    {registerForm.errors.gender && (
                      <p className='mt-2 ml-4 text-[#f44336] text-xs'>{registerForm.errors.gender}</p>
                    )}
                  </div>
                </div>
                <div className='mt-[10px]'>
                  <label className='text-sm font-bold'>Số điện thoại*</label>
                  <input
                    className={`peer w-full h-[40px] border rounded-[4px] border-[rgba(70, 90, 126, 0.4)] px-[14px] py-[10.5px] 
                      focus:outline-none focus:border-[#07bc0c] focus:border-2
            ${registerForm.errors.phone && 'border-[#f44336]  focus:border-[#f44336] '}`}
                    type='text'
                    name='phone'
                    onChange={registerForm.handleChange}
                    value={registerForm.values.phone}
                    required
                  />
                  {registerForm.errors.phone && (
                    <p className='mt-2 ml-4 text-[#f44336] text-xs'>{registerForm.errors.phone}</p>
                  )}
                </div>
                <div className='mt-[10px]'>
                  <label className='text-sm font-bold'>Địa chỉ email*</label>
                  <input
                    className={`peer w-full h-[40px] border rounded-[4px] border-[rgba(70, 90, 126, 0.4)] px-[14px] py-[10.5px] 
                      focus:outline-none focus:border-[#07bc0c] focus:border-2
            ${registerForm.errors.email && 'border-[#f44336]  focus:border-[#f44336] '}`}
                    type='email'
                    name='email'
                    onChange={registerForm.handleChange}
                    value={registerForm.values.email}
                    required
                  />
                  {registerForm.errors.email && (
                    <p className='mt-2 ml-4 text-[#f44336] text-xs'>{registerForm.errors.email}</p>
                  )}
                </div>
              </div>
              <div className='tablet:ml-3 w-full'>
                <div className='mt-[10px]'>
                  <label className='text-sm font-bold'>Mật khẩu</label>
                  <div>
                    <div className='relative'>
                      <input
                        className={`peer w-full h-[40px] border rounded-[4px] border-[rgba(70, 90, 126, 0.4)] px-[14px] py-[10.5px] 
                          focus:outline-none focus:border-[#07bc0c] focus:border-2
                          pr-[60px]
                ${registerForm.errors.password && 'border-[#f44336]  focus:border-[#f44336] '}`}
                        type={passwordState}
                        name='password'
                        onChange={registerForm.handleChange}
                        value={registerForm.values.password}
                        required
                      />

                      {registerForm.errors.password && (
                        <p className='mt-2 ml-4 text-[#f44336] text-xs'>{passwordError && passwordError[0]}</p>
                      )}
                      <div className='absolute top-0 right-0'>
                        {passwordState === 'password' ? (
                          <img
                            className='ml-2 p-[8px] cursor-pointer h-[40px] w-[40px] rounded-[50%] hover:bg-slate-100 hover:transition-all'
                            src={showPassword}
                            alt='eye'
                            onClick={ShowPassword}
                          ></img>
                        ) : (
                          <img
                            className='ml-2 p-[8px] cursor-pointer h-[40px] w-[40px] rounded-[50%] hover:bg-slate-100 hover:transition-all'
                            src='https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ficon%2Ficons8-hide-24.png?alt=media&token=bcb6d1a8-da9f-4033-94f4-ecb7d84b64d5'
                            alt='eye'
                            onClick={HiddenPassword}
                          ></img>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-[10px]'>
                  <label className='text-sm font-bold'>Xác nhận mật khẩu</label>
                  <input
                    className={`peer w-full h-[40px] border rounded-[4px] border-[rgba(70, 90, 126, 0.4)] px-[14px] py-[10.5px] 
                      focus:outline-none focus:border-[#07bc0c] focus:border-2
            ${registerForm.errors.rePassword && 'border-[#f44336]  focus:border-[#f44336] '}`}
                    type={passwordState}
                    name='rePassword'
                    onChange={registerForm.handleChange}
                    value={registerForm.values.rePassword}
                    required
                  />
                  {registerForm.errors.rePassword && (
                    <p className='mt-2 ml-4 text-[#f44336] text-xs'>{registerForm.errors.rePassword}</p>
                  )}
                </div>
                <div>
                  <p className='font-bold text-sm mt-5'>Mật khẩu ít nhất 8 ký tự và đáp ứng 5 điều kiện sau:</p>
                  <div className='flex'>
                    <Information
                      color={
                        passwordError?.includes('Các số 0-9. Ví dụ: 2, 6, 7') ||
                        registerForm.values.password.length === 0
                          ? 'red'
                          : 'green'
                      }
                    />
                    <span
                      className={`${
                        passwordError?.includes('Các số 0-9. Ví dụ: 2, 6, 7') ||
                        registerForm.values.password.length === 0
                          ? 'text-[#FF0000]'
                          : 'text-[#008000]'
                      } text-sm leading-[1.43] font-roboto`}
                    >
                      Các số 0-9. Ví dụ: 2, 6, 7
                    </span>
                  </div>
                  <div className='flex'>
                    <Information
                      color={
                        passwordError?.includes('Các chữ cái thường (nhỏ) a-z. Ví dụ: a, e, r') ||
                        registerForm.values.password.length === 0
                          ? 'red'
                          : 'green'
                      }
                    />
                    <span
                      className={`${
                        passwordError?.includes('Các chữ cái thường (nhỏ) a-z. Ví dụ: a, e, r') ||
                        registerForm.values.password.length === 0
                          ? 'text-[#FF0000]'
                          : 'text-[#008000]'
                      } text-sm leading-[1.43] font-roboto`}
                    >
                      Các chữ cái thường (nhỏ) a-z. Ví dụ: a, e, r
                    </span>
                  </div>
                  <div className='flex'>
                    <Information
                      color={
                        passwordError?.includes('Chữ cái viết hoa (in hoa) A-Z. Ví dụ: A, E, R') ||
                        registerForm.values.password.length === 0
                          ? 'red'
                          : 'green'
                      }
                    />
                    <span
                      className={`${
                        passwordError?.includes('Chữ cái viết hoa (in hoa) A-Z. Ví dụ: A, E, R') ||
                        registerForm.values.password.length === 0
                          ? 'text-[#FF0000]'
                          : 'text-[#008000]'
                      } text-sm leading-[1.43] font-roboto`}
                    >
                      Chữ cái viết hoa (in hoa) A-Z. Ví dụ: A, E, R
                    </span>
                  </div>
                  <div className='flex'>
                    <Information
                      color={
                        passwordError?.includes('Các ký tự đặc biệt như !@#$') ||
                        registerForm.values.password.length === 0
                          ? 'red'
                          : 'green'
                      }
                    />
                    <span
                      className={`${
                        passwordError?.includes('Các ký tự đặc biệt như !@#$') ||
                        registerForm.values.password.length === 0
                          ? 'text-[#FF0000]'
                          : 'text-[#008000]'
                      } text-sm leading-[1.43] font-roboto`}
                    >
                      Các ký tự đặc biệt như !@#$
                    </span>
                  </div>
                  <div className='flex'>
                    <Information
                      color={
                        passwordError?.includes('Các số 0-9. Ví dụ: 2, 6, 7') ||
                        registerForm.values.password.length === 0
                          ? 'red'
                          : 'green'
                      }
                    />
                    <span
                      className={`${
                        passwordError?.includes('Không chứa dấu cách') || registerForm.values.password.length === 0
                          ? 'text-[#FF0000]'
                          : 'text-[#008000]'
                      } text-sm leading-[1.43] font-roboto`}
                    >
                      Không chứa dấu cách
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-[10px] flex justify-center items-center'>
              <button className='tablet:max-w-[435px] w-[45%] tablet:w-full' type='submit'>
                <Button>Đăng ký</Button>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
