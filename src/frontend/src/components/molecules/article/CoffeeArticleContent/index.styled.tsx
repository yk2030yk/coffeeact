import { styled, mixins, theme } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${mixins.pointer}
`

export const CoffeeImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 3px;
`

export const CoffeeImage = styled.img`
  width: 100%;
  height: auto;
`

export const Info = styled.div`
  padding: 10px 0;
`

export const CoffeeUpdatedAt = styled.p`
  ${mixins.smallText}
`

export const CoffeeTitle = styled.p`
  color: ${theme.color.darkestDungeon};
  font-weight: ${theme.fontWeight.bold};
  padding-top: 10px;
`

export const CoffeeDescription = styled.p`
  ${mixins.text}
  padding-top: 10px;
`
