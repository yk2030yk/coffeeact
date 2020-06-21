import React, { createContext, useContext } from 'react'

import { UseContextError } from '@/errors'
import { useSnackbar, SnackbarMessage } from '@/hooks/common/useSnackbar'

type ContextValue = {
  snackbarMessages: SnackbarMessage[]
  pushSnackbarMessage: (message: string, isError?: boolean) => void
}

const PageContext = createContext<ContextValue>({} as ContextValue)

export const PageContextProvider: React.FC = ({ children }) => {
  const value = {
    ...useSnackbar(),
  }
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}

export const usePageContext = () => {
  const context = useContext(PageContext)
  if (!context) {
    throw new UseContextError('PageContext')
  }
  return context
}
