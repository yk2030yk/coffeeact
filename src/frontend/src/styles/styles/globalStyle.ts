import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #app,
  #root {
    width: 100%;
  }

  body {
    ${({ theme }) => theme.mixin.defaultFont}
  }

  ${({ theme }) => theme.media.sm} {
    select,
    textarea,
    input {
      font-size: ${({ theme }) => theme.fontSize.default};
    }
  }
`

export default GlobalStyle
