import { styled, theme } from '@/styles'

export const Wrapper = styled.div`
  background-color: ${theme.color.carbon};
  padding: ${theme.space.atom};
  border-radius: 3px;
`

export const CropperBox = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-height: 300px;
  }
`
