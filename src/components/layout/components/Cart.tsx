import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { formatCurrency } from '../../../utils/fomat'
import information from '../../../assets/images/icons/info--v1.png'
import checked from '../../../assets/images/icons/checked--v1.png'
import PizzaInCart from '../../../features/cart/components/PizzaInCart'
import ComboInCart from '../../../features/cart/components/ComboInCart'
import FoodInCart from '../../../features/cart/components/FoodInCart'
import { useTranslation } from 'react-i18next'
import Back from '../../ui/Icon/Back'
import { useNavigate } from 'react-router-dom'
import ReceivingMethod from '../../../features/receivingMethod/components'
import { openModal } from '../../../store/slices/ModalSlice'
interface CartProps {
  isOpenBack?: boolean
  onClick?: () => void
}
const Cart = (props: CartProps) => {
  const order = useAppSelector((state) => state.OrderState)
  const selectedStore = useAppSelector((state) => state.receivingMethodState.selectedStore)
  const { t } = useTranslation(['order', 'header'])
  const { isOpenBack, onClick } = props
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleToPayment = () => {
    if (order.pizzaInOrders.length + order.foodInOrders.length + order.comboInOrders.length === 0) return
    else if (!selectedStore) {
      dispatch(openModal(<ReceivingMethod />))
    } else {
      navigate('/payment')
    }
  }
  return (
    <div className='shadow-sm h-full'>
      <div className='relative w-full h-[64px] text-center font-medium text-xl border-b flex items-center justify-center'>
        <div
          className={`${isOpenBack ? 'flex absolute top-[50%] translate-y-[-50%] left-0 items-center cursor-pointer mr-3 hover:bg-[rgba(10,128,32,0.04)] rounded-[4px] px-2 py-[6px]' : 'hidden'}`}
          onClick={onClick}
        >
          <Back />
          <p className='hidden tablet:inline-block uppercase text-sm text-green font-medium'>{t('header:back')}</p>
        </div>
        <p>----- {t('Your Basket')} ----</p>
      </div>
      <div className='h-[63%] overflow-y-auto'>
        {order.pizzaInOrders.length + order.foodInOrders.length + order.comboInOrders.length === 0 ? (
          <div className='h-[48px] bg-[rgb(232,244,253)] px-[16px] py-[6px]'>
            <div className='flex items-center h-full w-full'>
              <div className='pr-3'>
                <img className='text-[#2196f3] h-[22px] ' src={checked} alt='' />
              </div>
              <div className='text-center text-sm'>Không có sản phẩm trong giỏ hàng</div>
            </div>
          </div>
        ) : (
          <div>
            {order.pizzaInOrders.map((item, index) => (
              <PizzaInCart key={index} pizza={item} index={index} />
            ))}
            {order.foodInOrders.map((item, index) => (
              <FoodInCart key={index} food={item} index={index} />
            ))}
            {order.comboInOrders.map((item, index) => (
              <ComboInCart key={index} combo={item} index={index} />
            ))}
          </div>
        )}
      </div>
      <div className='w-full h-[46px] p-[5px]'>
        <button
          className='uppercase w-full h-full border border-[#0A8020] rounded-[4px] text-[#0A8020] px-[15px] py-[5px] bg-white hover:bg-[rgba(10,128,32,0.04)] duration-300'
          // onClick={() => handleShowInformation('Hiện tại bạn không có mã giảm giá khả dụng')}
        >
          {t('Use offers to get discounts')}
        </button>
      </div>
      <div className='bg-[#f5f7f9] h-[106px] p-[5px] '>
        <div className='flex justify-between'>
          <div className='font-medium'>{t('Sub total')}</div>
          <div className=''>{formatCurrency(order.total)}</div>
        </div>
        <div className='flex justify-between'>
          <div
            className='flex justify-between w-[50%] cursor-pointer'
            // onClick={() =>
            //   handleShowInformation(
            //     'Điều khoản và điều kiện áp dụng Giảm giá Thành Viên được quy định theo Chương Trình Khách Hàng thân thiết của Pizzeria Việt Nam.'
            //   )
            // }
          >
            <div className='font-medium '>{t('Member discount')}</div>
            <div className='h-[24px] w-[24px]'>
              <img src={information} alt='information' />
            </div>
          </div>
          <div className='text-[#ff0000]'>{formatCurrency(0)}</div>
        </div>
        <div className='flex justify-between'>
          <div
            className='flex justify-between w-[50%] cursor-pointer'
            // onClick={() =>
            //   handleShowInformation(
            //     'Chi tiết về điều khoản và điều kiện áp dụng được quy định theo các chương trình khuyến mại của Pizzeria tại từng thời điểm cụ thể.'
            //   )
            // }
          >
            <div className='font-medium '>{t('Promotion discount')}</div>
            <div className='h-[24px] w-[24px]'>
              <img src={information} />
            </div>
          </div>
          <div className='text-[#ff0000]'>{formatCurrency(0)}</div>
        </div>
        <div className='flex justify-between'>
          <div
            className='flex justify-between w-[50%] cursor-pointer'
            // onClick={() =>
            //   handleShowInformation('Phí giao hàng 22.000đ cho các sản phẩm combo hoặc chương trình khuyến mãi.')
            // }
          >
            <div className='font-medium '>{t('Shipping fee')}</div>
            <div className='h-[24px] w-[24px]'>
              <img src={information} alt='information' />
            </div>
          </div>
          <div>
            {formatCurrency(
              order.pizzaInOrders.length + order.foodInOrders.length + order.comboInOrders.length === 0 ? 0 : 22000
            )}
          </div>
        </div>
      </div>
      <div className='w-full h-[56.5px] p-[10px]'>
        <button
          className={`${
            order.pizzaInOrders.length + order.foodInOrders.length + order.comboInOrders.length === 0 || !selectedStore
              ? 'bg-[rgb(245,247,249)] text-[rgb(107,110,121)]'
              : 'bg-[#0A8020] text-white hover:shadow-xl'
          }
           rounded-[4px] font-bold px-4 h-full w-full flex items-center justify-between text-end `}
          onClick={handleToPayment}
        >
          <div className=' capitalize'>
            <p>
              {t('Check Out')} •{' '}
              <span>
                {order.pizzaInOrders.reduce((item, current) => {
                  return item + current.quantity
                }, 0) +
                  order.foodInOrders.reduce((item, current) => {
                    return item + current.quantity
                  }, 0) +
                  order.comboInOrders.reduce((item, current) => {
                    return item + current.quantity
                  }, 0)}
              </span>{' '}
              {t('item')}
            </p>
          </div>
          <div className=''>
            {formatCurrency(
              order.pizzaInOrders.length + order.foodInOrders.length + order.comboInOrders.length === 0
                ? 0
                : order.total + 0
            )}
          </div>
        </button>
      </div>
    </div>
  )
}

export default Cart
