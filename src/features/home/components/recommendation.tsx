import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { getRecomendation } from '../api/getRecomentdation'
import { PizzaType } from '../../../types'
import { useState } from 'react'
import { Skeleton } from 'antd'
import { formatCurrency } from '../../../utils/fomat'
import { useNavigate } from 'react-router-dom'
import Loading from '../../../components/ui/Loading/AppLoading'

const Recommendation = () => {
  const { t } = useTranslation('home')
  const [isLoadingImage, setIsLoadingImage] = useState(true)
  const navigate = useNavigate()
  const { data, isLoading } = useQuery({
    queryKey: ['getRecommendation'],
    queryFn: getRecomendation,
    staleTime: Infinity
  })
  const handleClick = () => {
    navigate('/order/pizza')
    window.scrollTo(0, 0)
  }
  if (isLoading) return <Loading />
  const pizzaType = data as PizzaType[]
  return (
    <div className='px-[10%] py-5 mb-20'>
      <div className='w-full  border-b pb-1'>
        <div className='capitalize text-2xl font-semibold text-[#c00a27]'> Best Seller</div>
      </div>
      <div className='grid grid-cols-4 gap-4 '>
        {pizzaType.map((pizza: PizzaType) => (
          <div key={pizza.pizzaTypeId}>
            <div className={`m-[6px] h-auto border rounded-md shadow-md relative ${isLoadingImage ? 'hidden' : ''}`}>
              <div className='group' onClick={handleClick}>
                <div className=' overflow-hidden '>
                  <img
                    className='object-cover h-full w-full ransition-transform duration-500 transform group-hover:scale-[1.2] cursor-pointer rounded-t-md'
                    src={pizza.image}
                    onLoad={() => setIsLoadingImage(false)}
                    alt={pizza.name}
                  />
                </div>
                <div className='flex justify-between items-center px-[10px] h-[50px] pb-2 cursor-pointer group-hover:bg-slate-50'>
                  <p className='uppercase font-bold text-sm truncate-2-lines'>{pizza.name}</p>
                  <p className='uppercase font-bold text-xs bg-red px-[3px] py-[2px] text-white'>Hot</p>
                </div>
              </div>
              <div className='h-[40px] px-[10px] border-b'>
                <p className='truncate-2-lines text-sm capitalize text-slate-500'>{pizza.des}</p>
              </div>
              <div className='flex justify-between p-[10px]'>
                <div className=' '>
                  <p className='text-xs '> Giá chỉ từ</p>
                  <p className='text-lg font-bold'>{formatCurrency(pizza.pizzas[pizza.pizzas.length - 1].price)}</p>
                </div>
                <button
                  type='button'
                  className='text-green font-medium rounded-lg text-sm px-5 text-center hover:text-white border border-green hover:bg-green 
                  transition-colors duration-300 hidden desktop:block'
                  onClick={handleClick}
                >
                  {t('See More')}
                </button>
              </div>
            </div>
            <div
              className={`skeleton ${isLoading || isLoadingImage ? 'm-[6px] h-auto border rounded-md shadow-md relative' : 'hidden'}`}
            >
              <div className='group w-full'>
                <div className='w-full '>
                  <Skeleton.Input style={{ height: '130px', width: 'inherit' }} active />
                </div>
                <div className='flex justify-between items-center px-[10px] h-[50px] pb-2 cursor-pointer group-hover:bg-slate-50'>
                  <Skeleton.Input style={{ height: '20px', width: '100%' }} active />
                </div>
              </div>
              <div className='h-[40px] px-[10px] border-b'>
                <Skeleton.Input style={{ height: '20px', width: '100%' }} active />
              </div>
              <div className='h-[55px] pb-1 p-[10px] relative mt-1'>
                <Skeleton.Input style={{ height: '30px', width: '100%' }} active />
              </div>
              <div className='h-[55px] pb-1 p-[10px] relative'>
                <Skeleton.Input style={{ height: '30px', width: '100%' }} active />
              </div>
              <div className='h-[53px] px-[10px] py-2 flex justify-end items-center'>
                <Skeleton.Input style={{ height: '30px', width: '100%' }} active />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recommendation
