import { useState } from 'react'
import { Combo as ComboEntity } from '../../../types'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'antd'
import { formatCurrency } from '../../../utils/fomat'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { closeModal, openModal } from '../../../store/slices/ModalSlice'
import ComboDetail from './_id'
import { AddComboToOrder } from '../../../store/slices/OrderSlice'
import { toast } from 'react-toastify'
import ReceivingMethod from '../../receivingMethod/components'
interface ComboProps {
  combo: ComboEntity
  isPending: boolean
}
const Combo = (props: ComboProps) => {
  const { combo, isPending } = props
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true)
  const { t } = useTranslation('order')
  const dispatch = useAppDispatch()
  const handleImageLoad = () => {
    setIsLoadingImage(() => false)
  }
  const selectedStore = useAppSelector((state) => state.receivingMethodState.selectedStore)
  const handleAddCombo = () => {
    if (!selectedStore) {
      dispatch(openModal(<ReceivingMethod />))
    } else {
      dispatch(AddComboToOrder(combo))
      toast.success(t('Add to cart successfully'))
      dispatch(closeModal())
    }
  }
  return (
    <>
      <div
        className={`m-[6px] h-auto border rounded-md shadow-md relative ${isPending || isLoadingImage ? 'hidden' : ''}`}
      >
        <div
          className='group'
          onClick={() => dispatch(openModal(<ComboDetail handleAddCombo={handleAddCombo} combo={combo} />))}
        >
          <div className=' overflow-hidden'>
            <img
              className='h-full w-full object-cover ransition-transform duration-500 transform group-hover:scale-[1.2] cursor-pointer rounded-t-md'
              src={combo.image}
              onLoad={handleImageLoad}
              alt='combo'
            />
          </div>
          <div className='flex justify-between px-[10px] h-[26px] pb-1 cursor-pointer group-hover:bg-slate-50'>
            <p className='uppercase font-bold text-sm'>{combo.name}</p>
            <p className='uppercase font-bold text-xs bg-[#FFC800] px-[3px] py-[2px] text-[#313131]'>new</p>
          </div>
          <div className='absolute h-auto w-auto px-3 py-1 rounded-[25px] capitalize top-[3%] right-[3%] bg-[hsla(0,0%,100%,.9)] flex items-center justify-center cursor-pointer group-hover:'>
            <span>{t('Detail')}</span>
          </div>
        </div>
        <div className='h-[60px] px-[10px]'>
          <p className='truncate-3-lines text-sm text-[rgba(0,0,0,0.87)]'>{combo.des}</p>
        </div>
        <div className='h-[50px] border-t px-[10px] py-2 flex justify-between items-center'>
          <p>
            {t('from')} <span className='font-semibold'> {formatCurrency(combo.price)}</span>
          </p>
          <button
            className='bg-[#0A8020] w-[130px] h-[40px] rounded text-white capitalize hover:shadow-md'
            onClick={handleAddCombo}
          >
            {t('Add')}
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
        <div className='h-[53px] px-[10px] py-2 flex justify-end items-center'>
          <Skeleton.Input style={{ height: '30px', width: '100%' }} active />
        </div>
      </div>
    </>
  )
}

export default Combo
