import { createSlice } from '@reduxjs/toolkit'
export interface HeaderState {
  isOpenAddress: boolean
  isOpenRing: boolean
  isOpenProfile: boolean
  isOpenTracking: boolean
  isOpenBack: boolean
}
const initialState: HeaderState = {
  isOpenAddress: true,
  isOpenRing: true,
  isOpenProfile: true,
  isOpenTracking: true,
  isOpenBack: true
}
export const HeaderSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setHomeHeader: (state) => {
      state.isOpenAddress = false
      state.isOpenRing = true
      state.isOpenProfile = true
      state.isOpenTracking = true
      state.isOpenBack = false
    },
    setOrderHeader: (state) => {
      state.isOpenAddress = true
      state.isOpenRing = true
      state.isOpenProfile = true
      state.isOpenTracking = false
      state.isOpenBack = false
    },
    setPaymentHeader: (state) => {
      state.isOpenAddress = true
      state.isOpenRing = false
      state.isOpenProfile = false
      state.isOpenTracking = false
      state.isOpenBack = true
    },
    setThankHeader: (state) => {
      state.isOpenAddress = false
      state.isOpenRing = false
      state.isOpenProfile = false
      state.isOpenTracking = false
      state.isOpenBack = false
    },
    setRegisterHeader: (state) => {
      state.isOpenAddress = true
      state.isOpenRing = false
      state.isOpenProfile = true
      state.isOpenTracking = false
      state.isOpenBack = true
    }
  }
})
export const { setHomeHeader, setOrderHeader, setPaymentHeader, setThankHeader, setRegisterHeader } =
  HeaderSlice.actions
export default HeaderSlice.reducer
