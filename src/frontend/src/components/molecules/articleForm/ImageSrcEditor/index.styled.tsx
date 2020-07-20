import { styled, mixins, theme } from '@/styles'

export const Wrapper = styled.div`
  background-color: #c3c3c3;
  padding: ${theme.space.basic};
  & > input {
    ${mixins.heading}
  }
`

export const CropperBox = styled.div`
  display: flex;
  justify-content: center;
`

export const CropperAreaItem = styled.div``

export const CropperArea = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;

  & > div {
    width: 500px:
    height: 300px:
  }

  img {
    width: 100%;
  }
`
