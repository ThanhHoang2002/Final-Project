/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import DefaultLayout from '../../../../components/layout/DefaultLayout'
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks'
import { setPaymentHeader } from '../../../../store/slices/HeaderSlice'
import { useNavigate } from 'react-router-dom'
import Payment from '../../../../features/payment/components/Payment'
const PaymentRoute = () => {
  const dispatch = useAppDispatch()
  const order = useAppSelector((state) => state.OrderState)
  const selectedStore = useAppSelector((state) => state.receivingMethodState.selectedStore)
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(setPaymentHeader())
    if (order.total === 0 || selectedStore === null) {
      navigate('/order')
    }
  }, [])
  return (
    <DefaultLayout>
      <div>
        <Payment />
      </div>
    </DefaultLayout>
  )
}

export default PaymentRoute
