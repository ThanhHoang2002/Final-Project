import { Suspense, useEffect } from 'react'
import Category from '../../../../features/category/components'
import ComponentLoading from '../../../../components/ui/Loading/ComponentLoading'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Cart from '../../../../components/layout/components/Cart'
import { useAppSelector } from '../../../../hooks/reduxHooks'

const Order = () => {
  const navigate = useNavigate()
  const categories = useAppSelector((state) => state.catagoriesState.categories)
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === '/staff/order') {
      categories.map((category) => {
        if (category.Default_Cate) {
          return navigate('/staff/order/' + category.CategoryCode.toLowerCase())
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])
  return (
    <div className='w-full overflow-x-hidden'>
      <div className='w-[70%] flex flex-col'>
        <div className='w-[58%] fixed top-0 z-20 '>
          <Category />
        </div>
        <Suspense fallback={<ComponentLoading />}>
          <div className='z-10 mt-12'>
            <Outlet />
          </div>
        </Suspense>
      </div>
      <div className='fixed w-1/4 h-screen right-0 top-0'>
        <Cart type='staff' />
      </div>
    </div>
  )
}

export default Order
