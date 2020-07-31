import React from 'react'

import * as S from './index.styled'
import StatusCodeLogo from '@/components/molecules/error/StatusCodeLogo'
import ErrorMessage from '@/components/molecules/error/ErrorMessage'

const Page: React.FC = () => (
  <S.Wrapper>
    <StatusCodeLogo statusCode={500} text={'Internal Server Error'} />
    <ErrorMessage>
      <p>技術的な問題が発生しています。</p>
      <p>ご迷惑をおかけしますが、</p>
      <p>時間を置いて再度訪問をお願い致します。</p>
    </ErrorMessage>
  </S.Wrapper>
)

export default Page
