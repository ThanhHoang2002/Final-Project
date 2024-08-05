/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Category } from '../../types'
import { MainErrorFallback } from '../../components/error/main'
const HomeRoute = React.lazy(() => import('./app/client/home'))
const OrderRoute = React.lazy(() => import('./app/client/order/root'))
const PizzaRoute = React.lazy(() => import('./app/client/order/pizza'))
const ComboRoute = React.lazy(() => import('./app/client/order/combo'))
const FoodRoute = React.lazy(() => import('./app/client/order/food'))
const PaymentRoute = React.lazy(() => import('./app/client/payment'))
const ThankRoute = React.lazy(() => import('./app/client/thank-you'))
const TrackingRoute = React.lazy(() => import('./app/client/tracking'))
const RegisterRoute = React.lazy(() => import('./app/client/register'))
export const createRouter = (categories: Category[]) =>
  createBrowserRouter([
    {
      path: '/',
      element: <HomeRoute />,
      errorElement: <MainErrorFallback />
    },
    {
      path: '/order',
      element: <OrderRoute />,
      errorElement: <MainErrorFallback />,
      children: categories.map((category) => {
        if (category.ComboComponent == null) {
          return {
            path: category.CategoryCode.toLowerCase(),
            element: <FoodRoute />
          }
        } else {
          if (category.ComboComponent) {
            return {
              path: category.CategoryCode.toLowerCase(),
              element: <ComboRoute />
            }
          } else {
            return {
              path: category.CategoryCode.toLowerCase(),
              element: <PizzaRoute />
            }
          }
        }
      })
    },
    {
      path: '/payment',
      element: <PaymentRoute />,
      errorElement: <MainErrorFallback />
    },
    {
      path: '/thank-you/:order_id',
      element: <ThankRoute />,
      errorElement: <MainErrorFallback />
    },
    { path: '/tracking', element: <TrackingRoute /> },
    { path: '/register', element: <RegisterRoute /> }
  ])
