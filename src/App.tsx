import { Route, Routes } from 'react-router-dom'
import { useAppSelector } from './hooks/reduxHooks'
import { publicRoutes } from './routes'
import DefaultLayout from './layouts/DefaultLayout'
import OrderLayout from './layouts/OrderLayout'

function App() {
  const isDarkTheme = useAppSelector((state) => state.themeState.isDark)
  return (
    <div className={`App ${isDarkTheme ? 'dark' : ''} `}>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = route.layout === 'default' ? DefaultLayout : OrderLayout
          const Page = route.component
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          )
        })}
      </Routes>
    </div>
  )
}

export default App
