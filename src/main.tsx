import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.css'
import { Provider } from 'react-redux'
import { store, persistor } from './store/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import './i18n/i18n'
import Loading from './components/Loading/index.tsx'
// eslint-disable-next-line react-refresh/only-export-components
const App = React.lazy(() => import('./App'))
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
