import { useAppDispatch } from '../../hooks/reduxHooks'
import { useEffect } from 'react'
import { setOrderHeader } from '../../store/features/HeaderSlice'

const Order = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setOrderHeader())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <div>Order</div>
}

export default Order
