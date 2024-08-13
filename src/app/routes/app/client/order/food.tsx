import { useEffect } from 'react'
import FoodList from '../../../../../features/food/components/FoodList'
interface Props {
  type: 'client' | 'staff'
}
const FoodRoute = (props: Props) => {
  const { type } = props
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div className='min-h-screen w-full'>
      <FoodList type={type} />
    </div>
  )
}

export default FoodRoute
