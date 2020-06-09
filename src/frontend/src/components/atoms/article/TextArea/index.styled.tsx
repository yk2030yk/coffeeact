import { styled, mixins } from '@/styles'

export const TextArea = styled.textarea`
  ${mixins.inputBox}
  resize: none;
  height: 500px;
`
