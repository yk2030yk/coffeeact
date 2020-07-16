import { styled, mixins, theme } from '@/styles'

export const Wrapper = styled.div`
  background-color: ${theme.color.blackCat};
  & > input {
    ${mixins.heading}
  }
`

export const CropperArea = styled.div``
