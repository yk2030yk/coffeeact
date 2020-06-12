import { styled, theme } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const HeaderArea = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${theme.zindex.header};
`

export const HomeHeaderArea = styled.div`
  width: 100%;
`

export const ContentArea = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`

export const FooterArea = styled.div`
  width: 100%;
  margin-top: auto;
`