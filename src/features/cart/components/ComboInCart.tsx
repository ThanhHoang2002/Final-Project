import { ComboInOrder } from '../../../types'
import { formatCurrency } from '../../../utils/fomat'
import mutiple from '../../../assets/images/icons/multiply.png'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import { openModal } from '../../../store/slices/ModalSlice'
import DeleteItem from './DeleteItem'
import ChangeQuantityCart from './ChangeQuantityCart'
interface ComboInCartProps {
  combo: ComboInOrder
  index: number
}
const ComboInCart = (props: ComboInCartProps) => {
  const { combo, index } = props
  const dispatch = useAppDispatch()
  return (
    <div className='relative py-2 px-10 cursor-pointer hover:bg-slate-100 delay-100 text-sm'>
      <div className='flex justify-between font-bold pb-1'>
        <div>{combo.combo.name} </div>
        <div>{formatCurrency(combo.priceAtBill * combo.quantity)}</div>
      </div>
      <button
        className='absolute h-6 w-6 text-center top-[30%] font-bold left-2 rounded-[4px]  text-[#0A8020] bg-[rgb(245,247,249)]'
        onClick={() => dispatch(openModal(<ChangeQuantityCart comboInOrder={combo} index={index} />))}
      >
        {combo.quantity}x
      </button>
      <div
        className='absolute top-1 right-2 hover:bg-slate-200 rounded-full delay-100'
        onClick={() => dispatch(openModal(<DeleteItem comboInOrder={combo} index={index} />))}
      >
        <img width='24' height='24' src={mutiple} alt='multiply' />
      </div>
    </div>
  )
}

export default ComboInCart
