import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '@/styles/styledComponentsTheme'

/**
 * styled-componentsのthemeを利用する
 */
const WithStyledComponentsTheme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default WithStyledComponentsTheme
