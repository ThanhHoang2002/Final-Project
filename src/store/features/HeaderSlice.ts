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
    setOpenAddress: (state, actions) => {
      state.isOpenAddress = actions.payload
    },
    setOpenRing: (state, actions) => {
      state.isOpenRing = actions.payload
    },
    setOpenProfile: (state, actions) => {
      state.isOpenProfile = actions.payload
    },
    setOpenTracking: (state, actions) => {
      state.isOpenTracking = actions.payload
    },
    setOpenBack: (state, actions) => {
      state.isOpenBack = actions.payload
    }
  }
})
export const { setOpenAddress, setOpenRing, setOpenProfile, setOpenTracking, setOpenBack } = HeaderSlice.actions
export default HeaderSlice.reducer
