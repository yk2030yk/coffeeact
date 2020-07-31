import { styled, mixins, theme, colorUtils } from '@/styles'

export const Menu = styled.div`
  width: 100%;
  position: sticky;
  top: ${theme.height.header};
  padding: 10px 0;
`

export const MenuContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const MenuItem = styled.div<{ selected?: boolean }>`
  width: 100%;
  padding: 5px ${theme.space.basic};
  ${mixins.text}
  color: ${theme.color.white};
  ${mixins.pointer}
  background-color: ${({ selected }) =>
    selected
      ? colorUtils.brighten(theme.color.yankeesBlue)
      : theme.color.yankeesBlue};
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

export const MenuTitle = styled.div`
  padding: 5px ${theme.space.basic};
  ${mixins.text}
  color: ${theme.color.white};
  font-weight: 800;
`

export const MenuDivider = styled.div`
  background-color: #324a5f;
  height: 1px;
  width: 90%;
`
