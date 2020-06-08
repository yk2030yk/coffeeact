import { styled, mixins, theme } from '@/styles'

export const Wrapper = styled.div`
  ${mixins.pointer}
  width: 100%;
  height: 100%;
`

export const CoffeeImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 3px;

  & > img {
    width: 100%;
    height: auto;
  }
`

export const Info = styled.div`
  padding: 10px 0;
`

export const CoffeeUpdatedAt = styled.p`
  ${mixins.smallText}
`

export const CoffeeTitle = styled.p`
  color: $ color.darkestDungeon};
  font-weight: ${theme.fontWeight.bold};
  padding-top: 10px;
`

export const CoffeeDescription = styled.p`
  ${mixins.text}
  padding-top: 10px;
`
