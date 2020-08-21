import React from 'react'

import * as S from './styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'
import { SearchResultArticleListBox } from '@/components/organisms/article/SearchResultArticleListBox'

export const SearchResultArticleListPage: React.FC = () => {
  return (
    <DefaultTemplate>
      <S.Wrapper>
        <SearchResultArticleListBox />
      </S.Wrapper>
    </DefaultTemplate>
  )
}
