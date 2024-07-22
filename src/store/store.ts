import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ThemeSlice from './slices/ThemeSlice'
import HeaderSlice from './slices/HeaderSlice'
import ReceivingMethodSlice from './slices/ReceivingMethodSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import { categoriesSlice } from './slices/CategoriesSlice'
import ModalSlice from './slices/ModalSlice'
import OrderSlice from './slices/OrderSlice'
const persistConfig = {
  key: 'root',
  version: 1,
  storage: storageSession,
  whitelist: ['receivingMethodState', 'catagoriesState', 'OrderState']
}
const rootReducer = combineReducers({
  themeState: ThemeSlice,
  headerState: HeaderSlice,
  receivingMethodState: ReceivingMethodSlice,
  catagoriesState: categoriesSlice.reducer,
  modalState: ModalSlice,
  OrderState: OrderSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
export const persistor = persistStore(store)
