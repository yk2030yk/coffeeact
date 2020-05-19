import React from 'react'

import { AppContextProvider } from '@/contexts/AppContext'

const AppLayout: React.FC = ({ children }) => {
  return <AppContextProvider>{children}</AppContextProvider>
}

export default AppLayout
