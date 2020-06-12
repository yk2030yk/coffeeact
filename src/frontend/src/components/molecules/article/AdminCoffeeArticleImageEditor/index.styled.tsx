import { styled, mixins, theme } from '@/styles'

export const Title = styled.div`
  ${mixins.heading2}
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${mixins.pointer}
`

export const TitleInputText = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;

  & > input {
    ${mixins.heading}
  }
`

export const DescriptionTextArea = styled.div`
  margin-top: 20px;
`

export const ImageBox = styled.div``

export const PreviewCurrentImageWrapper = styled.div`
  height: 200px;
  overflow: hidden;
  margin-top: 20px;
  & > img {
    max-width: 300px;
  }
`

export const AddTagBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const TagInput = styled.input`
  ${mixins.inputBox}
  width: 200px;
`

export const AddTagButton = styled.div`
  ${mixins.button()}
  display: inline-block;
  margin-left: 20px;
  margin-top: 0;
`

export const TagsBox = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 120px);
  grid-gap: 10px;
  max-width: 100%;
`
export const TagLabel = styled.div`
  width: 100%;
  display: flex;
  background-color: #53de5e;
  border-radius: 5px;
  margin-right: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const Tag = styled.div`
  color: ${theme.color.white};
`
