import { useAppSelector } from './hooks/reduxHooks'

function App() {
  const isDarkTheme = useAppSelector((state) => state.themeState.isDark)
  return (
    <div className={`App ${isDarkTheme ? 'dark' : ''} `}>
      <h1 className='text-red-300 dark:text-black'>React Typescript Template</h1>
    </div>
  )
}

export default App
