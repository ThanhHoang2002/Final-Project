import { FormEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { useNavigate } from 'react-router-dom'
import { Role } from '../../../types'
import showPassword from '../../../assets/images/icons/show-password.png'
import { openModal } from '../../../store/slices/ModalSlice'
import Noti from '../../../components/ui/Noti'
import { userLogin } from '../../../features/auth-client/api/user-login'
import Modal from '../../../components/layout/components/Modal'
const UserLoginRoute = () => {
  const [passwordShown, setPasswordShown] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const isOpenModal = useAppSelector((state) => state.modalState.isOpenModal)
  const element = useAppSelector((state) => state.modalState.element)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur)
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    const authenticationRequest = {
      email: username,
      password: password
    }

    const response = await userLogin(authenticationRequest)
    if (response.result.authenticated) {
      localStorage.setItem('token', response.result.token)
      localStorage.setItem('user', JSON.stringify(response.result.user))
      localStorage.setItem('token', response.result.token)
      localStorage.setItem('user', JSON.stringify(response.result.user))
      if (response.result.user.roles.some((role: Role) => role.name === 'MANAGER')) {
        navigate('/admin/dashboard')
      } else {
        navigate('/staff')
      }
    } else {
      dispatch(openModal(<Noti text='Sai tài khoản hoặc mật khẩu' />))
    }
  }
  return (
    <div>
      <div
        className={`bg-gradient-to-l from-[#3f51b5] from-10% to-[rgb(63,81,181,0)] to-90% ${isOpenModal && 'max-h-screen overflow-hidden brightness-50'}`}
      >
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto tablet:h-screen desktop:py-0'>
          <div className='w-[430px] bg-white rounded-lg shadow dark:border tablet:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-8 py-12 space-y-4 tablet:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 tablet:text-2xl dark:text-white'>
                Sign in to your account
              </h1>
              <form className='space-y-4 tablet:space-y-6' onSubmit={(e) => handleLogin(e)}>
                <div>
                  <label htmlFor='username' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Your Username
                  </label>
                  <input
                    type='text'
                    name='username'
                    id='username'
                    className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className='relative'>
                  <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Password
                  </label>
                  <div className='relative'>
                    <input
                      type={passwordShown ? 'text' : 'password'}
                      name='password'
                      id='password'
                      placeholder='••••••••'
                      onChange={(e) => setPassword(e.target.value)}
                      className='bg-gray-50 border pr-10 border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      required
                    />
                    <div className='absolute top-0 right-0' onClick={togglePasswordVisiblity}>
                      {passwordShown ? (
                        <img
                          className='ml-2 p-[8px] cursor-pointer h-[40px] w-[40px] rounded-[50%] hover:bg-slate-100 hover:transition-all'
                          src={showPassword}
                          alt='eye'
                        ></img>
                      ) : (
                        <img
                          className='ml-2 p-[8px] cursor-pointer h-[40px] w-[40px] rounded-[50%] hover:bg-slate-100 hover:transition-all'
                          src='https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Ficon%2Ficons8-hide-24.png?alt=media&token=bcb6d1a8-da9f-4033-94f4-ecb7d84b64d5'
                          alt='eye'
                        ></img>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  type='submit'
                  className='w-full mt-3 uppercase text-white bg-[#212121] hover:bg-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center '
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpenModal={isOpenModal} element={element} />
    </div>
  )
}

export default UserLoginRoute
