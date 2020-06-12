import { styled, mixins, theme } from '@/styles'

export const Wrapper = styled.div`
  & > input {
    ${mixins.heading}
  }
`
