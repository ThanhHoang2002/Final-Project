import Home from '../pages/Home'
import Order from '../pages/Order'

export const publicRoutes = [
  {
    path: '/',
    component: Home,
    layout: 'default'
  },
  {
    path: '/order',
    component: Order,
    layout: 'order'
  }
]
export const privateRoutes = []
