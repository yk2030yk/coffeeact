import React from 'react'

import * as S from './styled'
import { BasicBox } from '@/components/atoms'
import StatusCodeLogo from '@/components/molecules/error/StatusCodeLogo'
import TopButton from '@/components/molecules/error/TopButton'
import ErrorMessage from '@/components/molecules/error/ErrorMessage'

export const NotFoundMessagePresenter: React.FC = () => (
  <S.Wrapper>
    <BasicBox>
      <StatusCodeLogo statusCode={404} text={'Page Not Found!!'} />
    </BasicBox>
    <BasicBox>
      <ErrorMessage>
        <p>お探しのページは見つかりませんでした。</p>
        <p>一時的にアクセスできない状況にあるか、</p>
        <p>移動もしくは削除された可能性があります。</p>
      </ErrorMessage>
    </BasicBox>
    <BasicBox>
      <TopButton />
    </BasicBox>
  </S.Wrapper>
)
