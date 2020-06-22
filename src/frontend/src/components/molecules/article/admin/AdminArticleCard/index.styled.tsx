import { styled, mixins, theme, colorUtils } from '@/styles'

export const Wrapper = styled.div<{ isPublish: boolean }>`
  ${mixins.pointer}
  width: 100%;
  height: 100%;
  background-color: ${({ isPublish }) =>
    colorUtils.alpha(isPublish ? theme.color.white : theme.color.blackCat)};
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
  color: $ color.darkestDungeon};
  font-weight: ${theme.fontWeight.bold};
  padding-top: 10px;
`

export const PublishIcon = styled.div<{ isPublish: boolean }>`
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 10px 15px;
  color: ${theme.color.white};
  background-color: ${({ isPublish }) =>
    colorUtils.alpha(isPublish ? theme.color.fusionRed : theme.color.blackCat)};
`
