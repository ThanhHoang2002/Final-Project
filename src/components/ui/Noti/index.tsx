import { useAppDispatch } from '../../../hooks/reduxHooks'
import { closeModal } from '../../../store/slices/ModalSlice'

interface NotiProps {
  text: string
}
const Noti = (props: NotiProps) => {
  const { text } = props
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(closeModal())
  }
  return (
    <div className='w-[444px] bg-white rounded-[4px] relative shadow-xl'>
      <div className='px-[24px] pt-[20px] pb-[8px] text-center'>{text}</div>
      <div className='p-2'>
        <button className='w-full px-4 py-[6px] bg-[#0A8020] text-white rounded-[4px]' onClick={handleClick}>
          OK
        </button>
      </div>
    </div>
  )
}

export default Noti
