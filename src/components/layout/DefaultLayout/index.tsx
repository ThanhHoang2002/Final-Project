import { ReactNode } from 'react'
import Header from '../components/Header'

interface DefaultLayoutProps {
  children: ReactNode
}
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className='min-h-screen w-full'>
      <header className='sticky top-0 z-50'>
        <Header />
      </header>
      <main>{children}</main>
    </div>
  )
}

export default DefaultLayout
