import Profile from '../../components/Icon/Profile'
import Ring from '../../components/Icon/Ring'
import Tracking from '../../components/Icon/Tracking'
import destopLogo from '../../assets/images/logos/logo.png'
import tabletLogo from '../../assets/images/logos/logo web.png'
import Back from '../../components/Icon/Back'
import Address from '../../components/Address'
import { useAppSelector } from '../../hooks/reduxHooks'
import { useTranslation } from 'react-i18next'
import { ELanguage } from '../../types'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
  const { t, i18n } = useTranslation(['header'])
  const { isOpenAddress, isOpenBack, isOpenProfile, isOpenRing, isOpenTracking } = useAppSelector(
    (state) => state.headerState
  )
  const currentLanguage = i18n.language as ELanguage
  const position: number =
    Object.values(ELanguage).indexOf(currentLanguage) + 1 > Object.values(ELanguage).length - 1
      ? 0
      : Object.values(ELanguage).indexOf(currentLanguage) + 1
  const navigate = useNavigate()
  const handleChangeLanguage = () => {
    i18n.changeLanguage(Object.values(ELanguage)[position])
  }
  return (
    <div className=' h-16 w-full bg-geen flex items-center justify-between px-3 tablet:px-5 shadow-lg bg-while'>
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
          <div className={`${isOpenAddress || 'hidden'}`}>
            <Address />
          </div>
        </div>
        <div>
          <img src={tabletLogo} alt='logo' className='block tablet:hidden h-[35px]' />
        </div>
        <div className='flex items-center h-full'>
          <button
            className={`${isOpenProfile || 'hidden'} flex font-bold text-sm  h-full items-center px-2 hover:bg-[rgba(10,128,32,0.04)]`}
          >
            <Profile />
            <p className='hidden tablet:inline-block'>{t('account')}</p>
          </button>
          <button
            className={`${isOpenTracking || 'hidden'} flex font-bold text-sm tablet:border-l tablet:border-l-[#e4e4e4] h-full items-center px-2 hover:bg-[rgba(10,128,32,0.04)]`}
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
