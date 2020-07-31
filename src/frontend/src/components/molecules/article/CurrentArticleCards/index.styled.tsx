import { styled, mixins } from '@/styles'
import { Link as RouterLink } from 'react-router-dom'

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export const Link = styled(RouterLink)`
  ${mixins.resetAnchor}
  width: 400px;
`
