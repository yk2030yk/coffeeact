import React from 'react'
import * as S from './index.styled'

type Props = {
  value: string
}

const InputText: React.FC<Props> = ({ value }) => {
  return <S.InputText type="text" />
}

export default InputText
