import { styled, mixins } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${mixins.pointer}
`

export const TitleInputText = styled.div`
  margin-bottom: 30px;

  & > input {
    ${mixins.heading}
  }
`

export const DescriptionTextArea = styled.div``
