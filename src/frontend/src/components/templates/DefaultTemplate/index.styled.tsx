import { styled, theme } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: ${theme.height.header};
`

export const HeaderArea = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${theme.zindex.header};
`

export const ContentAreaWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: ${theme.space.basic};
`

export const ContentArea = styled.div`
  width: 1000px;
  height: 100%;
`

export const FooterArea = styled.div`
  width: 100%;
  margin-top: auto;
`
