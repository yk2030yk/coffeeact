import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import { theme } from '@/styles'

/**
 * emotion-themingのthemeを利用する
 */
const WithEmotionTheme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default WithEmotionTheme
