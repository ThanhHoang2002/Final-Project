import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ThemeSlice from './slices/ThemeSlice'
import HeaderSlice from './slices/HeaderSlice'
import ReceivingMethodSlice from './slices/ReceivingMethodSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import { categoriesSlice } from './slices/CategoriesSlice'
const persistConfig = {
  key: 'root',
  version: 1,
  storage: storageSession,
  whitelist: ['receivingMethodState', 'catagoriesState']
}
const rootReducer = combineReducers({
  themeState: ThemeSlice,
  headerState: HeaderSlice,
  receivingMethodState: ReceivingMethodSlice,
  catagoriesState: categoriesSlice.reducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})
export const persistor = persistStore(store)
