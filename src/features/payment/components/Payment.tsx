import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { formatCurrency } from '../../../utils/fomat'
import { useNavigate } from 'react-router-dom'
import { openModal } from '../../../store/slices/ModalSlice'
import ReceivingMethod from '../../../features/receivingMethod/components'
import { paymentMethod } from '../../../utils/constance'
import { useFormik } from 'formik'
import { validationPaymentSchema } from '../../../utils/validator'
import { useTranslation } from 'react-i18next'
import Noti from '../../../components/ui/Noti'
import { resetOrder } from '../../../store/slices/OrderSlice'
import { Order, Store } from '../../../types'
import { postOrder } from '../api/postOrder'
import LoginForm from '../../auth-client/components/login-form'
const Payment = () => {
  const dispatch = useAppDispatch()
  const order = useAppSelector((state) => state.OrderState)
  const navigate = useNavigate()
  const { receivingMethod, address, selectedStore } = useAppSelector((state) => state.receivingMethodState)
  const [chosenPaymentMethod, setChosenPaymentMethod] = useState<number>(0)
  const { t } = useTranslation('payment')
  const client = useAppSelector((state) => state.ClientState.client)
  const handleChangePaymentMethod = (index: number) => {
    if (index > 0) {
      dispatch(openModal(<Noti text={t('Payment method is invalid')} />))
      return
    }
    setChosenPaymentMethod(index)
  }
  const paymentForm = useFormik({
    initialValues: {
      note: '',
      fullName: '',
      phoneNumber: ''
    },
    validationSchema: validationPaymentSchema,

    onSubmit: (values, action) => {
      const orderInput: Order = {
        note: values.note,
        paymentMethod: paymentMethod[chosenPaymentMethod].name,
        dayOrder: new Date(),
        address: address,
        store: selectedStore as Store,
        receiveMethod: receivingMethod,
        state: 'Chờ xác nhận',
        name: values.fullName,
        phone: values.phoneNumber,
        client: client,
        staff: null,
        comboInOrders: order.comboInOrders,
        pizzaInOrders: order.pizzaInOrders,
        foodInOrders: order.foodInOrders
      }
      if (client === null) {
        dispatch(openModal(<LoginForm />))
      } else {
        const response = postOrder(orderInput)
        response
          .then((res) => {
            navigate(`/thank-you/${res.order_id}`)
            dispatch(resetOrder())
            action.resetForm()
          })
          .catch(() => {
            dispatch(openModal(<Noti text={'Đặt hàng thất bại'} />))
          })
      }
    }
  })
  return (
    <div>
      <div className='w-full h-[85.6px] py-7 text-center bg-[url("https://pizzahut.vn/static/media/background.8c532c6143e1b30fc4a3.jpg")]'>
        <span className='uppercase font-bold text-2xl'>{t('SECURE PAYMENT')}</span>
      </div>
      <form className='px-[10px] ' onSubmit={paymentForm.handleSubmit}>
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
                  <span className='text-[16px] ml-3'> {t('View your basket detail')}</span>
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
                        {t('Delivery Address')}: <span className='font-bold'>{address}</span>
                      </span>
                    ) : (
                      <span>
                        {t('Pick up Address')}: <span className='font-bold'>{selectedStore?.address}</span>
                      </span>
                    )}
                  </span>
                </div>
                <div
                  className='text-[#0A8020] rounded bg-white cursor-pointer'
                  onClick={() => dispatch(openModal(<ReceivingMethod />))}
                >
                  {t('Change')}
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
                    name='note'
                    placeholder={t('Note')}
                    value={paymentForm.values.note}
                    onChange={paymentForm.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className='shadow-3xl w-full px-[25px] py-[30px] h-auto rounded-[8px] mt-3'>
              <div className='text-center font-bold text-lg'>
                <span>{t("Who's the order for")}</span>
              </div>
              <div className='flex flex-col my-4'>
                <label className='font-bold'>{t('Full name')}*</label>
                <input
                  className={`mt-2 focus:outline-none rounded-[4px] h-[38.81px] px-[10.5px] py-[14px] placeholder:text-red-300  placeholder:text-[#ff0000] placeholder:text-opacity-50
                    ${
                      paymentForm.errors.fullName || paymentForm.values.fullName === ''
                        ? 'border border-[#ff0000] focus:border-2 text-[#ff0000] focus:border-red-600'
                        : 'border hover:border-black focus:border-2 focus:border-[#0A8020]'
                    }`}
                  value={paymentForm.values.fullName}
                  name='fullName'
                  type='text'
                  placeholder={t('Name is required')}
                  onChange={paymentForm.handleChange}
                />
              </div>
              <div className='flex flex-col mt-4'>
                <label className='font-bold'>{t('Phone or mobile')}*</label>
                <input
                  className={`mt-2 focus:outline-none  rounded-[4px] h-[38.81px] px-[10.5px] py-[14px] placeholder:text-[#ff0000] placeholder:text-opacity-50
                    ${
                      paymentForm.errors.phoneNumber || paymentForm.values.phoneNumber === ''
                        ? 'border border-[#ff0000] focus:border-2 focus:border-red-600 text-[#ff0000] '
                        : 'border hover:border-black focus:border-2 focus:border-[#0A8020]'
                    }`}
                  type='text'
                  name='phoneNumber'
                  value={paymentForm.values.phoneNumber}
                  placeholder={t('Phone is required')}
                  onChange={paymentForm.handleChange}
                />
                {paymentForm.errors.phoneNumber && paymentForm.values.phoneNumber !== '' && (
                  <div className='text-xs ml-[10px] mt-1 text-[#ff0000]'>{t('Phone number is invalid')}</div>
                )}
              </div>
            </div>
            <div className='shadow-3xl w-full px-[25px] py-[30px] rounded-[8px] my-3'>
              <div className='text-center font-bold text-lg'>
                <span>{t('Payment method')}</span>
              </div>
              {paymentMethod.map((method, index) => (
                <div
                  key={index}
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
                    <span className='ml-[15px] '>
                      {index !== 0 ? t('Pay by') + ' ' + method.name : t('Pay by Cash')}
                    </span>
                  </div>
                </div>
              ))}
              <button className='w-full h-[36.5px] p-[6px] bg-[#0A8020] text-white rounded-[4px] mt-4' type='submit'>
                <span className='uppercase font-bold text-[0.875rem]'>{t('Place Order')}</span>
                <span className='text-[0.875rem] font-bold ml-[5px]'> {formatCurrency(order.total + 22000)}</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Payment
