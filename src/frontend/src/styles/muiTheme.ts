import { createMuiTheme } from '@material-ui/core/styles'

/**
 * material-uiのテーマ定義
 */
export default createMuiTheme({
  typography: {
    fontFamily:
      '"Noto Sans JP",ヒラギノ角ゴシック Pro,Hiragino Kaku Gothic Pro,Robot,Arial,メイリオ,Meiryo,Osaka,ＭＳ Ｐゴシック,MS PGothic,sans-serif',
  },
  palette: {
    primary: {
      main: '#0069ff',
    },
    secondary: {
      main: '#efefef',
    },
  },
})
