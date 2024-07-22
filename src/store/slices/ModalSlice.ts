import { createSlice } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

export interface ModalState {
  isOpenModal: boolean
  element: ReactNode | null
}
const initialState: ModalState = {
  isOpenModal: false,
  element: null
}
const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpenModal = true
      state.element = action.payload
    },
    closeModal: (state) => {
      state.isOpenModal = false
      state.element = null
    }
  }
})
export const { openModal, closeModal } = ModalSlice.actions
export default ModalSlice.reducer
