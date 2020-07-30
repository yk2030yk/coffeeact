import { styled, mixins, theme } from '@/styles'

export const Wrapper = styled.div`
  ${mixins.pointer}
  width: 100%;
  padding: 20px;
  background-color: ${theme.color.white};
  border-radius: 6px;
  position: relative;
`

export const RankNumberIcon = styled.div<{ rank: number }>`
  margin-bottom: 5px;
  font-weight: ${theme.fontWeight.bold};
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 100;
  background-color: rgb(230, 180, 34);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ rank }) => {
    switch (rank) {
      case 1:
        return 'rgb(230, 180, 34)'
      case 2:
        return '#D3D3D3'
      case 3:
        return '#cd7f32'
    }
  }};
  color: ${theme.color.white};
`

export const Info = styled.div``

export const CoffeeTitle = styled.p`
  color: ${theme.color.darkestDungeon};
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
