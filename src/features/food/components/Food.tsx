import { useTranslation } from 'react-i18next'
import { Food as FoodEntity } from '../../../types'
import { formatCurrency } from '../../../utils/fomat'
import { useState } from 'react'
import { Skeleton } from 'antd'
import { AddFoodToOrder } from '../../../store/slices/OrderSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { toast } from 'react-toastify'
import { openModal } from '../../../store/slices/ModalSlice'
import ReceivingMethod from '../../receivingMethod/components'
interface FoodProps {
  food: FoodEntity
  isPending: boolean
}
const Food = (props: FoodProps) => {
  const { food, isPending } = props
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true)
  const selectedStore = useAppSelector((state) => state.receivingMethodState.selectedStore)
  const { t } = useTranslation('order')
  const dispatch = useAppDispatch()
  const handleImageLoad = () => {
    setIsLoadingImage(() => false)
  }
  const handleAddFood = () => {
    if (!selectedStore) {
      dispatch(openModal(<ReceivingMethod />))
    } else {
      dispatch(AddFoodToOrder(food))
      toast.success(t('Add to cart successfully'))
    }
  }
  return (
    <>
      <div
        className={`m-[6px] h-auto border rounded-md shadow-md relative ${isPending || isLoadingImage ? 'hidden' : ''}`}
      >
        <div className='group' onClick={handleAddFood}>
          <div className=' overflow-hidden '>
            <img
              className='object-cover truncate h-full w-full ransition-transform duration-500 transform group-hover:scale-[1.2] cursor-pointer rounded-t-md'
              src={food.image}
              alt={food.name}
              onLoad={handleImageLoad}
            />
          </div>
          <div className='flex justify-between items-center px-[10px] h-[50px] pb-2 cursor-pointer group-hover:bg-slate-50'>
            <p className='uppercase font-bold text-sm'>{food.name}</p>
          </div>
        </div>
        <div className='h-[40px] px-[10px] border-b'>
          <p className='truncate-2-lines text-sm '>{food.des}</p>
        </div>
        <div className='h-[53px] px-[10px] py-2 flex justify-end items-center'>
          <button
            className='bg-[#0A8020] w-full h-full rounded text-white capitalize flex justify-between py-[6px] px-4 text-sm hover:shadow-md'
            onClick={handleAddFood}
          >
            <div>{t('Add')}</div>
            <div>{formatCurrency(food.price)}</div>
          </button>
        </div>
      </div>
      <div
        className={`skeleton ${isPending || isLoadingImage ? 'm-[6px] h-auto border rounded-md shadow-md relative' : 'hidden'}`}
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
        <div className='h-[53px] px-[10px] py-2 flex justify-end items-center'>
          <Skeleton.Input style={{ height: '30px', width: '100%' }} active />
        </div>
      </div>
    </>
  )
}

export default Food
