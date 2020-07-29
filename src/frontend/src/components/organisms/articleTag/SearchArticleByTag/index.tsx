import React from 'react'
import { FaTags } from '@/components/atoms/icons'

import * as S from './index.styled'
import { TitleWithIcon, BasicBox } from '@/components/atoms'
import { SearchArticleByTagList } from '@/components/molecules/articleTag/SearchArticleByTagList'

export const SearchArticleByTag: React.FC = () => {
  return (
    <S.Wrapper>
      <BasicBox>
        <TitleWithIcon
          IconComponent={<FaTags size={20} color={'#4caf50'} />}
          id="home.searchArticleByTag.title"
        />
      </BasicBox>
      <BasicBox>
        <SearchArticleByTagList />
      </BasicBox>
    </S.Wrapper>
  )
}
