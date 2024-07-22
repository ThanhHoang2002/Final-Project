import { ReactNode } from 'react'
import Header from '../components/Header'
import { useAppSelector } from '../../../hooks/reduxHooks'
import Modal from '../components/Modal'

interface DefaultLayoutProps {
  children: ReactNode
}
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const isOpenModal = useAppSelector((state) => state.modalState.isOpenModal)
  const element = useAppSelector((state) => state.modalState.element)
  return (
    <>
      <div
        className={`min-h-screen w-full  bg-white ${isOpenModal ? 'max-h-screen overflow-hidden brightness-50' : ''}`}
      >
        <header className='sticky top-0 z-50'>
          <Header />
        </header>
        <main> {children}</main>
      </div>
      <Modal isOpenModal={isOpenModal} element={element} />
    </>
  )
}

export default DefaultLayout
