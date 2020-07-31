import { styled, mixins } from '@/styles'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Text = styled.div`
  ${mixins.text}
  text-align: center;
`
