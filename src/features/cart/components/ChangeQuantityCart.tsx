import { useState } from 'react'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import { closeModal } from '../../../store/slices/ModalSlice'
import { ComboInOrder, FoodInOrder, PizzaInOrder } from '../../../types'
import { useTranslation } from 'react-i18next'
import { changeQuantity } from '../../../store/slices/OrderSlice'
interface ChangeQuantityItemProps {
  pizzaInOrder?: PizzaInOrder
  comboInOrder?: ComboInOrder
  foodInOrder?: FoodInOrder
  index: number
}
const ChangeQuantityCart = (props: ChangeQuantityItemProps) => {
  const { pizzaInOrder, comboInOrder, foodInOrder, index } = props
  const [quantity, setQuantity] = useState<number>(
    (pizzaInOrder?.quantity || comboInOrder?.quantity || foodInOrder?.quantity) as number
  )
  const dispatch = useAppDispatch()
  const { t } = useTranslation('order')
  const handleUpdateQuantity = () => {
    if (pizzaInOrder) {
      dispatch(changeQuantity({ type: 'pizza', index, quantity }))
      dispatch(closeModal())
    }
    if (comboInOrder) {
      dispatch(changeQuantity({ type: 'combo', index, quantity }))
      dispatch(closeModal())
    }
    if (foodInOrder) {
      dispatch(changeQuantity({ type: 'food', index, quantity }))
      dispatch(closeModal())
    }
  }
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  const handleIncrease = () => {
    setQuantity(quantity + 1)
  }
  return (
    <div className='px-5 pt-6 pb-2 bg-white h-auto w-auto rounded-md min-h-[185px] min-w-[405px]'>
      <div className='flex items-center justify-center py-6 px-4 min-h-[90px] '>
        <h1 className='text-3xl font-bold'>
          {pizzaInOrder?.pizza.name || comboInOrder?.combo.name || foodInOrder?.food.name}
        </h1>
      </div>
      <div className='w-full h-auto min-h-[80px] py-5 border-b flex items-center justify-center'>
        <button className='w-10 h-[30px] bg-[#0A8020] text-white rounded-l-full' onClick={handleDecrease}>
          -
        </button>
        <div className='border h-[30px] w-10 text-center'>{quantity}</div>
        <button className='w-10 h-[30px] bg-[#0A8020] text-white rounded-r-full' onClick={handleIncrease}>
          +
        </button>
      </div>
      <div className='w-full h-[40%] grid grid-cols-2 min-h-[55px]'>
        <button className='m-2 border border-[#0A8020] rounded-[4px]' onClick={() => dispatch(closeModal())}>
          {t('Cancel')}
        </button>
        <button className='m-2 bg-[#0A8020] text-white rounded-[4px]' onClick={handleUpdateQuantity}>
          {t('Add to my basket')}
        </button>
      </div>
    </div>
  )
}

export default ChangeQuantityCart
