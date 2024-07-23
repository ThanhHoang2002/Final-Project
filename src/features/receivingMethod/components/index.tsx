/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-constant-condition */
import { useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { Store } from '../../../types'
import { chooseStore, setChosenAddress, setReceivingMethod } from '../../../store/slices/ReceivingMethodSlice'
import Button from '../../../components/ui/Button'
import delivery from '../../../assets/images/gifs/delivery.gif'
import pickup from '../../../assets/images/gifs/pickup.gif'
import bikergray from '../../../assets/images/icons/bikergray.png'
import carryoutgray from '../../../assets/images/icons/Carryout_gray.png'
import cancel from '../../../assets/images/icons/cancle.png'
import location from '../../../assets/images/icons/icons8-location-24.png'
import checkmark from '../../../assets/images/icons/icons8-checkmark-64.png'
import close from '../../../assets/images/icons/close.png'
import { useTranslation } from 'react-i18next'
import { getAllStore } from '../api/getAllStore'
import { autoComplete } from '../api/autoComplete'
import iconLocationGray from '../../../assets/images/icons/icons8-location-24 gray.png'
import { useNavigate } from 'react-router-dom'
import { getGeometry } from '../api/getGeometry'
import { closeModal } from '../../../store/slices/ModalSlice'
import { getDistanceMatrix } from '../api/getDistanceMatrix'
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../components/ui/Loading/AppLoading'
interface ReceivingMethodProps {
  isShowClose?: boolean
}
const ReceivingMethod = (props: ReceivingMethodProps) => {
  const { isShowClose } = props
  const methodReceive = useAppSelector((state) => state.receivingMethodState.receivingMethod) === 'delivery'
  const selectedStore = useAppSelector((state) => state.receivingMethodState.selectedStore)
  const [address, setAddress] = useState<string>(useAppSelector((state) => state.receivingMethodState.address))
  const dispatch = useAppDispatch()

  const { t } = useTranslation('receivingMethod')
  const [predictiondata, setPredictiondata] = useState<any[]>([])
  const typingTimeoutRef = useRef<number | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const isOpenModal = useAppSelector((state) => state.modalState.isOpenModal)
  const isOpenStartOrdering = useAppSelector(
    (state) => state.receivingMethodState.address !== '' || state.receivingMethodState.selectedStore !== null
  )
  const navigate = useNavigate()

  const { data, isFetching } = useQuery({
    queryKey: ['getAllStore'],
    queryFn: getAllStore,
    staleTime: Infinity
  })
  const stores = data as Store[]
  if (isFetching) return <Loading />
  const handleChangedMethodReceive = (method: 'delivery' | 'pickup') => {
    setAddress('')
    dispatch(setReceivingMethod(method))
  }
  const handleAutocomplete = (value: string) => {
    setAddress(value)
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }
    typingTimeoutRef.current = window.setTimeout(() => {
      autoComplete(value).then((data) => {
        setPredictiondata(data)
      })
    }, 500)
  }
  const getMinDistanceStore = async (item: any) => {
    const addressGeometry = await getGeometry(item.place_id)
    const destinations = stores.map((store) => store.local)
    const matrixDistanse = await getDistanceMatrix(addressGeometry, destinations)
    const minIndexStore = matrixDistanse.reduce((minIndex: number, current: any, index: number): number => {
      if (current.distance.value < matrixDistanse[minIndex].distance.value) {
        return index
      } else {
        return minIndex
      }
    }, 0)
    return stores[minIndexStore]
  }
  const handleChosenAddress = async (item: any) => {
    setAddress(item.description)
    dispatch(setChosenAddress(item.description))
    setPredictiondata([])
    const minDistanceStore = await getMinDistanceStore(item)
    dispatch(chooseStore(minDistanceStore as Store))
  }
  const handleDeletedAddress = () => {
    setAddress('')
    dispatch(setChosenAddress(''))
    dispatch(chooseStore(null))
    setPredictiondata([])
  }
  const handleClickStartOrdering = () => {
    navigate('/order')
    window.scrollTo(0, 0)
    dispatch(closeModal())
  }

  return (
    <div className={`${isOpenModal ? 'w-[90%]' : 'w-full'} tablet:w-[450px] h-auto grid grid-cols-2 gap-x-1 relative`}>
      <div
        className={`${methodReceive === true ? 'h-[58px] bg-white text-[#ff0000] transform -translate-y-[3px] transition-transform' : 'bg-[#eaeaea] h-[55px] '} 
          cursor-pointer rounded-t-md  flex justify-center items-center 
          shadow-[10px_-50px_60px_-15px_rgba(0,0,0,0.3)]`}
        onClick={() => handleChangedMethodReceive('delivery')}
      >
        <img className='h-[28px]' src={`${methodReceive === true ? delivery : bikergray}`} alt=':icon' />
        <span className='font-bold  pl-2 text-[14px]'>{t('Delivery')}</span>
      </div>
      <div
        className={`${methodReceive === false ? 'h-[58px] bg-white text-[#ff0000] transform -translate-y-[3px] transition-transform' : 'bg-[#eaeaea] h-[55px] '} cursor-pointer rounded-t-md  flex justify-center items-center shadow-[10px_-50px_60px_-15px_rgba(0,0,0,0.3)]`}
        onClick={() => handleChangedMethodReceive('pickup')}
      >
        <img className='h-[28px]' src={`${methodReceive === false ? pickup : carryoutgray}`} alt=':icon' />
        <span className='font-bold pl-2 text-[14px]'>{t('Carryout')}</span>
      </div>
      <div
        className='h-auto bg-white w-full col-span-2 transform -translate-y-[4px] transition-transform rounded-b-md p-[10px]'
        style={{ boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.2)' }}
      >
        {methodReceive === true ? (
          <div className=' flex justify-start'>
            <div className='w-full'>
              <input
                ref={inputRef}
                className='w-full h-full border-[#0a8020] border-2 p-[10px] rounded-md text-[0.875rem] focus:outline-none font-medium'
                type='text'
                placeholder='Vui lòng cho chúng tôi biết địa chỉ của bạn!'
                value={address}
                onChange={(e) => handleAutocomplete(e.target.value)}
              />
              <div className='absolute w-[85%] bg-white tablet:w-[87%]'>
                {predictiondata?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`bg-white w-full h-[60px] py-[4px] pl-4 flex justify-start border-b-2 border-x-2 b transition-colors duration-75 ease-in-out hover:brightness-95`}
                      onClick={() => handleChosenAddress(item)}
                    >
                      <div className='flex items-center justify-center'>
                        <img className='h-[15px]' src={iconLocationGray} alt=':icon' />
                      </div>
                      <div className='pl-3 w-[93%] flex flex-col justify-center'>
                        <div className='font-bold text-sm'>{item.structured_formatting.main_text}</div>
                        <div className='text-sm truncate '>{item.structured_formatting.secondary_text}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div
              className={`w-[40px] h-[40px] text-[#0A8020] flex justify-center items-center cursor-pointer ${address === '' ? 'hidden' : ''}`}
              onClick={handleDeletedAddress}
            >
              <img className='h-[20px] w-[20px] cursor-pointer' src={cancel} alt=':icon' />
            </div>
          </div>
        ) : (
          <div className='max-h-[250px] overflow-y-auto'>
            {stores.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${selectedStore?.name === item.name ? 'bg-gray-200' : 'bg-white'} w-full h-[87px] py-[4px] flex justify-start border-b-2 border-b-[#eeeeee] cursor-pointer transition-colors duration-200 ease-in-out `}
                  onClick={() => dispatch(chooseStore(item))}
                >
                  <div className='flex justify-center items-center'>
                    <img src={location} alt=':icon' />
                  </div>
                  <div className='pl-3 w-[80%] flex flex-col justify-center'>
                    <div className='font-bold'>{item.name}</div>
                    <div className='font-medium'>{item.address}</div>
                  </div>
                  {selectedStore?.name === item.name ? (
                    <div className='flex justify-center items-center translate-x-5'>
                      <img className='h-[25px] w-[25px]' src={checkmark} alt=':icon' />
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        )}
        <div className={`${isOpenStartOrdering ? 'block' : 'hidden'} mt-[10px] font-medium `}>
          <Button onClick={handleClickStartOrdering}> {t('Start ordering')}</Button>
        </div>
      </div>
      <button
        className={`${isShowClose ? 'absolute top-[-10px] right-[-15px]' : 'hidden'}`}
        onClick={() => dispatch(closeModal())}
      >
        <img className='w-[30px]' src={close} alt='close' />
      </button>
    </div>
  )
}

export default ReceivingMethod
