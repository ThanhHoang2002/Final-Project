import { useTranslation } from 'react-i18next'
import { ComboInOrder, FoodInOrder, PizzaInOrder } from '../../../types'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import { closeModal } from '../../../store/slices/ModalSlice'
import { deleteItemInOrder } from '../../../store/slices/OrderSlice'

interface DeleteItemProps {
  pizzaInOrder?: PizzaInOrder
  comboInOrder?: ComboInOrder
  foodInOrder?: FoodInOrder
  index: number
}

const DeleteItem = (props: DeleteItemProps) => {
  const { pizzaInOrder, comboInOrder, foodInOrder, index } = props
  const { t } = useTranslation('order')
  const dispatch = useAppDispatch()
  const handeDeleteItem = () => {
    if (pizzaInOrder) {
      dispatch(deleteItemInOrder({ type: 'pizza', index }))
      dispatch(closeModal())
    }
    if (comboInOrder) {
      dispatch(deleteItemInOrder({ type: 'combo', index }))
      dispatch(closeModal())
    }
    if (foodInOrder) {
      dispatch(deleteItemInOrder({ type: 'food', index }))
      dispatch(closeModal())
    }
  }
  return (
    <div className='px-5 pt-6 pb-2 bg-white h-auto w-auto rounded-md min-h-[185px] min-w-[405px]'>
      <div className='flex justify-center items-center border-b'>
        <h1 className='font-bold text-xl'>{t('Remove item')} </h1>
      </div>
      <div className='flex flex-col items-center justify-center py-6 px-4 min-h-[90px]'>
        <h1 className='font-medium'>
          {t('Are you sure you want to remove')}
          <span> {pizzaInOrder?.pizza.name || comboInOrder?.combo.name || foodInOrder?.food.name}</span>
        </h1>
      </div>
      <div className='w-full h-[40%] grid grid-cols-2 min-h-[55px]'>
        <button className='m-2 border border-[#0A8020] rounded-[4px]' onClick={() => dispatch(closeModal())}>
          {t('Cancel')}
        </button>
        <button className='m-2 bg-[#0A8020] text-white rounded-[4px]' onClick={handeDeleteItem}>
          {t('Remove')}
        </button>
      </div>
    </div>
  )
}

export default DeleteItem
