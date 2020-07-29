import { styled, theme } from '@/styles'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eaeaeb;
  border-radius: 6px;
  padding: 20px;
  background-color: ${theme.color.white};
`

export const TagListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 150px);
  grid-gap: 10px;
`
