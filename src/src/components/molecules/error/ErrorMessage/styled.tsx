import { styled, mixins, theme } from '@/styles'

export const MessageBox = styled.div`
  margin-top: ${theme.space.basic};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > p {
    ${mixins.text}
    color: ${theme.color.oldGreyMare};
  }
`
