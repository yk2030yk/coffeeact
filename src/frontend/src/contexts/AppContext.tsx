import React, { createContext, useContext } from 'react'

import { UseContextError } from '@/errors'

type ContextValue = {}

const AppContext = createContext<ContextValue>({} as ContextValue)

export const AppContextProvider: React.FC = ({ children }) => {
  const value = {}
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new UseContextError('AppContext')
  }
  return context
}
