import { styled, mixins } from '@/styles'

export const Wrapper = styled.div`
  & > input {
    ${mixins.heading}
  }
`
