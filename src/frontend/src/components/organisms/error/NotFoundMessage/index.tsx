import React from 'react'

import * as S from './index.styled'
import StatusCodeLogo from '@/components/molecules/error/StatusCodeLogo'
import TopButton from '@/components/molecules/error/TopButton'
import ErrorMessage from '@/components/molecules/error/ErrorMessage'

const Page: React.FC = () => (
  <S.Wrapper>
    <StatusCodeLogo statusCode={404} text={'Page Not Found!!'} />
    <ErrorMessage>
      <p>お探しのページは見つかりませんでした。</p>
      <p>一時的にアクセスできない状況にあるか、</p>
      <p>移動もしくは削除された可能性があります。</p>
    </ErrorMessage>
    <TopButton />
  </S.Wrapper>
)

export default Page