import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { store } from '../store/store'

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
