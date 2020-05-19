import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 56px 0px;
  ${({ theme }) => theme.media.sm} {
    padding: 40px 16px;
  }
`
