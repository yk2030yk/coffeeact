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
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.color.indianInk};
  letter-spacing: 1px;
`

export const text = css`
  font-size: ${({ theme }) => theme.fontSize.text};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.color.charcoalSmudge};
`

export const smallText = css`
  font-size: ${({ theme }) => theme.fontSize.smallText};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.color.charcoalSmudge};
`

export const heading = css`
  font-size: ${({ theme }) => theme.fontSize.heading};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.davysGrey};
  padding: ${({ theme }) => theme.space.atom};
`

export const heading2 = css`
  font-size: ${({ theme }) => theme.fontSize.heading2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.davysGrey};
  padding: ${({ theme }) => theme.space.atom};
`

export const card = css`
  background-color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.space.atom};
`
