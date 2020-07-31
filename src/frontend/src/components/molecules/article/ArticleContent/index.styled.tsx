import { styled, mixins, theme, colorUtils } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const CoffeeImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 3px;
`

export const CoffeeImage = styled.img`
  width: 100%;
  height: auto;
`

export const CoffeeUpdatedAt = styled.p`
  ${mixins.smallText}
`

export const CoffeeTitle = styled.p`
  color: ${theme.color.darkestDungeon};
  background-color: ${colorUtils.alpha(theme.color.white, 0.8)};
  font-weight: ${theme.fontWeight.bold};
  text-align: center;
  font-size: 30px;
  position: absolute;
  right: 40px;
  bottom: 40px;
  padding: 10px;
  width: 400px;
`

export const CoffeeDescription = styled.p`
  ${mixins.text}
  min-height: 500px;
`

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const TitleWrapper = styled.div`
  position: relative;
  width: 800px;

  & > img {
    width: 100%;
  }
`
