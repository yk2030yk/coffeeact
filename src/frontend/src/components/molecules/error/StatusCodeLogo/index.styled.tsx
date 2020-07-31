import { styled, theme } from '@/styles'

export const ErrorLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const StatusCode = styled.div`
  font-size: 100px;
  color: ${theme.color.jamaicanJade};
  font-weight: 800;
`

export const StatusLogoMessage = styled.div`
  font-size: 48px;
  font-weight: 600;
  color: ${theme.color.oldGreyMare};
`
