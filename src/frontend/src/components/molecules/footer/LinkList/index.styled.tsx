import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Item = styled.div`
  padding-left: 20px;
`

export const LinkText = styled(Link)`
  ${({ theme }) => theme.mixin.text}
  ${({ theme }) => theme.mixin.resetAnchor}
  color: ${({ theme }) => theme.color.white};
`
