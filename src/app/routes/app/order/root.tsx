import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks'
import { Suspense, useEffect } from 'react'
import { setOrderHeader } from '../../../../store/slices/HeaderSlice'
import OrderLayout from '../../../../components/layout/OrderLayout'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Category from '../../../../features/category/components'
import ComponentLoading from '../../../../components/ui/Loading/ComponentLoading'

const Order = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const categories = useAppSelector((state) => state.catagoriesState.categories)
  const location = useLocation()
  useEffect(() => {
    dispatch(setOrderHeader())
    if (location.pathname === '/order') {
      categories.map((category) => {
        if (category.Default_Cate) {
          return navigate('/order/' + category.CategoryCode)
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <OrderLayout>
      <div>
        <div>
          <Category />
        </div>
        <Suspense fallback={<ComponentLoading />}>
          <Outlet />
        </Suspense>
      </div>
    </OrderLayout>
  )
}
export default Order
