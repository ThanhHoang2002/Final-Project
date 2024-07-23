import React, { useEffect, useRef } from 'react'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import { closeModal } from '../../../store/slices/ModalSlice'
interface ModalProps {
  element: React.ReactNode
  isOpenModal: boolean
}
const Modal = (props: ModalProps) => {
  const refElement = useRef<HTMLDivElement>(null)
  const { isOpenModal, element } = props
  const dispatch = useAppDispatch()
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (refElement.current && !refElement.current.contains(event.target as Node)) {
        dispatch(closeModal())
      }
    }

    if (isOpenModal) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element])
  return (
    <div
      className={`${isOpenModal ? 'fixed h-screen  w-full top-0 z-[10000] flex justify-center items-center' : 'hidden'} `}
    >
      <div ref={refElement}>{element}</div>
    </div>
  )
}

export default Modal
