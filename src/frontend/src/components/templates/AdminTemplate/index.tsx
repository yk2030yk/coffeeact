import React from 'react'

import * as S from './index.styled'
import SideMenu from '@/components/organisms/admin/SideMenu'
import Header from '@/components/organisms/common/Header'

const Template: React.FC = ({ children }) => (
  <S.Wrapper>
    <S.LeftContent>
      <SideMenu />
    </S.LeftContent>
    <S.RightContent>
      <S.HeaderArea>
        <Header />
      </S.HeaderArea>
      <S.ContentArea>{children}</S.ContentArea>
    </S.RightContent>
  </S.Wrapper>
)

export default Template
