import * as React from 'react'
import { ROLES } from '../types'
import { useAuthorization } from '../hooks/useAuthorization'

export type RoleTypes = keyof typeof ROLES

type AuthorizationProps = {
  forbiddenFallback?: React.ReactNode
  children: React.ReactNode
  allowedRoles: RoleTypes[]
}
export const Authorization = ({ allowedRoles, forbiddenFallback = null, children }: AuthorizationProps) => {
  const { checkAccess } = useAuthorization()

  let canAccess = false

  if (allowedRoles) {
    canAccess = checkAccess({ allowedRoles })
  }
  return <>{canAccess ? children : forbiddenFallback}</>
}
