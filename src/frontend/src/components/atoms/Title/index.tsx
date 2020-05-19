import React from 'react'

import { Element } from '@/types/element'
import * as S from './index.styled'

const Title: React.FC<Element> = ({ children, onClick }) => (
  <S.Text onClick={onClick}>{children}</S.Text>
)

export default Title
