import React from 'react'

import { Element } from '@/types/element'
import * as S from './index.styled'

const MenuItem: React.FC<Element> = ({ children }) => {
  return <S.Item>{children}</S.Item>
}

export default MenuItem
