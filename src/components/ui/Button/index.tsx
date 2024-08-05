import React from 'react'
interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}
const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <div
      className={`bg-green w-full h-full flex justify-center items-center rounded-[4px] text-while uppercase py-[6px] px-[16px] cursor-pointer  ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Button
