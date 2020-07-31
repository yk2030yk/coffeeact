import { styled, theme } from '@/styles'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 20px;
  background-color: ${theme.color.white};
`

export const TagListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 10px;
`
