import { styled, theme, colorUtils, mixins } from '@/styles'

export const TagList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 120px);
  grid-gap: 10px;
  max-width: 100%;
`
export const TagLabel = styled.div`
  width: 100%;
  display: flex;
  background-color: ${theme.color.spanishGrey};
  border-radius: 5px;
  margin-right: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  ${mixins.pointer}
  &:hover {
    background-color: ${colorUtils.brighten(theme.color.spanishGrey)};
  }
`

export const Tag = styled.div`
  color: ${theme.color.white};
`
