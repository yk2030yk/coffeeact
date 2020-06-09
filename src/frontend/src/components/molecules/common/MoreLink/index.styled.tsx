import { Link } from 'react-router-dom'

import { styled, mixins, theme, colorUtils } from '@/styles'

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`

export const LinkText = styled(Link)`
  ${mixins.text}
  ${mixins.resetAnchor}
  color: ${theme.color.davysGrey};
  font-weight: 600;
  &:hover {
    color: ${colorUtils.brighten(theme.color.davysGrey)};
  }
`
