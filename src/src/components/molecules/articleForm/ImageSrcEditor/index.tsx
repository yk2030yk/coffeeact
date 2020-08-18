import React from 'react'

import * as S from './styled'
import { BasicBox } from '@/components/atoms'
import { ImageSrcCropper } from './ImageSrcCropper'
import { InputImageSrc } from './InputImageSrc'

export const ImageSrcEditor: React.FC = () => {
  return (
    <S.Wrapper>
      <BasicBox>
        <InputImageSrc />
      </BasicBox>
      <BasicBox>
        <S.CropperBox>
          <ImageSrcCropper />
        </S.CropperBox>
      </BasicBox>
    </S.Wrapper>
  )
}
