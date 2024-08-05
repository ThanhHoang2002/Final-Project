/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import DefaultLayout from '../../../../components/layout/DefaultLayout'
import ThankYou from '../../../../features/thank-you/components'
import { useAppDispatch } from '../../../../hooks/reduxHooks'
import { setThankHeader } from '../../../../store/slices/HeaderSlice'

const ThankRoute = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setThankHeader())
  }, [])
  return (
    <DefaultLayout>
      <div>
        <ThankYou />
      </div>
    </DefaultLayout>
  )
}

export default ThankRoute
