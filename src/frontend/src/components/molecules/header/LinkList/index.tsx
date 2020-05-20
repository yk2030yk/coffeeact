import React from 'react'

import * as S from './index.styled'
import { Link } from '@/components/atoms'

const LinkList: React.FC = () => (
  <S.Wrapper>
    <Link path="/">Home</Link>
    <Link path="/">Home</Link>
    <Link path="/">Home</Link>
  </S.Wrapper>
)

export default LinkList
