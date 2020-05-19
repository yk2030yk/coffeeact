import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #app,
  #root {
    width: 100%;
  }

  body {
    font-family: "Noto Sans JP","ヒラギノ角ゴシック Pro","Hiragino Kaku Gothic Pro", Robot, Arial, "メイリオ", Meiryo,Osaka, "ＭＳ Ｐゴシック", "MS PGothic",sans-serif;
    font-size: 16px;
    color: #3A3E49;
    font-weight: 400;
  }

  ${({ theme }) => theme.media.sm} {
    select,
    textarea,
    input {
      ${({ theme }) => theme.fontSize.sm}
    }
  }
`

export default GlobalStyle
