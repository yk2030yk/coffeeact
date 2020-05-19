import React from 'react'

import { ErrorContextProvider } from '@/contexts/ErrorContext'

const ErrorLayout: React.FC = ({ children }) => {
  return <ErrorContextProvider>{children}</ErrorContextProvider>
}

export default ErrorLayout
