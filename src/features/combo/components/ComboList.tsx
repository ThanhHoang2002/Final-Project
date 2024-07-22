import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import { getComboByCategory } from '../api/getComboByCategory'
import { Combo as ComboEntity } from '../../../types'
import Combo from './Combo'
import ComponentLoading from '../../../components/ui/Loading/ComponentLoading'
const ComboList = () => {
  const location = useLocation()
  const category = location.pathname.split('/').pop() as string
  const { data, isPending } = useQuery({
    queryKey: ['getComboByCategory', category],
    queryFn: () => getComboByCategory(category),
    staleTime: Infinity
  })
  if (isPending) return <ComponentLoading />
  return (
    <div className='grid grid-cols-1 tablet:grid-cols-2 p-2'>
      {data.map((combo: ComboEntity, index: number) => (
        <Combo key={index} combo={combo} isPending={isPending} />
      ))}
    </div>
  )
}

export default ComboList
