import { createMuiTheme } from '@material-ui/core/styles'
import { color, fontFamily } from './variables'

/**
 * material-uiのテーマ定義
 */
export default createMuiTheme({
  typography: {
    fontFamily: fontFamily.default,
  },
  palette: {
    primary: {
      main: color.blueRibbon,
    },
    secondary: {
      main: color.crystalBell,
    },
  },
})
