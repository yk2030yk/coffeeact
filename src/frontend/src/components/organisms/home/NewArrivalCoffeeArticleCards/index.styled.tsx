import { styled, mixins } from '@/styles'
import { Link as RouterLink } from 'react-router-dom'

export const Wrapper = styled.div`
  width: 100%;
`

export const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export const Link = styled(RouterLink)`
  ${mixins.resetAnchor}
`
