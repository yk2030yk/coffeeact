import { styled, theme } from '@/styles'

export const Wrapper = styled.div`
  background-color: ${theme.color.yankeesBlue};
  height: 200px;
  color: ${theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.space.basic} 40px;
  margin-top: 50px;
`

export const AppIconArea = styled.div`
  padding: 10px;
`
