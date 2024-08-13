import { useState } from 'react'

export const usePasswordState = () => {
  const [passwordState, setPasswordState] = useState<'password' | 'text'>('password')
  const HiddenPassword = () => {
    setPasswordState('password')
  }
  const ShowPassword = () => {
    setPasswordState('text')
  }
  return { passwordState, HiddenPassword, ShowPassword }
}
