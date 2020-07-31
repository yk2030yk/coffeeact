import { styled, theme, colorUtils } from '@/styles'
import { FaUserCircle } from '@/components/atoms/icons'

export const UserIcon = styled(FaUserCircle)`
  color: ${theme.color.radiantYellow};
  cursor: pointer;
  &:hover {
    color: ${colorUtils.brighten(theme.color.radiantYellow)};
  }
`
