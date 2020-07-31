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

export const ContentAreaWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const ContentArea = styled.div`
  width: 1200px;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr 300px;
`

export const MainContentArea = styled.div`
  width: 100%;
  height: 100%;
`

export const SideContentArea = styled.div`
  width: 300px;
  height: 100%;
  padding-top: 30px;
`

export const FooterArea = styled.div`
  width: 100%;
  margin-top: auto;
`
