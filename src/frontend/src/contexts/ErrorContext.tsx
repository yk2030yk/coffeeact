import React, { createContext, useContext } from 'react'

import { UseContextError } from '@/errors'

type ContextValue = {}

const ErrorContext = createContext<ContextValue>({} as ContextValue)

export const ErrorContextProvider: React.FC = ({ children }) => {
  const value = {}
  return <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(ErrorContext)
  if (!context) {
    throw new UseContextError('AppContext')
  }
  return context
}
