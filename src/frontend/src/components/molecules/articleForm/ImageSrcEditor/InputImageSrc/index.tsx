import React from 'react'
import { useSetRecoilState } from 'recoil'

import * as S from './index.styled'
import { inputImageSrcState } from '@/recoil/articleForm/atom'

const INPUT_ID = 'input'

export const InputImageSrc: React.FC = () => {
  const setInputImageSrc = useSetRecoilState(inputImageSrcState)

  const onChange = (event: any) => {
    const file = event.target.files[0]
    const src = URL.createObjectURL(file)
    setInputImageSrc(src)
  }

  return (
    <div>
      <S.InputFile
        id={INPUT_ID}
        type="file"
        accept="image/jpg,image/jpeg,image/png"
        onChange={onChange}
      />
      <S.InputFileLabel htmlFor={INPUT_ID}>画像を選択する</S.InputFileLabel>
    </div>
  )
}
