import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks'
import { Suspense, useEffect } from 'react'
import { setOrderHeader } from '../../../../store/slices/HeaderSlice'
import OrderLayout from '../../../../components/layout/OrderLayout'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Category from '../../../../features/category/components'
import ComponentLoading from '../../../../components/ui/Loading/ComponentLoading'

const OrderRoute = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const categories = useAppSelector((state) => state.catagoriesState.categories)
  const location = useLocation()
  useEffect(() => {
    dispatch(setOrderHeader())
    if (location.pathname === '/order') {
      categories.map((category) => {
        if (category.Default_Cate) {
          return navigate('/order/' + category.CategoryCode.toLowerCase())
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])
  return (
    <OrderLayout>
      <div className='w-full min-h-screen h-[1000px] flex flex-col'>
        <div className='w-full fixed desktop:sticky desktop:top-[64px] bottom-[60px] z-20 '>
          <Category />
        </div>
        <Suspense fallback={<ComponentLoading />}>
          <div className='z-10'>
            <Outlet />
          </div>
        </Suspense>
      </div>
    </OrderLayout>
  )
}
export default OrderRoute
