import styled from 'styled-components'

export const Wrapper = styled.div``

export const Card = styled.div`
  width: 100%;
  height: auto;
  ${({ theme }) => theme.mixin.card}

  &:hover {
    opacity: 0.8;
  }
`
