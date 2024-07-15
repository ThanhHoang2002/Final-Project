import { Provider } from 'react-redux'
import { persistor, store } from '../store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Suspense } from 'react'
import Loading from '../components/ui/Loading/AppLoading'
import { ErrorBoundary } from 'react-error-boundary'
import { MainErrorFallback } from '../components/error/main'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
type AppProviderProps = {
  children: React.ReactNode
}
export const AppProvider = ({ children }: AppProviderProps) => {
  const queryClient = new QueryClient()
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={<Loading />}>
          <ErrorBoundary FallbackComponent={MainErrorFallback}>
            <QueryClientProvider client={queryClient}>
              {children}
              <ReactQueryDevtools initialIsOpen={true} />
            </QueryClientProvider>
          </ErrorBoundary>
        </Suspense>
      </PersistGate>
    </Provider>
  )
}
