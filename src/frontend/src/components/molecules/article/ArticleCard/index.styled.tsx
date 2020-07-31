import { styled, mixins, theme, colorUtils } from '@/styles'

export const Wrapper = styled.div`
  ${mixins.pointer}
  width: 100%;
  height: 100%;
`

export const CoffeeImageWrapper = styled.div`
  width: 100%;
  border-radius: 3px;
  position: relative;

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
  color: ${theme.color.darkestDungeon};
  font-weight: ${theme.fontWeight.bold};
  padding-top: 10px;
`

export const NewArrivalIcon = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 10px 15px;
  color: ${theme.color.white};
  background-color: ${colorUtils.alpha(theme.color.fusionRed)};
`
