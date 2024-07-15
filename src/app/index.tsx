/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from 'react'
import { createRouter } from './routes'
import { RouterProvider } from 'react-router-dom'
import { AppProvider } from './main-provider'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { fetchAllCategories } from '../store/slices/CategoriesSlice'
const AppRouter = () => {
  const categories = useAppSelector((state) => state.catagoriesState.categories)
  const router = useMemo(() => createRouter(categories), [categories])
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllCategories())
  }, [])
  return <RouterProvider router={router} />
}
function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}
export default App
