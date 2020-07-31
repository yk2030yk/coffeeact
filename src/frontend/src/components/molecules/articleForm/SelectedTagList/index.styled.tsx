import { styled, mixins } from '@/styles'

export const TagList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const TagItem = styled.div`
  margin-right: 10px;
  ${mixins.pointer}
`
