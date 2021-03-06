import React from 'react'

import * as S from './styled'

import { AppIcon } from '@/components/atoms'
import LinkList from '@/components/molecules/footer/LinkList'

export const FooterPresenter: React.FC = () => (
  <S.Wrapper>
    <S.AppIconArea>
      <AppIcon height={80} />
    </S.AppIconArea>
    <LinkList />
  </S.Wrapper>
)
