import { styled, mixins, theme, colorUtils } from '@/styles'

export const Menu = styled.div`
  width: 100%;
  position: sticky;
  top: ${theme.height.header};
  padding: 10px 0;
`

export const MenuItem = styled.div`
  width: 100%;
  padding: 5px 20px;
  ${mixins.text}
  color: ${theme.color.white};
  ${mixins.pointer}
  display: flex;
  flex-direction: row;
  align-items: center;
  & > p {
    margin-left: 10px;
  }
  &:hover {
    background-color: ${colorUtils.brighten(theme.color.yankeesBlue)};
  }
`
