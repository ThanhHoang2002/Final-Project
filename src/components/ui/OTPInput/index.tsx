import React, { useEffect, useRef, useState } from 'react'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import { closeModal, openModal } from '../../../store/slices/ModalSlice'
import { sendOTP } from '../../../features/auth-client/api/sendOtp'
import Noti from '../Noti'
import ComponentLoading from '../Loading/ComponentLoading'
interface OTPFormProps {
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    value: string,
    setError: React.Dispatch<React.SetStateAction<string>>,
    setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>
  ) => void
  email: string
  error?: string
}
const OTPForm = (props: OTPFormProps) => {
  const { handleSubmit, email, error } = props
  const [errorState, setErrorState] = useState<string>(error || '')
  const inputsRef = useRef<Array<HTMLInputElement | null>>([])
  const submitButtonRef = useRef<HTMLButtonElement | null>(null)
  const [isLoaded, setIsLoaded] = useState<boolean>(true)
  const dispatch = useAppDispatch()
  useEffect(() => {
    const inputs = inputsRef.current

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!/^[0-9]{1}$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'Tab' && !e.metaKey) {
        e.preventDefault()
      }

      if (e.key === 'Delete' || e.key === 'Backspace') {
        const index = inputs.indexOf(e.target as HTMLInputElement)
        if (index > 0) {
          inputs[index - 1]!.value = ''
          inputs[index - 1]!.focus()
        }
      }
    }

    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement
      const index = inputs.indexOf(target)
      if (target.value) {
        if (index < inputs.length - 1) {
          inputs[index + 1]!.focus()
        } else {
          submitButtonRef.current!.focus()
        }
      }
    }

    const handleFocus = (e: FocusEvent) => {
      ;(e.target as HTMLInputElement).select()
    }

    const handlePaste = (e: ClipboardEvent) => {
      e.preventDefault()
      const text = e.clipboardData?.getData('text')
      if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text || '')) {
        return
      }
      const digits = text!.split('')
      inputs.forEach((input, index) => (input!.value = digits[index]))
      submitButtonRef.current!.focus()
    }

    inputs.forEach((input) => {
      input?.addEventListener('input', handleInput)
      input?.addEventListener('keydown', handleKeyDown)
      input?.addEventListener('focus', handleFocus)
      input?.addEventListener('paste', handlePaste)
    })

    return () => {
      inputs.forEach((input) => {
        input?.removeEventListener('input', handleInput)
        input?.removeEventListener('keydown', handleKeyDown)
        input?.removeEventListener('focus', handleFocus)
        input?.removeEventListener('paste', handlePaste)
      })
    }
  }, [])
  const [timeLeft, setTimeLeft] = useState<number>(60) // 60 giây

  useEffect(() => {
    if (timeLeft <= 0) {
      return
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft])
  const handleResendOTP = async () => {
    setIsLoaded(false)
    const response = await sendOTP(email)
    setIsLoaded(true)
    if (!response.success) {
      dispatch(openModal(<Noti text='Gửi OTP thất bại vui lòng thử lại' />))
    } else {
      setErrorState('')
      setTimeLeft(60)
    }
  }
  return (
    <div className='w-full max-w-6xl mx-auto px-4 md:px-6 py-24'>
      <div className='flex justify-center'>
        <div
          className={`${isLoaded || 'brightness-75'} max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow`}
        >
          <header className='mb-8'>
            <h1 className='text-xl font-bold mb-1 text-red'>Xác nhận đăng kí</h1>
            <p className='text-[15px] text-slate-500'>Vui lòng nhập mã xác nhận được gửi tới email của bạn</p>
          </header>
          <form
            id='otp-form'
            onSubmit={(e) =>
              handleSubmit(e, inputsRef.current.map((input) => input?.value).join(''), setErrorState, setIsLoaded)
            }
          >
            <div className='flex items-center justify-center gap-3'>
              {[0, 1, 2, 3].map((i) => (
                <input
                  key={i}
                  type='text'
                  className='w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-green focus:ring-2 focus:ring-[rgba(151,189,158,1)]'
                  pattern='\d*'
                  maxLength={1}
                  ref={(el) => (inputsRef.current[i] = el)}
                />
              ))}
            </div>
            {errorState && <div className='text-red text-sm mt-2'>{errorState}</div>}
            <div className='w-[260px] mx-auto pt-2 flex justify-end '>
              <div>
                {timeLeft > 0 ? (
                  <span className='text-sm font-medium text-slate-400'>
                    Gửi lại sau <span className='text-slate-500'>00:{timeLeft}</span>
                  </span>
                ) : (
                  <button
                    type='button'
                    className='text-sm underline font-medium text-green hover:text-green-600 focus:text-green-600'
                    onClick={handleResendOTP}
                  >
                    Gửi lại OTP
                  </button>
                )}
              </div>
            </div>
            <div className='max-w-[260px] mx-auto mt-4'>
              <button
                type='submit'
                ref={submitButtonRef}
                disabled={timeLeft === 0 || inputsRef.current.map((input) => input?.value).join('').length < 4}
                className={`${
                  timeLeft === 0 || inputsRef.current.map((input) => input?.value).join('').length < 4
                    ? 'bg-[rgb(245,247,249)] text-[#6B6E79]'
                    : 'bg-green text-white'
                } w-full inline-flex justify-center whitespace-nowrap rounded-lg
                  px-3.5 py-2.5 text-sm font-medium  shadow-sm 
                 shadow-indigo-950/10 hover:shadow-xl focus:outline-none  
                 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 
                 transition-colors duration-150`}
              >
                Xác nhận
              </button>
            </div>
          </form>

          <div className='mt-4'>
            <button
              className='inline-flex justify-center whitespace-nowrap px-3.5
             py-2.5 text-sm font-bold text-slate-500 '
              onClick={() => dispatch(closeModal())}
              //   onClick={() => console.log(inputsRef.current.map((input) => input?.value).join(''))}
            >
              Quay lại
            </button>
          </div>
        </div>
        {isLoaded || <ComponentLoading />}
      </div>
    </div>
  )
}

export default OTPForm
