import { useEffect } from 'react'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { setHomeHeader } from '../../store/features/HeaderSlice'
import TopBanner from '../../components/Banner/TopBanner'
import ReceivingMethod from '../../components/ReceivingMethod'
import ListMiddleBanner from '../../components/Banner/MiddleBanner/ListMiddleBanner'
import { useTranslation } from 'react-i18next'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation('home')
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(setHomeHeader())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <div className='min-h-[200px]'>
        <TopBanner />
      </div>
      <div className='w-full flex justify-center'>
        <div className='w-full tablet:w-[450px] tablet:translate-y-[-50px] z-20 mt-2'>
          <ReceivingMethod />
        </div>
      </div>
      <div className=' mt-5 tablet:translate-y-[-30px]'>
        <div className='tablet:col-span-2 h-5 flex justify-center items-center relative mb-2'>
          <p className='px-[12px] uppercase font-bold text-[1.4rem] z-[1] absolute bg-white'>{t('Promotions')}</p>
          <p className='h-[3px] bg-[#e9ebee] w-full absolute'></p>
        </div>
        <div className='min-h-[130px]'>
          <ListMiddleBanner />
        </div>
      </div>
      <div className='w-full flex justify-center items-center mb-3'>
        <div className='max-w-[1120px] w-full h-[65px] p-[10px] '>
          <Button onClick={() => navigate('/order')}>{t('See Complete Menu')}</Button>
        </div>
      </div>
      <footer className='bg-[#000000e6] uppercase text-white h-20 text-xs flex items-center justify-center'>
        <p>final-project-adamo by nguyễn thanh hoàng</p>
      </footer>
    </div>
  )
}

export default Home
