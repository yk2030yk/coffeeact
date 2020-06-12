import React from 'react'

import * as S from './index.styled'
import ImageInput from '@/components/molecules/article/ImageInput'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'
import StorageImage from '@/components/atoms/common/StorageImage'

type Props = {
  coffeeArticle: CoffeeArticle
  file: File | undefined
  setFile: (file: File) => void
}

const CoffeeArticleEditor: React.FC<Props> = ({
  coffeeArticle,
  file,
  setFile,
}) => {
  return (
    <S.ImageBox>
      <ImageInput setFile={setFile} />
      {!file && (
        <S.PreviewCurrentImageWrapper>
          <StorageImage path={coffeeArticle.imgSrc} />
        </S.PreviewCurrentImageWrapper>
      )}
    </S.ImageBox>
  )
}

export default CoffeeArticleEditor
