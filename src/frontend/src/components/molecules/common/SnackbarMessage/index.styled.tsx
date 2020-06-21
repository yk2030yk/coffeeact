import { styled, mixins, theme, colorUtils } from '@/styles'

export const Wrapper = styled.div<{ color: string }>`
  width: 300px;
  background-color: ${({ color }) => color};
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;

  & > div {
    margin-left: 10px;
    color: #fff;
  }
`
