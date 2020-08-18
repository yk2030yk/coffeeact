import React from 'react'
import { FaTags } from '@/components/atoms/icons'

import * as S from './index.styled'
import { BasicBox } from '@/components/atoms'
import { SideContentTitle } from '@/components/molecules/home/SideContentTitle'
import { SearchArticleByTagList } from '@/components/molecules/articleTag/SearchArticleByTagList'

export const SearchArticleByTagPresenter: React.FC = () => {
  return (
    <S.Wrapper>
      <BasicBox>
        <SideContentTitle
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
