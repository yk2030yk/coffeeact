import { styled, theme, mixins } from '@/styles'
import { Link } from 'react-router-dom'

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

export const TagItem = styled(Link)`
  ${mixins.pointer}
  ${mixins.resetAnchor}
`
