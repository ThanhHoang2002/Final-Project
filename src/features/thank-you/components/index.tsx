/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from 'react-router-dom'
import { Order } from '../../../types'
import { formatCurrency } from '../../../utils/fomat'
import { useQuery } from '@tanstack/react-query'
import { getOrder } from '../api/getOrder'
import { MainErrorFallback } from '../../../components/error/main'
import { useTranslation } from 'react-i18next'
const ThankYou = () => {
  const navigate = useNavigate()
  const params = useParams()
  const order_id = params.order_id
  const { t } = useTranslation('payment')
  const hanldeClick = () => {
    navigate('/')
  }
  const { data, isFetching, isError } = useQuery({
    queryKey: ['order', order_id],
    queryFn: () => getOrder(order_id as string),
    retry: false,
    retryOnMount: false,
    refetchInterval: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  })
  if (isFetching) return <div>Loading...</div>
  if (isError) return <MainErrorFallback />
  const order = data as Order
  const state = [
    {
      id: 1,
      name: 'Chờ xác nhận'
    },
    {
      id: 2,
      name: 'Đang chuẩn bị'
    },
    {
      id: 3,
      name: order.receiveMethod === 'pickup' ? 'Chờ nhận hàng' : 'Đang giao hàng'
    },
    {
      id: 4,
      name: 'Hoàn thành'
    }
  ]
  const currentState = state.find((item) => item.name.toLocaleLowerCase() === order?.state?.toLocaleLowerCase())?.id
  return (
    <div>
      <div className='w-full h-auto flex justify-center bg-[url("https://pizzahut.vn/static/media/background.8c532c6143e1b30fc4a3.jpg")]'>
        <div className='w-[600px]'>
          <div className='w-full min-h-[70px] py-[10px] px-[20px] bg-white rounded-t-[4px]'>
            <p className='py-[10px] px-[20px] text-center font-bold text-xl text-[rgba(0,0,0,0.54)]'>
              Cảm ơn vì đã lựa chọn chúng tôi {order?.name}!
            </p>
          </div>
          <div className='p-[10px] w-full h-[84px] bg-[url("https://cdn.pizzahut.vn/images/Web_V3/Homepage/Thanksyoupage.jpg")] text-center'>
            <h5 className='text-[#C8102E] text-[1.5rem] leading-[1.334]'> Chúc bạn ngon miệng</h5>
            <h6 className='text-[rgba(0,0,0,0.54)] text-[1.25rem] leading-[1.6] font-medium'>Hẹn sớm gặp lại bạn</h6>
          </div>
          <div className='w-full px-[10px] bg-white'>
            <div className='pt-[15px] text-[#231F20]'>
              <p>Thông tin đơn hàng</p>
            </div>
            <div className='py-[8px] px-[10px] border-t-[2px] text-[rgba(0,0,0,0.54)]'>
              <p className='px-[5px]'>Mã đơn hàng #{order?.order_id}</p>
              <p className='px-[5px]'>Đơn hàng</p>
              <div>
                {order?.foodInOrders?.map((food, index) => (
                  <div
                    key={index}
                    className='grid grid-cols-8 py-2 px-10 cursor-pointer hover:bg-slate-100 delay-100 text-sm'
                  >
                    <div className='h-6 w-6 text-center font-bold border '>x{food.quantity}</div>
                    <div className=' font-bold pl-[30px] col-span-6'>{food.food.name} </div>
                    <div className='justify-self-end font-bold'>{formatCurrency(food.priceAtBill * food.quantity)}</div>
                  </div>
                ))}
                {order?.comboInOrders?.map((combo, index) => (
                  <div
                    key={index}
                    className='grid grid-cols-8 py-2 px-10 cursor-pointer hover:bg-slate-100 delay-100 text-sm'
                  >
                    <div className='h-6 w-6 text-center  font-bold border '>x{combo.quantity}</div>
                    <div className='font-bold pl-[30px] col-span-6'>{combo.combo.name} </div>
                    <div className='justify-self-end font-bold'>
                      {formatCurrency(combo.priceAtBill * combo.quantity)}
                    </div>
                  </div>
                ))}
                {order?.pizzaInOrders?.map((pizza, index) => (
                  <div
                    key={index}
                    className='grid grid-cols-8 py-2 tablet:px-10 cursor-pointer hover:bg-slate-100 delay-100 text-sm '
                  >
                    <div className=' h-6 w-6 text-center font-bold border '>x{pizza.quantity}</div>
                    <div className='col-span-6 flex-col justify-between pb-1'>
                      <div className='font-bold'>{pizza.pizza.name} </div>
                      <div>{pizza.pizza.size}</div>
                      <div>{pizza.base}</div>
                    </div>
                    <div className='justify-self-end font-bold'>
                      {formatCurrency(pizza.priceAtBill * pizza.quantity)}
                    </div>
                  </div>
                ))}
              </div>
              <div className='px-[5px] bg-[#F5F7F9]'>
                <div className='pb-[10px] flex justify-between'>
                  <p>Tổng</p>
                  <p>{formatCurrency(order?.total as number)}</p>
                </div>
                <div className='pb-[10px] flex justify-between'>
                  <p>Phí vận chuyển</p>
                  <p>{order.receiveMethod === 'delivery' ? formatCurrency(22000) : formatCurrency(0)}</p>
                </div>
                <div className='pb-[10px] flex justify-between'>
                  <p>Thanh toán</p>
                  <p>{formatCurrency((order?.total as number) + (order.receiveMethod === 'delivery' ? 22000 : 0))}</p>
                </div>
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
                  {order.receiveMethod === 'delivery' ? (
                    <span>
                      {t('Delivery Address')}: <span className='font-bold'>{order.address}</span>
                    </span>
                  ) : (
                    <span>
                      {t('Pick up Address')}: <span className='font-bold'>{order.store.name}</span>
                    </span>
                  )}
                </span>
              </div>
            </div>
            <div className='flex h-[52px] items-center justify-between pb-3 pr-[10px]'>
              <div className='flex relative w-full h-full'>
                <img
                  className='w-6 h-6'
                  width='24'
                  height='24'
                  src='https://img.icons8.com/fluency-systems-regular/24/1A1A1A/notepad.png'
                  alt='notepad'
                />
                <p className='text-[16px]  ml-3 w-full h- border border-slate-300 rounded-[4px] py-[10.5px] px-[14px] focus:outline-none focus:border-[#0A8020]'>
                  {order.note}
                </p>
              </div>
            </div>
            <div className='h-[75px] w-full py-[10px] px-[15px]'>
              <p>Phương thức thanh toán</p>
              <div className='h-[40px] pt-[10px] border-t-[2px] flex'>
                <img
                  className='h-[30px] w-[30px]'
                  src='https://cdn.pizzahut.vn/images/Web_V3/Payment/cash.png'
                  alt='tien_mat'
                />
                <p className='pl-2 text-[rgba(0,0,0,0.54)]'>Thanh toán bằng tiền mặt</p>
              </div>
            </div>
            <div className='w-full grid grid-cols-4 py-[10px]'>
              <p className='col-span-4 border-b-2 my-5'> Tình trạng đơn hàng</p>
              {state.map((item, index) => (
                <div
                  key={index}
                  className={`h-3 ${item.id <= (currentState as number) ? 'bg-[#0A8020] ' : 'bg-[#DFDFE3]'} ${item.id === 1 ? 'rounded-l-lg' : ''} ${item.id === 4 ? 'rounded-r-lg' : ''}`}
                ></div>
              ))}
              <div>Chờ xác nhận</div>
              <div className='justify-self-center'>Đang chuẩn bị</div>
              <div className='justify-self-center'>
                {order?.receiveMethod.toLowerCase() === 'pickup' ? 'Chờ nhận hàng' : 'Đang vận chuyển'}
              </div>
              <div className='justify-self-end'>Hoàn thành</div>
            </div>
            <div className='h-[104px] py-[10px] px-[5px] mt-5'>
              <div className='p-[10px] my-[6px] text-center bg-[#DFDFE3] rounded-[4px]'>
                <div className='font-bold text-[rgba(0,0,0,0.87)] text-[18px]'>Câu hỏi cho chúng tôi?</div>
                <div className='text-[rgb(10,128,32)] text-[18px] '>Mọi thông tin liên hệ: 1234 5678</div>
              </div>
            </div>
            <div className='px-[10px]'>
              <button
                className='w-full h-[40px] bg-[#0A8020] text-white rounded-[4px] font-bold text-[0.9375rem]'
                onClick={hanldeClick}
              >
                Tiếp tục mua hàng
              </button>
            </div>
          </div>
          <div className='h-6 rounded-b-[4px] bg-white'></div>
        </div>
      </div>
    </div>
  )
}

export default ThankYou
