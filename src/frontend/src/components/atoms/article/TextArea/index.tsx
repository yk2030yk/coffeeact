import React from 'react'

import * as S from './index.styled'

type Props = {
  name: string
  value: string
  register: any
}

const TextArea: React.FC<Props> = ({ name, value, register }) => {
  return <S.TextArea name={name} defaultValue={value} ref={register} />
}

export default TextArea
