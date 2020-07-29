import { styled, mixins, theme } from '@/styles'

export const Wrapper = styled.div`
  ${mixins.pointer}
  width: 100%;
  padding: 10px;
  background-color: ${theme.color.white};
  border: 1px solid #eaeaeb;
  border-radius: 6px;
`

export const RankNumber = styled.div`
  margin-bottom: 5px;
  font-size: 15px;
  color: ${theme.color.davysGrey};
  font-weight: ${theme.fontWeight.bold};
`

export const Info = styled.div``

export const CoffeeTitle = styled.p`
  color: ${theme.color.davysGrey};
  font-weight: ${theme.fontWeight.bold};
`

export const GridItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const CoffeeImageWrapper = styled.div`
  width: 100%;
  border-radius: 3px;
  position: relative;
  margin-bottom: 5px;

  & > img {
    width: 100%;
    height: auto;
  }
`
