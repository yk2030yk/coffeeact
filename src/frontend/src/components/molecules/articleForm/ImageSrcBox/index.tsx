import React, { useState } from 'react'

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
          <ImageSrcEditor />
          <p onClick={toggleEdit}>完了</p>
        </>
      ) : (
        <p onClick={toggleEdit}>
          <PreviewImageSrc path={defaultValue} />
        </p>
      )}
    </>
  )
}
