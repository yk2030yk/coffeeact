import { styled, mixins } from '@/styles'
import { Link as RouterLink } from 'react-router-dom'

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`

export const Link = styled(RouterLink)`
  ${mixins.resetAnchor}
`
