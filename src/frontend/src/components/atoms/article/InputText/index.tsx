import React from 'react'
import * as S from './index.styled'

type Props = {
  name: string
  value: string
  register: any
}

const InputText: React.FC<Props> = ({ name, value, register }) => {
  return (
    <S.InputText type="text" name={name} defaultValue={value} ref={register} />
  )
}

export default InputText
