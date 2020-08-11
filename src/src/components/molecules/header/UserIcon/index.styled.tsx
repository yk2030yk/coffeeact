import { styled, theme, colorUtils } from '@/styles'

export const UserIcon = styled.div`
  cursor: pointer;
  overflow: hidden;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: solid 2px ${theme.color.carbon};

  &:hover {
    border-color: ${colorUtils.brighten(theme.color.carbon)};
  }

  & > img {
    width: 100%;
  }
`
