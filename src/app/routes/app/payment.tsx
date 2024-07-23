/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import DefaultLayout from '../../../components/layout/DefaultLayout'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { setPaymentHeader } from '../../../store/slices/HeaderSlice'
import { formatCurrency } from '../../../utils/fomat'
import { useNavigate } from 'react-router-dom'
import { openModal } from '../../../store/slices/ModalSlice'
import ReceivingMethod from '../../../features/receivingMethod/components'
import { paymentMethod as getPaymentMethod } from '../../../utils/constance'

const PaymentRoute = () => {
  const dispatch = useAppDispatch()
  const order = useAppSelector((state) => state.OrderState)
  const navigate = useNavigate()
  const { receivingMethod, address, selectedStore } = useAppSelector((state) => state.receivingMethodState)
  const [note, setNote] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [chosenPaymentMethod, setChosenPaymentMethod] = useState<number>(0)
  const paymentMethod = getPaymentMethod
  useEffect(() => {
    dispatch(setPaymentHeader())
    if (order.total === 0) {
      navigate('/order')
    }
  }, [])

  const handleChangePaymentMethod = (index: number) => {
    if (index > 0) {
      return
    }
    setChosenPaymentMethod(index)
  }
  return (
    <DefaultLayout>
      <div className='w-full h-[85.6px] py-7 text-center bg-[url("https://pizzahut.vn/static/media/background.8c532c6143e1b30fc4a3.jpg")]'>
        <span className='uppercase font-bold text-2xl'>Thanh toán</span>
      </div>
      <div className='px-[10px]'>
        <div className='w-full flex justify-center items-center'>
          <div className='w-[600px] mt-3 h-auto'>
            <div className='shadow-3xl w-full px-[25px] h-auto rounded-[8px] '>
              <div
                className='flex border-b h-[75px] items-center justify-between cursor-pointer'
                onClick={() => navigate('/order')}
              >
                <div className='flex relative'>
                  <img
                    width='24'
                    height='24'
                    src='https://img.icons8.com/material-outlined/24/1A1A1A/shopping-cart--v1.png'
                    alt='shopping-cart--v1'
                  />
                  <span className='text-[16px] ml-3'> Xem chi tiết giỏ hàng của bạn</span>
                  <div className='absolute w-5 h-5 bg-[#c7102e] rounded-full text-white top-[-10px] left-4 flex justify-center items-center'>
                    <span className='text-[12px]'>
                      {order.pizzaInOrders.reduce((total, pizzaInOrder) => total + pizzaInOrder.quantity, 0) +
                        order.foodInOrders.reduce((total, foodInOrder) => total + foodInOrder.quantity, 0) +
                        order.comboInOrders.reduce((total, comboInOrder) => total + comboInOrder.quantity, 0)}
                    </span>
                  </div>
                </div>
                <div>
                  <img width='20' height='20' src='https://img.icons8.com/metro/26/0a8020/forward.png' alt='forward' />
                </div>
              </div>
              <div className='flex h-[75px] w-full items-center justify-between '>
                <div className='flex relative items-center w-[87.5%]'>
                  <img
                    width='24'
                    height='24'
                    src='https://img.icons8.com/material-outlined/24/1A1A1A/marker.png'
                    alt='marker'
                  />
                  <span className='text-[16px] ml-3 '>
                    {receivingMethod === 'delivery' ? (
                      <span>
                        Giao hàng tận nơi: <span className='font-bold'>{address}</span>
                      </span>
                    ) : (
                      <span>
                        Mua mang về: <span className='font-bold'>{selectedStore?.address}</span>
                      </span>
                    )}
                  </span>
                </div>
                <div
                  className='text-[#0A8020] rounded bg-white cursor-pointer'
                  onClick={() => dispatch(openModal(<ReceivingMethod />))}
                >
                  Thay đổi
                </div>
              </div>
              <div className='flex h-[52px] items-center justify-between pb-3'>
                <div className='flex relative w-full h-full'>
                  <img
                    className='w-6 h-6'
                    width='24'
                    height='24'
                    src='https://img.icons8.com/fluency-systems-regular/24/1A1A1A/notepad.png'
                    alt='notepad'
                  />
                  <input
                    className='text-[16px] ml-3 w-full h- border border-slate-300 rounded-[4px] py-[10.5px] px-[14px] focus:outline-none focus:border-[#0A8020]'
                    type='text'
                    placeholder='Ghi chú'
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className='shadow-3xl w-full px-[25px] py-[30px] h-auto rounded-[8px] mt-3'>
              <div className='text-center font-bold text-lg'>
                <span>Thông tin đặt hàng</span>
              </div>
              <div className='flex flex-col my-4'>
                <label className='font-bold'>Họ và tên*</label>
                <input
                  className={`mt-2 focus:outline-none rounded-[4px] h-[38.81px] px-[10.5px] py-[14px] placeholder:text-red-300  ${name === '' ? 'border border-[#ff0000] focus:border-2 focus:border-red-600' : 'border hover:border-black focus:border-2 focus:border-[#0A8020]'}`}
                  value={name}
                  type='text'
                  placeholder='Yêu cầu họ và tên'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='flex flex-col mt-4'>
                <label className='font-bold'>Số điện thoại*</label>
                <input
                  className={`mt-2 focus:outline-none  rounded-[4px] h-[38.81px] px-[10.5px] py-[14px] placeholder:text-red-300 ${phone === '' ? 'border border-[#ff0000] focus:border-2 focus:border-red-600' : 'border hover:border-black focus:border-2 focus:border-[#0A8020]'}`}
                  type='text'
                  value={phone}
                  placeholder='Yêu cầu số điện thoại'
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className='shadow-3xl w-full px-[25px] py-[30px] rounded-[8px] my-3'>
              <div className='text-center font-bold text-lg'>
                <span>Phương thức thanh toán</span>
              </div>
              {paymentMethod.map((method, index) => (
                <div
                  className='flex cursor-pointer mt-4 justify-center items-center'
                  onClick={() => handleChangePaymentMethod(index)}
                >
                  <div className='h-[42px] w-[42px] rounded-full hover:bg-slate-100 flex justify-center items-center'>
                    <div
                      className={`rounded-full w-5 h-5 border-[2.38px] p-[3px] ${chosenPaymentMethod === index ? 'border-[#0A8020]' : 'border-gray-500'} cursor-pointer`}
                    >
                      <div
                        className={`w-full h-full ${chosenPaymentMethod === index ? 'bg-[#0A8020]' : ''} rounded-full`}
                      ></div>
                    </div>
                  </div>
                  <div className='h-[62px] w-full border border-[#0A8020] rounded-[8px] flex items-center p-[12px]'>
                    <img className='h-[40px] w-[40px]' src={method.image} alt={method.name} />
                    <span className='ml-[15px] '>{method.name}</span>
                  </div>
                </div>
              ))}
              <button
                className='w-full h-[36.5px] p-[6px] bg-[#0A8020] text-white rounded-[4px] mt-4'
                //   onClick={handleSubmit}
              >
                <span className='uppercase font-bold text-[0.875rem]'>đặt hàng</span>
                <span className='text-[0.875rem] font-bold ml-[5px]'> {formatCurrency(order.total + 22000)}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default PaymentRoute
