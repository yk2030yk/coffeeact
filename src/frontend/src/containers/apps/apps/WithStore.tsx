import React from 'react'
import { Provider } from 'react-redux'

import store from '@/store'

/**
 * reduxを利用する
 */
const WithMuiTheme: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default WithMuiTheme
