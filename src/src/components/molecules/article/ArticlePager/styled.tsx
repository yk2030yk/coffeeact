import { styled, theme } from '@/styles'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PagerBox = styled.div`
  display: flex;
  border: solid 1px #ddd;
  border-radius: 3px;
`

export const Page = styled.div<{ isSelected: boolean }>`
  padding: 10px 15px;
  color: ${({ isSelected }) =>
    isSelected ? theme.color.reactBlueDark : theme.color.blackCat};
  cursor: pointer;
  border-left: solid 1px #ddd;
  margin-left: -1px;
`
