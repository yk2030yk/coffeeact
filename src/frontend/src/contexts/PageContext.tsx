import React, { createContext, useContext } from 'react'

import { UseContextError } from '@/errors'

type ContextValue = {}

const PageContext = createContext<ContextValue>({})

export const PageContextProvider: React.FC = ({ children }) => {
  const value = {}
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}

export const usePageContext = () => {
  const context = useContext(PageContext)
  if (!context) {
    throw new UseContextError('PageContext')
  }
  return context
}
