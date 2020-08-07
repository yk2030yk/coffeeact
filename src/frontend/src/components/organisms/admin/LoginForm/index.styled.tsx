import { styled, mixins, theme } from '@/styles'

export const Form = styled.div`
  width: 500px;
  border: solid 1px #c5c5c5;
  border-radius: 5px;
  background-color: ${theme.color.white};
  display: flex;
  flex-direction: column;
  padding: 60px;
`

export const Title = styled.div`
  ${mixins.heading}
  text-align: center;
  padding: 0;
`

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 150px;
`

export const LoadingMessage = styled.div`
  margin-bottom: 20px;
`
