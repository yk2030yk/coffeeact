import React from 'react'

import * as S from './index.styled'
import ImageInput from '@/components/molecules/article/common/ImageInput'
import { Article } from '@/models/article/Article'
import { StorageImage } from '@/components/atoms'

type Props = {
  article: Article
  file: File | undefined
  setFile: (file: File) => void
}

const ArticleEditor: React.FC<Props> = ({ article, file, setFile }) => {
  return (
    <S.ImageBox>
      <ImageInput setFile={setFile} />
      {!file && (
        <S.PreviewCurrentImageWrapper>
          <StorageImage path={article.imgSrc} />
        </S.PreviewCurrentImageWrapper>
      )}
    </S.ImageBox>
  )
}

export default ArticleEditor
