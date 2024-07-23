import { formatCurrency } from '../../../utils/fomat'
import { FoodInOrder } from '../../../types'
import mutiple from '../../../assets/images/icons/multiply.png'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import { openModal } from '../../../store/slices/ModalSlice'
import DeleteItem from './DeleteItem'
import ChangeQuantityCart from './ChangeQuantityCart'
interface FoodInCartProps {
  food: FoodInOrder
  index: number
}
const FoodInCart = (props: FoodInCartProps) => {
  const { food, index } = props
  const dispatch = useAppDispatch()
  return (
    <div className='relative py-2 px-10 cursor-pointer hover:bg-slate-100 delay-100 text-sm'>
      <div className='flex justify-between font-bold pb-1'>
        <div>{food.food.name} </div>
        <div>{formatCurrency(food.priceAtBill * food.quantity)}</div>
      </div>
      <button
        className='absolute h-6 w-6 text-center top-[20%] font-bold left-2 rounded-[4px]  text-[#0A8020] bg-[rgb(245,247,249)]'
        onClick={() => dispatch(openModal(<ChangeQuantityCart foodInOrder={food} index={index} />))}
      >
        {food.quantity}x
      </button>
      <div
        className='absolute top-1 right-2 hover:bg-slate-200 rounded-full delay-100'
        onClick={() => dispatch(openModal(<DeleteItem foodInOrder={food} index={index} />))}
      >
        <img width='24' height='24' src={mutiple} alt='multiply' />
      </div>
    </div>
  )
}

export default FoodInCart
