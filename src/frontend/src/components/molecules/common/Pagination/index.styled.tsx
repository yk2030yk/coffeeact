import { css } from '@emotion/core'
import { styled, theme, colorUtils } from '@/styles'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

type PageProps = {
  selected: boolean
  disabled: boolean
}

const pageBox = ({
  disabled,
  selected,
}: {
  disabled: boolean
  selected: boolean
}) => {
  const defaultColor = theme.color.yankeesBlue
  const hoverBgColor = colorUtils.brighten(defaultColor)

  const bgColor = disabled
    ? theme.color.greyArea
    : selected
    ? hoverBgColor
    : defaultColor

  const hover =
    !disabled &&
    !selected &&
    css`
      &:hover {
        background-color: ${hoverBgColor};
      }
    `

  return css`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.color.white};
    background-color: ${bgColor};
    cursor: ${disabled ? 'default' : 'pointer'};
    margin: 5px;
    ${hover}
  `
}

export const PrevPage = styled.div<PageProps>`
  ${(props) => pageBox(props)}
  width: 100px;
`

export const NextPage = styled.div<PageProps>`
  ${(props) => pageBox(props)}
  width: 100px;
`

export const Page = styled.div<PageProps>`
  ${(props) => pageBox(props)}
`
