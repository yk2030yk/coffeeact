import * as variables from './variables'
import * as mixin from './mixin'

/**
 * styled-components内で共通で利用したい値を定義する
 * example:
 *   const styledP = styled.p`
 *     font-size: ${({ theme }) => theme.fontSize.default};
 *   `
 */
const theme = {
  ...variables,
  mixin,
} as const

export default theme
