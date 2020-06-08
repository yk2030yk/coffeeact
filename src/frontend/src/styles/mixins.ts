import { css } from '@emotion/core'

import theme from './theme'
import * as colorUtils from './colorUtils'

/**
 * デフォルト値
 */
export const defaultFont = css`
  font-family: ${theme.fontFamily.default};
  font-size: ${theme.fontSize.default};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.color.indianInk};
  letter-spacing: 1px;
`

export const text = css`
  font-size: ${theme.fontSize.text};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.color.charcoalSmudge};
  line-height: 32px;
  letter-spacing: 1.5px;
`

export const smallText = css`
  font-size: ${theme.fontSize.smallText};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.color.charcoalSmudge};
`

export const heading = css`
  font-size: ${theme.fontSize.heading};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.davysGrey};
  padding: ${theme.space.atom};
`

export const heading2 = css`
  font-size: ${theme.fontSize.heading2};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.davysGrey};
  padding: ${theme.space.atom};
`

export const card = css`
  background-color: ${theme.color.white};
  padding: ${theme.space.atom};
`

export const pointer = css`
  cursor: pointer;
`

export const resetAnchor = css`
  text-decoration: none;
`

export const inputBox = css`
  ${text}
  padding: 5px;
  width: 100%;
  background-color: ${theme.color.greyArea};
  border: none;
`

export const button = ({
  bgColor = theme.color.evilSunzScarlet,
  hoverBgColor = colorUtils.brighten(theme.color.evilSunzScarlet),
  fontColor = theme.color.white,
  bgFontColor = theme.color.white,
}: {
  bgColor?: string
  hoverBgColor?: string
  fontColor?: string
  bgFontColor?: string
} = {}) => css`
  margin-top: 20px;
  color: ${fontColor};
  background-color: ${bgColor};
  padding: 10px;
  border-radius: 5px;
  width: 200px;
  text-align: center;
  &: hover {
    background-color: ${hoverBgColor};
    color: ${bgFontColor};
  }
`
