import { useEffect } from 'react'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { setOpenAddress, setOpenBack } from '../../store/features/HeaderSlice'
const Home = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setOpenAddress(false))
    dispatch(setOpenBack(false))
  }, [])
  return <div className='h-[1000px]'>Home</div>
}

export default Home
