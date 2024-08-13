/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useUser } from './useUser'
import { RoleTypes } from '../lib/authorzation'

export const useAuthorization = () => {
  const user = useUser()
  const checkAccess = React.useCallback(({ allowedRoles }: { allowedRoles: RoleTypes[] }) => {
    if (!user) {
      return false
    } else {
      return allowedRoles.includes(user.roles[0].name)
    }
  }, [])

  return { checkAccess }
}
