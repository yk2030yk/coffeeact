import React, { useState } from 'react'

import * as S from './styled'
import { Button, BasicBox } from '@/components/atoms'
import { ImageSrcEditor } from '../ImageSrcEditor'
import { PreviewImageSrc } from '../PreviewImageSrc'

type Props = {
  defaultValue?: string
}

export const ImageSrcBox: React.FC<Props> = ({ defaultValue = '' }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const toggleEdit = () => setIsEdit((old) => !old)
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
