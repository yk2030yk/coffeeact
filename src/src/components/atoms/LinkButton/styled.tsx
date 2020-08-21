import { styled, mixins } from '@/styles'
import { Link } from 'react-router-dom'

export const TopButton = styled(Link)`
  ${mixins.text}
  ${mixins.resetAnchor}
  ${mixins.button()}
`
