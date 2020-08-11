import React from 'react'

import { useOnAuthStateChanged } from '@/recoil/auth'

/**
 * authの監視を始める
 */
export const WithAuth: React.FC = ({ children }) => {
  useOnAuthStateChanged()
  return <>{children}</>
}
