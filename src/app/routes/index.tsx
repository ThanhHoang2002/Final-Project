/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Category } from '../../types'
const HomeRoute = React.lazy(() => import('./app/home'))
const OrderRoute = React.lazy(() => import('./app/order/root'))
const PizzaRoute = React.lazy(() => import('./app/order/pizza'))
const ComboRoute = React.lazy(() => import('./app/order/combo'))
export const createRouter = (categories: Category[]) =>
  createBrowserRouter([
    {
      path: '/',
      element: <HomeRoute />
    },
    {
      path: '/order',
      element: <OrderRoute />,
      children: categories.map((category) => {
        if (category.ComboComponent) {
          return {
            path: category.CategoryCode,
            element: <ComboRoute />
          }
        } else {
          return {
            path: category.CategoryCode,
            element: <PizzaRoute />
          }
        }
      })
    }
  ])
