import { useQuery } from '@tanstack/react-query'
import { getFoodByCategory } from '../api/getFoodByCategory'
import { Food as FoodEntity } from '../../../types'
import Food from './Food'
import { useLocation } from 'react-router-dom'
import ComponentLoading from '../../../components/ui/Loading/ComponentLoading'
interface FoodListProps {
  type: 'client' | 'staff'
}
const FoodList = (props: FoodListProps) => {
  const { type } = props
  const location = useLocation()
  const category = location.pathname.split('/').pop() as string
  const { data, isPending } = useQuery({
    queryKey: ['getFoodByCategory', category],
    queryFn: () => getFoodByCategory(category),
    staleTime: Infinity
  })
  if (isPending) return <ComponentLoading />
  const foods = data as FoodEntity[]
  return (
    <div className='grid grid-cols-2 tablet:grid-cols-4'>
      {foods.map((food: FoodEntity, index: number) => (
        <Food key={index} food={food} isPending={isPending} type={type} />
      ))}
    </div>
  )
}

export default FoodList
