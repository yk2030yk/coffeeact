import React, { createContext, useContext } from 'react'

import { UseContextError } from '@/errors'

type ContextValue = {}

const VideoContext = createContext<ContextValue>({})

export const VideoContextProvider: React.FC = ({ children }) => {
  const value = {}

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
}

export const useVideoContext = () => {
  const context = useContext(VideoContext)
  if (!context) {
    throw new UseContextError('VideoContext')
  }
  return context
}
