import { createSlice } from '@reduxjs/toolkit'
import { Client } from '../../types'

export interface ClientState {
  client: Client | null
}
const initialState: ClientState = {
  client: null
}
export const ClientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    login: (state, action) => {
      state.client = action.payload
    },
    logout: (state) => {
      state.client = null
    }
  }
})
export const { login, logout } = ClientSlice.actions
export default ClientSlice.reducer
