import { styled, mixins } from '@/styles'
import { Link as RouterLink } from 'react-router-dom'

export const Cards = styled.div`
  width: 100%;
`

export const Link = styled(RouterLink)`
  ${mixins.resetAnchor}
`
