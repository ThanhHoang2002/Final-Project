/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import DefaultLayout from '../../../../components/layout/DefaultLayout'
import { useAppDispatch } from '../../../../hooks/reduxHooks'
import { setRegisterHeader } from '../../../../store/slices/HeaderSlice'
import Register from '../../../../features/auth-client/components/register'

const RegisterRoute = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setRegisterHeader())
  }, [])
  return (
    <DefaultLayout>
      <Register />
    </DefaultLayout>
  )
}

export default RegisterRoute
