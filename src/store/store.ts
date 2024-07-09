import { configureStore } from '@reduxjs/toolkit'
import ThemeSlice from './features/ThemeSlice'

export const store = configureStore({
  reducer: {
    themeState: ThemeSlice
  }
})
