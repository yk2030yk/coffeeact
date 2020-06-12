import React, { useState } from 'react'

import * as S from './index.styled'
import { randomString } from '@/utils/util'

type Props = {
  setFile: (file: File) => void
}

const CoffeeArticleEditor: React.FC<Props> = ({ setFile }) => {
  const [src, setSrc] = useState<string>()
  const id = randomString()

  const onChange = (event: any) => {
    const file = event.target.files[0]
    setFile(file)
    setSrc(URL.createObjectURL(file))
  }

  return (
    <S.Wrapper>
      <S.InputFile id={id} type="file" onChange={(e) => onChange(e)} />
      <S.InputFileLabel htmlFor={id}>画像を選択する</S.InputFileLabel>
      {src && (
        <S.PreviewImgWrapper>
          <S.PreviewImg src={src} />
        </S.PreviewImgWrapper>
      )}
    </S.Wrapper>
  )
}

export default CoffeeArticleEditor
