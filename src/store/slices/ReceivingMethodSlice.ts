import { createSlice } from '@reduxjs/toolkit'
import { Store } from '../../types'

export interface ReceivingMethodState {
  receivingMethod: 'directly' | 'pickup' | 'delivery'
  address: string
  selectedStore: Store | null
}
const initialState: ReceivingMethodState = {
  receivingMethod: 'delivery',
  address: '',
  selectedStore: null
}
const ReceivingMethodSlice = createSlice({
  name: 'receivingMethod',
  initialState,
  reducers: {
    setReceivingMethod: (state, actions) => {
      state.receivingMethod = actions.payload
      ;(state.address = ''), (state.selectedStore = null)
    },
    setChosenAddress: (state, actions) => {
      state.address = actions.payload
    },
    chooseStore: (state, actions) => {
      state.selectedStore = actions.payload
    }
  }
})
export const { setReceivingMethod, setChosenAddress, chooseStore } = ReceivingMethodSlice.actions
export default ReceivingMethodSlice.reducer
