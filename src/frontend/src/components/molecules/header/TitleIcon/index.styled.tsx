import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Title = styled(Link)`
  display: block;
  padding: 5px 20px;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.heading2};
  ${({ theme }) => theme.mixin.pointer}
  ${({ theme }) => theme.mixin.resetAnchor}
`
