import { styled, theme } from '@/styles'

export const Wrapper = styled.div`
  position: fixed;
  top: ${theme.space.basic};
  right: ${theme.space.basic};
  z-index: ${theme.zindex.snackbar};
`
