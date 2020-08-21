import React from 'react'

import * as S from './styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'
import { AboutMessageBox } from '@/components/organisms/about/AboutMessageBox'

const Page: React.FC = () => (
  <DefaultTemplate>
    <S.Wrapper>
      <AboutMessageBox />
    </S.Wrapper>
  </DefaultTemplate>
)

export default Page
