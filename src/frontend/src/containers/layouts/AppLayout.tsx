import React from 'react'

import { ErrorContextProvider } from '@/contexts/ErrorContext'

const AppLayout: React.FC = ({ children }) => {
  return <ErrorContextProvider>{children}</ErrorContextProvider>
}

export default AppLayout
