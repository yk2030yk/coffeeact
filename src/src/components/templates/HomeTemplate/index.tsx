import React, { ReactElement } from 'react'

import * as S from './styled'
import { Header } from '@/components/organisms/common/Header'
import { HomeHeader } from '@/components/organisms/common/HomeHeader'
import { Footer } from '@/components/organisms/common/Footer'

type Props = {
  mainContent: ReactElement
  sideContent: ReactElement
}
const Template: React.FC<Props> = ({ mainContent, sideContent }) => (
  <S.Wrapper>
    <S.HeaderArea>
      <Header />
    </S.HeaderArea>
    <S.HomeHeaderArea>
      <HomeHeader />
    </S.HomeHeaderArea>
    <S.ContentAreaWrapper>
      <S.ContentArea>
        <S.MainContentArea>{mainContent}</S.MainContentArea>
        <S.SideContentArea>{sideContent}</S.SideContentArea>
      </S.ContentArea>
    </S.ContentAreaWrapper>
    <S.FooterArea>
      <Footer />
    </S.FooterArea>
  </S.Wrapper>
)

export default Template
