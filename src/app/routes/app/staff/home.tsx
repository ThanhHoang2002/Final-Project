/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet, useNavigate } from 'react-router-dom'
import StaffLayout from '../../../../components/layout/StaffLayout'
import { useEffect } from 'react'

const HomeRoute = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('order')
  }, [])
  return (
    <StaffLayout>
      <Outlet />
    </StaffLayout>
  )
}

export default HomeRoute
