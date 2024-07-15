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
    }
  }
})
export const { setHomeHeader, setOrderHeader } = HeaderSlice.actions
export default HeaderSlice.reducer
