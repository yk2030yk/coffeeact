import React from 'react'

import * as S from './index.styled'
import LinkButton from '@/components/atoms/common/LinkButton'

const Page: React.FC = () => (
  <S.Wrapper>
    <S.ErrorLogo>
      <S.StatusCode>404</S.StatusCode>
      <S.StatusLogoMessage>Page Not Found!!</S.StatusLogoMessage>
    </S.ErrorLogo>
    <S.MessageBox>
      <p>お探しのページは見つかりませんでした。</p>
      <p>一時的にアクセスできない状況にあるか、</p>
      <p>移動もしくは削除された可能性があります。</p>
    </S.MessageBox>
    <S.TopButtonBox>
      <LinkButton link="/" text="ホームに戻る" />
    </S.TopButtonBox>
  </S.Wrapper>
)

export default Page
