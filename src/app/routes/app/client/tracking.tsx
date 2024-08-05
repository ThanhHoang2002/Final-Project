/* eslint-disable react-hooks/exhaustive-deps */
import { FormEvent, useEffect, useState } from 'react'
import DefaultLayout from '../../../../components/layout/DefaultLayout'
import { useAppDispatch } from '../../../../hooks/reduxHooks'
import { setOrderHeader } from '../../../../store/slices/HeaderSlice'
import { useNavigate } from 'react-router-dom'

const TrackingRoute = () => {
  const dispatch = useAppDispatch()
  const [input, setInput] = useState('')
  const navigate = useNavigate()
  const hanldeClick = (e: FormEvent) => {
    e.preventDefault()
    navigate(`/thank-you/${input}`)
  }
  useEffect(() => {
    dispatch(setOrderHeader())
  }, [])
  return (
    <DefaultLayout>
      <div className='w-full h-screen flex justify-center bg-[url("https://pizzahut.vn/static/media/background.8c532c6143e1b30fc4a3.jpg")]'>
        <form className='w-[600px] h-full bg-white p-4 text-center' onSubmit={(e) => hanldeClick(e)}>
          <h6 className='uppercase font-bold text-[1.25rem] leading-[1.6]'>Kiểm tra đơn hàng</h6>
          <input
            className='w-full h-[40px] mt-5 py-[10.5px] px-[14px] border rounded-[4px] border-[rgba(0,0,0,0.54)] focus:outline-none focus:border-[#0A8020] focus:border-2'
            placeholder='Mã đơn hàng *'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className='w-full h-[36.5px] mt-[12px] bg-[#0A8020] text-white rounded-[4px] uppercase' type='submit'>
            Tìm kiếm
          </button>
        </form>
      </div>
    </DefaultLayout>
  )
}

export default TrackingRoute
