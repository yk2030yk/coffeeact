import { styled, theme } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: ${theme.height.header};
`

export const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`

export const ErrorContent = styled.div``

export const Footer = styled.div`
  width: 100%;
  margin-top: auto;
`

export const ErrorTitle = styled.div``

export const ErrorMessage = styled.div`
  margin-top: 30px;
`

export const Title = styled.p``

export const Text = styled.p`
  margin-top: 30px;
`
