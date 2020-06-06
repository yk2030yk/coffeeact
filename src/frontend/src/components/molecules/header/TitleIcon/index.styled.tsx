import { Link } from 'react-router-dom'

import { styled, mixins, theme } from '@/styles'

export const Title = styled(Link)`
  display: block;
  padding: 5px 20px;
  border-radius: 5px;
  color: ${theme.color.white};
  font-size: ${theme.fontSize.heading2};
  ${mixins.pointer}
  ${mixins.resetAnchor}
`
