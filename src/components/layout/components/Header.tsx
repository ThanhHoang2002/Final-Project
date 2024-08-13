import Profile from '../../ui/Icon/Profile'
import Ring from '../../ui/Icon/Ring'
import Tracking from '../../ui/Icon/Tracking'
import destopLogo from '../../../assets/images/logos/logo.png'
import tabletLogo from '../../../assets/images/logos/logo web.png'
import Back from '../../ui/Icon/Back'
import Address from '../../ui/Address'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { useTranslation } from 'react-i18next'
import { ELanguage } from '../../../types'
import { Link, useNavigate } from 'react-router-dom'
import { openModal } from '../../../store/slices/ModalSlice'
import ReceivingMethod from '../../../features/receivingMethod/components'
import LoginForm from '../../../features/auth-client/components/login-form'
import { logout } from '../../../store/slices/ClientSlice'
import { useEffect, useRef, useState } from 'react'
const Header = () => {
  const { t, i18n } = useTranslation(['header'])
  const { isOpenAddress, isOpenBack, isOpenProfile, isOpenRing, isOpenTracking } = useAppSelector(
    (state) => state.headerState
  )
  const client = useAppSelector((state) => state.ClientState.client)
  const dispatch = useAppDispatch()
  const currentLanguage = i18n.language as ELanguage
  const ProfileRef = useRef<HTMLDivElement>(null)
  const position: number =
    Object.values(ELanguage).indexOf(currentLanguage) + 1 > Object.values(ELanguage).length - 1
      ? 0
      : Object.values(ELanguage).indexOf(currentLanguage) + 1
  const navigate = useNavigate()
  const handleChangeLanguage = () => {
    i18n.changeLanguage(Object.values(ELanguage)[position])
  }
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ProfileRef.current && !ProfileRef.current.contains(event.target as Node)) {
        setShowProfile(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
  const [showProfile, setShowProfile] = useState<boolean>(false)
  const handleLogout = () => {
    dispatch(logout())
    setShowProfile(false)
  }
  return (
    <div
      className={`h-16 w-full bg-geen flex items-center justify-between px-3 tablet:px-5 bg-while shadow-lg ${isOpenAddress ? 'desktop:shadow-none' : ''}`}
    >
      <div className='flex items-center'>
        <div
          className={`${isOpenBack ? 'flex items-center cursor-pointer mr-3 hover:bg-[rgba(10,128,32,0.04)] rounded-[4px] px-2 py-[6px]' : 'hidden'}`}
          onClick={() => navigate(-1)}
        >
          <Back />
          <p className='hidden tablet:inline-block uppercase text-sm text-green font-medium'>{t('back')}</p>
        </div>
        <Link to={'/'}>
          <img src={destopLogo} alt='logo' className='hidden tablet:block h-[35px]' />
        </Link>
      </div>
      <div className='flex items-center justify-between w-full h-full tablet:w-auto'>
        <div className='flex items-center'>
          <div className={`${isOpenRing || 'hidden'}`}>
            <Ring />
          </div>
          <p
            className='text-[#f44336] font-bold p-3 cursor-pointer uppercase rounded-full hover:bg-[rgba(0,0,0,0.04)]'
            onClick={() => handleChangeLanguage()}
          >
            {Object.values(ELanguage)[position]}
          </p>
          <div
            className={`${isOpenAddress || 'hidden'} tablet:order-first`}
            onClick={() => dispatch(openModal(<ReceivingMethod isShowClose={true} />))}
          >
            <Address />
          </div>
        </div>
        <Link to={'/'}>
          <img src={tabletLogo} alt='logo' className='block tablet:hidden h-[35px] ' />
        </Link>
        <div className='flex items-center h-full'>
          {client == null ? (
            <button
              className={`${isOpenProfile || 'hidden'} flex font-bold text-sm  h-full items-center px-2 hover:bg-[rgba(10,128,32,0.04)]`}
              onClick={() => dispatch(openModal(<LoginForm />))}
            >
              <Profile />
              <p className='hidden tablet:inline-block'>{t('account')}</p>
            </button>
          ) : (
            <button
              className={`flex relative items-center p-[20px]  hover:bg-slate-100 ${isOpenProfile || 'hidden'}`}
              onClick={() => setShowProfile(true)}
            >
              <Profile />
              <p className='font-bold text-sm  pl-[8px] hidden tablet:inline-block'>
                {client ? 'Hi ' + client.name : 'Thành viên'}
              </p>
              <div
                className={`notification ${showProfile ? 'block' : 'hidden'} absolute top-[64px] right-0 z-30 w-[321px] bg-white px-5 py-4 shadow-3xl rounded-[4px]`}
                ref={ProfileRef}
              >
                <div className='flex pb-4 border-b-2'>
                  <img
                    className='h-[75px] w-[75px]'
                    src='https://cdn.pizzahut.vn/images/Web_V3/Corporate/Basic%20Member.png'
                    alt='profile'
                  />
                  <div className='ml-3 text-left'>
                    <p className='font-bold text-[14px] leading-[1.3]'>Xin chào {client?.name}</p>
                    <p className='text-[12px]'>Điểm của bạn: {client.point}</p>
                    <p className='text-[12px]'>Giảm giá thành viên: 0%</p>
                    <p className='text-[12px]'>Ngày Hết Hạn: 31/5/2025</p>
                  </div>
                </div>
                <div
                  className='w-full h-[39px] py-[5px] flex justify-between items-center border-b-2 text-[14px] leading-[1.5]'
                  onClick={handleLogout}
                >
                  <div className='flex items-center'>
                    <img width='25' height='20' src='https://img.icons8.com/sf-black/64/0a8020/exit.png' alt='exit' />
                    <p className='ml-3'>Đăng xuất</p>
                  </div>
                  <div>
                    <img
                      width='10'
                      height='10'
                      src='https://img.icons8.com/metro/26/0a8020/forward.png'
                      alt='forward'
                    />
                  </div>
                </div>
              </div>
            </button>
          )}
          <button
            className={`${isOpenTracking || 'hidden'} flex font-bold text-sm tablet:border-l tablet:border-l-[#e4e4e4] h-full items-center px-2 hover:bg-[rgba(10,128,32,0.04)]`}
            onClick={() => navigate('/tracking')}
          >
            <Tracking />
            <p className='hidden tablet:inline-block capitalize'>{t('track order')}</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
