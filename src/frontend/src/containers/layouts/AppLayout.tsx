import React from 'react'

import { AppContextProvider } from '@/contexts/AppContext'
import { ErrorContextProvider } from '@/contexts/ErrorContext'

const AppLayout: React.FC = ({ children }) => {
  return <ErrorContextProvider>{children}</ErrorContextProvider>
}

export default AppLayout
