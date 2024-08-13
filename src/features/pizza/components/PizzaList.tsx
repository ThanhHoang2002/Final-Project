import { useQuery } from '@tanstack/react-query'
import { PizzaType } from '../../../types'
import Pizza from './Pizza'
import { getAllPizza } from '../api/getAllPizza'
import ComponentLoading from '../../../components/ui/Loading/ComponentLoading'
interface PizzaListProps {
  type: 'client' | 'staff'
}
const PizzaList = (props: PizzaListProps) => {
  const { type } = props
  const { data, isPending } = useQuery({
    queryKey: ['getAllPizza'],
    queryFn: getAllPizza,
    staleTime: Infinity
  })
  if (isPending) return <ComponentLoading />
  return (
    <div className='grid grid-cols-2 tablet:grid-cols-4'>
      {data.map((pizza: PizzaType, index: number) => (
        <Pizza key={index} pizza={pizza} isPending={isPending} type={type} />
      ))}
    </div>
  )
}

export default PizzaList
