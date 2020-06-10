import { styled, theme, colorUtils } from '@/styles'
import { FaUserCircle } from 'react-icons/fa'

export const UserIcon = styled(FaUserCircle)`
  color: ${theme.color.radiantYellow};
  cursor: pointer;
  &:hover {
    color: ${colorUtils.brighten(theme.color.radiantYellow)};
  }
`
