import { styled, theme } from '@/styles'

export const Wrapper = styled.div`
  background-color: ${theme.color.white};
  height: ${theme.height.homeHeader};
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: solid 1px ${theme.color.plaster};
`

export const Item = styled.div`
  padding-left: 20px;
`
