import React from 'react'

import * as S from './index.styled'
import { BasicBox } from '@/components/atoms'
import { ImageSrcCropper } from './ImageSrcCropper'
import { InputImageSrc } from './InputImageSrc'
import { PreviewCroppedImageSrc } from './PreviewCroppedImageSrc'

export const ImageSrcEditor: React.FC = () => {
  return (
    <S.Wrapper>
      <BasicBox>
        <InputImageSrc />
      </BasicBox>
      <BasicBox>
        <S.CropperBox>
          <S.CropperArea>
            <S.CropperAreaItem>
              <ImageSrcCropper />
            </S.CropperAreaItem>
            <S.CropperAreaItem>
              <PreviewCroppedImageSrc />
            </S.CropperAreaItem>
          </S.CropperArea>
        </S.CropperBox>
      </BasicBox>
    </S.Wrapper>
  )
}
