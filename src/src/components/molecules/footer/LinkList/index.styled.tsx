import { Link } from 'react-router-dom'

import { styled, mixins, theme } from '@/styles'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Item = styled.div`
  padding-left: ${theme.space.basic};
`

export const LinkText = styled(Link)`
  ${mixins.text}
  ${mixins.resetAnchor}
  color: ${theme.color.white};
`
