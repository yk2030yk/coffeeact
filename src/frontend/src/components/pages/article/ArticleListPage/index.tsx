import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'
import { ArticleListBox } from '@/components/organisms/article/ArticleListBox'
import { useArticles } from '@/recoil/article/hooks'

const condition = {}
export const ArticleListPage: React.FC = () => {
  useArticles(condition)
  return (
    <DefaultTemplate>
      <S.Wrapper>
        <ArticleListBox />
      </S.Wrapper>
    </DefaultTemplate>
  )
}
