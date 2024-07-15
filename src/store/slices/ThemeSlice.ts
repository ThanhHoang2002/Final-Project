import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  isDark: boolean
}
const initialState: ThemeState = {
  isDark: false
}
export const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark
    }
  }
})
export const { toggleTheme } = ThemeSlice.actions
export default ThemeSlice.reducer
