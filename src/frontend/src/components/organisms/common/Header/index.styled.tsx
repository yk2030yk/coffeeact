import { styled, theme } from '@/styles'

export const Wrapper = styled.div`
  background-color: ${theme.color.white};
  height: ${theme.height.header};
  color: #fff;
  display: flex;
  align-items: center;
  z-index: ${theme.zindex.header};
  padding: 0 20px;
  border-bottom: solid 1px ${theme.color.christmasSilver};
`

export const Item = styled.div`
  padding-left: 20px;
  color: black;
`
