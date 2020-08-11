import 'styled-components'
import theme from '@/styles/styledComponentsTheme'

/**
 * 定数で定義したテーマを型にする
 */
type ThemeInterface = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeInterface {}
}
