import React from 'react'

import * as S from './index.styled'
import LinkButton from '@/components/atoms/common/LinkButton'

const Page: React.FC = () => (
  <S.Wrapper>
    <S.ErrorLogo>
      <S.StatusCode>500</S.StatusCode>
      <S.StatusLogoMessage>Internal Server Error</S.StatusLogoMessage>
    </S.ErrorLogo>
    <S.MessageBox>
      <p>技術的な問題が発生しています。</p>
      <p>ご迷惑をおかけしますが、</p>
      <p>時間を置いて再度訪問をお願い致します。</p>
    </S.MessageBox>
  </S.Wrapper>
)

export default Page
