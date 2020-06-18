import { styled, mixins, theme, colorUtils } from '@/styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputFile = styled.input`
  display: none;
`

export const InputFileLabel = styled.label`
  padding: 5px ${theme.space.basic};
  border-radius: 5px;
  ${mixins.pointer}
  ${mixins.button()}
  background-color: ${theme.color.blueRibbon};
  color: ${theme.color.white};
  display: inline-block;
  width: 200px;
  text-align: center;
  &:hover {
    background-color: ${colorUtils.brighten(theme.color.blueRibbon)};
  }
`

export const PreviewImgWrapper = styled.div`
  height: 200px;
  overflow: hidden;
  margin-top: ${theme.space.basic};
  & > img {
    max-width: 300px;
  }
`

export const PreviewImg = styled.img``
