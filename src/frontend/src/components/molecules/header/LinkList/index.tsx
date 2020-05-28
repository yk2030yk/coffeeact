import React from 'react'
import { FormattedMessage } from 'react-intl'
import * as S from './index.styled'
import { Link } from '@/components/atoms'

const LinkList: React.FC = () => (
  <S.Wrapper>
    <Link path="/">
      <FormattedMessage id="app.page.home" />
    </Link>
  </S.Wrapper>
)

export default LinkList
