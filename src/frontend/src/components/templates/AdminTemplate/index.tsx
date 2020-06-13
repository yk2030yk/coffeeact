import React from 'react'

import * as S from './index.styled'
import { BasicBox, PageTitle } from '@/components/atoms/common'
import SideMenu from '@/components/organisms/admin/SideMenu'
import Header from '@/components/organisms/common/Header'

const Template: React.FC<{ title?: string }> = ({ title = '', children }) => (
  <S.Wrapper>
    <S.LeftContent>
      <SideMenu />
    </S.LeftContent>
    <S.RightContent>
      <S.HeaderArea>
        <Header />
      </S.HeaderArea>
      <S.ContentArea>
        <PageTitle>{title}</PageTitle>
        <BasicBox>{children}</BasicBox>
      </S.ContentArea>
    </S.RightContent>
  </S.Wrapper>
)

export default Template
