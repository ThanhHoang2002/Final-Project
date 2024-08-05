import { useState } from 'react'

export const usePasswordState = () => {
  const [passwordState, setPasswordState] = useState<'password' | 'text'>('text')
  const HiddenPassword = () => {
    setPasswordState('password')
  }
  const ShowPassword = () => {
    setPasswordState('text')
  }
  return { passwordState, HiddenPassword, ShowPassword }
}
