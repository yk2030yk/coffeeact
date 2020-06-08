import { styled, theme } from '@/styles'

export const Wrapper = styled.div`
  background-color: ${theme.color.yankeesBlue};
  height: ${theme.height.header};
  color: #fff;
  display: flex;
  align-items: center;
  z-index: ${theme.zindex.header};
  padding: 0 20px;
`

export const Item = styled.div`
  padding-left: 20px;
`
