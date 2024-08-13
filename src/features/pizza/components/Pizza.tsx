import { useState } from 'react'
import { ECrust, Pizza as PizzaEntity, PizzaType } from '../../../types'
import { formatCurrency } from '../../../utils/fomat'
import { Select, Skeleton } from 'antd'
import { useTranslation } from 'react-i18next'
import { AddPizzaToOrder } from '../../../store/slices/OrderSlice'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { openModal } from '../../../store/slices/ModalSlice'
import ReceivingMethod from '../../receivingMethod/components'
interface PizzaProps {
  pizza: PizzaType
  isPending: boolean
  type: 'client' | 'staff'
}
const Pizza = (props: PizzaProps) => {
  const { pizza, isPending, type } = props
  const [chosenPizza, setChosenPizza] = useState<PizzaEntity>(pizza.pizzas[0])
  const [base, setBase] = useState(ECrust[Object.keys(ECrust)[0] as keyof typeof ECrust])
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true)
  const { t } = useTranslation('order')
  const selectedStore = useAppSelector((state) => state.receivingMethodState.selectedStore)
  const dispatch = useAppDispatch()
  const handleImageLoad = () => {
    setIsLoadingImage(() => false)
  }
  const handleAddPizza = () => {
    if (type === 'staff') {
      dispatch(AddPizzaToOrder({ chosenPizza, base }))
      toast.success(t('Add to cart successfully'))
    } else {
      if (!selectedStore) {
        dispatch(openModal(<ReceivingMethod />))
      } else {
        dispatch(AddPizzaToOrder({ chosenPizza, base }))
        toast.success(t('Add to cart successfully'))
      }
    }
  }
  return (
    <>
      <div
        className={`m-[6px] h-auto border rounded-md shadow-md relative ${isPending || isLoadingImage ? 'hidden' : ''}`}
      >
        <div className='group' onClick={handleAddPizza}>
          <div className=' overflow-hidden '>
            <img
              className='object-cover h-full w-full ransition-transform duration-500 transform group-hover:scale-[1.2] cursor-pointer rounded-t-md'
              src={pizza.image}
              onLoad={handleImageLoad}
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
        <div className='h-[55px] pb-1 p-[10px] relative mt-1'>
          <div className='absolute text-[13px] text-[rgba(0,0,0,0.54)] translate-x-3] left-6 z-10 top-0 bg-white px-1'>
            <span>{t('Select your size')}</span>
          </div>
          <Select
            style={{
              width: '100%',
              height: '100%'
            }}
            defaultValue={chosenPizza.size}
            onChange={(e) => setChosenPizza(pizza.pizzas.find((pizza) => pizza.size === e) as PizzaEntity)}
          >
            {pizza.pizzas.map((pizza, index) => (
              <Select.Option key={index} value={pizza.size}>
                {pizza.size}
              </Select.Option>
            ))}
          </Select>
        </div>
        <div className='h-[55px] pb-1 p-[10px] relative'>
          <div className='absolute text-[13px] text-[rgba(0,0,0,0.54)] translate-x-3] left-6 z-10 top-0 bg-white px-1'>
            <span> {t('Select your crust')}</span>
          </div>
          <Select
            style={{
              width: '100%',
              height: '100%'
            }}
            className='capitalize'
            popupClassName='capitalize'
            defaultValue={ECrust[Object.keys(ECrust)[0] as keyof typeof ECrust]}
            onChange={(e) => setBase(e)}
          >
            {Object.keys(ECrust).map((key, index) => (
              <Select.Option key={index} value={ECrust[key as keyof typeof ECrust]}>
                {ECrust[key as keyof typeof ECrust]}
              </Select.Option>
            ))}
          </Select>
        </div>
        <div className='h-[53px] px-[10px] py-2 flex justify-end items-center'>
          <button
            className='bg-[#0A8020] w-full h-full rounded text-white flex justify-between py-[6px] px-4 text-sm hover:shadow-md'
            onClick={() => handleAddPizza()}
          >
            <div>{t('Add')}</div>
            <div>{formatCurrency(chosenPizza?.price)}</div>
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
    </>
  )
}

export default Pizza
