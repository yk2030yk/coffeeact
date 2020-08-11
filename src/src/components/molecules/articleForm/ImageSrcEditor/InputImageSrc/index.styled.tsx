import { styled, mixins, theme } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const InputFile = styled.input`
  display: none;
`

export const ButtonGroup = styled.div`
  display: flex;

  & > div,
  label {
    margin-right: ${theme.space.atom};
  }
`

export const InputFileLabel = styled.label`
  ${mixins.button()}
`

export const ImageGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`

export const ImageWrapper = styled.div`
  width: 100%;
  & > img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
`
