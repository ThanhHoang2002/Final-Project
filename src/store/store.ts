import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ThemeSlice from './features/ThemeSlice'
import HeaderSlice from './features/HeaderSlice'
import ReceivingMethodSlice from './features/ReceivingMethodSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['receivingMethodState']
}
const rootReducer = combineReducers({
  themeState: ThemeSlice,
  headerState: HeaderSlice,
  receivingMethodState: ReceivingMethodSlice
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
