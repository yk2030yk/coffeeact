import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const TextBox = styled.div``

export const Text = styled.div`
  ${({ theme }) => theme.mixin.text}
  text-align: center;
`
