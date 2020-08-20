import React from 'react'

import * as S from './styled'

import { Editor } from '@tinymce/tinymce-react'
import { TINYMCE_API_KEY } from '@/tinymceConfig'

type Props = {
  defaultValue: string
  description: string
  handleEditorChange: (content: string) => void
}

export const DescriptionEditorPresenter: React.FC<Props> = ({
  defaultValue,
  description,
  handleEditorChange,
}) => (
  <S.Wrapper>
    <Editor
      apiKey={TINYMCE_API_KEY}
      initialValue={defaultValue}
      value={description}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar: `undo redo | formatselect | bold italic backcolor |
             alignleft aligncenter alignright alignjustify |
             bullist numlist outdent indent | removeformat | help`,
      }}
      onEditorChange={handleEditorChange}
    />
  </S.Wrapper>
)
