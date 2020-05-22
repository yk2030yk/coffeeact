import React from 'react'
import GlobalStyle from '@/styles/globalStyle'

/**
 * GlobalStyleを使用する
 */
const WithGlobalStyle: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <GlobalStyle />
    </>
  )
}

export default WithGlobalStyle
