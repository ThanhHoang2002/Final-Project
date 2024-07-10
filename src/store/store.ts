import { configureStore } from '@reduxjs/toolkit'
import ThemeSlice from './features/ThemeSlice'
import HeaderSlice from './features/HeaderSlice'

export const store = configureStore({
  reducer: {
    themeState: ThemeSlice,
    headerState: HeaderSlice
  }
})
