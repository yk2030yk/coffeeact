import React, { ChangeEventHandler } from 'react'

import * as S from './styled'

const INPUT_ID = 'input'

type Props = {
  handleChange: ChangeEventHandler
}

export const InputImageSrcPresenter: React.FC<Props> = ({ handleChange }) => (
  <div>
    <S.InputFile
      id={INPUT_ID}
      type="file"
      accept="image/jpg,image/jpeg,image/png"
      onChange={handleChange}
    />
    <S.InputFileLabel htmlFor={INPUT_ID}>画像を選択する</S.InputFileLabel>
  </div>
)
