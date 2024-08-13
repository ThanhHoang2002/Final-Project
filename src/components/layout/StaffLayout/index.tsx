import { useAppSelector } from '../../../hooks/reduxHooks'
import MenuStaff from '../components/MenuStaff'
import Modal from '../components/Modal'
interface MenuStaffLayoutProps {
  children: React.ReactNode
}
const StaffLayout = ({ children }: MenuStaffLayoutProps) => {
  const isOpenModal = useAppSelector((state) => state.modalState.isOpenModal)
  const element = useAppSelector((state) => state.modalState.element)
  return (
    <div>
      <div
        className={`min-h-screen w-full  bg-white ${isOpenModal ? 'max-h-screen overflow-hidden brightness-50' : ''}`}
      >
        <div className='w-[260px] h-screen fixed top-0 left-0 '>
          <MenuStaff />
        </div>
        <div className='pl-[260px] w-full min-h-screen'>{children}</div>
      </div>
      <Modal isOpenModal={isOpenModal} element={element} />
    </div>
  )
}

export default StaffLayout
