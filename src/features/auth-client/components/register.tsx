import { useFormik } from 'formik'
import { validationRegisterSchema } from '../../../utils/validator'
import bg from '../../../assets/images/background/background.8c532c6143e1b30fc4a3.jpg'
import headerImage from '../../../assets/images/background/bg-member-tablet.jpg'
import headerImageTablet from '../../../assets/images/background/bg-member.jpg'
import Button from '../../../components/ui/Button'
import { usePasswordState } from '../../../hooks/usePasswordState'
const Register = () => {
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
    onSubmit: (values) => {
      console.log(values)
    }
  })
  const { passwordState, HiddenPassword, ShowPassword } = usePasswordState()
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
                    <input
                      className={`peer w-full h-[40px] border rounded-[4px] border-[rgba(70, 90, 126, 0.4)] px-[14px] py-[10.5px] 
                        focus:outline-none focus:border-[#07bc0c] focus:border-2
                        pr-[100px]
              ${registerForm.errors.password && 'border-[#f44336]  focus:border-[#f44336] '}`}
                      type={passwordState}
                      name='password'
                      onChange={registerForm.handleChange}
                      value={registerForm.values.password}
                      required
                    />
                  </div>
                  {registerForm.errors.password && (
                    <p className='mt-2 ml-4 text-[#f44336] text-xs'>{registerForm.errors.password}</p>
                  )}
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
