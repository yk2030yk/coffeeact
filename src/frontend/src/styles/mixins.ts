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
`

export const heading2 = css`
  font-size: ${theme.fontSize.heading2};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.davysGrey};
`

export const card = css`
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
  background-color: ${theme.color.white};
  border: solid 1px ${theme.color.leadbelcher};
  &:focus {
    outline: none;
  }
`

export const button = ({
  bgColor = theme.color.evilSunzScarlet,
  hoverBgColor = colorUtils.brighten(theme.color.evilSunzScarlet),
  fontColor = theme.color.white,
  bgFontColor = theme.color.white,
  width = 'auto',
}: {
  bgColor?: string
  hoverBgColor?: string
  fontColor?: string
  bgFontColor?: string
  width?: string
} = {}) => css`
  color: ${fontColor};
  background-color: ${bgColor};
  padding: 10px;
  border-radius: 5px;
  width: ${width};
  text-align: center;
  border: none;
  cursor: pointer;
  display: inline-block;
  &: hover {
    background-color: ${hoverBgColor};
    color: ${bgFontColor};
  }
`
