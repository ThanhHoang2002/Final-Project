import { useEffect } from 'react'
import PizzaList from '../../../../../features/pizza/components/PizzaList'
interface Props {
  type: 'client' | 'staff'
}
const PizzaRoute = (props: Props) => {
  const { type } = props
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div className='min-h-screen w-full'>
      <PizzaList type={type} />
    </div>
  )
}

export default PizzaRoute
