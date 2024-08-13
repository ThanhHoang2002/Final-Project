/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Category, ROLES } from '../../types'
import { MainErrorFallback } from '../../components/error/main'
import { Authorization } from '../../lib/authorzation'
import { NotFoundPage } from '../../components/error/notfoundPage'
const HomeRoute = React.lazy(() => import('./app/client/home'))
const OrderRoute = React.lazy(() => import('./app/client/order/root'))
const PizzaRoute = React.lazy(() => import('./app/client/order/pizza'))
const ComboRoute = React.lazy(() => import('./app/client/order/combo'))
const FoodRoute = React.lazy(() => import('./app/client/order/food'))
const PaymentRoute = React.lazy(() => import('./app/client/payment'))
const ThankRoute = React.lazy(() => import('./app/client/thank-you'))
const TrackingRoute = React.lazy(() => import('./app/client/tracking'))
const RegisterRoute = React.lazy(() => import('./app/client/register'))
const StaffRoute = React.lazy(() => import('./app/staff/home'))
const OrderListRoute = React.lazy(() => import('./app/staff/list-order'))
const OrderStaffRoute = React.lazy(() => import('./app/staff/order'))
const UserLoginRoute = React.lazy(() => import('./app/user-login'))
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
            element: <FoodRoute type='client' />
          }
        } else {
          if (category.ComboComponent) {
            return {
              path: category.CategoryCode.toLowerCase(),
              element: <ComboRoute type='client' />
            }
          } else {
            return {
              path: category.CategoryCode.toLowerCase(),
              element: <PizzaRoute type='client' />
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
    { path: '/register', element: <RegisterRoute /> },
    {
      path: '/user-login',
      element: <UserLoginRoute />
    },
    {
      path: '/staff',
      element: (
        <Authorization allowedRoles={[ROLES.STAFF, ROLES.MANAGER]} forbiddenFallback={<NotFoundPage />}>
          <StaffRoute />
        </Authorization>
      ),
      errorElement: <MainErrorFallback />,
      children: [
        {
          path: 'order/',
          element: <OrderStaffRoute />,
          children: categories.map((category) => {
            if (category.ComboComponent == null) {
              return {
                path: category.CategoryCode.toLowerCase(),
                element: <FoodRoute type='staff' />
              }
            } else {
              if (category.ComboComponent) {
                return {
                  path: category.CategoryCode.toLowerCase(),
                  element: <ComboRoute type='staff' />
                }
              } else {
                return {
                  path: category.CategoryCode.toLowerCase(),
                  element: <PizzaRoute type='staff' />
                }
              }
            }
          })
        },
        {
          element: <OrderListRoute />,
          path: 'list-order'
        }
      ]
    }
  ])
