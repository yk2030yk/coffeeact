import React, { useState, createContext, useContext } from 'react'
import { UseContextError } from '@/errors'

type ContextValue = {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
}

const ExperimentContext = createContext<ContextValue>({} as ContextValue)

export const ExperimentContextProvider: React.FC = ({ children }) => {
  const [name, setName] = useState<string>('')
  const value = {
    name,
    setName,
  }
  return (
    <ExperimentContext.Provider value={value}>
      {children}
    </ExperimentContext.Provider>
  )
}

export const useExperimentContext = () => {
  const context = useContext(ExperimentContext)
  if (!context) {
    throw new UseContextError('ExperimentContext')
  }
  return context
}
