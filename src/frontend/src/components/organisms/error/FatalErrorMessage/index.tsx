import React from 'react'

import * as S from './index.styled'
import { BasicBox } from '@/components/atoms'
import StatusCodeLogo from '@/components/molecules/error/StatusCodeLogo'
import ErrorMessage from '@/components/molecules/error/ErrorMessage'

const Page: React.FC = () => (
  <S.Wrapper>
    <BasicBox>
      <StatusCodeLogo statusCode={500} text={'Internal Server Error'} />
    </BasicBox>
    <BasicBox>
      <ErrorMessage>
        <p>技術的な問題が発生しています。</p>
        <p>ご迷惑をおかけしますが、</p>
        <p>時間を置いて再度訪問をお願い致します。</p>
      </ErrorMessage>
    </BasicBox>
  </S.Wrapper>
)

export default Page
