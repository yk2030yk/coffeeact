import { css } from 'styled-components'

/**
 * mixin定義する
 * example:
 *  const styledP = styled.p`
 *    ${({ theme }) => theme.mixin.link}
 *  `
 */

/**
 * デフォルト値
 */
export const defaultFont = css`
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-size: ${({ theme }) => theme.fontSize.default};
  color: ${({ theme }) => theme.color.indianInk};
  font-weight: 400;
`
