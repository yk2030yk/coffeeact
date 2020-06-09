import React, { useState } from 'react'

import * as S from './index.styled'

import InputText from '@/components/atoms/article/InputText'
import TextArea from '@/components/atoms/article/TextArea'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'

type Props = {
  setFile: (file: File) => void
}

const CoffeeArticleEditor: React.FC<Props> = ({ setFile }) => {
  const [src, setSrc] = useState<string>()

  const onChange = (event: any) => {
    const file = event.target.files[0]
    setFile(file)
    setSrc(URL.createObjectURL(file))
  }

  return (
    <S.Wrapper>
      {src && <S.PreviewImg src={src} />}
      <input type="file" onChange={(e) => onChange(e)} />
    </S.Wrapper>
  )
}

export default CoffeeArticleEditor
