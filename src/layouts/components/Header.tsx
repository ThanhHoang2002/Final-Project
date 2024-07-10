import Profile from '../../components/Icon/Profile'
import Ring from '../../components/Icon/Ring'
import Tracking from '../../components/Icon/Tracking'
import destopLogo from '../../assets/images/logos/logo.png'
import tabletLogo from '../../assets/images/logos/logo web.png'
import Back from '../../components/Icon/Back'
import Address from '../../components/Address'
import { useAppSelector } from '../../hooks/reduxHooks'
const Header = () => {
  const { isOpenAddress, isOpenBack, isOpenProfile, isOpenRing, isOpenTracking } = useAppSelector(
    (state) => state.headerState
  )
  return (
    <div className=' h-16 w-full bg-geen flex items-center justify-between px-3 tablet:px-5 shadow-lg bg-while'>
      <div className='flex items-center'>
        <div className={`${isOpenBack ? 'flex items-center' : 'hidden'}`}>
          <Back />
          <p className='hidden tablet:inline-block uppercase text-sm text-green mr-3'>Quay Lại</p>
        </div>
        <img src={destopLogo} alt='logo' className='hidden tablet:block h-[35px]' />
      </div>
      <div className='flex items-center justify-between w-full h-full tablet:w-auto'>
        <div className='flex items-center'>
          <div className={`${isOpenAddress || 'hidden'}`}>
            <Address />
          </div>
          <div className={`${isOpenRing || 'hidden'}`}>
            <Ring />
          </div>
          <p className='text-[#f44336] font-bold mx-3'>EN</p>
        </div>
        <div>
          <img src={tabletLogo} alt='logo' className='block tablet:hidden h-[35px]' />
        </div>
        <div className='flex items-center h-full'>
          <button
            className={`${isOpenProfile || 'hidden'} flex font-bold text-sm tablet:border-r tablet:border-r-[#e4e4e4] h-full items-center px-2 hover:bg-[rgba(10,128,32,0.04)]`}
          >
            <Profile />
            <p className='hidden tablet:inline-block'>Thành viên</p>
          </button>
          <button
            className={`${isOpenTracking || 'hidden'} flex font-bold text-sm h-full items-center px-2 hover:bg-[rgba(10,128,32,0.04)]`}
          >
            <Tracking />
            <p className='hidden tablet:inline-block capitalize'>Theo dõi đơn hàng</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
