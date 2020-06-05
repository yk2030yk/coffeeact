import styled from 'styled-components'

export const Wrapper = styled.div``

export const Item = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
`

export const Label = styled.div`
  ${({ theme }) => theme.mixin.text}
  text-align: center;
  font-weight: 600;
`

export const Text = styled.div`
  ${({ theme }) => theme.mixin.text}
`
