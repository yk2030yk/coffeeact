import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from 'react'

import { UseContextError } from '@/errors'

type ContextValue = {
  token: string
  setToken: (v: string) => void
}

const AppContext = createContext<ContextValue>({} as ContextValue)

export const AppContextProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState('')

  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new UseContextError('AppContext')
  }
  return context
}
