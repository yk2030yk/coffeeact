import styled from 'styled-components'

export const WriterName = styled.p`
  padding: 10px;
  ${({ theme }) => theme.mixin.text}
  font-weight: 600;
`
