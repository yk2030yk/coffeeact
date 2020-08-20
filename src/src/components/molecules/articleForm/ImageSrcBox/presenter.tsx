import React from 'react'

import * as S from './styled'
import { Button, BasicBox } from '@/components/atoms'
import { ImageSrcEditor } from '../ImageSrcEditor'
import { PreviewImageSrc } from '../PreviewImageSrc'

type Props = {
  defaultValue?: string
  isEdit: boolean
  toggleEdit: () => void
}

export const ImageSrcBoxPresenter: React.FC<Props> = ({
  defaultValue = '',
  isEdit,
  toggleEdit,
}) => {
  return (
    <>
      {isEdit ? (
        <>
          <BasicBox>
            <ImageSrcEditor />
          </BasicBox>
          <BasicBox>
            <Button onClick={toggleEdit}>完了</Button>
          </BasicBox>
        </>
      ) : (
        <S.ImgWrapper onClick={toggleEdit}>
          <PreviewImageSrc defaultValue={defaultValue} />
        </S.ImgWrapper>
      )}
    </>
  )
}
