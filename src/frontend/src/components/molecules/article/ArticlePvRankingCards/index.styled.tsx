import { styled, mixins } from '@/styles'
import { Link as RouterLink } from 'react-router-dom'

export const Wrapper = styled.div`
  width: 100%;
`

export const Link = styled(RouterLink)`
  ${mixins.resetAnchor}
  margin-bottom: 20px;
  display: block;
`
