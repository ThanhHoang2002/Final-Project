import React, { useState } from 'react'
import Header from '../components/Header'
import Cart from '../components/Cart'
import { useAppSelector } from '../../../hooks/reduxHooks'
import Modal from '../components/Modal'
import { Drawer } from 'antd'
import { formatCurrency } from '../../../utils/fomat'
import { useTranslation } from 'react-i18next'
interface OrderLayoutProps {
  children: React.ReactNode
}
const OrderLayout = ({ children }: OrderLayoutProps) => {
  const isOpenModal = useAppSelector((state) => state.modalState.isOpenModal)
  const element = useAppSelector((state) => state.modalState.element)
  const order = useAppSelector((state) => state.OrderState)
  const { t } = useTranslation('order')
  const [open, setOpen] = useState<boolean>(false)
  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  return (
    <>
      <div
        className={`min-h-screen w-full  bg-white ${isOpenModal ? 'flex max-h-screen overflow-hidden brightness-50' : ''}`}
      >
        <div className='min-h-screen w-full desktop:w-[75%] z-10'>
          <header className='sticky top-0 z-50'>
            <Header />
          </header>
          <main className='z-10'>{children}</main>
        </div>
        <div className='z-20'>
          <div className='desktop:fixed desktop:block h-screen w-[25%] bg-white border-l top-0 right-0 hidden'>
            <Cart type='client' />
          </div>
          <div className='w-full bg-white fixed bottom-0 left-0 desktop:hidden h-[60px] z-50'>
            <div className='w-full h-[56.5px] p-[10px]'>
              <button
                className='bg-[#0A8020] text-white rounded-[4px] font-bold px-4 h-full w-full flex items-center justify-between text-end hover:shadow-xl'
                onClick={showDrawer}
              >
                <div className=' capitalize'>
                  <p>
                    {t('Check Out')} •{' '}
                    <span>
                      {order.pizzaInOrders.reduce((item, current) => {
                        return item + current.quantity
                      }, 0) +
                        order.foodInOrders.reduce((item, current) => {
                          return item + current.quantity
                        }, 0) +
                        order.comboInOrders.reduce((item, current) => {
                          return item + current.quantity
                        }, 0)}
                    </span>{' '}
                    {t('item')}
                  </p>
                </div>
                <div className=''>
                  {formatCurrency(
                    order.pizzaInOrders.length + order.foodInOrders.length + order.comboInOrders.length === 0
                      ? 0
                      : order.total + 0
                  )}
                </div>
              </button>
            </div>
            <Drawer
              placement='bottom'
              closable={false}
              onClose={onClose}
              open={open}
              key='bottom'
              height={''}
              style={{ filter: ` ${isOpenModal ? 'brightness(50%)' : ''}` }}
            >
              <div className='h-screen'>
                <Cart type='client' isOpenBack={true} onClick={onClose} />
              </div>
            </Drawer>
          </div>
        </div>
      </div>
      <Modal isOpenModal={isOpenModal} element={element} />
    </>
  )
}

export default OrderLayout
