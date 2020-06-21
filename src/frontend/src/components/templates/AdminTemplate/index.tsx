import React from 'react'

import * as S from './index.styled'
import { BasicBox, PageTitle } from '@/components/atoms'
import SideMenu from '@/components/organisms/admin/SideMenu'
import Header from '@/components/organisms/common/Header'
import CommonTemplate from '../CommonTemplate'

const Template: React.FC<{ title?: string }> = ({ title = '', children }) => (
  <CommonTemplate>
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
  </CommonTemplate>
)

export default Template
