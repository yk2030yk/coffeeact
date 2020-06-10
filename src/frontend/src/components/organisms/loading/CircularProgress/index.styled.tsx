import { styled, theme } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: ${theme.zindex.loading};

  & > .MuiCircularProgress-indeterminate {
    color: ${theme.color.reactBlue};
  }
`
