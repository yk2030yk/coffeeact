import React, { createContext, useContext } from 'react'
import { UseContextError } from '@/errors'
import { useAuth } from '@/hooks/auth/useAuth'

type ContextValue = {
  user: firebase.User | null
  signInStatus: string
  login: (email: string, password: string) => void
  logout: () => void
}

const AppContext = createContext<ContextValue>({} as ContextValue)

export const AppContextProvider: React.FC = ({ children }) => {
  const auth = useAuth()
  const value = {
    ...auth,
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new UseContextError('AppContext')
  }
  return context
}
