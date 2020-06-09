import { styled, mixins, theme } from '@/styles'

export const MessageBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > p {
    ${mixins.text}
    color: ${theme.color.oldGreyMare};
  }
`
