import { useEffect } from 'react'
import ComboList from '../../../../../features/combo/components/ComboList'
interface Props {
  type: 'client' | 'staff'
}
const ComboRoute = (props: Props) => {
  const { type } = props
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div className='w-full'>
      <ComboList type={type} />
    </div>
  )
}

export default ComboRoute
