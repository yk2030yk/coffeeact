import { styled, theme } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: ${theme.height.header};
  display: grid;
  grid-template-columns: 250px 1fr;
`

export const LeftContent = styled.div`
  min-height: 100vh;
  background-color: ${theme.color.yankeesBlue};
`

export const RightContent = styled.div`
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

export const ContentArea = styled.div`
  width: 100%;
  height: 100%;
  padding: ${theme.space.basic};
`

export const FooterArea = styled.div`
  width: 100%;
  margin-top: auto;
`
