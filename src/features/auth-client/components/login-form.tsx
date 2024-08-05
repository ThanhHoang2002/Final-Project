import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { closeModal } from '../../../store/slices/ModalSlice'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import login from '../../../assets/images/background/login.jpg'
import showPassword from '../../../assets/images/icons/show-password.png'
const LoginForm = () => {
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(false)
  const [rememberMe, setRememberMe] = useState<boolean>(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  return (
    <div className='relative flex justify-center items-center'>
      <div className='tablet:w-[960px] w-[90%] h-[487.7px] flex  '>
        <img className='w-[50%] rounded-l-md hidden tablet:block' src={login} alt='banner' />
        <div className='tablet:w-[50%] w-full text-center bg-white shadow-lg tablet:rounded-l-none rounded-md '>
          <p className='text-[#A80000] font-normal text-[25px] pt-[50px]'>🍕🍕 WELCOME!</p>
          <p className='mt-[2px] text-[rgb(0,0,0,0.87)] text-sm tracking-[0.01071em] font-medium uppercase w-full px-5 tablet:w-[70%] tablet:translate-x-[25%]'>
            Chào mừng bạn đến với pizzeria! Đăng nhập trước khi thanh toán để tích điểm - Đổi Pizza nhé!
          </p>
          <form className='h-auto mx-[35px] tablet:mx-[57px] text-left'>
            <label className='font-bold text-sm'> Email *</label>
            <input
              className='peer w-full h-[40px] border-2 rounded-[4px] border-[rgba(70, 90, 126, 0.4)] px-[14px] py-[10.5px] focus:outline-none focus:border-[#07bc0c]
            invalid:border-[#f44336]  focus:invalid:border-[#f44336] focus:invalid:ring-[#f44336]
            '
              type='email'
            />
            <p className='mt-2 ml-4 invisible peer-invalid:visible text-[#f44336] text-xs'>Email không hợp lệ</p>
            <label className='font-bold text-sm'> Mật Khẩu *</label>
            <div className='w-full flex items-center'>
              <input
                className=' w-[90%] h-[40px]  px-[14px] py-[10.5px]  border-2 rounded-[4px] border-[rgba(70, 90, 126, 0.4)] focus:outline-none focus:border-[#07bc0c]'
                type={`${hiddenPassword === true ? 'text' : 'password'}`}
              />
              {hiddenPassword === false ? (
                <img
                  className='ml-2 p-[8px] cursor-pointer h-[40px] w-[40px] rounded-[50%] hover:bg-slate-100 hover:transition-all'
                  src={showPassword}
                  alt='eye'
                  onClick={() => setHiddenPassword(true)}
                ></img>
              ) : (
                <img
                  className='ml-2 p-[8px] cursor-pointer h-[40px] w-[40px] rounded-[50%] hover:bg-slate-100 hover:transition-all'
                  src='https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ficon%2Ficons8-hide-24.png?alt=media&token=bcb6d1a8-da9f-4033-94f4-ecb7d84b64d5'
                  alt='eye'
                  onClick={() => setHiddenPassword(false)}
                ></img>
              )}
            </div>
            <div className='flex justify-between items-center mt-3'>
              <div className='flex items-center '>
                <input
                  type='checkbox'
                  className='w-4 h-4 checked:text-green'
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <div className='text-sm ml-2'>Lưu Mật Khẩu</div>
              </div>
              <Link to='/forgot-password' className='text-[#0A8020] text-sm '>
                Quên mật khẩu?
              </Link>
            </div>
            <button className='bg-[#0A8020] mt-5 text-white w-[80%] h-[33px] mx-[10%] rounded-[4px] text-sm'>
              ĐĂNG NHẬP
            </button>
          </form>
          <div className='text-sm m-[18px]'>
            Bạn chưa có tài khoản?{' '}
            <button
              onClick={() => {
                dispatch(closeModal())
                navigate('/register')
              }}
              className='text-[rgb(10,128,32)]'
            >
              Đăng ký ngay
            </button>
          </div>
        </div>
        <button className='absolute top-[-10px] tablet:right-[-15px] right-[1%]' onClick={() => dispatch(closeModal())}>
          <img className='w-[30px]' src='https://cdn.pizzahut.vn/images/Web_V3/Member/close.png' alt='close'></img>
        </button>
      </div>
    </div>
  )
}

export default LoginForm
