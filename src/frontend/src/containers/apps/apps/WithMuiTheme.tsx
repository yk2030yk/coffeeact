import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from '@/styles/muiTheme'

/**
 * material-uiのthemeを利用する
 */
const WithMuiTheme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default WithMuiTheme
