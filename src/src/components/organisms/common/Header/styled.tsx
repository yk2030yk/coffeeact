import { styled, theme } from '@/styles'

export const Wrapper = styled.div`
  background-color: ${theme.color.white};
  height: ${theme.height.header};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: ${theme.zindex.header};
  padding: 0 ${theme.space.basic};
  border-bottom: solid 1px ${theme.color.christmasSilver};
`

export const Item = styled.div`
  padding-left: ${theme.space.basic};
  color: black;
`

export const HeaderStart = styled.div``

export const HeaderEnd = styled.div``
