import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import * as S from './styled'
import { descriptionState } from '@/recoil/articleForm'
import { useResetRecoilState } from 'recoil'

import { Editor } from '@tinymce/tinymce-react'

type Props = {
  defaultValue?: string
}

export const DescriptionEditor: React.FC<Props> = ({ defaultValue = '' }) => {
  const [description, setDescription] = useRecoilState(descriptionState)
  const reset = useResetRecoilState(descriptionState)

  useEffect(() => {
    if (defaultValue) setDescription(defaultValue)
    return () => reset()
  }, [defaultValue, setDescription, reset])

  const handleEditorChange = (content: string) => {
    setDescription(content)
  }

  return (
    <S.Wrapper>
      <Editor
        apiKey="zfnd2ibeiddh09exp4axlbd3tu6mu1bxt1jnmm3h12n962bx"
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
}
