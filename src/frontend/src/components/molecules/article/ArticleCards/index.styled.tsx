import { styled, mixins, theme } from '@/styles'
import { Link as RouterLink } from 'react-router-dom'

export const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-gap: ${theme.space.atom};
  grid-template-columns: repeat(auto-fit, 490px);
`

export const Link = styled(RouterLink)`
  ${mixins.resetAnchor}
`
