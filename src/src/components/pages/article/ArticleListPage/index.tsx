import React from 'react'

import * as S from './styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'
import { ArticleListBox } from '@/components/organisms/article/ArticleListBox'

export const ArticleListPage: React.FC = () => {
  return (
    <DefaultTemplate>
      <S.Wrapper>
        <ArticleListBox />
      </S.Wrapper>
    </DefaultTemplate>
  )
}
