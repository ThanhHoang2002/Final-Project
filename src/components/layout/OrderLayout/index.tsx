import React from 'react'
import Header from '../components/Header'
import Cart from '../components/Cart'
interface OrderLayoutProps {
  children: React.ReactNode
}
const OrderLayout = ({ children }: OrderLayoutProps) => {
  return (
    <div className='flex'>
      <div className='min-h-screen w-full desktop:w-[75%]'>
        <header className='sticky top-0 z-50'>
          <Header />
        </header>
        <main>{children}</main>
      </div>
      <div>
        <Cart />
      </div>
    </div>
  )
}

export default OrderLayout
