import React from 'react'
interface ButtonProps {
  children: React.ReactNode
}
const Button = ({ children }: ButtonProps) => {
  return (
    <div className='bg-green w-full h-full flex justify-center items-center rounded-[4px] text-while uppercase'>
      {children}
    </div>
  )
}

export default Button
